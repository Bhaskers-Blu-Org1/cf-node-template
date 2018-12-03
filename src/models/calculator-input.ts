export class CalculatorInput {
    private _numOne: number;
    private _numTwo: number;

    get numOne() {
        return this._numOne;
    }

    set numOne(val: number) {
        this._numOne = val;
    }

    get numTwo() {
        return this._numTwo;
    }

    set numTwo(val: number) {
        this._numTwo = val;
    }
}