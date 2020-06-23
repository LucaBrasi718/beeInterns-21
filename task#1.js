const firstObject = {
    'one': 'number'
}

function resolve(inputObject) {
    let newObject = new Object();
    let keys = Object.keys(inputObject);
    newObject[inputObject[keys[0]]] = keys[0];
    return newObject;
}

let result = resolve(firstObject);
console.log(result);
console.log(firstObject);
