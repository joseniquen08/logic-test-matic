export const countReps = (text: string) => {
  if (text !== "") {
    const array_words: string[] = text.split(" ");
    const new_array_words: string[] = array_words.map((word: string): string => word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-?_`~()]/g,""));
    let object_words: {[key: string]: number} = {};
    new_array_words.forEach((word: string) => {
      if (word in object_words) {
        for (const [key, value] of Object.entries(object_words)) {
          Object.assign(object_words, {
            [key]: key === word ? value + 1 : value
          });
        }
      } else {
        Object.assign(object_words, {
          [word]: 1
        });
      }
    });
    return object_words;
  } else {
    throw new Error('invalid length');
  }
}

console.log(countReps("Hi how are things? How are you? Are you a developer? I am also a developer"));
