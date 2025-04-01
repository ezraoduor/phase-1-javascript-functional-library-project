// index.js

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let newArr = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArr.push(callback(collection[i]));
        }
    } else {
        for (let key in collection) {
            newArr.push(callback(collection[key]));
        }
    }
    return newArr;
}

function myReduce(collection, callback, acc) {
    let keys = Object.keys(collection);
    let index = 0;
    if (acc === undefined) {
        acc = collection[keys[0]];
        index = 1;
    }
    for (; index < keys.length; index++) {
        acc = callback(acc, collection[keys[index]]);
    }
    return acc;
}

function myFind(collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key])) {
            return collection[key];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let filtered = [];
    for (let key in collection) {
        if (predicate(collection[key])) {
            filtered.push(collection[key]);
        }
    }
    return filtered;
}

function mySize(collection) {
    return Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

module.exports = { 
    myEach, 
    myMap, 
    myReduce, 
    myFind, 
    myFilter, 
    mySize, 
    myFirst, 
    myLast, 
    myKeys, 
    myValues 
};