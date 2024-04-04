import React from 'react'
import {redirect} from "next/navigation";
import Link from "next/link";
import {logout} from '../lib'
const Home = () => {
  return (
    <div>
      <h1>This The Home Page</h1>
      <nav>
        <ul>
          <li>
            <h1><Link href='/home'>Go Home</Link></h1>
          </li>
          <li>
            <h1><Link href='/user'>Go Profile</Link></h1></li>
          <li>
            <form action={async(formdata) =>{
              'use server' 
              await logout();
              redirect('/');
            }}>
              <button type='submit'>Logout</button>
            </form>
          </li>
        </ul>
      </nav>
    
    </div>
  )
}

export default Home
