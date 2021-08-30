import React from 'react';

const OrderService = () => {
    let data = sessionStorage.getItem('id');
    console.log(data);
    return (
        <div>
            <h1>This is Order Service</h1>
            <h2>{data}</h2>
        </div>
    );
};

export default OrderService;