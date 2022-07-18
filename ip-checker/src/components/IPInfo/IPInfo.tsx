import React from "react";
// MODELS
import { AddressInfo } from "models/AddressInfo";
// STYLES
import { InfoContainer, InfoCard, SingleDataContainer, Label, Span } from "./IPInfo.css";

interface IPInfoProps {
    addressData: AddressInfo;
};

const IPInfo: React.FC<IPInfoProps> = ({ addressData }) => {
    return (
        <InfoContainer>
            <InfoCard>
                <SingleDataContainer>
                    <Label>IP Address</Label>
                    <Span>{addressData.ipAddress}</Span>
                </SingleDataContainer>
                <SingleDataContainer>
                    <Label>Location</Label>
                    <Span>{addressData.location}</Span>
                </SingleDataContainer>
                <SingleDataContainer>
                    <Label>Timezone</Label>
                    <Span>{addressData.timezone}</Span>
                </SingleDataContainer>
                <SingleDataContainer>
                    <Label>ISP</Label>
                    <Span>{addressData.isp}</Span>
                </SingleDataContainer>
            </InfoCard>
        </InfoContainer>
    );
};

export default IPInfo;
