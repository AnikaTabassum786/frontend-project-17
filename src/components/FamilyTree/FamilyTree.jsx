import React from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css'

const FamilyTree = () => {
    const asset = 'diamond'
    return (
        <div className='family-tree'>
            <h1>Family Tree</h1>
            <GrandPa></GrandPa>
        </div>
    );
};

export default FamilyTree;