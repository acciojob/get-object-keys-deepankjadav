//your JS code here. If required.
// Creating the student object
let student = {
    name: "John Doe"
};

// Adding getKeys method to the Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Using the getKeys method on the student object
let keys = student.getKeys();
console.log(keys); // Output: ['name']
