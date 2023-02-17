import StyledFooter from "./styled/StyledFooter.styled";
import FooterGreenSmile from "./styled/FooterGreenSmile.styled";
import FooterRedSmile from "./styled/FooterRedSmile.styled";
import FooterYellowSmile from "./styled/FooterYellowSmile.styled";
import StyledList from "./styled/StyledList.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterRedSmile>
        <img src="../images/red_cartoon3.svg" alt="red smile" />
      </FooterRedSmile>

      <FooterYellowSmile src="../images/red_cartoon.svg" alt="yellow smile" />
      <FooterGreenSmile src="../images/green.svg" alt="green smile" />
      <StyledList>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="/icons/instagram.svg" alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            <img src="/icons/twitter.svg" alt="twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="/icons/facebook.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/" target="_blank">
            <img src="/icons/pinterest.svg" alt="pinterest" />
          </a>
        </li>
      </StyledList>
    </StyledFooter>
  );
};

export default Footer;
