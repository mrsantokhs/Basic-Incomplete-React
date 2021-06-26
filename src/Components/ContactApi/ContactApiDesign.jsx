import React from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


const ContactApiDesign = (props) => {
    const { id, name, email, address } = props.contact
    let history = useHistory();
    return (
        <div  >
            <h5>{name}</h5>
            <p>{email}</p>
            <p><strong>City</strong>:{address.city}</p>
            <p>Id is:{id}</p>
            <Link onClick={() => history.push(`/contactid/${id}`)} >Click here (Not Working yet)</Link>
            <button className="btn btn-danger" ><i className="fa fa-trash" ></i></button>
            <hr />
        </div>
    )
}
export default ContactApiDesign