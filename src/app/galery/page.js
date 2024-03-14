"use client"

import {ArrowLeft, Plus} from 'lucide-react'
import Image from 'next/image'

import {useState} from 'react'

export default function Home() {

    return (
      <div>
        <ArrowLeft size={40} style={{position: 'absolute'}} />
        <h1 style={{fontSize:'36pt', fontWeight:'bold',fontFamily:'arial', textAlign: 'center'}} >GALERIA</h1>
        <div style={{border: '2px solid black', width: '90%', margin: 'auto', padding:'10px 20px', display:'flex', gap:10}}>
          <div style={{border: '1px solid black', width: '224px', height:'316px', padding:5, cursor:'pointer'}}>
            <div style={{width:224, height:146, backgroundColor:'#D9D9D9',marginBottom:10}}><Image src=''/></div>
            <span style={{fontSize:'12pt', fontWeight:'bold'}}>Title</span>
            <p style={{fontSize:'12pt', height:80, overflow:'auto'}}>Description...</p>
            <span style={{fontSize:'12pt', fontWeight:'bold' }}>Difficult easy</span>
          </div>

          <div style={{border: '1px solid black', width: '224px', height:'316px', padding:5, cursor:'pointer'}}>
            <Plus size={60} style={{position:'relative', top:'50%', left: '50%', translate:'-50% -50%'}} />
          </div>          
        </div>
        
      </div>
    );
  }
  