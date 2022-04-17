import styled from 'styled-components';
import { css } from 'styled-components';


const ButtonStyles = css`

    background-color: #2d2d2d;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color : black;
        border: 1px solid black;
    }

`


const InvertedButtonStyles = css`
    background-color: white;
    color : black;
    border: 1px solid black;

    &:hover {
        background-color: #2d2d2d;
        color: white;
        border: 1px solid white;
    }
`

const BrandButtonStyles = css`
    width: 40%;
    color: #2d2d2d;
    background-color: #fff;
    border: 1px solid #808282;

`

const getButtonStyles = (props) => {
    if(props.brand) return BrandButtonStyles;

    return props.inverted ? InvertedButtonStyles : ButtonStyles
}

export const CustomButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 165px;
    width: 70%;
    height: 50px;
    letter-spacing: 2.5px;
    line-height: 24px;
    padding: 0 35px 0 35px;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: inherit;
    border-radius: 7px;
    margin-top: 15px;
    margin-left: 15px;
    cursor: pointer;
    transition: all .2s;
    ${getButtonStyles}
    

`

