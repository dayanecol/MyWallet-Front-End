import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import styled from "styled-components";
import LogOut from "../shared/LogOut";


export default function HomePage(){
    const [operations, setOperations] = useState([]);
    const {userData} = useContext(UserContext);
 
    useEffect(() => {
        async function getAxios() {
          try {
            const response = await axios.get("http://localhost:5000/infos", {
              headers: {
                "Authorization": `Bearer ${userData.token}`
              }
            });
            setOperations(response.data);
          } catch (error) {
            alert("Erro!");
            console.log(error.response);
          }
        }
    
        getAxios();
        
      });

    function renderOperations(){

        if(operations.length>0){
            return operations.map((operation,index)=>{
                const {date, label, value, type} = operation;
                return (
                    <Operation key = {index+1} date={date} label={label} value={value} type={type} />
                );
            });
        }else {
            return (
                <Text>
                    Não há registros de entrada ou saída
                </Text>
            );
        }
    }

    function renderBalance(){
        if(operations.length>0){
            return operations.reduce((previousValue, current)=>{
                let currentValue=current.value;
                let sum = previousValue + currentValue;
                let subtraction = previousValue -currentValue;
                if (current.type==="money-deposit"){  
                    return sum;
                }
                return subtraction;
            },0);
        }else {
            return 0;
        }
    }

    return (
        <StyleHomePage>
            <StyleHeader>
                <h1>Olá, {userData.name}</h1>
                <Link to="/"><LogOut /></Link>
            </StyleHeader>
            <Infos>
                <InfoOperations>
                    {renderOperations()}
                </InfoOperations>
                <InfoBalance>
                    <p>Saldo:</p>
                    {renderBalance()}
                </InfoBalance>
            </Infos>
            <StyleFooter>
                <Link to="/money-deposit">
                    <Box>
                        <div>
                            <p>Nova</p>
                            <p>entrada</p>
                        </div>
                    </Box>       
                </Link>
                <Link to="/money-out">
                    <Box>
                        <div>
                            <p>Nova</p>
                            <p>saída</p>
                        </div>
                    </Box>
                </Link>
            </StyleFooter>
            

        </StyleHomePage>
    );
}

function Operation ({date, label, value}){
    return (
        <StyleOperation>
            <div>
                <p>{date}</p>
                <p>{label}</p>
            </div>
            <p>{value}</p>
        </StyleOperation>
    );
}

const Text = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    width: 100%;
    margin-top: 150px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
`;

const StyleOperation = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    height: 35px;

    div{
        display:flex;
        width:40%;
        justify-content:space-between;
    }
    p{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

`;

const StyleHomePage = styled.div`
    padding-right:25px;
    padding-left:25px;
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
const Infos = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:23px 11px 11px 11px;
    width: 100%;
    height: 446px;
    left: 25px;
    top: 78px;
    background-color: #FFFFFF;
    border-radius: 5px;
`;
const InfoOperations = styled.div`
    display:flex;
    flex-direction:column;
`;
const InfoBalance = styled.div`
    display:flex;
    justify-content:space-between;
    p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
`;
const StyleFooter = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:13px;
`;
const Box = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    justify-content:flex-end;
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    cursor: pointer;
    div{
        padding:10px;
    }
    p{
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        text-decoration:none;
        
    }
    
    
`;
