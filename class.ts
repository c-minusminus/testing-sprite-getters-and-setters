/**
 * A class for testing getters and setters on classes
 **/
//% blockNamespace=testClasses color="#3DC6A7" blockGap=8
class TestClass {
    _a: number
    _b: number
    _c: number
    _d: number

    constructor(a: number, b: number, c: number, d: number) {
        this._a = a
        this._b = b
        this._c = c
        this._d = d
    }

    //% blockSetVariable="myTestClass"
    //% blockCombine block="a" callInDebugger
    get a(): number { return this._a }
    
    //% blockSetVariable="myTestClass"
    //% blockCombine block="a"
    set a(a: number) { this._a = a }


    //% blockSetVariable="myTestClass"
    //% blockCombine block="b" callInDebugger
    get b(): number { return this._b }

    //% blockSetVariable="myTestClass"
    //% blockCombine block="b"
    set b(b: number) { this._b = b }


    //% blockSetVariable="myTestClass"
    //% blockCombine block="c" callInDebugger
    get c(): number { return this._c }

    //% blockSetVariable="myTestClass"
    //% blockCombine block="c"
    set c(c: number) { this._c = c }


    //% blockSetVariable="myTestClass"
    //% blockCombine block="d" callInDebugger
    get d(): number { return this._d }

    //% blockSetVariable="myTestClass"
    //% blockCombine block="d"
    set d(d: number) { this._d = d }
}


/**
 * Classes
 */
//% weight=99 color="#3DC6A7" icon="\uf1d8"
namespace testClasses {
    //% blockId=testclasscreate
    //% block="create test class with %a %b %c %d"
    //% inlineInputMode=inline
    //% blockSetVariable=myTestClass
    //% weight=100
    export function create(a: number, b: number, c: number, d: number) {
        return new TestClass(a, b, c, d)
    }
}