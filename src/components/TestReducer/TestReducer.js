import React, { useReducer } from 'react';

const TestReducer = () => {
    const person = {
        id: '12345',
        fullname: 'Ivanov Ivan',
        city: 'Moscow',
        admin: false,
    };

    const [user, setUser] = useReducer(
        (user, newDetails) => ({ ...user, ...newDetails }),
        person,
    );

    return (
        <div>
            <div>{user.fullname}</div>
            <div>{user.city}</div>
            <div>{user.admin.toString()}</div>
            <button onClick={() => {setUser({...user, admin: true})}}>setAdmin</button>
        </div>
    );
};

export default TestReducer;
