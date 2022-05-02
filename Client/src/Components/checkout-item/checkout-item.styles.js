import styled from 'styled-components'
import { css } from 'styled-components'



const ChangeQuantityButtonStyles = css`

    color: #4595fb;
    cursor: pointer;
    font-size: 20px;

`

export const CheckoutItemContainer = styled.div`

    width: 100%;
    display: flex;
    align-items: center;

    & > * {
        margin-top: 25px;
        width: 50%;
        text-align: center;
    }

`

export const CheckoutItemImageContainer = styled.div`
    display: flex;
    align-items: center;
`

export const CheckoutItemImage = styled.img`
    width: 100px;
    border-radius: 20px;
`

export const CheckoutItemName = styled.span`

    font-family: inherit;
    font-size: 16px;
    margin-left: 12px;

`

export const CheckoutItemQuantity = styled.div`

    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
        margin-left: 15px;
    }

`

export const CheckoutItemAddButton = styled.div`

    ${ChangeQuantityButtonStyles}

`


export const CheckoutItemRemoveButton = styled.div`

    ${ChangeQuantityButtonStyles}

`

export const CheckoutItemPrice = styled.div`

    & > * {
        margin-left: 15px;
    }

`

export const CheckoutItemClearButton = styled.span`

    color: #d33030;
    font-size: 18px;
    cursor: pointer;


`




