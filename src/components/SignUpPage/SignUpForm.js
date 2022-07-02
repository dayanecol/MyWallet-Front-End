import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import Button from "../shared/Button";
import Input from "../shared/Input";
import styled from "styled-components";

export default function SignUpForm(){
    const navigate = useNavigate();

    let [name, setName] = useState ("");
    let [email,setEmail] =useState("");
    let [password, setPassword] = useState("");
    let [passwordAgain, setPasswordAgain] = useState("");
    const [loading,setLoading] = useState(false);

    function submitData(event) {
        event.preventDefault();

        const URL="http://localhost:5000/sign-up";
        const promise = axios.post(URL, {
            name,
            email,
            password,
            passwordAgain
        });
        setLoading(true);
        promise
            .then(response => {
                const {data}=response;
                console.log(data);
                navigate("/");
            })
            .catch(err=> {
                setName ="";
                setEmail ="";
                setPassword ="";
                setPasswordAgain ="";
                alert("Usuário cadastrado ou os dados foram preenchidos incorretamente!");
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
            <Input type="text" placeholder="Nome" value={name} onChange={e=> setName(e.target.value)} disabled={disable()} color={loading} required  />
            <Input type="email" placeholder="E-mail" value={email} onChange={e=> setEmail(e.target.value)} disabled={disable()} color={loading} required  />
            <Input type="password" placeholder="Senha" value={password} onChange={e=> setPassword(e.target.value)} disabled={disable()} color={loading} required  />
            <Input type="password" placeholder="Confirme a senha" value={passwordAgain} onChange={e=> setPasswordAgain(e.target.value)} disabled={disable()} color={loading} required  />
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

