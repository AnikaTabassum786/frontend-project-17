import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name,asset}) => {
    const newAsset = useContext(AssetContext)
    return (
        <div>
            <h3>Special: {name}</h3>
            <h4>Asset: {asset}</h4>
            <h5>New Asset: {newAsset}</h5>
        </div>
    );
};

export default Special;