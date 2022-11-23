import { gotToProfilePage, goToHomePage, gotToLoginPage } from "../Router/coordinato"
import { useNavigate } from "react-router-dom";


function Header() {

  const navigate = useNavigate()

  return (
    <header>
      <button onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => gotToProfilePage(navigate, `Felipe`)}>
        Ir para página de perfil
      </button>
      <button onClick={() => gotToLoginPage(navigate)}>
        Ir para página de Login
      </button>
    </header>
  );
}

export default Header;
