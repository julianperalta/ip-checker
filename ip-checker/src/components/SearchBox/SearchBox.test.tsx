/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SearchBox from "./SearchBox";
import { EMPTY_IP, INVALID_IP } from "./constants";

const setup = () => {
    render(<SearchBox onSubmit={() => {}}/>);
    const input = screen.getByRole("input") as HTMLInputElement;
    const button = screen.getByRole("button") as HTMLButtonElement;

    return {
        input,
        button
    };
};

describe("Testing SearchBox", () => {
    test("Input con ip inválida", () => {
        const { input, button } = setup();
    
        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
    
        userEvent.type(input, "8.8.8.");
        userEvent.click(button);
    
        const errorMsg = screen.getByText(INVALID_IP);
        expect(errorMsg).toBeInTheDocument();
    });
    
    test("Input vacio", () => {
        const { input, button } = setup();
    
        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
    
        userEvent.click(button);
    
        const errorMsg = screen.getByText(EMPTY_IP);
        expect(errorMsg).toBeInTheDocument();
    });
    
    test("Input ok", () => {
        const { input } = setup();
    
        expect(input).toBeTruthy();
    
        userEvent.type(input, "8.8.8.8");
    
        const errorMsg = screen.queryByText(EMPTY_IP);
        expect(errorMsg).not.toBeInTheDocument();
    });
});
