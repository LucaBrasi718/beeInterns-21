const secondObject = {
    'apple': 'fruit',
    'potato': 'vegetable',
    'strawberry': 'berry',
};

function resolve(inputObject) {
    let newObject = new Object();
    for (let key in inputObject) {
        newObject[inputObject[key]] = key;
    }
    return newObject;
}

let result = resolve(secondObject);
console.log(result);
console.log(secondObject);

