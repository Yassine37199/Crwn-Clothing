import styled from 'styled-components'
import { css } from 'styled-components'



export const CollectionItemConatiner = styled.div`

    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 450px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    position: relative;

    &:hover {
      
        .collection-item__image {
          opacity: 0.8;
          cursor: pointer;
        }
  
        .custom-button {
          display: flex;
          opacity: 0.85;
        }
      }

    .custom-button {
        position: absolute;
        opacity: 0.7;
        width: 80%;
        bottom: 60px;
        display: none;

        @media screen and (max-width : 800px) {
          display : block;
          opacity : .9;
          min-width : unset;
          padding : 0 10px;
        }
  
      }

      @media screen and (max-width : 800px) {
        width : 40vw;
        height : 350px;
      }
      }


`

const BackgroundImageStyles = (props) => (
     css` background-image : url(${props.imageUrl})`
)

export const CollectionItemImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    ${BackgroundImageStyles}
`

export const CollectionItemFooter = styled.div`

    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

`

export const CollectionItemName = styled.span`

    width: 90%;
    margin-bottom: 15px;

`

export const CollectionItemPrice = styled.span`

    width: 10%;

`



