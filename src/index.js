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
    let encodedString = '';
    let arr = expr.match(/.{1,10}/g);
    for (let i = 0; i < arr.length; i++) {
        let arrEncoded = [];
        if (arr[i] === '**********') {
            encodedString +=' ';
        } else {
            arr[i].replace(/(00)|(10)|(11)/g, function(match, p1, p2, p3) {
                if (p1) { arrEncoded.push('') }
                if (p2) { arrEncoded.push('.') }
                if (p3) { arrEncoded.push('-') }
              });
              encodedString += `${MORSE_TABLE[arrEncoded.join('')]}`;
        }
    }
    return encodedString
}

module.exports = {
    decode
}