import styled from "styled-components";

const Input = styled.input`
    width:100%;
    min-width: 326px;
    height: 58px;
    background-color: ${props=> props.color ? "#CDCDCD" : "#FFF"};
    border: 1px solid ${props=> props.color ? "#FAFAFA" : "#D5D5D5"};
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 13px;

    ::placeholder {
        color: "#000";
      }
`;

export default Input;