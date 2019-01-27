import { injectGlobal } from "styled-components";
import reset from "styled-reset";
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500');
  ${reset};
  body{
    font-family: 'Maven Pro', sans-serif;
    background-color: #ecf0f1;
    background: #eee url(https://subtlepatterns.com/patterns/extra_clean_paper.png);
  }
  a{
      color:inherit;
  }
  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }

  lds-roller {
    position: fixed;
    left: 50%;
    margin-left: -5%; /* half of width */
    top: 50%;
    overflow: auto;
    width: 64px;
    height: 64px;
  }
  lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 32px 32px;
  }
  lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #000;
    margin: -3px 0 0 -3px;
  }
  lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  lds-roller div:nth-child(1):after {
    top: 50px;
    left: 50px;
  }
  lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  lds-roller div:nth-child(2):after {
    top: 54px;
    left: 45px;
  }
  lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  lds-roller div:nth-child(3):after {
    top: 57px;
    left: 39px;
  }
  lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  lds-roller div:nth-child(4):after {
    top: 58px;
    left: 32px;
  }
  lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  lds-roller div:nth-child(5):after {
    top: 57px;
    left: 25px;
  }
  lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  lds-roller div:nth-child(6):after {
    top: 54px;
    left: 19px;
  }
  lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  lds-roller div:nth-child(7):after {
    top: 50px;
    left: 14px;
  }
  lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  lds-roller div:nth-child(8):after {
    top: 45px;
    left: 10px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;