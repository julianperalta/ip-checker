import React, { useState } from "react";
// COMPONENTS
import { ReactComponent as IconArrow } from "styles/images/icon-arrow.svg";
// CONSTANTS
import { IP_REGEX, EMPTY_IP, INVALID_IP } from "./constants";
// STYLES
import { SearchBoxForm, SearchInput, SearchButton, SearchContainer, InputError, ErrorContainer } from "./SearchBox.css";

interface SearchProps {
    onSubmit: (submittedIp: string) => void;
};

const SearchBox: React.FC<SearchProps> = ({ onSubmit }) => {
    const [searchedIp, setSearchedIp] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.persist();
        evt.preventDefault();
        const ip: string = (evt.currentTarget.elements[0] as HTMLInputElement).value;

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
            <SearchBoxForm onSubmit={handleSubmit}>
                <SearchInput placeholder="Search for any IP address or domain" id="ip" name="ip" value={searchedIp} onChange={handleChange} role="input"/>
                <SearchButton type="submit" role="button">
                    <IconArrow />
                </SearchButton>
            </SearchBoxForm>
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
