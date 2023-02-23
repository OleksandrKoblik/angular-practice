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
var Server = /** @class */ (function () {
    function Server(name, id) {
        this.name = name;
        this.id = id;
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    return Server;
}());
console.log();
var server = new Server('ACT', 2841);
