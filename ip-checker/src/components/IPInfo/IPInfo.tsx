import React, { useEffect } from "react";
// MODELS
import { AddressInfo } from "models/AddressInfo";
// STYLES
import { InfoContainer, SingleDataContainer, Label, Span } from "./IPInfo.css";

interface IPInfoProps {
    addressData: AddressInfo;
};

const IPInfo: React.FC<IPInfoProps> = ({ addressData }) => {
    const renderData = Object.keys(addressData).map((key) => (
        <SingleDataContainer key={key}>
            <Label>{key}</Label>
            <Span>{addressData[key as keyof AddressInfo]}</Span>
        </SingleDataContainer>
    ));

    return (
        <InfoContainer>
            {renderData}
        </InfoContainer>
    );
};

export default IPInfo;
