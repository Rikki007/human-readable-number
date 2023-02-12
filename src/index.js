module.exports = function toReadable (number) {
    const num = number.toString();
    const oneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
    const twoDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const roundTwoDigit = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const roundThreeDigit = 'hundred';
    if (num.length === 1) {
      return oneDigit[number];
    }
    if (num.length === 2 && number < 20) {
      return twoDigit[number - 10];
    }
    if ((num.length === 2) && (number % 10 === 0) && (number < 100)) {
      return roundTwoDigit[number / 10];
    }
    if (num.length === 2 && number > 19 && number < 100) {
      let mas = num.split('');
      return (`${roundTwoDigit[mas[0]]} ${oneDigit[mas[1]]}`);
    }
    if (num.length === 3 && number % 100 === 0) {
      let mas = num.split(''); 
      return (`${oneDigit[mas[0]]} hundred`)
    }
    if (num.length === 3 && num[1] === '0') {
      let mas = num.split('');
      return (`${oneDigit[mas[0]]} hundred ${oneDigit[mas[2]]}`)
    }
    if (num.length === 3 && num[1] === '1') {
      let mas = num.split('');
      return (`${oneDigit[mas[0]]} hundred ${twoDigit[mas[2]]}`)
    }
    if ((num.length === 3) && (number % 10 === 0)) {
       let mas = num.split('');
      return (`${oneDigit[mas[0]]} hundred ${roundTwoDigit[mas[1]]}`)
    } else {
      let mas = num.split('');
      return (`${oneDigit[mas[0]]} hundred ${roundTwoDigit[mas[1]]} ${oneDigit[mas[2]]}`)
    }
}
