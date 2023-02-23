// Однією з головних різниць JS та TS є сувора типізація останнього. Кожній новій змінній пострібно вказувати
// тип данної змінної
// let str: string = 'Hello'
// let num: number = 42
// let isActive: boolean = false
//
// let strArray: string[] = ['H', 'E', 'l']
// let numArray: Array<number> = [1, 2, 3]


// TS з функціями
// У функціях аргументам теж потрібно задавати тип змінної, а самій функції те, що вона буде повертати, viod - функція
// нічого не повертає.
// function logInfo(name: string, age: number): void {
//     console.log(`info: ${name}, ${age}`)
// }
// logInfo('alex', 25)
//
// function calc(a: number, b: number): number {
//     return a + b
// }
// console.log(calc(2, 5))
//
// function calc2(a: number, b: number | string): number {  // можуть бути випадки, коли параметри функції можуть мати
//     if( typeof b === 'string') b = +b                    // 2 або більше типів, тоді для виконання умови функції
//     return a + b                                         // потрібно робити перевирку, наприклад через if
// }
// console.log(calc2(2, '56'))


// Робота з классами
// Принцип дії такий самий, змінні мають тип.
// На змінні та методи додають модифікатори.
// class Server {
//     private status: string = 'working'  // буде доступно лише всередені класу сервер
//
//     constructor(public name: string, protected id: number) {  // задавши тип та модифікатор параметрам, TS автоматично
//                                                               // створить ці змінні всередині класу і ми відразу
//                                                               // будемо асайнити значення задані нижче на приватні поля
//     }
//
//     public turnOn() {
//         this.status = 'working'
//     }
//
//     protected turnOff() {             // protected робить доступним лише в дочірньому елементі
//         this.status = 'offline'
//     }
//
//     private getStatus(): string {
//         return this.status
//     }
// }
//
// const server: Server = new Server('ACT', 2841)   // явно вказанний тип змінної, типом буде клас Server


// Інтерфейси та об'єкти
// Створюються для вказання типу для об'єктів, а також спрощення у подальшому написання коду, адже інтерфейс буде
// підсказувати поля, які потрібно заповнювати.
// interface UserInterface {
//     name: string
//     age: number
//     logInfo: () => void
//     id?: any
// }
//
// const user: UserInterface = {
//     name:'Alex',
//     age: 25,
//     logInfo() {
//         console.log(this.name + '' + this.age)
//     }
// }


// Інтерфейси та класси
// Сенс у тому, щоб ми реалізували певні методи, які має інтерфейс
// interface SayHello {       // говорить, що потрібно імплементувати метод
//     sayHello: () => void
// }
// class User implements SayHello {      // імплементуємо метод з інтерфейсу
//     constructor(private name: string, private age: number) {
//     }
//
//     sayHello() {                          // обов'язково викликати цей метод, бо клас буде не валідним
//         console.log(this.name + 'Hello')
//     }
// }


// Дж енерік-типи
// const arr: Array<number> = [1, 2 ,3, 4]    // Array<number> і є дженерік-типом
//
// interface User {
//     id:number
//     name: string
//     age: number
// }
//
// const users: Array<User> = [           // через створений інтерфейс ми вказуємо дженерік-тип для масиву
//     {id: 1, name: 'alex', age: 25},    // цей і нижчий записи аналогічно працюють
//     {id: 2, name: 'ted', age: 26}
// ]
//
// const users2: User[] = [               // через створений інтерфейс ми вказуємо дженерік-тип для масиву
//     {id: 1, name: 'alex', age: 25},
//     {id: 2, name: 'ted', age: 26}
// ]
