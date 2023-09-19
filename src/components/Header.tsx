import React from 'react'
import FirstHeader from './FirstHeader'
import SecondHeader from './SecondHeader'

function Header() {
  return (
    <header className='sticky top-0 md:block md:top-auto w-full px-5 py-3 bg-white flex flex-col'>
        <FirstHeader/>
        <SecondHeader />

    </header>
  )
}

export default Header