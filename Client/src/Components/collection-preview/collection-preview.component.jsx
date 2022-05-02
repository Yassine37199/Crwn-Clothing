import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, CollectionPreviewContent, CollectionPreviewTitle } from './collection-preview.styles';




const CollectionPreview = ({title , items}) => (

    <CollectionPreviewContainer>
        <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
        <CollectionPreviewContent>
            {
                items
                .filter((item , idx) => idx < 4)
                .map( (item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </CollectionPreviewContent>
    </CollectionPreviewContainer>
)

export default CollectionPreview;