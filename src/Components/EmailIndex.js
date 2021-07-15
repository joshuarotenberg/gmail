import React, { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import EmailRow from "./EmailRow";

const EmailIndex = ({ emails, setEmails }) => {
    
    let initialStarState = emails.map((m) => ({ id: m.id, starred: false  }));
    const [starred, setStarred] = useState(initialStarState);


    let initialCheckedState = emails.map((m) => ({ id: m.id, checked: false  }));
    const [emailChecked, setEmailChecked] = useState(initialCheckedState);
    let removals = [];

    const [checkedAll, setCheckedAll] = useState(false);

    const toggleCheck = (inputName) => {
        setEmailChecked((prevState) => {
          const newState = { ...prevState };
          newState[inputName].checked = !prevState[inputName].checked;
          return newState;
        });
    };

    const selectAll = (value) => {
        setCheckedAll(value);
        setEmailChecked((prevState) => {
          const newState = { ...prevState };
          for (const inputName in newState) {
            newState[inputName].checked = value;
          }
          return newState;
        });
    };
 

    const handleRemoveItem = () => {
        const temp = [...emails];
        for (let i = removals.length - 1; i >= 0; i--) {
            temp.splice(i, 1);
          }
        setEmails(temp);
    };


        
    useEffect(() => {
    let allChecked = true;
    
    for (const inputName in emailChecked) {
        if (emailChecked[inputName].checked === false) {
        allChecked = false;
        }  else {
            removals.push(emailChecked[inputName].id);
            setCheckedAll(false);
        }
    }
    if (allChecked) {
        setCheckedAll(true);
    } else {
        setCheckedAll(false);
    }
    }, [emailChecked, removals]);

      

    const TableWrapper = styled.section`
        display: flex;
        flex-direction: column;
    `;

     const EmailTable = styled.div`
       display: flex;
       flex-direction: column;
     `;

    const TableHead = styled.section`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 60px;
    `;

    const ActionButtonWrapper = styled.div`
        margin-left: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
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
          <input
            type="checkbox"
            onChange={(event) => selectAll(event.target.checked)}
            checked={checkedAll}
          />
          <FaRegTrashAlt
            className="react-icons"
            handleRemoveItem={handleRemoveItem}
            onClick={() => handleRemoveItem()}
          />
        </ActionButtonWrapper>
        <EmailCount>
          <span>
            1 - {emails.length} of {emails.length}
          </span>
        </EmailCount>
      </TableHead>
      <EmailTable>
          {emails.map((row) => (
            <EmailRow
              key={row.id}
              id={row.id}
              email={row}
              starred={starred}
              setStarred={setStarred}
              checked={emailChecked}
              toggleCheck={toggleCheck}
            />
          ))}
      </EmailTable>
    </TableWrapper>
  );
};

export default EmailIndex;
