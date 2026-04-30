import { Duration } from "./Duration.js";

const test1 = new Duration(230);
const test2 = new Duration(120);

test1.plus(test2);
console.log(test1.toString());
