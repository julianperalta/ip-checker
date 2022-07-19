import { Coordinates } from "./Coordinates";

export interface AddressInfo {
    ipAddress?: string;
    location?: string;
    timezone?: string;
    isp?: string;
    coordinates?: Coordinates;
}
