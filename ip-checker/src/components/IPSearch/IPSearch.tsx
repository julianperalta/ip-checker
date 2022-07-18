import React, { useState, useEffect } from "react";
// QUERYS
import { useQuery } from "react-query";
import { fetchIpInfo } from "querys/fetchIpInfo";
// HOOKS
import { useFetchOwnIP } from "hooks/useFetchOwnIP";
// UITLS
import { debounce } from "lodash";
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
    const [address, setAddress] = useState<AddressInfo>({});
    const [ipToSearch, setIpToSearch] = useState("");
    const { ownIp } = useFetchOwnIP();
    const { data, status, isLoading, isFetching, refetch } = useQuery<AddressInfo>(["ipData", { ipAddress: ipToSearch || ownIp }], fetchIpInfo, {
        enabled: false,
    });

    useEffect(() => {
        if (ownIp !== undefined) {
            refetch();
        }
    }, [ownIp, refetch]);

    useEffect(() => {
        if (data !== undefined) {
            setAddress(data);
        }
    }, [data]);

    useEffect(() => {
        refetch();
    }, [ipToSearch, refetch]);

    console.log({ status, isLoading, isFetching });

    const handleSubmit = (submittedIp: string) => {
        setIpToSearch(submittedIp);
    };

    return (
        <>
            <UpperSectionContainer>
                <Title>
                    IP Address Tracker
                </Title>
                <SearchBox onSubmit={handleSubmit} />
                <IPInfo addressData={address} isLoading={isLoading}/>
            </UpperSectionContainer>
            <Map {...address.coordinates as any}/>
        </>
    )
}

export default IPSearch;