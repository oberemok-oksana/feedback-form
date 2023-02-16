import StyledFooter from "./styled/StyledFooter.styled";
import FooterGreenSmile from "./styled/FooterGreenSmile.styled";
import FooterRedSmile from "./styled/FooterRedSmile.styled";
import FooterYellowSmile from "./styled/FooterYellowSmile.styled";
import StyledList from "./styled/StyledList.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterRedSmile src="../public/images/red_cartoon3.svg" alt="red smile" />
      <FooterYellowSmile
        src="../public/images/red_cartoon.svg"
        alt="yellow smile"
      />
      <FooterGreenSmile src="../public/images/green.svg" alt="green smile" />
      <StyledList>
        <li>
          <a href="https://www.instagram.com/">
            <img src="/public/icons/instagram.svg" alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <img src="/public/icons/twitter.svg" alt="twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <img src="/public/icons/facebook.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/">
            <img src="/public/icons/pinterest.svg" alt="pinterest" />
          </a>
        </li>
      </StyledList>
    </StyledFooter>
  );
};

export default Footer;
