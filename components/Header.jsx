import React from 'react'
import { SignInButton, SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='container mx-auto px-4 py-4'>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default Header
