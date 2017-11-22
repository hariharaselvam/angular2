 function reverse<T>(list: T[]): T[] {
        var reversedList: T[] = [];
        for (var i = (list.length - 1); i >= 0; i--) {
            reversedList.push(list[i]);
        }
        return reversedList;
    }

    var letters = ['a', 'b', 'c', 'd'];
    var reversedLetters = reverse<string>(letters);
    console.log(reversedLetters);

    var numbers = [1, 2, 3, 4];
    var reversedNumbers = reverse<number>(numbers);
    console.log(reversedNumbers);