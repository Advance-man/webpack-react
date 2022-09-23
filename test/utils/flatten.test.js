// import { flatten } from "../../src/utils/flatten.js";

import { flatten } from "@/utils/flatten.js";

// test("flatten function test",()=>{

// })
describe("flatten function test",() => {
  it("test one-dimensional array",() => {
    let arr = [11,22,33,44];
    expect(flatten(arr)).toEqual(arr)
  })

  it("test multidimensional array",() => {
    let arr = [1,2,[3,4,[11,22,[12,13,[23,24,]]]]];
    expect(flatten(arr)).toEqual([1,2,3,4,11,22,12,13,23,24])
  })

  it("test Object",() => {
    let arr = {a:1,b:2};
    expect(flatten(arr)).toBeFalsy()
  })
})
