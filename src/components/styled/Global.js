import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Apercu Arabic Pro";
  src: url("../public/fonts/ApercuArabicPro-Regular.eot");
  src: local("Apercu Arabic Pro Regular"), local("ApercuArabicPro-Regular"),
    url("../public/fonts/ApercuArabicPro-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/ApercuArabicPro-Regular.woff2") format("woff2"),
    url("../public/fonts/ApercuArabicPro-Regular.woff") format("woff"),
    url("../public/fonts/ApercuArabicPro-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Apercu Arabic Pro";
  src: url("../public/fonts/ApercuArabicPro-Medium.eot");
  src: local("Apercu Arabic Pro Medium"), local("ApercuArabicPro-Medium"),
    url("../public/fonts/ApercuArabicPro-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/ApercuArabicPro-Medium.woff2") format("woff2"),
    url("../public/fonts/ApercuArabicPro-Medium.woff") format("woff"),
    url("../public/fonts/ApercuArabicPro-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Apercu Arabic Pro";
  src: url("../public/fonts/ApercuArabicPro-Light.eot");
  src: local("Apercu Arabic Pro Light"), local("ApercuArabicPro-Light"),
    url("../public/fonts/ApercuArabicPro-Light.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/ApercuArabicPro-Light.woff2") format("woff2"),
    url("../public/fonts/ApercuArabicPro-Light.woff") format("woff"),
    url("../public/fonts/ApercuArabicPro-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Apercu Arabic Pro";
  src: url("../public/fonts/ApercuArabicPro-Bold.eot");
  src: local("Apercu Arabic Pro Bold"), local("ApercuArabicPro-Bold"),
    url("../public/fonts/ApercuArabicPro-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("../public/fonts/ApercuArabicPro-Bold.woff2") format("woff2"),
    url("../public/fonts/ApercuArabicPro-Bold.woff") format("woff"),
    url("../public/fonts/ApercuArabicPro-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}


body {
  margin: 0;
  box-sizing: border-box;

}

body::before {
  content: "";
  position: absolute;
  width: 87px;
  height: 87px;
  left: 47%;
  top: 5%;
  background: #fad34f;
  opacity: 0.1;
  border-radius: 50%;

img{
    width: 100%;
    object-fit: fill;
  }
}`;

export default GlobalStyles;
