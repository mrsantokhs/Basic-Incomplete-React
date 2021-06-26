import React from 'react'
import style from "./App.css"

function Form() {
    return (
        <div className="container ">
            <h1 className="form-title ">Make Contact List</h1>
            <form className="form-input" >
                <div className="mb-3">
                    <label for="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name" rows="3" />
                </div>
                <div class="mb-3">
                    <label for="Email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="Email" placeholder="name@example.com" />
                </div>

                <button className="btn btn-primary lg">Add</button>
            </form>
        </div >
    )
}

export default Form
