import { Person } from "./Person"
import { IPerson } from "../../contracts"

describe("Person", () => {
    it("Person is a function", () => {
        expect(typeof Person).toEqual("function")
    })
    
    it("Person creates an instance successfully", () => {
        const name: string = "Test person"
        const age: number = 19
        let instance: IPerson = new Person(name, age)
        expect(instance).toBeInstanceOf(Person)
        expect(instance.Name).toEqual(name)
        expect(instance.Age).toEqual(age)
    })

    it("Person.Introduce returns correct string", () => {        
        const name: string = "Test person"
        const age: number = 19
        let instance: IPerson = new Person(name, age)
        expect(instance.Introduce()).toEqual(`Hi! I'm ${name} and I'm ${age} years old`)
    })

    it("Person.Introduce returns correct string for 1 year old", () => {        
        const name: string = "Test person"
        const age: number = 1
        let instance: IPerson = new Person(name, age)
        expect(instance.Introduce()).toEqual(`Hi! I'm ${name} and I'm ${age} year old`)
    })
});