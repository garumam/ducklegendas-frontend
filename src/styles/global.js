import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.paddingTop {
  padding-top: 6.38rem;
}

.flex-center {
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-self: center;
}

.show {
  opacity: 1 !important;
  transition: opacity 1s;
}

.hide {
  opacity: 0;
  transition: opacity 1s;
  pointer-events: none;
}

/* efeito abrindo e fechando do menu hamburger */
.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 5px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -5px);
}

:root {
  --mdc-theme-primary: #6759FF;
  --mdc-theme-secondary: #6759FF;
  --hmenu: 80px;
  --bgazul: linear-gradient(90deg, rgba(0, 212, 255, 1) 0%, rgba(0, 145, 255, 1) 100%);
  --bgazulreverse: linear-gradient(90deg, rgba(0, 145, 255, 1) 0%, rgba(0, 212, 255, 1) 100%);
  --textcolor: #313450;
  --corborda: rgba(82, 109, 249, 0.15);
  --marginbottom: 24px;
  --edit-button: #fbc02d;
  --delete-button: #d32f2f;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Montserrat', sans-serif;
}

html,
body,
#root {
  height: 100%;
  width: 100%;
}

body {
  min-height: 100%;
  overflow-x: hidden;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;
  background-color: #eff3f6;
  letter-spacing: .30px;
  -ms-overflow-style: scrollbar;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -ms-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-stroke: 1px transparent;
  -moz-text-stroke: 1px transparent;
  -ms-text-stroke: 1px transparent;
  -moz-text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  -ms-text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
  user-select: none;
}


.formulario {
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: var(--textcolor);
  overflow-y: auto;
}

.formulario label {
  padding-right: 1rem;
}

.formulario>input:last-child {
  margin: 0;
}

.formulario input,
textarea,
article input {
  width: 100%;
  margin-bottom: .7rem;
  box-shadow: none;
  -webkit-appearance: none;
  border: 1px solid var(--corborda);
  padding: .5rem 1rem;
  font-weight: 700;
  color: var(--textcolor);
  min-height: 45px;
  border-radius: 4px;
}

input[type=submit] {
  background: var(--bgazul);
  background-size: 200%;
  color: white;
  border: none;
}

input[type=submit]:hover {
  background: var(--bgazulreverse);
}

#overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

img {
  max-width: 100%;
  border-style: none;
  border: 0;
}

a,
a:hover {
  color: white;
  text-decoration: none;
}

a img {
  border: 0;
}

p {
  margin: 0;
}

.card-dashboard {
  background: white;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 5px;
}

.between {
  justify-content: space-between;
}

.shadow {
  -webkit-box-shadow: 20px 20px 50px -37px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 20px 20px 50px -37px rgba(0, 0, 0, 0.8);
  box-shadow: 20px 20px 50px -37px rgba(0, 0, 0, 0.8);
}


.card {
  width: 100%;
  background: #fff;
  border-radius: 4px;
  border: 0 !important;
  padding-bottom: 1rem;
  overflow: hidden;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.card-shadow {
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.header-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 60px;
}

.header-card h2 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  color: var(--textcolor);
}

.card-border {
  width: 100%;
  padding: 0;
  /* border-top: 1px solid rgba(82, 109, 249, 0.102); */
  border-top: 1px solid var(--corborda);
}

.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {
  border-bottom-color: var(--corborda);
}

.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover {
  border-bottom-color: var(--corborda);
}

.nopadding {
  padding: 0 !important;
}

`;
