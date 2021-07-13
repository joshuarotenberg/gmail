import styled from 'styled-components'

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



const Sidebar = () => {
    return (
        <StyledSidebar>
            <ComposeButton>
                <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt="" />
                Compose
            </ComposeButton>
        </StyledSidebar>
    )
}

export default Sidebar;