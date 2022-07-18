import React, { useEffect, useRef } from "react";
// QUERYS
import { useQuery } from "react-query";
import { fetchIpInfo } from "querys/fetchIpInfo";
// HOOKS
import { useFetchOwnIP } from "hooks/useFetchOwnIP";
// MODELS
import { AddressInfo } from "models/AddressInfo";
// COMPONENTS
import SearchBox from "components/SearchBox";
import IPInfo from "components/IPInfo";
import Map from "components/Map";
// STYLES
import { UpperSectionContainer } from "./IPSearch.css";
import { Title } from "./IPSearch.css";

const IPSearch = () => {
    let ipToSearch = useRef("");
    const { data, refetch } = useQuery<AddressInfo>(["ipData", { ipAddress: ipToSearch.current }], fetchIpInfo, {
        enabled: false,
    });
    const { ownIp } = useFetchOwnIP();

    useEffect(() => {
        if (ownIp !== undefined) {
            ipToSearch.current = ownIp;
        }
    }, [ownIp]);

    useEffect(() => {
        if (ipToSearch.current !== "") {
            refetch();
        }
    }, [ipToSearch, refetch])

    const address: AddressInfo = data ?? {};

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        ipToSearch.current = evt.target.value;
    };

    return (
        <>
            <UpperSectionContainer>
                <Title>
                    IP Address Tracker
                </Title>
                <SearchBox onSubmit={refetch} handleChange={handleChange} />
                <IPInfo addressData={address} />
            </UpperSectionContainer>
            <Map {...address.coordinates as any}/>
        </>
    )
}

export default IPSearch;