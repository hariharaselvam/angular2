function getAverage(a: string, b: string, c: string): string;
function getAverage(a: number, b: number, c: number): string;

function getAverage(a: any, b: any, c: any): string {
    let  total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    let  average = total / 3;
    return 'The average is ' + average;
}
//let  result = getAverage("4", "3", "8");
//console.log(result);
let  result = getAverage(1, 2, 3);
console.log(result);