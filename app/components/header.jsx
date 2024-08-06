import { JetBrains_Mono } from 'next/font/google'

const JetBrains =  JetBrains_Mono ({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })
import React from 'react'

function header() {
  return (
   <section>
     <h1 className={`${JetBrains.className} text-xs`} >
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perferendis. 
    </h1>
   </section>
  )
}

export default header
