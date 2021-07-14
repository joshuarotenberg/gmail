import styled from 'styled-components'
import { BiTag } from "react-icons/bi";
import { GoInbox } from "react-icons/go";

const StyledSidebar = styled.section`
    display:flex;
    flex-direction: column;
    width:256px;
    height:100%;

`;

const ComposeButton = styled.button`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
    background-color:white;
    height:48px;
    width:150px;
    border-radius: 24px;
    color: #3c4043;
    padding-left:8px;
    margin: 15px;
    border: 1px solid #e8e8e8;
        font-family: 'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
    font-size: .875rem;
    letter-spacing: .25px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    &:hover {
        box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
        background-color: #fafafb;
    }
`;

const TagWrapper = styled.div`
    display:flex;
    flex-direction: column;
    padding-left:0px;
`;

const TagRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const TagIconName = styled.div`
 
`;

const TagItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  width:100px;
  margin-bottom: 20px;
`;

const TagText = styled.span`
    width:80px;
`;


const Sidebar = ({data, tags}) => {
    console.log(data);
    return (
      <StyledSidebar>
        <ComposeButton>
          <img
            src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            alt=""
          />
          Compose
        </ComposeButton>
        <TagWrapper>
          <TagRow>
            <TagItem>
              <TagText>Inbox</TagText>
              <GoInbox size="24" color="grey"></GoInbox>
            </TagItem>
            {tags.map((t) => (
              <TagItem>
                <TagText>{t}</TagText>
                <BiTag size="24" color="grey"></BiTag>
              </TagItem>
            ))}
          </TagRow>
        </TagWrapper>
      </StyledSidebar>
    );
}

export default Sidebar;