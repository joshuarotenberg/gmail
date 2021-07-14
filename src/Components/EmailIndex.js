import { useState } from "react";
import styled from "styled-components";
import EmailRow from "./EmailRow";

const EmailIndex = ({ data }) => {
    let initialState = data.messages.map(m => 
        ({id: m.id, starred: false,})
    );
    const [starred, setStarred] = useState(initialState);

     const TableWrapper = styled.section`
       display:flex;
       flex-direction:column;
     `;

      const TableHead = styled.section`
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content:space-between;
        height:60px;
      `;

      const ActionButtonWrapper = styled.div`
      margin-left: 15px;
        display: flex;
        flex-direction: row;
       
      `;

     const EmailCount = styled.div`
       margin: 20px;
       position: fixed;
       right: 60px;
     `;


  return (
    <TableWrapper>
      <TableHead>
        <ActionButtonWrapper>
          <input type="checkbox" />
          <span>Delete</span>
          <span>Mark read</span>
        </ActionButtonWrapper>
        <EmailCount>
          <span>
            1 - {data.messages.length} of {data.messages.length}
          </span>
        </EmailCount>
      </TableHead>
      <table>
        <tbody>
          {data.messages.map((row) => (
            <EmailRow
              key={row.id}
              id={row.id}
              email={row}
              starred={starred}
              setStarred={setStarred}
            />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default EmailIndex;
