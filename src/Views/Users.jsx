import React from 'react';
import ApiUsers from "../Components/ApiUsers"
import Header from "../Components/Header";


export const title = React.createContext();

const Users = (props) => {
    return (
        <div>
            <title.Provider value={"Contact List App"}>
                <Header title="Users Api" searchBar={true} />
            </title.Provider>
            <ApiUsers />
        </div>
    )
}
export default Users