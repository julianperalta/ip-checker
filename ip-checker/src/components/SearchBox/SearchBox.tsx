import React, { useState } from "react";
// COMPONENTS
import { ReactComponent as IconArrow } from "styles/images/icon-arrow.svg";
// CONSTANTS
import { IP_REGEX } from "./constants";
// STYLES
import { SearchBoxContainer, SearchInput, SearchButton, SearchContainer, InputError } from "./SearchBox.css";

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
            setErrorMsg("Por favor ingrese una IP");
        } else if (!ip.match(IP_REGEX)) {
            setErrorMsg("La IP ingresada es inválida");
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
                <SearchInput placeholder="Search for any IP address or domain" id="ip" name="ip" value={searchedIp} onChange={handleChange}/>
                <SearchButton type="submit">
                    <IconArrow />
                </SearchButton>
            </SearchBoxContainer>
            {errorMsg !== "" &&
                <InputError>
                    {errorMsg}
                </InputError>
            }
        </SearchContainer>
    );
};

export default SearchBox;
