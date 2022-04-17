import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../Assets/crown.svg'
import styled from 'styled-components'
import { css } from 'styled-components'




export const HeaderContainer = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Futura' , sans-serif;

`

export const LogoContainer = styled(Logo)`
    padding: 15px 20px;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 25px;

`

export const NavItemLink = styled(Link)`

    font-weight: 900;
    line-height: 60px;
    font-size: 16px;
    text-decoration: none;
    color: #000;
    margin-right: 17px;
    cursor: pointer;
`