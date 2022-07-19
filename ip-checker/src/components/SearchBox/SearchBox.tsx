import React, { useState } from "react";
// COMPONENTS
import { ReactComponent as IconArrow } from "styles/images/icon-arrow.svg";
// CONSTANTS
import { IP_REGEX, EMPTY_IP, INVALID_IP } from "./constants";
// STYLES
import { SearchBoxContainer, SearchInput, SearchButton, SearchContainer, InputError, ErrorContainer } from "./SearchBox.css";

interface SearchProps {
    onSubmit: any;
};

const SearchBox: React.FC<SearchProps> = ({ onSubmit }) => {
    const [searchedIp, setSearchedIp] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        const ip: string = evt.target.elements.ip.value;

        if (ip === "") {
            setErrorMsg(EMPTY_IP);
        } else if (!ip.match(IP_REGEX)) {
            setErrorMsg(INVALID_IP);
        } else {
            onSubmit(ip);
        }
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedIp(evt.target.value);

        if (errorMsg !== "''") {
            setErrorMsg("");
        }
    };

    return (
        <SearchContainer>
            <SearchBoxContainer onSubmit={handleSubmit}>
                <SearchInput placeholder="Search for any IP address or domain" id="ip" name="ip" value={searchedIp} onChange={handleChange} role="input"/>
                <SearchButton type="submit" role="button">
                    <IconArrow />
                </SearchButton>
            </SearchBoxContainer>
            <ErrorContainer>
                {errorMsg !== "" &&
                    <InputError>
                        {errorMsg}
                    </InputError>
                }
            </ErrorContainer>
        </SearchContainer>
    );
};

export default SearchBox;
