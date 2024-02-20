import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases",() => {
    it("testing the heading in the contact us component", ()=> {

        render(<Contact/>);
    
        const heading  = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    it("testing the button in the contact us component", ()=> {
    
        render(<Contact/>);
    
        const button  = screen.getByText("Submit");
        
        expect(button).toBeInTheDocument();
    });
    
    it("testing the name placeholder in the contact us component", ()=> {
    
        render(<Contact/>);
    
        const inputPlaceholder  = screen.getByPlaceholderText("name");
        
        expect(inputPlaceholder).toBeInTheDocument();
    });
    
    it("testing wheather there are 2 input boxes or not",()=>{
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).not.toBe(3);
    });

});

