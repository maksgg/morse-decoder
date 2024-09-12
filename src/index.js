const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let objKeysArr = [];
  for( let key in MORSE_TABLE) {
    
    objKeysArr = key.split('');
    const mainArr = objKeysArr.map((item) => item == '.' ? 11 : 10);
    /* console.log(mainArr) */
    const targetLength = 5;
    let zero = '00';
    
    while(mainArr.length < targetLength) {
      mainArr.unshift(zero);
    /*  console.log(mainArr); */
    }
    
    objKeysArr[key] = mainArr.join('');
    
    /* console.log(objKeysArr[key]); */

    if(objKeysArr) {
      console.log(objKeysArr[key])
    }
  }
}

module.exports = {
    decode
}