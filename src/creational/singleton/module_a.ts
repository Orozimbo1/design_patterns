import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: "Matheus", age: 25 });
myDatabaseClassic.add({ name: "Maria", age: 22 });
myDatabaseClassic.add({ name: "José", age: 18 });

export { myDatabaseClassic };
