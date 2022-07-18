import { AddressInfo } from "models/AddressInfo";

export const fetchIpInfo = async ({ queryKey }: any): Promise<AddressInfo> => {
    const [, { ipAddress }] = queryKey;
    const fetchConfig: RequestInit = {
        method: "GET",
        headers: new Headers({
            "Authorization": "Bearer WookieIP2022",
            "Content-Type": "application/json",
        })
    };

    const res = await fetch(`https://wookie.codesubmit.io/ipcheck?ip=${ipAddress}`, fetchConfig);

    if (!res.ok) {
        if (res.status === 422) {
            throw new Error("La IP ingresada no es válida");
        } else {
            throw new Error("Ocurrió un error inesperado");
        }
    }

    return res.json()
    .then((data) => {
        const { ip, isp, location } = data;

        const addressInfo: AddressInfo = {
            ipAddress: ip,
            location: `${location.city}, ${location.region}`,
            timezone: `UTC ${location.timezone}`,
            isp,
            coordinates: {
                lat: location.lat,
                lng: location.lng,
            }
        };

        return addressInfo;
    });
}