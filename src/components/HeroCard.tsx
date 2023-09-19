import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

interface PostCard {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  content: string;
  finalConent: string;
}
const majerit = localFont({ src: './fonts/Majrit-Text-Black.woff2' })
const majeritItalic = localFont({ src: './fonts/Majrit-Text-Bold-Italic.woff2' })
const majeritBold = localFont({ src: './fonts/Majrit-Text-Bold.woff2' })
const majeritRoman = localFont({ src: './fonts/Majrit-Text-Roman.woff2' })
const marcinan = localFont({ src: './fonts/marcinantb-regular-webfont.woff2' })
const marcinanBold = localFont({ src: './fonts/marcinantb-bold-webfont.woff2' })

function HeroCard( props: PostCard ) {
  return (
    
    <div className='grid justify-items-start gap-1 place-items-center '>
        <div className="grid justify-self-stretch max-w-fit mb-2">    
        {props.image && <Image src={props.image} className='justify-self-auto' alt="hero" width={704} height={397}></Image>}
        <span style={{fontSize: "10px"}} className=' text-gray-500 text-right justify-self-end '>{props?.title}</span>
        </div>

        <h3 className={`${majeritBold.className} text-2xl font-serif text-left mb-2`}>{props?.title}</h3>
        <span  className={`${marcinan.className} uppercase text-xs text-gray-500 text-left`}>{props?.author}</span>
        <p style={{fontSize: "15px"}} className={`${majeritRoman.className}  text-gray-400 text-left pt-1`}>La candidata a la vicepresidencia agita la batalla cultural de la ultraderecha </p>
        <p className={`${majeritBold.className} font-bold pt-2 text-left`}>{props?.finalConent}</p>
        <div className=" w-full bg-slate-200 my-4" style={{height: '1px'}}></div>


    </div>
  )
}

export default HeroCard