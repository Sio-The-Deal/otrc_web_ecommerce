import React from 'react'
import Image from "next/image"
import Link from 'next/link'

import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";


function Header() {
  const session = false;

  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] P-4'>
        <div className='flex items-center justify-center md:w-1/7'>
          <Link href="/">
            <div className="relative h-14 w-20 cursor-pointer opacity-75 transition hover:opacity-100"> 
              <Image src="https://i.ibb.co/QpvRvCW/otrc-w20-h14-v.png" 
              layout="fill" objectFit="contain" alt={'image'} />
            </div>
          </Link>
        </div>
        <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
          <a className='headerLink'>Product</a>
          <a className='headerLink'>Explore</a>
          <a className='headerLink'>Support</a>
          <a className='headerLink'>About</a>
        </div>
        <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
          <MagnifyingGlassIcon className="headerIcon"/>
          <Link href='/'>
          <div className='relative cursor-pointer'>
            <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center
             justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
              5</span>
            <ShoppingBagIcon className='headerIcon' />
          
          </div>
          </Link>

          {session ? (   //if session is equals to true , show the image component ,otherwise show sign in icon
          <Image
            src={
              //session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            //onClick={() => signOut()}
          />
        ) : (
          <UserIcon className="headerIcon" 
              // onClick={() => signIn()}
           />
        )}


        </div>


    </header>
  );
}

export default Header