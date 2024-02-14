import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Joao', age: 25 });
myDatabaseClassic.add({ name: 'Andre', age: 22 });
myDatabaseClassic.add({ name: 'Luana', age: 18 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
