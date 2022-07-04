import styled from "styled-components";
import MoneyOutForm from "./MoneyOutForm";

export default function MoneyOutPage(){
    return (
        <Container>
            <StyleHeader>
                <h1>Nova saida</h1>
            </StyleHeader>
            <MoneyOutForm />
        </Container>
    );
}

const Container = styled.div`
    box-sizing:border-box;
    min-height: 100vh;
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const StyleHeader = styled.div`
    height:78px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    h1{
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`;