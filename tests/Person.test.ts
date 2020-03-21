import { Person } from "../modules"

describe("Person", () => {
    it("Person is a function", () => {
        expect(typeof Person).toEqual("function")
    })
    
    it("Person creates an instance successfully", () => {
        const name: string = "Test person"
        const age: number = 19
        let instance: Person = new Person(name, age)
        expect(instance).toBeInstanceOf(Person)
        expect(instance.name).toEqual(name)
        expect(instance.age).toEqual(age)
    })
});