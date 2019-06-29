import React from 'react';
import ReactDOM from 'react-dom'
import Link from 'next/link'


const Index = () => {
    
    
        return (
          <div>
            SSR MAgician
            <br></br>
            <Link href='/about'> 
            <button><a>about</a></button>
            </Link>
            <Link href='/robots'> 
            <button><a>robots</a></button>
            </Link>
          </div>
        )
      
      
}

export default Index