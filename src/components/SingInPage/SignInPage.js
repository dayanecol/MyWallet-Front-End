import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../shared/Logo";
import SignInForm from "./SignInForm";

export default function SignInPage(){
    return (
        <Container>
            <Logo />
            <SignInForm />
            <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
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

const StyledLink = styled(Link)`
    width: 227px;
    height: 18px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    text-decoration:none;
    margin-top:32px;
`;