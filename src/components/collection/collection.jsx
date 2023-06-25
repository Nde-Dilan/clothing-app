import React from 'react';

import './collection.scss';

const Collection = ({title,items})=>{
    return (
        <div className="collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item,index)=>index<4).map(({id,...itemProps})=><CollectionItem key={id} {...itemProps}/>)
                }
            </div>

        </div>
    )
}
export default Collection;