// Add new functions, variables here

function deciToBinary(input) {
  let string = ""
  while (input != 0) {
    if (input % 2 == 0) {
      string = 0 + string;
      input /= 2;
    } else {
      string = 1 + string;
      input = (input / 2) - 0.5
    }
  }
  return string
}



function toBinaty(input,hex=[],hexCount=[]){
  let string = '';
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < hex.length; j++) {
      if (input[i] == hexCount[j]) {
        string = string + hex[j];
        break;
      }
    }
  }
  for (let index = 0; index < string.length; index++) {
    if (string[index] == 1 ) {
      string = string.substring(index)
      break;
    }
  }

  // return parseInt(string).toString();
  return string
}
function binaryToDecimal(input){
  let temp=0;
  let dec=0;
  for (let i = input.length-1; i > -1; i--) {
    if (input[i]==1) {
      dec = dec + (2**temp);
    }
    temp++;
  }
  console.log(dec)
  return dec;
}

function binaryToHexa(input) {
  let arr = []
  while (input.length % 4 != 0) {
    input = 0 + input;
  }
  for (let i = input.length - 1; i > -1; i -= 4) {
    arr.unshift(input[i - 3] + input[i - 2] + input[i - 1] + input[i])
  }
  return arr;
}

function binaryToOctal(input) {
  let arr = []
  while (input.length % 3 != 0) {
    input = 0 + input;
  }
  for (let i = input.length - 1; i > -1; i -= 3) {
    arr.unshift(input[i - 2] + input[i - 1] + input[i])
  }
  return arr;
}

function convert(arr = [],hex=[],hexCount=[]) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < hex.length; j++) {
      if (arr[i] == hex[j]) {
        string = string + hexCount[j];
        break;
      }
    }
  }
  console.log(string)
}

function main(input) {
  let hex = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111']
  let hexCount = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "A", "B", "C", "D", "E", "F"]

  let oct = ['000', '001', '010', '011', '100', '101', '110', '111']
  let octCount = ['0', '1', '2', '3', '4', '5', '6', '7']

  let temp = input.split(" ")
  if (temp[1] == 2) {
    if (temp[2] == 10) {
      binaryToDecimal(temp[0])
    }else if (temp[2]==8) {
      convert(binaryToOctal(temp[0]),oct,octCount)
    }else if (temp[2]==16) {
      convert(binaryToHexa(temp[0]),hex,hexCount)
    }
  }else if (temp[1] == 10) {
    if (temp[2] == 2) {
      console.log(deciToBinary(temp[0]))
    }else if (temp[2]==8) {
      convert(binaryToOctal(deciToBinary(temp[0])),oct,octCount);
    }else if (temp[2]==16) {
      convert(binaryToHexa(deciToBinary(temp[0])),hex,hexCount);
    }
  }else if (temp[1] == 8) {
    if (temp[2] == 2) {
      console.log(toBinaty(temp[0],oct,octCount))
    }else if (temp[2] == 10) {
      binaryToDecimal(toBinaty(temp[0],oct,octCount))
    }else if (temp[2] == 16) { 
      convert(binaryToHexa(toBinaty(temp[0],oct,octCount)),hex,hexCount)
    }
  }else if (temp[1] == 16) {
    if (temp[2]==2) {
      console.log(toBinaty(temp[0],hex,hexCount))
    }else if (temp[2] == 10) {
      binaryToDecimal(toBinaty(temp[0],hex,hexCount))
    }else if (temp[2] == 8) {      
      convert(binaryToOctal(toBinaty(temp[0],hex,hexCount)),oct,octCount)
    }
  }
  //console.log(binaryToDecimal(toBinaty(input,oct,octCount)))
}

module.exports = main;
