import React from 'react'
import {getSession ,login, logout } from '../lib'
import Link from "next/link";
import {redirect} from "next/navigation";


const profile = async () => {
var session = await getSession()
  return (
    <>
      <nav>
      <ul>
        <li><h1><Link href='/home'>Home</Link></h1></li>
        <li><h1><Link href='/user'>User Info</Link></h1></li>
        <li><form action={
        async(formdata) =>{
          'use server' 
          await logout();
          redirect('/');
        }}><button type='submit'>Logout</button></form></li>
      </ul>
    </nav>
    <br />
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <br />
      <h2>Your Email: {session.user.email}</h2>
      <br />
      <h2>Your Password: {session.user.password}</h2>
    </div>
    </>
  )
}

export default profile;