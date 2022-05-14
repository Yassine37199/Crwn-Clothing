import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../../Components/collection-item/collection-item.component'
import { CollectionItemsContainer, CollectionPageContainer, CollectionPageTitle } from './collection.styles';
import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionPage = ({match}) => {

    const collections = useContext(CollectionsContext)
    const collection = collections[match.params.categoryName]
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

export default withRouter(CollectionPage); 