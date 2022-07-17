import React from "react";
// COMPONENTS
import { ReactComponent as IconArrow } from "styles/images/icon-arrow.svg";
// STYLES
import { SearchContainer, SearchInput, SearchButton } from "./Search.css";

const Search = () => {
    const placeholder = "Search for any IP address or domain";

    return (
        <SearchContainer>
            <SearchInput placeholder={placeholder} />
            <SearchButton>
                <IconArrow />
            </SearchButton>
        </SearchContainer>
    );
};

export default Search;
