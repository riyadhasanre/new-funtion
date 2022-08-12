function discountCal(totalPrice) {
    if (totalPrice > 5000) {
        const discountPrice = totalPrice * 20 / 100;
        const netPrice = totalPrice - discountPrice;
        console.log(netPrice);
    }
    else if (totalPrice >= 3000) {
        const discountPrice = totalPrice * (10 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log(netPrice);
    }
    else {
        console.log("you can not get discount")
    }
}



discountCal(3000);



///////////////////////////////////////
// function discountCalc(totalPrice) {
//     if (totalPrice > 5000) {
//         const discountPrice = totalPrice * (20 / 100);
//         const netPrice = totalPrice - discountPrice;
//         console.log(netPrice);
//     }
// }
// discountCalc(1000);