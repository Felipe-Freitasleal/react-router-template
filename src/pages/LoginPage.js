import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { gotToProfilePage, goToHomePage } from "../Router/coordinato"


export function LoginPage() {
    const [ usuario, setUsuario] = useState()

    const navigate = useNavigate()

    return (
        <div>
            <label>
                Nome de usuário:
                <input type="text" onChange={(e) => setUsuario(e.target.value)}/>
            </label>
            <label>
                Senha:
                <input type="password" />
            </label>
            <hr />
            <button onClick={() => goToHomePage(navigate)}>
                Ir para página inicial
            </button>
            <button onClick={() => gotToProfilePage(navigate, usuario)}>
                Ir para página de perfil
            </button>
        </div>

    )
}