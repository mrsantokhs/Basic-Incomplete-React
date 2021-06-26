import React from 'react';
import { useParams } from "react-router-dom";

const ContactIdPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1> {`Contact id: ${id}`} </h1>
        </div>
    )
}
export default ContactIdPage