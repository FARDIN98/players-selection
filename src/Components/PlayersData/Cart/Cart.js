import React from 'react';

const Cart = (props) => {
    const cricketer = props.team
    console.log(cricketer)
    let addSalary = 0
    for (let i = 0; i < cricketer.length; i++) {
        const newSalary = cricketer[i].salary;
        addSalary = addSalary + newSalary
    }
    return (
        <div>
            {
                cricketer.map(pl => <p>Name: {pl.name + " " + "Salary: " + pl.salary}</p>)
            }
            <h3>Salary:{addSalary}</h3>
        </div>
    );
};

export default Cart;