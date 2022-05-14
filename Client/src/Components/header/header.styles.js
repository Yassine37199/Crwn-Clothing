import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../Assets/crown.svg'
import styled from 'styled-components'
import { css } from 'styled-components'




export const HeaderContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Futura' , sans-serif;

    @media screen and (max-width : 800px) {
        padding : 10px;
        height : 60px;
        margin-bottom : 20px;
    }

`

export const LogoContainer = styled(Logo)`
    padding: 15px 20px;

    @media screen and (max-width : 800px) {
        width : 40px;
        padding : 0
    }
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 25px;

    @media screen and (max-width : 800px) { 
    }

`

export const NavItemLink = styled(Link)`

    font-weight: 900;
    line-height: 60px;
    font-size: 16px;
    text-decoration: none;
    color: #000;
    margin-right: 17px;
    cursor: pointer;

    @media screen and (max-width : 800px) {
        font-size : 14px;

     }
`