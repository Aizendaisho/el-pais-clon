import React from 'react'
import Image from 'next/image'
interface PostCard {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  content: string;
  finalConent: string;
}

function HeroCard( props: PostCard ) {
  return (
    
    <div className='grid justify-items-start gap-1 place-items-center '>
        <div className="grid justify-self-stretch max-w-fit">
        
        {props.image && <Image src={props.image} className='justify-self-auto' alt="hero" width={704} height={397}></Image>}
        <span className='text-xs text-gray-500 text-right justify-self-end'>{props?.title}</span>

        </div>

        <h3 className='text-3xl font-extrabold font-serif text-left'>Victoria Villarruel, el ariete de Milei que reivindica la dictadura y se opone al aborto y las bodas gay en Argentina</h3>

        <span className='text-xs text-gray-500 text-left'>{props?.author}</span>
        <p className='font-serif text-gray-400 text-left pt-1'>La candidata a la vicepresidencia agita la batalla cultural de la ultraderecha </p>
        <p className='font-bold pt-2 text-left'>{props?.finalConent}</p>

    </div>
  )
}

export default HeroCard