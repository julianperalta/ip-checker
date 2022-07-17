import React, { useEffect } from "react";
// QUERYS
import { useQuery } from "react-query";
import { fetchOwnIp } from "querys/fetchOwnIp";
// COMPONENTS
import Search from "components/Search";
// STYLES
import { HeadContainer } from "./Head.css";
import { Title } from "./Head.css";
import IPInfo from "components/IPInfo";
import { fetchIpInfo } from "querys/fetchIpInfo";

interface Address {
    ipAddress: string;
    location: string;
    timezone: string;
    isp: string;
}

const Head = () => {
    const { data: ownIpData } = useQuery("ownIp", fetchOwnIp);
    const ownIp = ownIpData?.ip;
    const { data, status } = useQuery(["ipData", { ipAddress: ownIp }], fetchIpInfo, {
        enabled: !!ownIp,
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    const address = {
        ipAddress: "string",
        location: "string",
        timezone: "string",
        isp: "strin"
    };

    return (
        <HeadContainer>
            <Title>
                IP Address Tracker
            </Title>
            <Search />
            <IPInfo addressData={address as any} />
        </HeadContainer>
    )
}

export default Head;