"use client"

import {ArrowLeft, Plus} from 'lucide-react'
import Image from 'next/image'

import {useState} from 'react'

export default function Home() {

  const [recipes, setRecipes] = useState(localStorage.getItem('receitas'))

  const [recipe, setRecipe] = useState({
    nome:'',
    desc: '',
    dificuldade: '',
    ingredientes: [],
    preparo : []
  })

  const [blackScreen, setBlackScreen] = useState(true)
  const [addCard, setAddCard] = useState(true)

  function insertNewCard(){
    setRecipes(...recipes)
  }

    return (
      <div style={{margin: 0, padding: 0}}>
        {blackScreen && <div onClick={e=>{setBlackScreen(!blackScreen); setAddCard(false)} } style={{position: 'fixed',  top:'0', width:'100%', height:'100vh', backgroundColor:'black', opacity: 0.5}} > </div>}

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
              Nome da receita: <input type='text' id='nomeReceita' />
            </label>

            <label style={{display: 'block', margin: '20px 0'}}>
              Descrição: <textarea id='nomeReceita' style={{resize:'none'}} />
            </label>

            <label style={{display: 'block', margin: '20px 0'}}>
              Dificuldade: <input type='text' id='nomeReceita' />
            </label>

            <label style={{display: 'block', margin: '20px 0'}}>
              Ingredientes: <input type='text' id='nomeReceita' /> <input type='submit' value='inserir' />
            </label>

            <label style={{display: 'block', margin: '20px 0'}}>
              Passos de preparo: <input type='text' id='nomeReceita'  /> <input type='submit' value='inserir' />
            </label>
            
            <input type='submit' value='Cancelar' /> <input type='submit' value='Criar' />

          </form>
        </div>}

        <a href='/' style={{position: 'absolute'}}><ArrowLeft size={40} color='black' /></a>

        <h1 style={{fontSize:'36pt', fontWeight:'bold',fontFamily:'arial', textAlign: 'center'}} >GALERIA</h1>

        <div style={{border: '2px solid black', width: '90%', margin: 'auto', padding:'10px 20px', display:'flex', gap:10}}>

          <div onClick={e=>{setBlackScreen(!blackScreen)}} style={{border: '1px solid black', width: '224px', height:'316px', padding:5, cursor:'pointer'}}>
            <div style={{width:224, height:146, backgroundColor:'#D9D9D9',marginBottom:10}}><Image src=''/></div>
            <span style={{fontSize:'12pt', fontWeight:'bold'}}>Title</span>
            <p style={{fontSize:'12pt', height:80, overflow:'auto'}}>Description...</p>
            <span style={{fontSize:'12pt', fontWeight:'bold' }}>Difficult easy</span>
          </div>

          <div onClick={e=>{setBlackScreen(!blackScreen); setAddCard(!addCard)}} style={{border: '1px solid black', width: '224px', height:'316px', padding:5, cursor:'pointer'}}>
            <Plus size={60} style={{position:'relative', top:'50%', left: '50%', translate:'-50% -50%'}} />
          </div>   

        </div>
        
      </div>
    );
  }
  