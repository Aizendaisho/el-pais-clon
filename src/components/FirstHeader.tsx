import React from 'react'
import { BiSolidUser } from 'react-icons/bi'
import { RiMenu2Line } from 'react-icons/ri'
import Image from 'next/image'






function FirstHeader() {
  return (
    <nav className='bg-white  w-full p-2'>
        <ul className='flex items-center justify-between  '>
            <li><RiMenu2Line className='text-2xl' /></li>
            <li><Image src="/elpais.svg" className="" alt="EL PAÍS" width={147} height={34}></Image></li>
            <li><BiSolidUser className='text-lg'/></li>
        </ul>
    </nav>
  )
}

export default FirstHeader