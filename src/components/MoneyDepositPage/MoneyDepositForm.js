import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import Button from "../shared/Button";
import Input from "../shared/Input";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function MoneyDepositForm(){
    const navigate = useNavigate();

    let [value, setValue] = useState ("");
    let [label, setLabel] = useState("");
    const [loading,setLoading] = useState(false);
    const { userData } = useContext(UserContext);

    async function submitData(event) {
        event.preventDefault();

        const URL="http://localhost:5000/infos";
        const config ={
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };
        const body = {
            value: parseFloat(value),
            label,
            type:"money-deposit",
        };

        try {
            await axios.post(URL, body, config);
            alert("Informações registradas com sucesso!"); 
            navigate("/home");
            
        } catch (error) {
            alert("Erro ao registrar as informações!");
            setLoading(false); 
        }

    }

    function loadingButton(){
        return loading ? 
            (<ThreeDots color="#FFF" background-color={"#A328D6"} opacity={0.7} height={80} width={80} />)
            :
            ("Salvar entrada");
    }

    function disable(){
        return loading ? "disable" : "";
    }

    return(
        
        <form onSubmit={submitData}>
            <FormStyle>
            <Input type="number" placeholder="Valor" value={value} onChange={e=> setValue(e.target.value)} disabled={disable()} color={loading} required  />
            <Input type="text" placeholder="Descrição" value={label} onChange={e=> setLabel(e.target.value)} disabled={disable()} color={loading} required  />
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