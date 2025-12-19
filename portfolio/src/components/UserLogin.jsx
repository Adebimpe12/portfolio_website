import React from 'react'

const UserLogin = () => {
    const isLoggedIn = true;
  return (
    <div>
        {/* {
            isLoggedIn ? <h3>Welcome to Tolu's Project</h3>
             : <h4>You cannot access this project</h4>
        } */}
        {
          isLoggedIn && <h3>Hello, I am logged in</h3>
        }
    </div>
  )
}

export default UserLogin
 