import styled from 'styled-components'
import {ReactComponent as ShoppingIcon} from '../../Assets/Logos/shopping-bag.svg'



export const CartIconContainer = styled.div`

    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`

export const  ShoppingIconContainer = styled(ShoppingIcon)`

    width: 32px;
    height: 32px;

`

export const ItemCountContainer = styled.span`

    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 6px;

`

