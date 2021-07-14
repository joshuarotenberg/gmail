import React, { useState, useEffect } from "react";

import styled from "styled-components";
import EmailRow from "./EmailRow";

const EmailIndex = ({ data }) => {
    let initialStarState = data.messages.map((m) => ({ id: m.id, starred: false  }));
    const [starred, setStarred] = useState(initialStarState);


    let initialCheckedState = data.messages.map((m) => ({ id: m.id, checked: false  }));
    const [checked, setChecked] = useState(initialCheckedState);


    const [checkedAll, setCheckedAll] = useState(false);

    const toggleCheck = (inputName) => {
        setChecked((prevState) => {
        const newState = { ...prevState };
        newState[inputName].checked = !prevState[inputName].checked;
        return newState;
        });
    };

    const selectAll = (value) => {
        setCheckedAll(value);
        setChecked((prevState) => {
            const newState = { ...prevState };
            for (const inputName in newState) {
            newState[inputName].checked = value;
            }
            return newState;
        });
    };

      useEffect(() => {
        let allChecked = true;
        for (const inputName in checked) {
            console.log(checked[inputName]);
          if (checked[inputName].checked === false) {
            allChecked = false;
          }
        }
        if (allChecked) {
          setCheckedAll(true);
        } else {
          setCheckedAll(false);
        }
      }, [checked]);


    const TableWrapper = styled.section`
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
    `;

    const EmailCount = styled.div`
        margin: 20px;
        position: fixed;
        right: 60px;
    `;

    console.log(checked);

  return (
    <TableWrapper>
      <TableHead>
        <ActionButtonWrapper>
          <input
            type="checkbox"
            onChange={(event) => selectAll(event.target.checked)}
            checked={checkedAll}
          />
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
              checked={checked}
              toggleCheck={toggleCheck}
            />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default EmailIndex;
