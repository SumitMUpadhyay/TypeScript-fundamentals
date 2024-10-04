// ## Classes - Implement Interface

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const hipster = new Person('ShakeAndBake', 100);
hipster.greet();

// ## Classes - Getters and Setters

// class Book {
//   private checkOut: boolean = false;
//   constructor(readonly title: string, public author: string) {}

//   get info() {
//     return `${this.title} by ${this.author}`;
//   }
//   private set checkOut(checkedOut: boolean) {
//     this.checkOut = checkedOut;
//   }
//   get checkOut() {
//     return this.checkedOut;
//   }
//   public get someInfo() {
//     this.checkOut = true;
//     return ` ${this.title} by ${this.author}`;
//   }
// }

// const deepWork = new Book('Deep Work', 'Cal NewPort');
// console.log(deepWork.info);
// // deepWork.checkout = true;
// console.log(deepWork);
// console.log(deepWork.someInfo);
// console.log(deepWork.info);

// ## Classes - Shorthand Syntax

// class Book {
//   private checkOut: boolean = false;
//   constructor(
//     readonly title: string,
//     public author: string,
//     private someValue: number
//   ) {}
//   public getSomeValue() {
//     return this.someValue;
//   }
// }

// const deepWork = new Book('Deep Work', 'Cal Newport', 45);
// console.log(deepWork.getSomeValue());

// ## Classes - Intro

// class Book {
//   public readonly title: string;
//   public author: string;
//   // checkedOut: boolean = false
//   private checkedOut = false;
//   constructor(title: string, author: string) {
//     this.title = title;
//     this.author = author;
//     this.checkedOut = false;
//   }
//   public checkOut() {
//     this.checkOut = this.toggleCheckoutStatus();
//   }
//   public isCheckOut() {
//     return this.checkOut;
//   }
//   private toggleCheckoutStatus() {
//     return !this.checkOut;
//   }
// }

// const deepWork = new Book('Deep Work', 'Cal Newport');
// deepWork.checkOut();
// console.log(deepWork.isCheckOut());
// deepWork.checkOut();
// deepWork.title = 'something';
// deepWork.checkedOut = 'hello world';
// console.log(deepWork.title);
// console.log(deepWork.checkedOut); //{title:'Deep Work', author:'Cal Newport'}

// import { z } from 'zod';
// const url = 'https://www.scourse-api.com/react-tours-project';

// const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   info: z.string(),
//   image: z.string(),
//   price: z.string(),
// });

// // extract the inferred type
// type Tour = z.infer<typeof tourSchema>;

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);

//     // Check if the request was successful.
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const rawData: Tour[] = await response.json();
//     const result = tourSchema.array().safeParse(rawData);
//     if (!result.success) {
//       throw new Error(`Invalid data: ${result.error}`);
//     }
//     return result.data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : 'there was an error...';
//     console.log(errMsg);

//     // throw error;
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => {
//   console.log(tour.name);
// });

// let tax: number | string = 10;
// tax = 100;
// tax = '$10';

// let requestStatus: 'pending' | 'success' | 'error' = 'pending';
// requestStatus = 'success';
// requestStatus = 'error';
//requestStatus = 'random'

// let notSure: any = 4;
// notSure = 'maybe a string instead';
// notSure = false;

// let random;

// const books = ['1984', 'Brave New World', 'Fahrenheit 451'];
// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === '1984') {
//     foundBook = book;
//     foundBook = foundBook.toUpperCase();
//     break;
//   }
// }
// console.log(foundBook?.length);

// let discount: number | string = 20;
// discount = '20%';
// discount = true;

// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
// orderStatus = 'shipped';
// orderStatus= 'cancelled';

// function addThree(number: any) {
//   let anotherNumber: number = 3;
//   return number + anotherNumber;
// }
// const result = addThree(3);
// const someValue = result;

// someValue.myMethod();

// const names: string[] = ['john', 'jane', 'jim', 'jill'];

// function isNameInList(name: string): boolean {
//   return names.includes(name);
// }

// let nameToCheck = 'jane';

// if (isNameInList(nameToCheck)) {
//   console.log(`${nameToCheck} is in the list`);
// } else {
//   console.log(`${nameToCheck} is not the list`);
// }

// function calculatePrice(price: number, discount?: number): number {
//   return price - (discount || 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);

// function calculateScore(
//   initialScore: number,
//   penaltyPoints: number = 0
// ): number {
//   return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty = calculateScore(100, 20);
// let scoreWithoutPenalty = calculateScore(300);

// function sum(message: string, ...numbers: number[]): string {
//   const doubled = numbers.map((num) => num * 2);
//   console.log(doubled);

//   let total = numbers.reduce((previous, current) => {
//     return previous + current;
//   }, 0);
//   return `${message}${total}`;
// }

// let result = sum('The total is: ', 1, 2, 3, 4, 5);
// console.log(result);

// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage('Hello , Typescript');

// function processInput(input: string | number) {
//   if (typeof input === 'number') {
//     console.log(input * 2);
//   } else {
//     console.log(input.toLowerCase());
//   }
// }

// processInput(10);
// processInput('Hello');

// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return { id, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });
// console.log(first, second);

// alternative

// function createStudent(student: { id: number; name: string }): void {
//   console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
// }

// const newStudent = {
//   id: 5,
//   name: 'anna',
// };

// createStudent(newStudent);

//  Gotcha - Excess Property Checks

// function createStudent(student: { id: number; name: string }): void {
//   console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
// }

// const newStudent = {
//   id: 5,
//   name: 'anna',
//   email: 'anna@gmail.com',
// };

// createStudent(newStudent);
// createStudent({ id: 1, name: 'bob', email: 'bobo@gmail.com' });

// function processData(
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): string | number {
//   if (typeof input === 'number') {
//     return input * input;
//   } else {
//     return config.reverse
//      ? input.toUpperCase().split('').reverse().join('')
//       : input.toUpperCase();
//   }
// }

// console.log(processData(10));
// console.log(processData('Hello'));
// console.log(processData('Hello', { reverse: true }));

// ## Type Alias

// type User = { id: number; name: string; isActive: boolean };

// const john: User = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// };

// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);
//   return user;
// }

// type StringOrNumber = string | number;

// let value: StringOrNumber;
// value = 'hello';
// value = 123;

// type Theme = 'light' | 'dark';

// let theme: Theme;
// theme = 'dark';
// theme = 'light';

// function setTheme(t: Theme) {
//   theme = t;
// }

// setTheme('dark');

// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employees: Employee[] };

// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff) {
//   if ('employees' in staff) {
//     console.log(
//       `${staff.name} is a manager of ${staff.employees.length} employees.`
//     );
//   } else {
//     console.log(
//       `${staff.name} is an employee in the ${staff.department} department.`
//     );
//   }
// }

// const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
// const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
// const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

// printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
// printStaffDetails(bob);

// ## Intersection Types

// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & { discounted: number };

// const book1: Book = {
//   id: 1,
//   name: 'how to cook a dragon',
//   price: 15,
// };

// const book2: Book = {
//   id: 2,
//   name: 'the secret life of unicorns',
//   price: 18,
// };
// const discountedBook: DiscountedBook = {
//   id: 3,
//   name: 'Gnomes vs. Goblines: The Ulimate Guide',
//   price: 25,
//   discount: 0.15,
// };

// const propName = 'age';

// type Animal = {
//   [propName]: number;
// };

// let tiger: Animal = { [propName]: 5 };

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   // method
//   printAuthor(): void;
//   printTitle(message: string): string;
//   printSomething: (someValue: number) => number;
// }

// const deepWork: Book = {
//   isbn: 123,
//   title: 'deep work',
//   author: 'cal newport',
//   genre: 'self-help',
// printAuthor() {
//   console.log(this.author);
// },
// printTitle(message) {
//   return `${this.title} ${message}`;
// },
// first option
// printSomething: function (someValue) {
//   return someValue;
// },
// second option
// printSomething: (someValue) => {
//   // console.log(this)
//   console.log(deepWork.author);
//   return someValue;
// },
// third option
// printSomething(someValue) {
//   return someValue;
// },
//   printAuthor: () => {
//     console.log(deepWork.author);
//   },
// };
// console.log(deepWork.printSomething(34));

// deepWork.printAuthor();

// deepWork.isbn = 'some value';

// const result = deepWork.printTitle('is an awesome book');
// console.log(result);

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   upgradeRam(increase: number): number;
//   storage?: number;
// }

// const laptop: Computer = {
//   id: 1,
//   brand: 'random brand',
//   ram: 8,
//   upgradeRam(amount) {
//     this.ram += amount;
//     return this.ram;
//   },
// };

// laptop.storage = 256;
// console.log(laptop.upgradeRam(4));
// console.log(laptop);

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: 'sumit',
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   name: 'money',
//   age: 28,
//   employeeId: 123,
//   getDetails() {
//     return ` Name: ${this.name}, Age: ${this.age}, Employee ID : ${this.employeeId}`;
//   },
// };

// console.log(employee.getDetails());

// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: 'Bob',
//   age: 35,
//   dogName: 'Rex',
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log('Managing people...');
//   },
// };

// function getEmployee(): Person | DogOwner | Manager {
//   const random = Math.random();

//   if (random < 0.33) {
//     return {
//       name: 'sumit',
//     };
//   } else if (random < 0.66) {
//     return {
//       name: 'money',
//       dogName: 'rex',
//     };
//   } else {
//     return {
//       name: 'bob',
//       managePeople() {
//         console.log('Managing people...');
//       },
//       delegateTasks() {
//         console.log('Deleting tasks...');
//       },
//     };
//   }
// }

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// const employee: Person | DogOwner | Manager = getEmployee();

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return ' managePeople' in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTasks();
// }

// ## Tuples

// let Person: [string, number] = ['sumit', 25];

// let date: [number, number, number] = [12, 17, 2001];

// function getPerson(): [string, number] {
//   return ['sumit', 25];
// }

// let randomPerson = getPerson();
// console.log(randomPerson[0]);
// console.log(randomPerson[1]);

// let susan: [string, number?] = ['susan'];

// ## Enums

// enum ServerResponseStatus {
//   Success = 'Success',
//   Error = 'Error',
// }

// Object.values(ServerResponseStatus).forEach((value) => {
//   if (typeof value === 'number') {
//     console.log(value);
//   }
// });

// console.log(ServerResponseStatus);

// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: 'Success',
//     data: ['first item', 'second item'],
//   };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);

// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string];
// };

// function createUser(user: User): User {
//   return user;
// }

// const user: User = createUser({
//   id: 1,
//   name: 'john doe',
//   role: UserRole.Admin,
//   contact: ['john@gail.com', '123-456-789'],
// });

// console.log(user);

// ## Type Assertion

// let someValue: any = 'this is a string';

// let strLength: number = (someValue as string).length;

// type Bird = {
//   name: string;
// };

// let birdString = '{ "name": "Eagle" }';
// let dogString = '{ "breed": "Poodle" }';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

// enum Status {
//   Pending = 'pending',
//   Declined = 'declined',
// }

// type User = {
//   name: string;
//   status: Status;
// };

// save Status.Pending in the DB as a string
// retrieve string from the DB

// const statusValue = 'pending';

// const user: User = { name: 'John', status: statusValue as Status };

// let unknownValue: unknown;

// unknownValue = 'hello word';
// unknownValue = [1, 2, 3];
// unknownValue = 42.334555;

// if (typeof unknownValue === 'number') {
//   unknownValue.toFixed(2);
// }

// function runSomeCode() {
//   const random = Math.random();
//   if (random < 0.5) {
//     throw new Error('there was error...');
//   } else {
//     throw ' some error';
//   }
// }

// try {
//   runSomeCode();
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log(error);
//   }
// }

// ## Type - "never"

// let someValue: never = 0;

// type Theme = 'light' | 'dark';

// function checkTheme(theme: Theme): void {
//   if (theme === 'light') {
//     console.log('light theme');
//     return;
//   }
//   if (theme === 'dark') {
//     console.log('dark theme');
//     return;
//   }
//   theme;
// }

// enum Color {
//   Red,
//   Blue,
//   Green,
// }

// function getColorName(color: Color) {
//   switch (color) {
//     case Color.Red:
//       return 'Red';
//     case Color.Blue:
//       return 'Blue';
//     case Color.Green:
//       return 'Green';
//     default:
//       // at build time
//       let UnexpectedColor: never = color;
//       // at runtime
//       throw new Error(`Unexpected color value: ${color}`);
//   }
// }

// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Green));

//

// type valueType = string | number | boolean;

// let value: valueType;
// const random = Math.random();
// value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

// function checkValue(value: valueType): void {
//   if (typeof value === 'string') {
//     console.log(value.toLocaleLowerCase());
//     return;
//   }
//   if (typeof value === 'number') {
//     console.log(value.toFixed(2));
//     return;
//   }
//   console.log(`boolean: ${value}`);
// }

// checkValue(value);

// ## Challenge - Equality Narrowing

// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === 'dog') {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// function makeSound(animal: Animal) {
//   if ('bark' in animal) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// ## Challenge - "Truthy"/"Falsy" guard

// function printLength(str: string | null | undefined) {
//   if (str) {
//     console.log(str.length);
//   } else {
//     console.log('no string provided');
//   }
// }

// printLength('hello');
// printLength('');
// printLength(null);
// printLength();
// printLength(undefined);

// ## Challenge - "instanceof" type guard

// try {
//   throw ' some error';
//   // throw new Error('This is an error');
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(`Caught and Error object: ${error.message}`);
//   } else {
//     console.log('unknown error...');
//   }
// }

// function checkInput(input: Date | string): string {
//   if (input instanceof Date) {
//     return input.getFullYear().toString();
//   }
//   return input;
// }

// const year = checkInput(new Date());
// const random = checkInput('2020-05-05');

// console.log(year);
// console.log(random);

// ## Challenge - Type Predicate

// type Student = {
//   name: string;
//   study: () => void;
// };

// type User = {
//   name: string;
//   login: () => void;
// };

// type Person = Student | User;

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
// ? { name: 'john', study: () => console.log('Studying') }
//     : { name: 'mary', login: () => console.log('Logging in') };
// };

// const person = randomPerson();

// function isStudent(person: Person): person is Student {
//   // return 'study' in person
//   return (person as Student).study! == undefined;
// }

// if (isStudent(person)) {
//   person.study();
// } else {
//   person.login();
// }

// ## Optional - type "never" gotcha

// type Student = {
//   name: string;
//   study: () => void;
// };

// type User = {
//   name: string;
//   login: () => void;
// };

// type Person = Student | User;

// const person: Person = {
//   name: 'anna',
//   study: () => console.log('Studying'),
//   // login: () => console.log('Logging in'),
// };
// // person;
// function isStudent(person: Person): person is Student {
//   // return 'study' in person;
//   return (person as Student).study !== undefined;
// }

// // Usage

// if (isStudent(person)) {
//   person.study(); // This is safe because TypeScript knows that 'person' is a Student.
// } else {
//   // in this case person is type "never"
//   console.log(person);
// }

// ## Challenge - Discriminated Unions and exhaustive check using the never type

// type IncrementAction = {
//   type: 'increment';
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type DecrementAction = {
//   type: 'decrement';
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type Action = IncrementAction | DecrementAction;

// function reducer(state: number, action: Action) {
//   switch (action.type) {
//     case 'increment':
//       return state + action.amount;
//     case 'decrement':
//       return state - action.amount;
//     default:
//       const UnexpectedAction: never = action;
//       throw new Error(`Unexpected action : ${UnexpectedAction}`);
//   }
// }

// const newState = reducer(15, {
//   user: 'sumit',
//   type: 'increment',
//   amount: 5,
//   timestamp: 123456,
// });

// ## Generics - Fundamentals

// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// functioncreateString(arg:string):string{
//   return arg;
// }

// functioncreateString(arg:number):number{
//   return arg;
// }

// function genericFunctions<T>(arg: T): T {
//   return arg;
// }

// const someStringValue = genericFunctions<string>('Hello word');

// const someNumberValue = genericFunctions<number>(2);

// interface GenericsInterface<T> {
//   value: T;
//   getValue: () => T;
// }

// const genericString: GenericsInterface<string> = {
//   value: 'Hello world',
//   getValue() {
//     return this.value;
//   },
// };

// ## Generics - Promise Example

// async function someFunc(): Promise<number> {
//   return 2344;
// }

// const result = someFunc();

// ## Generics - Generate Array

// createArray<string>(3, 'hello'); // ["hello","hello","hello"]
// createArray<number>(4, 100); // [100,100,100,100]

// generate an array of strings
// function generateStringArray(length: number, value: string): string[] {
//   let result: string[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// console.log(generateStringArray(6, 'hello'));

// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// let arrayStrings = createArray<string>(10, 'hello');
// let arrayNumbers = createArray<number>(15, 100);

// console.log(arrayStrings);
// console.log(arrayNumbers);

// ## Generics - Part 5

// function pair<T, U>(param1: T, param2: U): [T, U] {
//   return [param1, param2];
// }

// Usage
// let result = pair<number, string>(123, 'Hello');
// console.log(result); // Output: [123, "Hello"]

// ## Generics - Inferred Type and Type Constraints

// function processValue<T extends string | number>(value: T): T {
//   console.log(value);
//   return value;
// }

// processValue('Hello');
// processValue(12);
// processValue(true);

// ## Generics - Type Constraints 2

// type Car = {
//   brand: string;
//   model: string;
// };

// const car: Car = {
//   brand: 'ford',
//   model: 'mustang',
// };

// type Product = {
//   name: string;
//   price: number;
// };

// const product: Product = {
//   name: 'shoes',
//   price: 1.99,
// };

// type Student = {
//   name: string;
//   age: number;
// };

// const student: Student = {
//   name: 'peter',
//   age: 20,
// };

// function printName<T extends Student | Product>(input: T): void {
//   console.log(input.name);
// }

// printName(student);
// printName(product);

// ## Generics - Default Value

// interface StoreData<T = any> {
//   data: T[];
// }

// const storeNumbers: StoreData<number> = {
//   data: [1, 2, 3, 4],
// };

// const randomStuff: StoreData = {
//   data: ['random', 1],
// };

// data is located in the data property

// const { data } = axios.get(someUrl);

// axios.get<{ name: string }[]>(someUrl);

// export class Axios {
//   get<T = any, R = AxiosResponse<T>, D = any>(
//     url: string,
//     config?: AxiosRequestConfig<D>
//   ): Promise<R>;
// }

// export interface AxiosResponse<T = any, D = any> {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//   config: InternalAxiosRequestConfig<D>;
//   request?: any;
// }

// ## Fetch Data

// const url = 'https://www.course-api.com/react-tours-project';

// async function fetchData(url: string) {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       throw new Error(`HTTP error! status:${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     const errorMsg =
//       error instanceof Error ? error.message : 'there was an error...';
//     console.log(errorMsg);
//     return [];
//   }
// }
// const tours = await fetchData(url);
// tours.map((tour: any) => {
//   console.log(tour.name);
// });
// return empty array
// throw error in catch block
// we are not setting state values in this function

// ## Challenge - Fetch Data

// - setup type and provide correct return type
