import React from "react";
// COMPONENTS
import { ReactComponent as IconArrow } from "styles/images/icon-arrow.svg";
// STYLES
import { SearchContainer, SearchInput, SearchButton } from "./SearchBox.css";

interface SearchProps {
    onSubmit: any;
    handleChange: any;
};

const SearchBox: React.FC<SearchProps> = ({ onSubmit, handleChange }) => {
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onSubmit();
    };

    return (
        <SearchContainer onSubmit={handleSubmit}>
            <SearchInput placeholder="Search for any IP address or domain" onChange={handleChange} name="ip" />
            <SearchButton type="submit">
                <IconArrow />
            </SearchButton>
        </SearchContainer>
    );
};

export default SearchBox;
