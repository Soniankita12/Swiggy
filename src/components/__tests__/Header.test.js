import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Heading from "../Heading";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load with a login button in the header component",()=>{
     
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Heading />
        </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});

test("should load with a cart item 0 in the header component",()=>{
     
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Heading />
        </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText("Cart - (0 items)");
    expect(cartItems).toBeInTheDocument();
});

test("should load with a cart item in the header component",()=>{
     
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Heading />
        </Provider>
        </BrowserRouter>
    )
    const cartIt = screen.getByText(/Cart/);
    expect(cartIt).toBeInTheDocument();
});

test("should change login button to logout in the header component",()=>{
     
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Heading />
        </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
});