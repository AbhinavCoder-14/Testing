import {describe,expect, it} from "@jest/globals"

import {sum,multiply} from "../index.js"

describe("Testing sum Fucntion",()=>{
    it("should sum 1 and 2 correcrtly",()=>{
        const finalAnswer = sum(1,3)
        expect(finalAnswer).toBe(4)
    })
    it("should reutrn the sum of negative number correctly",()=>{
        const finalAnswer = sum(-1,-2)
        expect(finalAnswer).toBe(-3)
    })
})


describe("Testing multiply function",()=>{
    it("should multiply 1 and 2 correcly",()=>{
        const finalAnswer = multiply(5,4)
        expect(finalAnswer).toBe(20)
    })
})