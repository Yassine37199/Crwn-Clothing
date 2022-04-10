import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../Components/collection-item/collection-item.component'

import './collection.styles.scss'

const CollectionPage = ({collection}) => {
    
    const {title , items} = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state , ownProps) => ({
    collection : selectShopCollection(ownProps.match.params.categoryName)(state)
})

export default connect(mapStateToProps)(withRouter(CollectionPage));