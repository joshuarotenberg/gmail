import styled from 'styled-components'
import { AiOutlineStar } from "react-icons/ai";

const StyledRow = styled.section`
    border-bottom: 1px solid #e8e8e8;
    flex:1;
    display:flex;
     flex-direction: row;
     align-items: center;
     height: 20px;
     padding: 10px 0;
      white-space: nowrap;
     &:hover {
         box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
     }
`;

const EmailActionCol = styled.td`
     margin-left: 10px;
     display:flex;
     flex-direction: row;
     align-items: center;
`;

const EmailSubjectBodyCol = styled.td`
    flex:1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const EmailSenderCol = styled.td`
     width:200px;
`;

const EmailSenderText = styled.p`
     font-weight:700;
`;

const EmailDateCol = styled.td`
     width:100px;
     z-index:10;
`;

const stripHtml = str => {
    return str.replace(/<[^>]+>/g, '');
}

const EmailRow = ({email}) => {
    return (
        <StyledRow key={email.id}>
            <EmailActionCol>
                <input type="checkbox"  />
                <AiOutlineStar className="react-icons" />
            </EmailActionCol>
            <EmailSenderCol><EmailSenderText>{email.sender}</EmailSenderText></EmailSenderCol>
            <EmailSubjectBodyCol>{email.subject} - {stripHtml(email.body)}</EmailSubjectBodyCol>
            <EmailDateCol>{email.date}</EmailDateCol>
        </StyledRow>
    )
}

export default EmailRow;