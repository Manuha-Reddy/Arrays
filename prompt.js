var myArray = [];
var numberOfElements = prompt('How many elements do you want to add to the array?');
numberOfElements = parseInt(numberOfElements);
for (var i = 0; i < numberOfElements; i++) {
 
    var element = prompt('Enter element ' + (i + 1));
    myArray.push(element);
}
console.log('Elements in the array:', myArray);
