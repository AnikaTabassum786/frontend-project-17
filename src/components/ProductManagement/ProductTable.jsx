import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    products.map((product,index)=><tr>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;