import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectShopCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../Components/collection-item/collection-item.component'
import { CollectionItemsContainer, CollectionPageContainer, CollectionPageTitle } from './collection.styles';

const CollectionPage = ({collection}) => {
    
    const {title , items} = collection;

    return (
        <CollectionPageContainer>
            <CollectionPageTitle>{title.toUpperCase()}</CollectionPageTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state , ownProps) => ({
    collection : selectShopCollection(ownProps.match.params.categoryName)(state)
})

export default connect(mapStateToProps)(withRouter(CollectionPage));