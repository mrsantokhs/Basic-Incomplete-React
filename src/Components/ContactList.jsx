import React from 'react'
import ContactCard from "./ContactCard"


function ContactList(props) {


    return (
        <div class="container">
            {props.contacts.length > 0 ? (
                <div>
                    <h1>Contact List</h1>
                    {props.contacts.map((contactInfo) => {
                        return <ContactCard key={contactInfo.id} contactInfo={contactInfo} onDelete={props.onDelete} />
                    })}
                </div>
            ) : ""
            }
        </div>
    );
};

export default ContactList
