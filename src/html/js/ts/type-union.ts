// Unions
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too
function getLength(obj: string | string[]) {
    obj = wrapInArray(obj);
    return obj.length;
}

/**
 * <タイプ判定>
 *  string     typeof s === "string"
 *  number     typeof n === "number"
 *  boolean    typeof b === "boolean"
 *  undefined  typeof undefined === "undefined"
 *  function   typeof f === "function"
 *  array      Array.isArray(a)
 */
function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj]
        // ^ = (parameter) obj: string
    } else {
        return obj;
    }
}

const hoge: MyBool = true;
const fuga: WindowStates = 'open';

console.log('hoge', hoge);
console.log('fuga', fuga);
console.log('getLength', getLength(['Hoge', 'Fuga']));
