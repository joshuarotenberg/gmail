import './App.css';
import styled from 'styled-components'
import EmailIndex from './Components/EmailIndex';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

const Wrapper = styled.section`
  background: white;
  display:flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.section`
  display:flex;
  flex-direction: row;
  height:100%;
`;


function App() {
  return (
    <Wrapper>
     <Header />
     <Main>
      <Sidebar />
      <EmailIndex />
     </Main>
    </Wrapper>
  );
}

export default App;
