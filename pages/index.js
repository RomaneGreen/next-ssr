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
          </div>
        )
      
      
}

export default Index