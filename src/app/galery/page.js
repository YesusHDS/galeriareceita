"use client"

import {ArrowLeft, Blocks, Plus, Repeat} from 'lucide-react'
import Image from 'next/image'

import {useState} from 'react'

export default function Home() {

  const [recipes, setRecipes] = useState([])

  const [nome, setNome] = useState('')
  const [desc, setDesc] = useState('')
  const [dificuldade, setDificuldade] = useState('')
  const [ingredientes, setIngredientes] = useState([])
  const [ingrediente, setIngrediente] = useState('')
  const [preparo, setPreparo] = useState([])
  const [passo, setPasso] = useState('')

  const [blackScreen, setBlackScreen] = useState(false)
  const [addCard, setAddCard] = useState(false)
  const [cardView, setCardView] = useState(false)
  const [recipeView, setRecipeView] = useState({
    nome: '',
    desc: '',
    dificuldade: '',
    ingredientes: [],
    preparo: []
  })

  function insertNewCard(){
    setRecipes([...recipes,{
      nome,
      desc,
      dificuldade,
      ingredientes,
      preparo
    }])
  }
  
  function criaRecipe(){

    let erro = ''

    if(preparo.length==0)
      erro = 'Preparo inválido'

    if(ingredientes.length==0)
      erro = 'Ingredientes inválidos'

    if(dificuldade.trim().length==0)
      erro = 'Dificuldade inválida'

    if(desc.trim().length == 0)
      erro = 'Descrição inválida'

    if(nome.trim().length>25 || nome.trim().length == 0)
      erro = 'Nome inválido'

    if(erro.length!=0)
      alert(erro)
    else{
      setNome('')
      setDesc('')
      setDificuldade('')
      setIngrediente('')
      setIngredientes([])
      setPasso('')
      setPreparo([])
      setBlackScreen(!blackScreen)
      setAddCard(false)
      insertNewCard()
      alert('Receita criada!')
    }
  }

    return (
      <div style={{margin: 0, padding: 0}}>
        {blackScreen && <div onClick={e=>{setBlackScreen(!blackScreen); setAddCard(false); setCardView(false)} } style={{position: 'fixed',  top:'0', width:'100%', height:'100vh', backgroundColor:'black', opacity: 0.5}} > </div>}

        {cardView && <div style={{
          backgroundColor:'white', 
          width:'50%',
          position: 'fixed', 
          top:'50%', 
          left:'50%', 
          translate:'-50% -50%', 
          zIndex: 10,
          padding: 25,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(50%, 1fr)'
        }}>
          <div style={{}} >
            <span style={{fontWeight:'bold', fontSize:'24pt', fontFamily:'arial', display:'block'}} >{recipeView.nome}</span>
            <span style={{fontSize: '16pt', fontFamily: 'arial', height:480, display: 'block', overflow: 'auto'}}>{recipeView.desc}</span>
            <span style={{fontWeight:'bold', fontSize:'16pt', fontFamily:'arial', display:'block'}} >Dificuldade {recipeView.dificuldade}</span>
          </div>

          <div style={{}}>
            <span style={{marginBottom: 15 ,fontWeight:'bold', fontSize:'24pt', fontFamily:'arial', display:'block'}} >Ingredientes</span>
            {recipeView.ingredientes.map(ingrediente=>{
              return <span style={{fontFamily: 'arial', fontSize:'14pt', display:'block'}}>{ingrediente}</span>
            })}

            <span style={{marginBottom: 15, marginTop: 15 ,fontWeight:'bold', fontSize:'24pt', fontFamily:'arial', display:'block'}} >Modo de Preparo</span>
            {recipeView.preparo.map((passo, index)=>{
              return <span style={{fontFamily: 'arial', fontSize:'14pt', display:'block'}}>{index+1}. {passo}</span>
            })}
          </div>
        </div>}

        {addCard && <div 
        style={{
          backgroundColor:'white', 
          width:'35%',
          position: 'fixed', 
          top:'50%', 
          left:'50%', 
          translate:'-50% -50%', 
          zIndex: 10,
          padding: 25
        }}>
          <span style={{fontWeight:'bold', fontSize:'30pt', fontFamily:'arial', textAlign:'center', display:'block'}} >Nova Receita</span>
          <form onSubmit={e=>{
            e.preventDefault()
          }} action='#' style={{textAlign: 'center'}}>

            <label style={{display: 'block', margin: '20px 0'}}>
              Nome da receita: <input onChange={e=>{setNome(e.target.value)}} value={nome} type='text' id='nomeReceita' />
            </label>

            <label style={{display: 'block', margin: '20px 0'}}>
              Descrição: <textarea onChange={e=>{setDesc(e.target.value)}} value={desc} id='nomeReceita' style={{resize:'none'}} />
            </label>

            <label style={{display: 'block', margin: '20px 0'}}>
              Dificuldade: <input onChange={e=>{setDificuldade(e.target.value)}} value={dificuldade} type='text' id='nomeReceita' />
            </label>

            <label style={{display: 'block', margin: '20px 0'}}>
              Ingredientes: <input onChange={e=>{setIngrediente(e.target.value)}} value={ingrediente} type='text' id='nomeReceita' /> 
              <input type='submit' onClick={e=>{
                if(ingrediente.length >= 40)
                  alert('Nome do ingrediente muito grande')
                else
                  setIngredientes([...ingredientes, ingrediente])
              }} value='inserir' />
            </label>

            <label style={{display: 'block', margin: '20px 0'}}>
              Passos de preparo: <input onChange={e=>{setPasso(e.target.value)}} value={passo} type='text' id='nomeReceita'  /> 
              <input type='submit' onClick={e=>{
                if(passo.length >= 40)
                  alert('Passo de preparo muito grande')
                else{
                  setPreparo([...preparo, passo])
                }
              }} value='inserir' />
            </label>
            
            <input type='submit' onClick={e=>{
              setNome('')
              setDesc('')
              setDificuldade('')
              setIngrediente('')
              setIngredientes([])
              setPasso('')
              setPreparo([])
              setBlackScreen(!blackScreen)
              setAddCard(false)} 
            } value='Cancelar' /> 

            <input type='submit' onClick={e=>{criaRecipe()} } value='Criar' />

          </form>
        </div>}

        <a href='/' style={{position: 'absolute'}}><ArrowLeft size={40} color='black' /></a>

        <h1 style={{fontSize:'36pt', fontWeight:'bold',fontFamily:'arial', textAlign: 'center'}} >GALERIA</h1>

        <div style={{border: '2px solid black', width: '90%', margin: 'auto', padding:'10px 20px', display:'grid', gap:10, gridTemplateColumns: 'repeat(auto-fill, minmax(224px, 1fr)'}}>

          {/* <div onClick={e=>{setBlackScreen(!blackScreen)}} style={{border: '1px solid black', width: '224px', height:'316px', padding:5, cursor:'pointer'}}>
            <div style={{width:224, height:146, backgroundColor:'#D9D9D9',marginBottom:10}}><Image src=''/></div>
            <span style={{fontSize:'12pt', fontWeight:'bold'}}>Title</span>
            <p style={{fontSize:'12pt', height:80, overflow:'auto'}}>Description...</p>
            <span style={{fontSize:'12pt', fontWeight:'bold' }}>Difficult easy</span>
          </div> */}
          
          {
            recipes.map(({
              nome,
              desc,
              dificuldade,
              ingredientes,
              preparo
            })=>{
              return(
                <div onClick={e=>{setBlackScreen(!blackScreen); setCardView(true); setRecipeView({nome, desc, dificuldade, ingredientes, preparo})}} style={{border: '1px solid black', width: '224px', height:'316px', padding:5, cursor:'pointer'}}>
                  <span style={{fontSize:'12pt', fontWeight:'bold'}}>{nome}</span>
                  <p style={{fontSize:'12pt', height:240, overflow:'auto'}}>{desc}</p>
                  <span style={{fontSize:'12pt', fontWeight:'bold' }}>{dificuldade}</span>
                </div>
              )
            })
          }

          <div onClick={e=>{setBlackScreen(!blackScreen); setAddCard(!addCard)}} style={{border: '1px solid black', width: '224px', height:'316px', padding:5, cursor:'pointer'}}>
            <Plus size={60} style={{position:'relative', top:'50%', left: '50%', translate:'-50% -50%'}} />
          </div>   

        </div>
        
      </div>
    );
  }
  