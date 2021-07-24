// создать класс юзера с полями name, age, city, status
// и методами:
//     getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
// status boolean
//
class User {
    private name: string
    private age: number
    private city: string
    private status: boolean

    constructor(name: string, age: number, city: string, status: boolean) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.status = status;
    }

    getName(): string {
        console.log('name - ', this.name)
        return this.name
    }

    getAge(): number {
        console.log('age - ', this.age)
        return this.age
    }

    getCity(): string {
        console.log('city - ', this.city)
        return this.city
    }

    getStatus(): boolean {
        console.log('status - ', this.status)
        return this.status
    }

    setName(name: string) {
        if (name.length < 3 || name.length > 25) {
            console.warn(`u want set name "${name}", but your name too small, or too big | (max length = 25, min length = 3, your length = ${name.length})`)
            return
        }
        this.name = name
    }

    setAge(age: number) {
        if (age < 14 || age > 99) {
            console.warn(`u want set age "${age}",but your age too small, or too big | (min age = 14, max age = 99, your age = ${age})`)
            return
        }
        this.age = age
    }

    setCity(city: string) {
        if (city.length < 3 || city.length > 25) {
            console.warn(`u want set city "${city}",but your city haw too small, or too big length | (max length = 25, min length = 3, your length = ${city.length})`)
            return
        }
        this.city = city
    }

    setStatus(status: boolean) {
        if (this.status === status) {
            console.warn(`u want set status  "${status}", but status now = ${this.status}`)
            return
        }
        this.status = status
    }
}

const anton = new User("Anton", 15, 'Lviv', true)

console.group('test class User')

console.group('Anton')
anton.getAge()
anton.getCity()
anton.getName()
anton.getStatus()
console.groupEnd()

console.group('warn')
anton.setAge(13)
anton.setName("A")
anton.setCity("L")
anton.setStatus(true)
console.groupEnd()

anton.setAge(16)
anton.setName("Antonio")
anton.setCity("NewLviv")
anton.setStatus(false)

console.group('new Anton')
anton.getAge()
anton.getCity()
anton.getName()
anton.getStatus()
console.groupEnd()

console.groupEnd()

// 1) написать интерфейс Animal который описывает:
//     тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal


interface IAnimal {
    type: string
    whatSay: string

    function(): string
}

const Cat = {
    name: 'cat', type: 'go', whatSay: 'miu-miu-miu', function(): string {
        console.log(`I am ${this.name} i can ${this.type} and can say '${this.whatSay}'`)
        return `I am ${this.name} i can ${this.type} and can say '${this.whatSay}'`
    }
}
const Bird = {
    name: 'bird', type: 'fly', whatSay: 'pi-pi-pi or ultrasound', function(): string {
        console.log(`I am ${this.name} i can ${this.type} and can say '${this.whatSay}'`)
        return `I am ${this.name} i can ${this.type} and can say '${this.whatSay}'`
    }
}
const Fish = {
    name: 'fish', type: 'swim', whatSay: 'nothing', function(): string {
        console.log(`I am ${this.name} i can ${this.type} and can say '${this.whatSay}'`)
        return `I am ${this.name} i can ${this.type} and can say '${this.whatSay}'`
    }
}

const Animals: IAnimal[] = [Cat, Bird, Fish]

console.log(Animals)
Animals[0].function()
Animals[1].function()
Animals[2].function()
