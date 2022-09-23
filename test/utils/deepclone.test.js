import { deepClone } from "@/utils/deepclone";

describe("deepclone function test",() => {
  it("test  array",() => {
    let arr = [11,22,33,44];
    expect(deepClone(arr)).toEqual(arr)
  })

  it("test multidimensional array",() => {
    let arr = [1,2,[3,4,[11,22,[12,13,[23,24,]]]]];
    expect(deepClone(arr)).toEqual([1,2,[3,4,[11,22,[12,13,[23,24,]]]]])
  })
})