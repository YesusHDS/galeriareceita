"use client"
import {useEffect} from 'react'



export default function Home() {

  useEffect(()=>{
    localStorage.setItem('receitas', [])
  },[])

  return (
    <div style={{margin: 0, padding: 0}}>
      <div style={{
        border: '2px solid black',
        width: '50%',

        fontWeight: 'bold',
        fontFamily: 'arial',
        fontSize: '48pt',

        margin: '5% auto',
        textAlign: 'center',
        padding: '10%'

      }}>LOGO</div>
      <p style={{
        textAlign: 'center',
        fontSize: '24pt'
      }}>Seja bem vindo à galeria de receita.</p>

      <div style={{
        textAlign: 'center'
      }}>
        <a style={{
          fontSize: '32pt',
          textDecoration: 'none',
          color: 'black',
        }} href="galery">ENTRAR</a>
      </div>
    </div>
  );
}
