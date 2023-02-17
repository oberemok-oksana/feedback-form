import Form from "./Form";
import SmallCloud from "./styled/SmallCloud.styled";
import BigCloudOne from "./styled/BigCloudOne.styled";
import BigCloudThree from "./styled/BigCloudThree.styled";
import BigCloudTwo from "./styled/BigCloudTwo.styled";
import BigRedSmile from "./styled/BigRedSmile.styled";
import StyledMain from "./styled/StyledMain.styled";
import StyledTitle from "./styled/StyledTitle.styled";
import YellowSmileOne from "./styled/YellowSmileOne.styled";
import YellowSmileTwo from "./styled/YellowSmileTwo.styled";

const Main = () => {
  return (
    <StyledMain>
      <YellowSmileOne src="../images/red_cartoon.svg" alt="yellow smile" />
      <YellowSmileTwo src="../images/goodie1.svg" alt="yellow smile" />
      <BigCloudOne src="../images/cloud-big.svg" alt="cloud" />
      <BigCloudTwo src="../images/cloud-big.svg" alt="cloud" />
      <BigCloudThree src="../images/cloud-big.svg" alt="cloud" />
      <SmallCloud src="../images/cloud-small.svg" alt="cloud" />
      <BigRedSmile>
        <img src="../images/red_cartoon3.svg" alt="red smile" />
      </BigRedSmile>

      <StyledTitle>Reach out to us</StyledTitle>
      <Form />
    </StyledMain>
  );
};

export default Main;
