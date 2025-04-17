import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name="Tom Tom"></Cousin>
                <Cousin name="Jo Joo"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;