import {createGlobalStyle} from "styled-components";
import sfRegularWoff from '../fonts/sf/SF-Pro-Display-Regular.woff'
import sfRegularBasic from '../fonts/sf/SF-Pro-Display-Regular.ttf'
import sfBoldWoff from '../fonts/sf/SF-Pro-Display-Bold.woff'
import sfBoldBasic from '../fonts/sf/SF-Pro-Display-Bold.ttf'
import lato from '../fonts/Lato/Lato-Regular.ttf'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "sf-regular";
    src: url(${sfRegularWoff}) format('woff'),
    url(${sfRegularBasic}) format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: "sf-bold";
    src: url(${sfBoldWoff}) format('woff'),
    url(${sfBoldBasic}) format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: "lato";
    src: url(${lato}) format('truetype');
    font-weight: normal;
  }

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

  html, body {
    min-height: 100%;
    height: 100%;
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
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
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

  button {
    border: none;
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
    background: #3C3F41;
    border-radius: 0 0 10px 10px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #72797D;
    border-radius: 20px;
  }

  pre {
    padding: 20px;
    background-color: #D6D6D6;
    color: #5F6568;
    border-radius: 3px;
    margin: 10px 0;
    width: fit-content;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  }

  p {
    line-height: 20px;
  }

  p a {
    color: #C86671 !important;
    :hover {
      color: #A7525C !important;
    }
  }

  //quill style
  .ql-editor {
    color: #5F6568;
    font-size: 16px;
  }

  .ql-snow a {
    color: #C86671;
  }

  .ql-snow .ql-editor pre.ql-syntax {
    padding: 20px;
    background-color: #D6D6D6;
    font-family: Consolas sans-serif;
    color: #55585b;
    border-radius: 3px;
    margin: 10px 0;
    width: fit-content;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  }

  .ql-snow.ql-toolbar button:hover .ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: ${({theme}) => theme.colors.backgroundSelected};
  }

  .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke,
  .ql-snow.ql-toolbar button:focus .ql-stroke,
  .ql-snow .ql-toolbar button:focus .ql-stroke,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: ${({theme}) => theme.colors.backgroundSelected};
  }

  .ql-snow .ql-stroke {
    stroke: ${({theme}) => theme.colors.fontPrimary};
  }
`

export default GlobalStyles