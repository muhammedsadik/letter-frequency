const enterText = "Enter A Text :";
const invalidEntry = "Invalid Entry.";
const turkish = "tr";
const str = "";
const strSpace = " ";


const text = prompt(enterText);
const letterCount = {};

if (text) {

  let newText = text.trim().split(str).filter(t => t !== strSpace);

  for (let item of newText) {

    item = item.toLocaleLowerCase(turkish);

    if (letterCount[item]) letterCount[item]++;
    else letterCount[item] = 1;
  }

  if (Object.keys(letterCount).length > 0) {
    console.log(letterCount);
  }

} else {
  alert(invalidEntry);
}