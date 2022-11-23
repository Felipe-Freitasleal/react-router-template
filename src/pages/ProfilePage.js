import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ProfilePage() {

  const params = useParams()
  return (
    <main>
      <Header />
      <h1>Página acerca do usuário {params.name}</h1>
    </main>
  );
}

export default ProfilePage;
