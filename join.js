const myColor = ["Red", "Green", "White", "Black"];
const output1 =  '"'+myColor.join(",")+'"';
const output2 = '"'+ myColor.join(",")+'"';
const output3 = '"'+myColor.join('+')+'"';                                           
document.write(output1 + '<br>');
document.write(output2 + '<br>');
document.write(output3);
