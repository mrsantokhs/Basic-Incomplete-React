import React, { useState, useEffect } from 'react';
import axios from "axios"

const ApiUsers = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const responseUsers = res.data;
                setUsers(responseUsers);
            });
    }, []);

    return (
        <div class="container">
            <h1>Api Users</h1>
            <div>
                {users &&
                    users.map((user, index) => {
                        const { id, email } = user;
                        return (
                            <div key={id}>
                                <p>{index + 1} {email}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default ApiUsers