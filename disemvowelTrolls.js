function disemvowel(str) {
  
  let vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
  let str1 = str.split('')
  let newArr2 = str1.filter( x => !vowels.includes(x))
  return newArr2.join('');
}
