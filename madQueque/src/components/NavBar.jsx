import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(props){
  return <nav>
   <ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/triagem">Triagem</Link>
    </li>

       <li>
      <Link to="/atendimento">Atendimento</Link>
    </li>
    </ul>
  </nav>
}

export default NavBar