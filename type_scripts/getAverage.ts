

function getAverage(a: number, b: number, c?: number): string {
        let  total = a;
        let  count = 1;

        total += b;
        count++;

        if (typeof c !== 'undefined') {
            total += c;
            count++;
        }

        let  average = total / count;
        return 'The average is ' + average;
    }

    let  result = getAverage(4, 6);
    console.log(result);
    let  result2 = getAverage(4, 6,8);
    console.log(result2);