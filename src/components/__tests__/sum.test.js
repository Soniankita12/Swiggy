import { sum } from "../sum";

test("sum test",()=>{
   const result =  sum(3,4);
   expect(result).toBe(7);
});