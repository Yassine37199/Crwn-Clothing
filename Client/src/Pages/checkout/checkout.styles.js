import { Link } from 'react-router-dom'
import styled from 'styled-components'



export const CheckoutContainer = styled.div`

    width: 80%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    margin: 50px auto 0;
    font-family: 'Futura' , sans-serif;

`

export const CheckoutHeader = styled.div`

    width: 100%;
    padding: 10px 0;
    display: flex;
    border-bottom: 1px solid darkgrey; 

`

export const CheckoutHeaderBlock = styled.div`

            text-transform: capitalize;
            width: 27%;
            margin-left: 85px;

            &:last-child {
                width: 8%;
            }

`

export const CheckoutPrice = styled.div`margin-left: auto;`

export const CheckoutPriceTitle = styled.p`

    margin-bottom: 10px;
    color: #2b2b2b;

`

export const CheckoutPriceValue = styled.span`
    color: #4595fb;
    margin-left: 15px;
`

export const CheckoutFooter = styled.div`

        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;

`

export const CheckoutLink = styled(Link)`

    color: #2b2b2b;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid #2b2b2b;
    }
`


export const CheckoutTotal = styled.span`

    color: #4595fb;
    margin-left: 15px;

`

export const CheckoutStripeWarning = styled.div`

        color: rgb(224, 80, 80);
        text-align: center;
        font-size: 20px;
        margin-top: 15px;

`




