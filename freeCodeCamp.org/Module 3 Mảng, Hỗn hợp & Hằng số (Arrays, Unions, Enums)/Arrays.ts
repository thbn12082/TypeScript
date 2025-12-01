export { }

const arr: string[] = [];
arr.push('hello');
arr.push('world');
console.log(arr); // Output: ['hello', 'world']

const numbers: number[] = [];
numbers.push(1);
numbers.push(2);
console.log(numbers); // Output: [1, 2]

const hero: Array<string> = [];
hero.push('Superman');
hero.push('Batman');
console.log(hero); // Output: ['Superman', 'Batman']


let score: number | string;
score = 12;
score = "08";

// lưu ý khi sử dụng unionType: phải check kdl truwocs khi sử dụng để biến đổi
if (typeof score === "string") {
    score.toLowerCase();
}

let user: [string, number];
user = ['TheBinh', 22];
console.log(user); // Output: ['TheBinh', 22]

enum Size {
    Big,
    Medium,
    Small
}
let mySize = Size.Big;
