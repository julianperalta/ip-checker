import React from "react";
// MODELS
import { AddressInfo } from "models/AddressInfo";
// COMPONENTS
import Loader from "components/Loader";
// STYLES
import { InfoContainer, InfoCard, SingleDataContainer, Label, Span } from "./IPInfo.css";

interface IPInfoProps {
    addressData: AddressInfo;
    isLoading: boolean;
};

const IPInfo: React.FC<IPInfoProps> = ({ addressData, isLoading }) => {
    return (
        <InfoContainer>
            <InfoCard noGrid={isLoading}>
                <Loader showLoader={isLoading}>
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
                </Loader>
            </InfoCard>
        </InfoContainer>
    );
};

export default IPInfo;
