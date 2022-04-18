import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import { 
        CollectionItemConatiner, 
        CollectionItemFooter, 
        CollectionItemImage, 
        CollectionItemName, 
        CollectionItemPrice } from './collection-item.styles';

const CollectionItem = ({item , addItemToCart}) => {
    
    const {name , price , imageUrl} = item
    
    return (

    <CollectionItemConatiner>
        <CollectionItemImage imageUrl={imageUrl}/>
        <CollectionItemFooter>
            <CollectionItemName>{name}</CollectionItemName>
            <CollectionItemPrice>{price}</CollectionItemPrice>
        </CollectionItemFooter>
        <CustomButton inverted handleSubmit={() => addItemToCart(item)}> ADD TO CART </CustomButton>
    </CollectionItemConatiner>
)
    }

const mapDispatchToProps = dispatch => ({
    addItemToCart : item => dispatch(addItemToCart(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem);