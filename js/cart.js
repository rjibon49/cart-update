function updateProductSelect(product, price, memorySelect) {
    const memoryInput = document.getElementById(product + '-input');
    const memoryNumber = memoryInput.value;
    
    if (memorySelect == true) {
    memoryInput.value = parseInt(memoryNumber) + 180;

} else{
    memoryInput.value = parseInt(memoryNumber);

}
}

// Memory Button And Price Update On Extra Memory Cost

document.getElementById('16gb-memory-button').addEventListener('click', function(){
    updateProductSelect('memory',180,true);

})

document.getElementById('8gb-memory-button').addEventListener('click', function(){
    updateProductSelect('memory', 0, false);
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

// Delivery Cost Button

document.getElementById('delivery-free-button').addEventListener('click',function () {
    const deliveryInput = document.getElementById('delivery-input');
    const deliveryNumber = deliveryInput.value;
    deliveryInput.value = parseInt(deliveryNumber);
})


document.getElementById('delivery-charge-button').addEventListener('click',function () {
    const deliveryInput = document.getElementById('delivery-input');
    const deliveryNumber = deliveryInput.value;
    deliveryInput.value = parseInt(deliveryNumber) + 20;
})


// Price Update Part

function getInputValue(product) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const price = bestPrice;
    const memoryCost = getInputValue('memory') + 180;
    const ssdCost = getInputValue('ssd') + 100;
    const deliveryCost = getInputValue('delivery') + 20;
    const totalPrice = price + memoryCost + ssdCost + deliveryCost;

    document.getElementById('best-price').innerText = bestPrice;
    document.getElementById('memory-cost').innerText = memoryCost;
    document.getElementById('storage-cost').innerText = ssdCost;
    document.getElementById('delivery-cost').innerText = deliveryCost;
    document.getElementById('total-price').innerText = totalPrice;
}











    // const memoryInput = document.getElementById('memory-input');
    // const memoryNumber = memoryInput.value;
    // memoryInput.value = parseInt(memoryNumber);

//     const memoryCost = document.getElementById('memory-cost');
//     const inputText = memoryCost.innerText;
//     const extraCost = parseFloat(inputText);
//     const cost = extraCost + updateProductSelect();
//     memoryCost.innerText = cost ;
//     console.log(cost);