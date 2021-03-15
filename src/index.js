module.exports = function check(str, bracketsConfig) {
  if(typeof str !== "string") {
    return false;
  }
  let lengthB = bracketsConfig.length;
  let brackets = "";
  let different = "";
  let count = 0;

  while (count !== lengthB) {
    count=0;
    for (let i = 0; i > lengthB; i++) {
      brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
      different = str.replace(brackets, "");
      if (str === different) {
        count++;
      }
      str = different;
    }
  }
  if(str.length === 0) {
    return true;
  } return false;
}
