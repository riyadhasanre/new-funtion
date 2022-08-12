function oilPrice(petrol, disel, octen) {
    const petrolPrice = 130;
    const diselPrice = 114;
    const octenlPrice = 135;
    
    const petrolValu = petrol * petrolPrice;
    const diselValu = disel * diselPrice;
    const octenValu = octen * octenlPrice;

    const totalOilPrice = petrolValu + diselValu + octenValu;
    return totalOilPrice;
}

const result = oilPrice(1,1,1);
console.log(result);