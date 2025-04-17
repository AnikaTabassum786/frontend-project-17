import React from 'react';
import Special from './Special';

const Cousin = ({name,asset}) => {
    return (
        <div>
            {name}
            <h4>
                {
                    name=== 'Tom Tom' && <Special asset={asset}></Special>
                }
            </h4>
        </div>
    );
};

export default Cousin;