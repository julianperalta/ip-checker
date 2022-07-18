import React from "react";
// STYLES
import { LoaderContainer, EmbeddedLoader } from "./Loader.css";

interface LoaderProps {
    children: any;
    showLoader: boolean;
}

const Loader: React.FC<LoaderProps> = ({ children, showLoader }) => (
    showLoader ? 
        <LoaderContainer>
            <EmbeddedLoader />
        </LoaderContainer>
        :
        <>{children}</>
);

export default Loader;
