// Write your solution in this file!

const driver = {}

// this function should take in three arguments: a driver Object, a key and a value.
// This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
// return { ...driver, ...{ [key]: value } }
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

// this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

// this function should take in a driver Object and a key.
// It should delete the key/value pair for the key that was passed in from the driver Object.
// This should all not actually mutate the driver passed in.
// const newObj = { ...driver }
function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}

// this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in.
// Be sure to consider whether and how using dot notation vs. bracket notation might affect your solution.
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}