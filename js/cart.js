function updateProductSelect( memorySelect) {
    const memoryInput = document.getElementById('memory-input');
    const memoryNumber = memoryInput.value;
    
    if (memorySelect == true) {
    memoryInput.value = parseInt(memoryNumber) + 180;

} else{
    memoryInput.value = parseInt(memoryNumber);

}
}

// Memory Button

document.getElementById('16gb-memory-button').addEventListener('click', function(){
    updateProductSelect(true);
    const memoryCost = document.getElementById('memory-cost');
    const inputText = memoryCost.innerText;
    const extraCost = parseFloat(inputText);
    memoryCost.innerText = extraCost + updateProductSelect();
})

document.getElementById('8gb-memory-button').addEventListener('click', function(){
    updateProductSelect(false);
})

// SSD Storage Button

document.getElementById('256gb-ssd-button').addEventListener('click', function(){
    const storageInput = document.getElementById('ssd-input');
    const storageNumber = storageInput.value;
    storageInput.value = parseInt(storageNumber);

})
document.getElementById('512gb-ssd-button').addEventListener('click', function(){
    // updateProductSelect()
    const storageInput = document.getElementById('ssd-input');
    const storageNumber = storageInput.value;
    storageInput.value = parseInt(storageNumber) + 100;
})
document.getElementById('1tb-ssd-button').addEventListener('click', function(){
    // updateProductSelect();
    const storageInput = document.getElementById('ssd-input');
    const storageNumber = storageInput.value;
    storageInput.value = parseInt(storageNumber) + 180;
})

document.getElementById('delivery-free-button').addEventListener('click',function () {
    const deliveryInput = document.getElementById('delivery-input');
    const deliveryNumber = deliveryInput.value;
    deliveryInput.value = parseInt(deliveryNumber);
})

// Delivery Cost Button

document.getElementById('delivery-charge-button').addEventListener('click',function () {
    const deliveryInput = document.getElementById('delivery-input');
    const deliveryNumber = deliveryInput.value;
    deliveryInput.value = parseInt(deliveryNumber) + 20;
})

