import { IPerson } from "../../contracts"

export class Person implements IPerson {
    Name: string
    Age: number
    
    constructor(Name: string, Age: number) {
        this.Name = Name
        this.Age = Age
    }

    Introduce(): string {
        return `Hi! I'm ${this.Name} and I'm ${this.getYears()}`
    }

    private getYears(): string {
        return `${this.Age} ${this.Age > 1 ? `years old` : `year old`}`
    }
}