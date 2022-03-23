import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss'

const CollectionItem = ({item , addItem}) => {
    
    const {name , price , imageUrl , id} = item
    
    return (

    <div className='collection-item'>
        <div className='collection-item__image'
        style={{
            backgroundImage : `url(${imageUrl})`
        }} />
        <div className='collection-item__footer'>
            <span className='collection-item__name'>{name}</span>
            <span className='collection-item__price'>{price}</span>
        </div>
        <CustomButton inverted handleSubmit={() => addItem(item)}> ADD TO CART </CustomButton>
    </div>
)
    }

const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem);