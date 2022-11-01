import * as React from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./GlobalStyles";

const DarkTheme = ({ children }) => {

    const theme = {
        colors: {
            backgroundDark: "#3C3F41",
            backgroundLight: "#F7F8FA",
            fontPrimary: "#5F6568",
            fontLight: "#FDFDFD",

            deYork: "#86C69C", // category background selected
            edgeWater: "#BCDED0", // button hover
            seaPink: "#F0A09B", // exam statistic element text, graphic element
            jetStream: "#ACD2CC", // exam statistic element text, graphic element
            abbey: "#575C5F", // button hover
            osloGrey: "#8F9091", // section title
            frenchGray: "#CBCBCD", // input border
            contessa: "#C86671", // category input close btn, hover icon menu element
        },
        size: {

        }
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            { children }
        </ThemeProvider>
    )
}

export default DarkTheme