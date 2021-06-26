import React, { useState } from 'react'

const LogIn = () => {
    const [loggedIn, setloggedIn] = useState(false);
    const logInHandler = () => {
        return setloggedIn(!loggedIn)
    }
    return (
        <div class="container">
            <h4>Welcome</h4>
            <button onClick={logInHandler} class="btn btn-primary" >{loggedIn ? "Log Out" : "Log In"}</button>
            {loggedIn == true ? (<h3>Hello Santokh</h3>) : ("Please Log In!")}

        </div>
    )
}
export default LogIn