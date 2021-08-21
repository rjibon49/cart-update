function updateProductSelect( price, memorySelect) {
    const memoryInput = document.getElementById('memory-input');
    const memoryNumber = memoryInput.value;
    
    if (memorySelect == true) {
    memoryInput.value = parseInt(memoryNumber) + 180;
    console.log(memoryInput.value);
} else{
    memoryInput.value = parseInt(memoryNumber);
    console.log(memoryInput.value);
}
}

// Memory Price Button

document.getElementById('16gb-memory-button').addEventListener('click', function(){
    updateProductSelect( 180,true);
})

document.getElementById('8gb-memory-button').addEventListener('click', function(){
    updateProductSelect(0, false);
})

// SSD Storage Button

document.getElementById('256gb-ssd-button').addEventListener('click', function(){
    const storageInput = document.getElementById('ssd-input');
    const storageNumber = storageInput.value;
    // storageInput.value = parseInt(storageNumber);
    console.log(storageInput.value);

})
document.getElementById('512gb-ssd-button').addEventListener('click', function(){
    // updateProductSelect()
    const storageInput = document.getElementById('ssd-input');
    const storageNumber = storageInput.value;
    storageInput.value = parseInt(storageNumber) + 100;
    console.log(storageInput.value);
})
document.getElementById('1tb-ssd-button').addEventListener('click', function(){
    // updateProductSelect();
    const storageInput = document.getElementById('ssd-input');
    const storageNumber = storageInput.value;
    storageInput.value = parseInt(storageNumber) + 180;
    console.log(storageInput.value);
})

document.getElementById('delivery-free-button').addEventListener('click',function () {
    const deliveryInput = document.getElementById('delivery-input');
    const deliveryNumber = deliveryInput.value;
    deliveryInput.value = parseInt(deliveryNumber);
    console.log(deliveryInput.value);
})



// if (memorySelect == true, memoryNumber<1) {
//     memoryInput.value = parseInt(memoryNumber) + 20;
//     console.log(memoryInput.value);
// } else if(memoryNumber>1){
//     memoryInput.value = parseInt(memoryNumber);
// }console.log(memoryInput.value);
