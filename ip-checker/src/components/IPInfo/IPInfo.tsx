import React, { useEffect } from "react";

// STYLES
import { InfoContainer, SingleDataContainer, Label, Span } from "./IPInfo.css";

interface Address {
    ipAddress: string;
    location: string;
    timezone: string;
    isp: string;
}

interface IPInfoProps {
    addressData: Address;
};

const IPInfo: React.FC<IPInfoProps> = ({ addressData }) => {
    const renderData = Object.keys(addressData).map((key) => (
        <SingleDataContainer key={key}>
            <Label>{key}</Label>
            <Span>{addressData[key as keyof Address]}</Span>
        </SingleDataContainer>
    ));

    return (
        <InfoContainer>
            {renderData}
        </InfoContainer>
    );
};

export default IPInfo;
