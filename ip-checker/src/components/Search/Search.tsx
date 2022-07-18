import React, { useState, useEffect } from "react";
// QUERYS
import { fetchIpInfo } from "querys/fetchIpInfo";
import { useQuery } from "react-query";
// MODELS
import { AddressInfo } from "models/AddressInfo";
// COMPONENTS
import { ReactComponent as IconArrow } from "styles/images/icon-arrow.svg";
// STYLES
import { SearchContainer, SearchInput, SearchButton } from "./Search.css";

const Search = () => {
    const [searchedIp, setSearchedIp] = useState<string>("");
    const { data, refetch } = useQuery<AddressInfo>(["searchedIp", { ipAddress: searchedIp }], fetchIpInfo, {
        enabled: false,
    });

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchedIp(evt.target.value);
    }

    const handleClick = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        refetch();
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <SearchContainer onSubmit={handleClick}>
            <SearchInput placeholder="Search for any IP address or domain" onChange={handleChange} value={searchedIp} name="ip" />
            <SearchButton type="submit">
                <IconArrow />
            </SearchButton>
        </SearchContainer>
    );
};

export default Search;
