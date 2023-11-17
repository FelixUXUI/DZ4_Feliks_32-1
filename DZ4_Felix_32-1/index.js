// №1
const array = ["name", "John", "lastname", "Black", "age", "23"];
const resultObject = {};

for (let i = 0; i < array.length; i += 2) {
    const key = array[i];
    const value = array[i + 1];
    resultObject[key] = value;
}

console.log(resultObject);
//№2
function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

const result = average(2, 4, 6, 8, 10);
console.log(result); // Выводит 6
//№3
function getDataType(value){
    const dataType = typeof value
    console.log(dataType)
}
getDataType(true);
getDataType('Bye');
getDataType(59);
//№4
function reverseString(inputString) {
    let reversedString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }

    return reversedString;
}

const originalString = 'hello';
const reversedResult = reverseString(originalString);
console.log(reversedResult);
