import { Link } from 'react-router-dom'
import styled from 'styled-components'



export const SignInContainer = styled.div`

    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
        margin-top: 15px;
    }


`

export const ForgotPasswordLink = styled(Link)`

    font-family: inherit;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #222;
    text-decoration: none;
    transition: all .2s;
    margin-left: 15px;
    border-bottom: 1px solid #fff;

    &:hover {
        border-bottom: 1px solid #222;
    }

`


export const SignInSubtitle = styled.p`

    font-size: 18px;
    color: #222;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 2.7px;
    margin-top: 50px;
    text-align: center;
    margin-left: 15px;

`

export const SignInButtonOptions = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`


export const SignInBrandLogo = styled.div`

    height: 30px;
    width: 30px;
    margin-right: 25px;
    

`




