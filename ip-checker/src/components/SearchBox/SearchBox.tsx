import React from "react";
// COMPONENTS
import { ReactComponent as IconArrow } from "styles/images/icon-arrow.svg";
// STYLES
import { SearchContainer, SearchInput, SearchButton } from "./SearchBox.css";

interface SearchProps {
    onSubmit: any;
};

const SearchBox: React.FC<SearchProps> = ({ onSubmit }) => {

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        const ip = evt.target.elements.ip.value;
        onSubmit(ip);
    };

    return (
        <SearchContainer onSubmit={handleSubmit}>
            <SearchInput placeholder="Search for any IP address or domain" name="ip" />
            <SearchButton type="submit">
                <IconArrow />
            </SearchButton>
        </SearchContainer>
    );
};

export default SearchBox;
