import { fireEvent, render , screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from './mocks/mockResMenu.json';
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import ItemList from "../ItemList";

global.fetch=jest.fn(()=>
    Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA),
    })
);

test("should load restaurant menu component",async ()=>{
    await act(async ()=> render(<BrowserRouter><Provider store={appStore}><ItemList/><RestaurantMenu /></Provider></BrowserRouter>));

    const accordianHeader = screen.getByText("New Launches (9)")
    fireEvent.click(accordianHeader);
    const menuList = screen.getAllByTestId("foodItems");
    expect(menuList.length).toBe(20);
});