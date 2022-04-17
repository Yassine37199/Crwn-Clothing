import styled from 'styled-components'



export const CartDropdownContainer = styled.div`

    position: absolute;
    right: 70px;
    top: 100px;
    width: 300px;
    height: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    font-style: inherit;
    padding: 15px;

    &::after {
        content: '';
        background-color: white;
        width: 40px;
        height: 25px;
        position: absolute;
        top: -15px;
        right: 10px;
        clip-path: polygon(50% 0, 0% 100%, 100% 100%);
    }

`


export const TotalContainer = styled.p`
    color: #2b2b2b;
    margin-left: auto;
    margin-right: 25px;
`

export const TotalPrice = styled.span`

    color: #4595fb;

`

export const CartItemsContainer = styled.div`

    height: 80%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden ;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

`

export const EmptyCartContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const EmptyCartImage = styled.img`

        width: 320px;
        margin-left: 45px;
        margin-top: 15px;

`

export const EmptyCartParagraph = styled.p`

    font-size: 18px;
    letter-spacing: 1px;
    color: #4595fb;

`

export const EmptyCartMessage = styled.span`

    color: #2b2b2b;

`