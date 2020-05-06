  function NumInWords(number) {
    const units = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
    const tensNumber = ['', '', 'Twenty','Thirty','Forty','fifty', 'Sixty','Seventy','Eighty','Ninety'];
    const aboveThousand = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
    let word = '';
    if(number<0 || number == 0 ) {
        return "Kindly don't enter negative or zero!!";
    } else if(number> 999999999999999) {
        return 'Number exceed more than trillion!'
    } else {
    for (let i = 0; i < aboveThousand.length; i++) {
      let changeNumber = number%(100*Math.pow(1000,i));
      if (Math.floor(changeNumber/Math.pow(1000,i)) !== 0) {
        if (Math.floor(changeNumber/Math.pow(1000,i)) < 20) {
          word = units[Math.floor(changeNumber/Math.pow(1000,i))] + aboveThousand[i] + ' ' + word;
        } else {
          word = tensNumber[Math.floor(changeNumber/(10*Math.pow(1000,i)))] + '-' + units[Math.floor(changeNumber/Math.pow(1000,i))%10] + aboveThousand[i] + ' ' + word;
        }
      }
      changeNumber = number%(Math.pow(1000,i+1));
      if (Math.floor(changeNumber/(100*Math.pow(1000,i))) !== 0) word = units[Math.floor(changeNumber/(100*Math.pow(1000,i)))] + 'Hunderd ' + word;
    }
 } 
    return word; 
}

function getInput() {
    var number = document.getElementById("inputTextValue").value;
    document.getElementById("convertedToWords").innerHTML = NumInWords(number)
}

 

