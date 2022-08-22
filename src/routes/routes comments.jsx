import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home/index'
import Login from '../Pages/Login/index';
import Register from '../Pages/Register/index';


/*Vamos criar um componente que vai receber o item que no caso, é "Home"*/
const Private = ({Item}) => {
    /*Será verificado se ele está logado*/
    const signed = false;

    /*Se tiver logado, retorne o item que passamos se não, direcione ele para a tela de login novamente */
    return signed > 0 ? <Item /> : <Login />
}

function routesWeb(){
    return(
        <BrowserRouter>
            <Routes>
                /*A Route Home deve ser privada, de modo que apenas quem fez o login pode acessar ela*/
                <Route path="/Home" element={<Private item={Home}/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/" element={<Register/>}/>

                <Route path="*" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default routesWeb;