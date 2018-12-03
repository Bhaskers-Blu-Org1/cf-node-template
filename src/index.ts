import { Calculator } from './lib/calculator';

function main(args) {
    // Replace the code below to use your code/classes and pass the args object
    const calculator = new Calculator();
    const calcResult = calculator.add(args.calcInput);
    return calcResult;
}

global.main = main;
