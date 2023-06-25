import React from 'react';
import SHOP_DATA from './082 shop.data';
import Collection from '../../components/collection/collection'
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections:SHOP_DATA,
        }
    }

    render(){
        const {collections}=this.state;
        return (
            <div>
                {
            collections.map(({id,...otherCollectionProps})=><Collection key={id} {...otherCollectionProps} ></Collection>)
                }
            </div>
        )
    }

}

export default ShopPage;