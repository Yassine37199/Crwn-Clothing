import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionOverview = ({collections}) => {
    return (
        <div>
             {
                collections.map( ({id , ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} /> 
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);