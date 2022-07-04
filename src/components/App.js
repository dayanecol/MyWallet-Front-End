import { BrowserRouter,Routes, Route} from "react-router-dom";
import SignUpPage from "./SignUpPage/SignUpPage";
import SignInPage from "./SingInPage/SignInPage";
import HomePage from "./HomePage/HomePage";
import MoneyDepositPage from "./MoneyDepositPage/MoneyDepositPage";
import MoneyOutPage from "./MoneyOutPage/MoneyOutPage";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

export default function App(){
    const [userData,setUserData] = useState(null);
    return (
        <UserContext.Provider value={{userData,setUserData}} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/money-deposit" element={<MoneyDepositPage />} />
                    <Route path="/money-out" element={<MoneyOutPage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}