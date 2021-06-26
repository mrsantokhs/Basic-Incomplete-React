import Header from "../Components/Header";
import React, { useState } from 'react';
import Users from "./Users";
import Form from "../Components/Form";
import ContactList from "../Components/ContactList";

const contacts = [
    {
        id: 1,
        name: "Uber",
        email: "uber@uber.com"

    },
    {
        id: 2,
        name: "Ola",
        email: "ola@ola.com"
    }
];
export const homeTitle = React.createContext();

const Home = () => {
    const [list, updateList] = useState(contacts);
    return (
        <div>
            <homeTitle.Provider value={"Contact List App"}>
                <Header searchBar={true} />
            </homeTitle.Provider>
            <Form />
            <ContactList contacts={contacts} />

        </div>
    )
}

export default Home