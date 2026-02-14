import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  let user = useSelector((state) => state.auth)
  console.log(user);
  
  return (
    <div>
      {
        user.isLoggedIn ?
          <h1 className='text-3xl font-bold text-center'>Welcome {user.email}</h1> :
          <h1 className='text-3xl font-bold text-center'>Please Login to Continue</h1>
      }
    </div>
  )
}

export default Home