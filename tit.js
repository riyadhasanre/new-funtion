function radianToDegree(radian) {
    let angle = radian * 180 / 3.1416;
    let valu = angle.toFixed(2);
    return valu;
}
     
let result = radianToDegree(10);

console.log(result);
    
const filename = 'app.js';

    console.log(filename.endsWith('Net'));
    console.log(filename.endsWith('app.js'));