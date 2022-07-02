import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import Button from "../shared/Button";
import Input from "../shared/Input";
import styled from "styled-components";

export default function SignInForm(){
    const navigate = useNavigate();

    let [email,setEmail] =useState("");
    let [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    function submitData(event) {
        event.preventDefault();

        const URL="http://localhost:5000/sign-in";
        const promise = axios.post(URL, {
            email,
            password,
        });
        setLoading(true);
        promise
            .then(response => {
                const {data}=response;
                console.log(data);
                navigate("/home");
            })
            .catch(err=> {
                setEmail ="";
                setPassword ="";
                alert("As informações de e-mail e/ou senha estão incorretas. Insira os dados novamente ou faça o cadastro!");
                setLoading(false);
                    
            }); 
    }

    function loadingButton(){
        return loading ? 
            (<ThreeDots color="#FFF" background-color={"#A328D6"} opacity={0.7} height={80} width={80} />)
            :
            ("Cadastrar");
    }

    function disable(){
        return loading ? "disable" : "";
    }

    return(
        
        <form onSubmit={submitData}>
            <FormStyle>
            <Input type="email" placeholder="E-mail" value={email} onChange={e=> setEmail(e.target.value)} disabled={disable()} color={loading} required  />
            <Input type="password" placeholder="Senha" value={password} onChange={e=> setPassword(e.target.value)} disabled={disable()} color={loading} required  />
            <Button>{loadingButton()}</Button>
            </FormStyle>
        </form>
        
    );
}

const FormStyle = styled.div`
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    align-items:center;
`;