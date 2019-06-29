import React from 'react'
import Link from 'next/link'
import Image from '../components/image'

const about = () => {
  return (
    <div style={{frontSize:'20px', color:'blue'}}>
      About
      <br></br>
            <Link href='/'> 
            <button><a>back</a></button>
            </Link>
            <Image />
            <p>I was a magician once</p>
    </div>
  )
}

export default about
