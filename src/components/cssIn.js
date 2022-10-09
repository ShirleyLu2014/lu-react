import styled from "styled-components"
export const CssIn = styled.div.attrs((props) => {
    return {
        color: props.color || 'blue'
    }
})`
.title {
    color: ${(props) => props.color };
    border: ${(props) => props.size}px solid #ff0;
}
`