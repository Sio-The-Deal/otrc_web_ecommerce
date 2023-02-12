import React from 'react'
import Image from "next/image"

function Header() {
  return (
    <header>
        <div>
            <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain" alt={'image'}/>
        </div>
    </header>
  )
}

export default Header