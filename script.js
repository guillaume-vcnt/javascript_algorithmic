//1 - Trouver le plus grand nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre. Si le tableau est vide, retourne null.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxNumber = findMaximum(numbers);

console.log("The largest number:", maxNumber);

function findMaximum(array) {
  if (array.length === 0) {
    return null;
  }
  return Math.max(...array);
}

//1.1 - Trouver le plus grand nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("The largest number:", findMax(numbers));

function findMax(array) {
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

//2 - Trouver le plus petit nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus petit nombre. Si le tableau est vide, retourne null.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const minNumber = findMinimum(numbers);

console.log("The smallest number:", minNumber);

function findMinimum(array) {
  if (array.length === 0) {
    return null;
  }
  return Math.min(...array);
}

//2.1 - Trouver le plus petit nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus petit nombre.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("The smallest number:", findMin(numbers));

function findMin(array) {
  let minNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

//3 - Trouver le plus petit et le plus grand nombre dans un tableau : Écris une fonction qui retourne le plus petit et le plus grand nombre d’un tableau.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log("Original:", numbers);
console.log("Sorted:", sortedNumbers);
console.log(findMinMax(sortedNumbers));

function findMinMax(array) {
  const minNumber = array[0];
  const maxNumber = array[array.length - 1];
  console.log(minNumber);
  console.log(maxNumber);
  return { min: minNumber, max: maxNumber };
}

//4 - Supprimer les doublons d’un tableau : Écris une fonction qui retourne un tableau sans doublons.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArrayNumbers = removeDuplicates(numbers);

console.log(newArrayNumbers);

function removeDuplicates(array) {
  const uniqueValues = new Set(array);
  return [...uniqueValues];
}

//5 - Supprimer les doublons d’un objet : Écris une fonction qui retourne un objet sans doublons.

const uniqueCharacters = removeDuplicateObjects(characters);

console.log(uniqueCharacters);

const characters = [
  { name: "Frodon" },
  { name: "Sam" },
  { name: "Gandalf" },
  { name: "Frodon" },
  { name: "Aragorn" },
];

function removeDuplicateObjects(array) {
  const seenItem = new Set();
  return array.filter((item) => {
    if (seenItem.has(item.name)) {
      return false;
    } else {
      seenItem.add(item.name);
      return true;
    }
  });
}

//6 - Vérifier si une chaîne de caractères est un palindrome : Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche) et retourne true si c’est un palindrome, false sinon.

const words = ["kayak", "banana", "New York"];
const testingWord = words.map((element) => isPalindrome(element));

console.log(testingWord);

function isPalindrome(word) {
  const cleanedWord = word.toLowerCase().replace(/\s+/g, "");
  const reversedWord = cleanedWord.split("").reverse().join("");
  return reversedWord === cleanedWord;
}

//7 - Inverser un tableau : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruits = ["apple", "strawberry", "orange", "kiwi", "banana"];

console.log("Original:", fruits);
console.log("Reversed:", reverseArray(fruits));

function reverseArray(fruit) {
  const reversedFruits = [...fruit].reverse();
  return reversedFruits;
}

//7.1 - Inverser un tableau avec une boucle for : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruits = ["apple", "strawberry", "orange", "kiwi", "banana"];

console.log("Reversed2:", reverseArray(fruits));

function reverseArray(fruit) {
  const reversedFruits = [];
  for (let i = fruit.length - 1; i >= 0; i--) {
    reversedFruits.push(fruit[i]);
  }
  return reversedFruits;
}

//8 - Inverser une chaîne de caractères : Écris une fonction qui inverse les lettres d’un mot. Ex: "chat" => "tahc"

const dogBreed = "Husky";

console.log(reverseString(dogBreed));

function reverseString(string) {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
}

//8.1 - Inverser une chaîne de caractères avec une boucle for : Écris une fonction qui inverse les lettres d’un mot. Ex: "cat" => "tac"

const dogBreed = "Husky";

console.log(reverseString(dogBreed));

function reverseString(string) {
  if (typeof string === "string") {
    console.log("is string");
  } else {
    throw new Error("is not a string");
  }
  let reversedString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }
  return reversedString.join("");
}

//9 - Compter les caractères dans une chaîne : Écris une fonction qui retourne le nombre de chaque caractère.

const alphabet = ["a", "b", "c", "b", "e", "e", "c", "b"];

console.log(countChars(alphabet));

function countChars(array) {
  const numberOfChars = {};

  array.forEach((element) => {
    if (numberOfChars[element]) {
      numberOfChars[element] = numberOfChars[element] + 1;
    } else {
      numberOfChars[element] = 1;
    }
  });
  return numberOfChars;
}

//10 - Compter les caractères uniques dans une chaîne : Écris une fonction qui retourne le nombre de caractères uniques dans une chaîne.

const titleMovie = "The Lord of the Rings";

console.log("Number of unique characters:", uniqueChar(titleMovie));

function uniqueChar(string) {
  const splitedString = string.split(" ").join("");
  const unique = new Set(splitedString);

  console.log("Unique characters:", [...unique]);

  return unique.size;
}

//10.1 - Compter les caractères uniques dans une chaîne avec boucle for : Écris une fonction qui retourne le nombre de caractères uniques dans une chaîne.

const titleMovie = "The Lord of the Rings";

console.log("Number of unique characters:", uniqueChar(titleMovie));

function uniqueChar(string) {
  const unique = [];
  const splitedString = string.split(" ").join("");
  console.log(splitedString);
  for (let i = 0; i < splitedString.length; i++) {
    if (!unique.includes(splitedString[i])) {
      unique.push(splitedString[i]);
    }
  }
  console.log("Unique characters:", unique);
  return unique.length;
}

//11 - Compter les nombres uniques dans un tableau : Écris une fonction qui retourne combien de nombres uniques il y a dans un tableau.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(uniqueNumbersCount(numbers));

function uniqueNumbersCount(array) {
  const unique = new Set(array);
  return unique.size;
}

//12 - Compter le nombre de fois que chaque valeur apparaît dans un tableau : Écris une fonction qui retourne combien de fois chaque valeur apparaît dans le tableau.

const letters = ["a", "b", "c", "b", "e"];

console.log(countOccurrences(letters));

function countOccurrences(array) {
  return array.reduce((accumulator, value) => {
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
  }, {});
}

//13 - Trouver combien de nombres pairs il y a dans un tableau : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(countEvenNumbers(numbers));

function countEvenNumbers(array) {
  return array.filter((nb) => nb % 2 === 0).length;
}

//13.1 - Trouver combien de nombres pairs il y a dans un tableau avec une boucle for : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Total count of even numbers: ", countEvenNumbersWithLoop(numbers));

function countEvenNumbersWithLoop(array) {
  let sum = 0;
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += 1;
      evenNumbers.push(array[i]);
    }
  }
  console.log("Even numbers: ", evenNumbers);
  console.log("Total even numbers: ", sum);
  return sum;
}

//14 - Trouver la somme des nombres pairs dans un tableau : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(calculateSumOfEvenNumbers(numbers));

function calculateSumOfEvenNumbers(array) {
  const sumOfEvenNumbers = array
    .filter((element) => element % 2 === 0)
    .reduce((accumulator, element) => accumulator + element, 0);
  return sumOfEvenNumbers;
}

//14.1 - Trouver la somme des nombres pairs dans un tableau avec une boucle for : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  "Sum of even numbers: ",
  calculateSumOfEvenNumbersWithLoop(numbers)
);

function calculateSumOfEvenNumbersWithLoop(array) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

//15 - Trouver tous les nombres pairs et les classer par ordre décroissant : Écris une fonction qui retourne un tableau de nombres pairs triés du plus grand au plus petit.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getEvenNumbersSortedDescending(numbers));

function getEvenNumbersSortedDescending(array) {
  const evenNumbers = array
    .filter((element) => element % 2 === 0)
    .sort((a, b) => b - a);
  return [...new Set(evenNumbers)];
}

//16 - Vérifier si un nombre est premier : Écris une fonction qui vérifie si un nombre est un nombre premier.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((element) => isPrime(element));

function isPrime(nb) {
  if (nb <= 1) {
    console.log(`${nb} is not a prime number`);
    return false;
  }

  for (let j = 2; j < nb; j++) {
    if (nb % j === 0) {
      console.log(`${nb} is not a prime number`);
      return false;
    }
  }

  console.log(`${nb} is a prime number`);
  return true;
}

//17 - Trouver le nombre le plus proche de zéro : Écris une fonction qui prend un tableau de nombre et retourne le nombre le plus proche de zéro

const numbers = [7, -2, 3, -1, 5];

console.log(closestToZero(numbers));

function closestToZero(array) {
  let closestValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (Math.abs(array[i]) < Math.abs(closestValue)) {
      closestValue = array[i];
    }
  }
  return closestValue;
}

//18 - Compter les voyelles dans une chaîne : Écris une fonction qui retourne le nombre de voyelles dans une chaîne (a, e, i, o, u, y).

const titleMovie = "The Lord of the Rings";
const numberOfVowels = countVowels(titleMovie);

console.log(numberOfVowels);

function countVowels(string) {
  const vowelsSet = "aeiouy";
  return [...string.toLowerCase()].filter((element) =>
    vowelsSet.includes(element)
  ).length;
}

//18.1 - Compter les voyelles dans une chaîne avec une boucle for : Écris une fonction qui retourne le nombre de voyelles dans une chaîne (a, e, i, o, u, y).

const titleMovie = "The Lord of the Rings";
const numberOfVowels = countVowels(titleMovie);

console.log(numberOfVowels);

function countVowels(string) {
  const vowelsSet = "aeiouyAEIOUY";
  let count = 0;
  const cleanedString = string.replace(/\s+/g, "").split("");
  for (let i = 0; i < cleanedString.length; i++) {
    if (vowelsSet.includes(cleanedString[i])) {
      count++;
    }
  }
  return count;
}

//18.2 - Compter les voyelles dans une chaîne avec une boucle for of : Écris une fonction qui retourne le nombre de voyelles dans une chaîne (a, e, i, o, u, y).

const titleMovie = "The Lord of the Rings";
const numberOfVowels = countVowels(titleMovie);

console.log(numberOfVowels);

function countVowels(string) {
  const vowelsSet = "aeiouy";
  let count = 0;
  for (const char of string.toLowerCase()) {
    if (vowelsSet.includes(char)) {
      count++;
    }
  }
  return count;
}

//19 - Trouver le mot le plus long dans une chaîne : Écris une fonction qui retourne le mot avec le plus grand nombre de caractères.

const titleMovie = "The Lord of the Rings";

console.log(findLongestWord(titleMovie));

function findLongestWord(string) {
  const splitedwWords = string.split(" ");
  let longestWord = splitedwWords[0];
  for (let i = 1; i < splitedwWords.length; i++) {
    if (splitedwWords[i].length > longestWord.length) {
      longestWord = splitedwWords[i];
    }
  }
  return longestWord;
}

//20 - Vérifier une anagramme : Écris une fonction qui vérifie si deux mots sont des anagrammes. Deux mots sont des anagrammes s’ils contiennent exactement les mêmes lettres, mais dans un ordre différent.

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("Paris", "piras"));
console.log(checkAnagram("hello", "world"));

function checkAnagram(word1, word2) {
  let cleanedWord1 = word1.toLowerCase().replace(/\s/g, "");
  let cleanedWord2 = word2.toLowerCase().replace(/\s/g, "");

  if (cleanedWord1.length !== cleanedWord2.length) {
    console.log(`${word1} and ${word2} are not anagrams`);
    return false;
  }

  let sortedWord1 = cleanedWord1.split("").sort().join("");
  let sortedWord2 = cleanedWord2.split("").sort().join("");

  if (sortedWord1 === sortedWord2) {
    console.log(`${word1} and ${word2} are anagrams`);
    return true;
  } else {
    console.log(`${word1} and ${word2} are not anagrams`);
    return false;
  }
}

//20.1 - Vérifier une anagramme avec une boucle for : Écris une fonction qui vérifie si deux mots sont des anagrammes. Deux mots sont des anagrammes s’ils contiennent exactement les mêmes lettres, mais dans un ordre différent.

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("Paris", "piras"));
console.log(checkAnagram("hello", "world"));

function checkAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    console.log(`${word1} and ${word2} are not Anagrams`);
    return false;
  }

  let word2Copy = word2;

  for (let i = 0; i < word1.length; i++) {
    if (word2Copy.includes(word1[i])) {
      word2Copy = word2Copy.replace(word1[i], "");
    } else {
      console.log(`${word1} and ${word2} are not Anagrams`);
      return false;
    }
  }
  console.log(`${word1} and ${word2} are Anagrams`);
  return true;
}

//21 - Détecter si un tableau est trié : Écris une fonction qui retourne true si les éléments d’un tableau sont dans l’ordre croissant ou décroissant.

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));

function isSorted(array) {
  let isAscending = true;
  let isDescending = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isAscending = false;
    }
    if (array[i] > array[i - 1]) {
      isDescending = false;
    }
  }

  return isAscending || isDescending;
}

//22 - Une chaîne est un isogramme si aucune lettre ne se répète : Écris une fonction isIsogram(str) qui retourne true si c'est le cas, sinon false.

console.log(isIsogram("Luthien")); // true
console.log(isIsogram("Aragorn")); // fals

function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  return new Set(lowerStr).size === lowerStr.length;
}

// 23 - Dans un tableau d'entiers où tous les nombres sont identiques sauf un, retrouve celui qui est différent : Écris une fonction findIntruder qui retourne l'intrus ou null s'il n'y en a pas.

console.log(findIntruder([1, 1, 1, 2, 1, 1]));
console.log(findIntruder([1, 1, 1, 1, 1, 1]));
console.log(findIntruder([0, 0, 0.55, 0, 0]));
console.log(findIntruder([0, 5]));
console.log(findIntruder([]));

function findIntruder(array) {
  if (array.length === 0 || array.length < 3) return null;

  const sameValues = new Set(array);

  if (sameValues.size < 2) return null;

  const referenceValue = array[0];
  const matchingValues = [];
  const differentValues = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === referenceValue) {
      matchingValues.push(array[i]);
    } else {
      differentValues.push(array[i]);
    }
  }

  if (matchingValues.length < differentValues.length) {
    return matchingValues[0];
  } else {
    return differentValues[0];
  }
}

// 24 - Trouve la somme des deux plus petits entiers dans un tableau : Écris une fonction findSumOfTwoSmallestNumbers qui retourne la somme des deux plus petits nombres d'un tableau. Retourne null si le tableau contient moins de deux éléments.

console.log(findSumOfTwoSmallestNumbers([5, 12, 8, 19, 22]));

function findSumOfTwoSmallestNumbers(numbers) {
  if (numbers.length < 2) {
    return null;
  }
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
}

//25 - Convertir un tableau d’objets : Écris une fonction updateObj qui prend en paramètre un tableau d’objets contenant des personnages et leurs rôles. La fonction doit retourner un objet où chaque clé correspond au nom du personnage et chaque valeur à son rôle.

console.log(updateObj(characters));

const characters = [
  { name: "Frodo", role: "Ring Bearer" },
  { name: "Sam", role: "Gardener" },
  { name: "Legolas", role: "Archer" }
];

function updateObj(array) {
  return array.reduce((acc, value) => {
    acc[value.name] = value.role;
    return acc;
  }, {});
}

//26 - Trouve le nombre manquant : Écris une fonction findMissingNumber qui retourne le nombre manquant d'une séquence contenant des entiers allant de 1 à N. Un seul nombre est manquant dans la séquence.
//Contraintes : Tu n’as pas le droit d’utiliser sort().

console.log(findMissingNumber([6, 1, 2, 4, 5])); 
console.log(findMissingNumber([1, 2, 3, 5, 6])); 

function findMissingNumber(array) {
  const numberSet = new Set(array);
  const maxNumber = Math.max(...array);
  for (let i = 1; i <= maxNumber; i++) {
    if (!numberSet.has(i)) {
      return i;
    }
  }
