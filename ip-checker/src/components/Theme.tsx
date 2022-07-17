import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    white: "#FFFFFF",
    darkGray: "#969696",
    veryDarkGray: "#2B2B2B",
    fontFamily: '"Rubik", sans-serif'
};

interface ThemeProps {
    children: any;
};

const Theme = ({ children }: ThemeProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;