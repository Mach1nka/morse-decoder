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
  let res='';
  let slicer =0;
  let letter;
  for(let i=0; i<expr.length;i+=10){
    let morse ='';
    letter = expr.slice(slicer ,slicer+10);
    slicer+=10;
    if(letter[0]==='*'){
      res +=' ';
      continue;
    }
    for(let k = 0; k<letter.length;k+=2){
      switch(letter.slice(k,k+2)){
        case '10':
        morse += '.';
        break;
        case '11':
        morse += '-';
        break;
        default:break;
      }
    }
    res += MORSE_TABLE[morse]
  }
  return res;
}

module.exports = {
    decode
}
