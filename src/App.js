import {useState} from 'react';
import "./App.css";
import styled from "styled-components";
import EmailIndex from "./Components/EmailIndex";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { data } from "./Services/Data";


const Wrapper = styled.section`
  background: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.section`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

function App() {
  let initialState = data.messages;
  const [emails, setEmails] = useState(initialState);
  const [tags, setTags] = useState(['travel', 'work']);

  

  return (
    <Wrapper>
      <Header />
      <Main>
        <Sidebar emails={emails} tags={tags} />
        <EmailIndex emails={emails} setEmails={setEmails} tags={tags} />
      </Main>
    </Wrapper>
  );
}

export default App;
