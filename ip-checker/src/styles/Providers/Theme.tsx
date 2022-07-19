import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    white: "#FFFFFF",
    darkGray: "#969696",
    veryDarkGray: "#2B2B2B",
    veryDarkGrayHover: "#4B4B4B",
    fontFamily: '"Rubik", sans-serif'
};

interface ThemeProps {
    children: React.ReactElement | React.ReactElement[];
};

const Theme: React.FC<ThemeProps> = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;