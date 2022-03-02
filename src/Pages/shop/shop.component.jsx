import React, { Component } from 'react';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';
import { SHOP_DATA } from './collections.data';

import './shop.styles.scss'


class ShopPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : SHOP_DATA
        }    
    }
    
    
    render() {

        const {collections} = this.state;

        return(
            <div className='shop-page'>
                {
                    collections.map( ({id , ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} /> 
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;