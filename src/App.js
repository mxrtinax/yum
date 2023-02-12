import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={'/home'}>yum</Logo>
      <Userlogo to={'/'}>
        <FaUserCircle/>
      </Userlogo>
    </Nav>
      <div className="App">
        <Search/>
        <Category/>
        <Pages/>
      </div>
    </BrowserRouter>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Neucha', cursive;
  color: #000;
`
const Userlogo = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: black;
`
const Nav = styled.div`
padding:4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
 `
export default App;