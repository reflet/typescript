"use strict";
function getLength(obj) {
    obj = wrapInArray(obj);
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    else {
        return obj;
    }
}
const hoge = true;
const fuga = 'open';
console.log('hoge', hoge);
console.log('fuga', fuga);
console.log('getLength', getLength(['Hoge', 'Fuga']));
//# sourceMappingURL=type-union.js.map