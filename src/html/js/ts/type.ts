
/**
 * Boolean
 */
let isDone: boolean = false;
console.log('Boolean', isDone);


/**
 * Number
 */
let decimal: number = 6;     // 浮動小数点数
let hex: number = 0xf00d;    // 16進数
let binary: number = 0b1010; // 2進数
let octal: number = 0o744;   // 8進数
console.log('Number', decimal, hex, binary, octal);


/**
 * String
 */
let blue: string = "blue"; // 文字列（ダブルクオート））
let red = 'red';           // 文字列（シングルクオート
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`; // 埋め込み式
console.log('String', blue, red, sentence);


/**
 * Array
 */
let listA: number[] = [1, 2, 3];
let listB: Array<number> = [1, 2, 3];
console.log('Array', listA, listB);


/**
 * Tuple
 */
let ok: [string, number] = ["hello", 10]; // タプル（OK）
// let ng: [string, number] = [10, "hello"]; // タプル（NG）
console.log('Tuple', ok);


/**
 * Enum
 */
enum ColorA {Red = '#ff0000', Green = '#00ff00', Blue = '#0000ff'} // 全指定
enum ColorB {Red, Green, Blue} // 未指定 = 0番目が`0`となり、以降インクリメントされる
enum ColorC {Red = 1, Green, Blue}  // 0番目だけを指定 = 0番目の値からインクリメントされる
let color: ColorB = ColorB.Green;
console.log('Enum', color);


/**
 * Any
 */
let notSure: any = 4;                // 始めは数値
console.log('Any:number', notSure);
notSure = "maybe a string instead";  // 文字列を代入可能
console.log('Any:string', notSure);
notSure = false;                     // ブール値を代入可能
console.log('Any:boolean', notSure);

// コンパイラはチェックしなため通る
// let notSure2: any = 4;
// notSure2.hoge();

// コンパイルエラー
// let prettySure: Object = 4;
// prettySure.hoge();


/**
 * Void
 */
function warnUser(): void {      // 戻り値のない関数
    console.log("This is my warning message");
}
let unusable: void = undefined; // undefined のみ代入可能
console.log('void', unusable, warnUser());


/**
 * Null と Undefined
 * ※ 全ての型のサブタイプとなっているため、number型の変数に null をセットすることができる
 */
let u: undefined = undefined; // それぞれの型が用意されている
let n: null = null;           // それぞれの型が用意されている
// let no: number = null;     // 他の型に代入できる (tsconfig.json - strict: false)
console.log(u, n);

/**
 * Never
 * ※ 決して発生しない値 を表現します
 *   例) 必ず例外が発生するような関数の戻り値などに利用します
 */
function error(message: string): never {
    throw new Error(message);
}


/**
 * Object
 */
function create(o: object | null): void {
    console.log('Object',`created: ${o}`);
}
create({ prop: 0 }); // OK
create(null);        // OK
// create(42);          // Error
// create("string");    // Error
// create(false);       // Error
// create(undefined);   // Error (--strictNullChecks オプションが有効な場合のみ)


/**
 * 型アサーション (型変換 => cast)
 * ※ JSXを利用する場合、`<変換したい型>値`はJSXの記法と競合する
 */
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
console.log('cast', someValue, strLength1, strLength2);

