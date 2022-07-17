import React from "react";
import { GridThemeProvider } from "styled-bootstrap-grid";

const gridTheme = {
    breakpoints: {
        xl: 1350, // (min-width: 1350)
        lg: 1200, // (min-width: 1200)
        md: 768, // (min-width: 768)
        xs: 768, // (max-width: 767)
    },
};

interface GridProps {
    children: any;
};

const Grid = ({ children }: GridProps) => <GridThemeProvider gridTheme={gridTheme}>{children}</GridThemeProvider>;

export default Grid;