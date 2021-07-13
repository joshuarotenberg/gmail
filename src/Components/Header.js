import styled from 'styled-components'
import { IoMdMenu } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";

const StyledHeader = styled.section`
    display:flex;
    flex-direction: row;
    height: 48px;
    padding:8px;
    border-bottom: 1px solid #e8e8e8;
`;

const LogoWrapper = styled.div`
    min-width: 238px;
    display:flex;
    flex-direction: row;
    align-items: center; 
`;

const Burger = styled.div`

`;

const Logo = styled.img`
    margin: 0 0 4px;
    height: 40px;
    width: 109px;
`;

const SearchWrapper = styled.div`
    max-width: 100%;
    flex: 1 1 auto;
`;

const StyledSearchBar = styled.div`
    background: #f1f3f4;
    border: 1px solid transparent;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    margin-right: auto;
    max-width: 720px;
    position: relative;
    height:46px;
    -webkit-transition: background 100ms ease-in,width 100ms ease-out;
    transition: background 100ms ease-in,width 100ms ease-out;
`;

const RightLogoWrapper = styled.div`
    max-width: 100%;
    flex: 1 1 auto;
    justify-content: flex-end;
    display: flex;
`;

const Header = () => {
    return (
        <StyledHeader>
            <LogoWrapper>
                <Burger>
                    <IoMdMenu className="react-icons" />
                </Burger>
                <Logo  src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""></Logo>
            </LogoWrapper>
            <SearchWrapper>
                <StyledSearchBar></StyledSearchBar>
            </SearchWrapper>
            <RightLogoWrapper>
                <FiHelpCircle className="react-icons"/>
                <BsGear className="react-icons"/>
                <CgMenuGridO className="react-icons"/>
            </RightLogoWrapper>
        </StyledHeader>
    )
}

export default Header;