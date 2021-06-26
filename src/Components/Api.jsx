import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodos = res.data;
            setTodos(responseTodos);
        });
    }, []);



    return (
        <div class="container ">
            <h1> Todo List </h1>
            <div class="d-flex flex-wrap">
                {todos &&
                    todos.map((todo, index) => {
                        const { id, userId, title } = todo;
                        return (
                            <div key={id}>
                                <h5> {index + 1}{title} </h5>


                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Api