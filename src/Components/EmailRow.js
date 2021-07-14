import styled from 'styled-components'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Moment from "react-moment";




const StyledEmailRow = styled.tr`
  @media (max-width: 767.98px) {
    flex-direction: column;
    white-space: wrap;
    align-items: start;
    height: 80px;
    width:452px;
  }
  border-bottom: 1px solid #e8e8e8;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20px;
  padding: 10px 0;
  white-space: nowrap;
  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
  }
`;

const EmailActionCol = styled.td`
     margin-left: 10px;
     display:flex;
     flex-direction: row;
     align-items: center;
`;

const EmailSubjectBodyCol = styled.td`
  @media (max-width: 767.98px) {
    overflow: none;
    white-space: wrap;
    display: flex;
    flex-direction: column;
    position: relative;
    top: -27px;
    left: 48px;
    height: 100px;
  }
  @media (min-width: 768px) {
    white-space: wrap;
  }
  text-overflow: ellipsis;
  z-index: 9;
  display: flex;
  flex-direction: row;
`;

const EmailSenderCol = styled.td`
  @media (max-width: 767.98px) {
    position: relative;
    top: -35px;
    left: 69px;
  }
  width: 200px;
`;


const EmailSenderText = styled.span`
  font-weight: 700;
`;

const EmailDateCol = styled.td`
  @media (max-width: 767.98px) {
    width: 50px;
    right: 20px;
    margin-top: 13px;
  }
  width: 100px;
  z-index: 10;
  position: fixed;
  right: 0;
  background-color: white;
  padding-left: 20px;
`;

const EmailSubjectText = styled.span`
  @media (max-width: 488.98px) {
    overflow: hidden;
    width: 300px;
  }
  @media (max-width: 767.98px) {
    overflow: hidden;
    width: 330px;
  }
`;

const EmailBodyText = styled.span`
  @media (max-width: 488.98px) {
    overflow: hidden;
    width: 300px;
  }
  @media (max-width: 767.98px) {
    overflow: hidden;
    width: 330px;
  }
`;

const Tag = styled.div`
  font-size: 12px;
  background-color: #e8e8e8;
  padding:2px 3px;
  margin-right: 5px;
  border-radius: 4px;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

    

const stripHtml = str => {
    return str.replace(/<[^>]+>/g, '');
}



 
const EmailRow = ({email, id, starred, setStarred}) => {

const dateToFormat = date => {
    let formattedDate = date;
     return (
       <Moment format="MMM D" withTitle>
         {formattedDate}
       </Moment>
     );
 };

 const toggleStar = () => {
     const newStarred = [...starred];
     let checked = { ...newStarred[id - 1] };

     if (!checked.starred) {
        checked.starred = true;
     } else {
         checked.starred = false;
     }
     
     newStarred[id - 1] = checked;
     setStarred(newStarred);
 }

    return (
      <StyledEmailRow key={id}>
        <EmailActionCol>
          <input type="checkbox" />
          {starred[id - 1].starred === false ? (
            <AiOutlineStar className="react-icons" onClick={toggleStar} />
          ) : (
            <AiFillStar
              className="react-icons"
              onClick={toggleStar}
              style={{ color: "gold" }}
            />
          )}
        </EmailActionCol>
        <EmailSenderCol>
          <EmailSenderText>{email.sender}</EmailSenderText>
        </EmailSenderCol>
        <EmailSubjectBodyCol>
          <TagWrapper>{email.tags.map((t) => <Tag>{t}</Tag>)}</TagWrapper>
          <EmailSubjectText className="bold">
            {email.subject}
          </EmailSubjectText>{" "}
          <EmailBodyText>- {stripHtml(email.body)}</EmailBodyText>
        </EmailSubjectBodyCol>
        <EmailDateCol className="bold">{dateToFormat(email.date)}</EmailDateCol>
      </StyledEmailRow>
    );
}

export default EmailRow;