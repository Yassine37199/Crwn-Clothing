import styled from 'styled-components'



export const FormGroup = styled.div`
    width: 70%;
`

export const FormInputContainer = styled.input`

    background: none;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border: 1px solid #222;
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    &[type='password'] {
        letter-spacing: .3em;
    }

`

export const FormLabel = styled.label`

    text-transform: uppercase;
        color: #767676;

`