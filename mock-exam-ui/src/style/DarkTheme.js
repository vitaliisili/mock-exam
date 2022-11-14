import * as React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./GlobalStyles";

const DarkTheme = ({ children }) => {

    const theme = {
        colors: {
            backgroundDark: "#3C3F41",
            backgroundLight: "#F7F8FA",
            backgroundGrey: "#5F6568",
            backgroundGreenThin: "#F1FCEF5E",
            backgroundPinkThin: "#F6E2DF87",
            backgroundSelected: "#86C69C",
            backgroundDarkThin: "#575C5F",
            backgroundLightThin: "#F0F1F3",

            fontPrimary: "#5F6568",
            fontLight: "#FDFDFD",
            fontLabel: "#ADADAD",
            statisticText: "#F0A09B",
            iconHover: "#C86671",
            textHover: "#BCDED0",
            success: "#ACD2CC",
            skippet: "#777E82",
            inputBorder: "#CBCBCD",

        },
        fonts: {
            sfRegular: "'sf-regular', sans-serif",
            sfBold: "'sf-bold', sans-serif",
            lato: "'lato', sans-serif",
        },
        size: {
            navbarHeight: "60px",
            sidebarWidth: "200px",

            borderRadiusThin: "3px",
            borderRadiusNormal: "5px",
            borderRadiusStrong: "15px",
            borderRadiusRound: "50px",

            fontLabelSize: "14px",
            fontPrimarySize: "16px",
            fontMediumSize: '18px',
            fontMenuSize: "20px",
            fontSizeExtra: "25px",

            lineLength: "100ch",

            h1: "34px",
            iconLarge: "25px",
            iconMedium: "22px",
            defaultPadding: "20px",
        },
        decoration: {
            boxShadowThin: "0 0 11px -6px rgba(60, 63, 65, 0.62)",
            boxShadowDark: "rgba(99, 99, 99, 0.2) 0 2px 8px 0",
            boxShadowCategory: "rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px",
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