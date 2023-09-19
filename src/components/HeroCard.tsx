import React from 'react'
import Image from 'next/image'

function HeroCard() {
  return (
    <div className='grid justify-items-start gap-1 place-items-center '>
        <div className="grid justify-self-stretch max-w-fit">
        <Image src="/hero.avif" className='justify-self-auto' alt="hero" width={704} height={397}></Image>
        <span className='text-xs text-gray-500 text-right justify-self-end'>Victoria Villarruel durante la Conferencia de la Sociedad de las Américas en Buenos Aires.BLOOMBERG</span>

        </div>

        <h3 className='text-3xl font-extrabold font-serif text-left'>Victoria Villarruel, el ariete de Milei que reivindica la dictadura y se opone al aborto y las bodas gay en Argentina</h3>
        {/* <div className="self-center flex flex-col">
        </div> */}
        <span className='text-xs text-gray-500 text-left'>MAR CENTENERA|Buenos Aires</span>
        <p className='font-serif text-gray-400 text-left pt-1'>La candidata a la vicepresidencia agita la batalla cultural de la ultraderecha </p>
        <p className='font-bold pt-2 text-left'>---El peronismo pierde el control de un bastión provincial a un mes de las elecciones presidenciales</p>

    </div>
  )
}

export default HeroCard