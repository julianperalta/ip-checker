import React, { useState, useEffect } from "react";
// QUERYS
import { useQuery } from "react-query";
import { fetchIpInfo } from "querys/fetchIpInfo";
// HOOKS
import { useFetchOwnIP } from "hooks/useFetchOwnIP";
// MODELS
import { AddressInfo } from "models/AddressInfo";
import { Coordinates } from "models/Coordinates";
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
    const { data, isLoading, refetch } = useQuery<AddressInfo>(["ipData", { ipAddress: ipToSearch || ownIp }], fetchIpInfo, {
        enabled: false,
        onError: (err) => {
            console.error(err);
        }
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
            <Map {...address.coordinates as Coordinates}/>
        </>
    )
}

export default IPSearch;