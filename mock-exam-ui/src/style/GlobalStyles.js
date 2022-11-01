import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
  }
  
  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    line-height: 1;
  }

  main, article, aside, figure, footer, header, nav, section, details, summary {
    display: block;
  }

  :focus {
    outline: 0;
  }

  img,
  object,
  embed {
    max-width: 100%;
    border: 0;
  }
  
  ul, ol {
    list-style: none;
  }

  a {
    margin: 0; 
    padding: 0; 
    font-size: 100%; 
    vertical-align: baseline; 
    background: transparent;
    color: inherit;
    text-decoration: inherit;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  a:focus {
    outline: none;
  }

  input, select {
    vertical-align: middle;
    border: none;
    outline: none;
  }

  select, input, textarea {
    font: 99% sans-serif;
  }

  button,
  input,
  select,
  textarea {
    font-size: 100%; /* 1 */
    margin: 0; /* 2 */
    vertical-align: baseline; /* 3 */
    *vertical-align: middle; /* 3 */
  }

  label,
  input[type=button],
  input[type=submit],
  input[type=file],
  button {
    cursor: pointer;
  }

  button,
  input[type=button] {
    width: auto; 
    overflow: visible;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
  }

  [hidden] {
    display: none;
  }
  
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: #FFF;
    border-left: 1px solid #F9F9F9;
    border-radius: 0 10px 10px 10px;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #3C3F41;
  }
`