import { render, screen } from '@testing-library/react';
import IPInfo from "./IPInfo";
import { AddressInfo } from 'models/AddressInfo';

const setup = (props: any) => {
    render(<IPInfo {...props} />);
};

const mockAddress: AddressInfo = {
    ipAddress: "8.8.8.8",
    location: "San Justo, Buenos Aires",
    timezone: "UTC -03:00",
    isp: "Telecentro S.A.",
    coordinates: {
        lat: -34.6936131,
        lng: -58.5429559
    }
};

describe("Testing IPInfo", () => {

    test("Componente fetcheando data", () => {
        setup({ addressData: {}, isLoading: true });

        const ipAddress = screen.queryByText("IP Address");
        const location = screen.queryByText("Location");
        const timezone = screen.queryByText("Timezone");
        const isp = screen.queryByText("ISP");

        expect(ipAddress).not.toBeInTheDocument();
        expect(location).not.toBeInTheDocument();
        expect(timezone).not.toBeInTheDocument();
        expect(isp).not.toBeInTheDocument();
    });

    test("Componente con data", () => {
        setup({ addressData: mockAddress, isLoading: false });

        const ipAddress = screen.queryByText("IP Address");
        const location = screen.queryByText("Location");
        const timezone = screen.queryByText("Timezone");
        const isp = screen.queryByText("ISP");

        expect(ipAddress).toBeInTheDocument();
        expect(location).toBeInTheDocument();
        expect(timezone).toBeInTheDocument();
        expect(isp).toBeInTheDocument();
    });
});
