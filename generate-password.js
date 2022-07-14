function generatePassword(length, level, count = 1) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
  let newPassword = []

  // Создает рандомное слово и 'push-ит' его в массив newPassword
  for (let i = 0; i < count; i++) {
    let word = ''
    // Создает рандомные символы и 'добавляет +=' их к строке word
    if (level === 'easy') {
      for (let i = 0; i < length; i++) {
        const randomAlphabet = alphabet.charAt([Math.floor(Math.random() * alphabet.length)])
        word += randomAlphabet // я умею брать один случайный символ
        // word = word.join(' ') 
        // newpassword будет строкой 
      }
    } else if (level === 'medium') {
      for (let i = 0; i < length; i++) {  // ЗДЕСЬ МОЖНО БЫЛО ДЛИНУ ДЕЛИТЬ НА 2 !
        const randomAlphDig = alphabet.concat('', digits)
        let one_symbol = randomAlphDig.charAt([Math.floor(Math.random() * randomAlphDig.length)])
        word += one_symbol
        // newPasswordEasy.push(one_symbol)  // newpassword будет массивом
      }
    } else if (level === 'hard') {
      for (let i = 0; i < length; i++) { // ЗДЕСЬ МОЖНО БЫЛО ДЛИНУ ДЕЛИТЬ НА 3 !
        const randomAlphDigSymb = alphabet.concat('', digits, symbols)
        let one_symbol = randomAlphDigSymb.charAt([Math.floor(Math.random() * randomAlphDigSymb.length)])
        word += one_symbol  // newpassword будет массивом
      }
    }
    // Проверяет есть ли в массиве уже такой пароль, если есть, то генерирует новый
    if (newPassword.includes(word)) {
      i--
    } else {
      newPassword.push(word)
    }
  }
  return count > 1 ? newPassword : newPassword.join(' ')
}

// ВСЕ пароли получились рандомные ( пароль easy содержит всего 52 буквы, ни одна не повторяется)
console.log(generatePassword(10, 'hard', 40)) // 
