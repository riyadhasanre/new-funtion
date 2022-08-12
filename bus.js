function publicBusFare(totalPeople) {
    const busCapacity = 50;
    const microBusCapacity = 11;
    const totalBusCapacity = busCapacity * 4;
    const totalmicroBusCapacity = microBusCapacity * 3;
    const totalPublic = totalBusCapacity + totalmicroBusCapacity;
    const remainPublic = totalPeople - totalPublic;
    const tiketPrice = 500;
    const extraBusCost = remainPublic * tiketPrice;
    return extraBusCost;

}
const result = publicBusFare(235);
console.log(result);