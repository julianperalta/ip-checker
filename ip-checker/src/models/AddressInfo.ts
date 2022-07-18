export interface AddressInfo {
    ipAddress?: string;
    location?: string;
    timezone?: string;
    isp?: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}
