import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from './mocks/resListMock.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

test("should rendered the body component",async ()=>{
    await act(async ()=> render(
        <BrowserRouter>
        <RestaurantCard/>
    <Body/>
    </BrowserRouter> 
    ));
    
    const searchButton = screen.getByRole("button",{name:"Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target:{value: "pizza" }});
    fireEvent.click(searchButton);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(2);
});