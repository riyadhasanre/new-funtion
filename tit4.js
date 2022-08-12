// 1.is radianToDegree problem solving

function radianToDegree(radian) {
    let angle = radian * 180 / 3.1416;
    let valu = angle.toFixed(2);
    return valu;
}
     
let mainresult = radianToDegree(10);
 
    console.log(mainresult);
 
// 2. is isJavascriptFile problem solving

function isJavascriptFile(javafile) {
    return javafile;
   
}
const javafile = "app.js";
console.log(javafile.endsWith('app.js'));


// 3. is oilPrice problem solving

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
 
const gotresult = oilPrice(1,1,1);
console.log(gotresult);

// 4. is ispublicbus problem solving

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





// 5. is best friend problem solving

function isBestFriend() {
    
}
const nameProvide = isBestFriend ({ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" })
