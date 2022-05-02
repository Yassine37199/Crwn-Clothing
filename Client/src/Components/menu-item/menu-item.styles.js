import styled from 'styled-components'
import { css } from 'styled-components'



const LargeMenuItemStyles = ({size}) => (
    size === 'large' ? css` height: 380px;` : null
)



export const BackgroundImageContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;





export const MenuItemContent = styled.div`

    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    background-color: #fff;
    opacity: .8;
    z-index: 20;

`

export const MenuItemTitle = styled.h1`

    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;

`

export const MenuItemSubtitle = styled.span`

    font-weight: lighter;
    font-size: 16px;
`

export const MenuItemConatiner = styled.div`

    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    margin: 0 7.5px 15px;
    position: relative;
    overflow: hidden;

    box-shadow: 9px 9px 16px -8px rgba(0,0,0,.7);
    -webkit-box-shadow: 9px 9px 16px -8px rgba(0,0,0,.7);
    -moz-box-shadow: 9px 9px 16px -8px rgba(0,0,0,.7);

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    ${LargeMenuItemStyles}


    &:hover {
        cursor: pointer;

        ${BackgroundImageContainer} {
            cursor: pointer;
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25 , 0.45 , 0.45 , 0.95);
        }

        ${MenuItemContent} {
            opacity: 1; 
        }   
    }
`

