import React from 'react';


function Contactcard(props) {
    const { name, email } = props.contactInfo;


    return (
        <div>
            <h5>{name}</h5>
            <p>{email}</p>
            <button className="btn btn-danger" ><i className="fa fa-trash" ></i></button>
            <hr />
        </div>
    )
}

export default Contactcard
