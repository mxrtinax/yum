import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={'/'}>yum</Logo>
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