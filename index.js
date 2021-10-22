const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let censoredWords = ["amet", "adipisicing", "duis"];
let replacedWords = 0;
let modifiedText = text;
const UNCENS = "Uncensored version: ";
const CENS = "Censored version: ";
const REPLACED_WORDS = "Number of replaced words: "
const REPLACE_FOR = "*WatchIt*";

function watchYourLanguage (str, word) {
  replacedWords++;
  const wordRegex = new RegExp(word, "i");
  return str.replace(wordRegex, REPLACE_FOR);
}

for(let i = 0; i < censoredWords.length; i++){
  console.log(text.toLowerCase().includes(censoredWords[i]));
  if(text.toLowerCase().includes(censoredWords[i])){
    modifiedText = watchYourLanguage(modifiedText, censoredWords[i]);
  }
}

console.log(UNCENS + text);
console.log(CENS + modifiedText);
console.log(REPLACED_WORDS + replacedWords);