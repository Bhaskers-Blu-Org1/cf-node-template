import { CalculatorInput } from "../models";

export class Calculator{
    add(calculatorInput: CalculatorInput) {
        return calculatorInput.numOne + calculatorInput.numTwo;
    }
}