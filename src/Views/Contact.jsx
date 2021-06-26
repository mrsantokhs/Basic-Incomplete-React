import React, { useState, useEffect, createContext } from 'react';
import Header from "../Components/Header";
import ContactApiDesign from "../Components/ContactApi/ContactApiDesign";

import axios from "axios"

export const contactTitle = React.createContext();


const Contact = () => {
    const [Contacts, setContacts] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const responseContacts = res.data;
                setContacts(responseContacts);
            });
    }, []);
    return (
        <div>

            <Header title="Contact Api" searchBar={true} />

            <div class="container">


                <div>
                    {Contacts ?
                        (<div>{Contacts &&
                            Contacts.map((contact, index) => {
                                const { id } = contact;
                                return (
                                    <div key={id}>
                                        <p> <ContactApiDesign contact={contact} />  </p>
                                    </div>
                                )
                            })}
                        </div>) :
                        (<div className="spinner-border" role="status"></div>)}
                </div>
            </div>
        </div>
    )
}
export default Contact
