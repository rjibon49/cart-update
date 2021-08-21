// document.getElementById('16gb-memory-button').addEventListener('click', function(){
//     // updateProductSelect('memory',180,true);

// })

const memoryInput = document.getElementById('16gb-memory-button');
const memoryAmount = memoryInput.value;
const memoryTtoal = parseInt(memoryAmount);
console.log(memoryTtoal);

document.getElementById('8gb-memory-button').value = memoryInput;
// const memoryAmount = memoryInput.value;
const memoryTtoal = parseInt(memoryInput);
console.log(memoryTtoal);