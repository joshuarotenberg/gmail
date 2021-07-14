import { useState } from "react";
import EmailRow from "./EmailRow";

const EmailIndex = ({ data }) => {
    let initialState = data.messages.map(m => 
        ({id: m.id, starred: false,})
    );
    const [starred, setStarred] = useState(initialState);

  return (
    <div>
      <table>
        <tbody>
          {data.messages.map((row) => (
            <EmailRow
              id={row.id}
              email={row}
              starred={starred}
              setStarred={setStarred}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailIndex;
