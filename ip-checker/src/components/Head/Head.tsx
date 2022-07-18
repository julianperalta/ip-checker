import React, { useEffect, useRef } from "react";
// QUERYS
import { useQuery } from "react-query";
import { fetchIpInfo } from "querys/fetchIpInfo";
// HOOKS
import { useFetchOwnIP } from "hooks/useFetchOwnIP";
// COMPONENTS
import Search from "components/Search";
// STYLES
import { HeadContainer } from "./Head.css";
import { Title } from "./Head.css";
import IPInfo from "components/IPInfo";
import { AddressInfo } from "models/AddressInfo";

const Head = () => {
    let ipFalopa = useRef("");
    const { data, refetch } = useQuery<AddressInfo>(["ipData", { ipAddress: ipFalopa.current }], fetchIpInfo, {
        enabled: false,
    });
    const { ownIp } = useFetchOwnIP();

    useEffect(() => {
        if (ownIp !== undefined) {
            ipFalopa.current = ownIp;
            refetch();
        }
    }, [ownIp, refetch]);

    const address: AddressInfo = data ?? {};

    return (
        <HeadContainer>
            <Title>
                IP Address Tracker
            </Title>
            <Search />
            <IPInfo addressData={address} />
        </HeadContainer>
    )
}

export default Head;