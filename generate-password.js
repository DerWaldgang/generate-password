function generatePassword(length, level, count = 1) { // ПАРОЛИ НЕ СОВСЕМ РАНДОМНЫЕ ТАК КАК digit>alphabet>symbol

  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
  let newPasswordEasy = []


  for (let i = 0; i < count; i++) {
    if (level === 'easy') {
      for (let i = 0; i < length; i++) {
        const randomAlphabet = alphabet.charAt([Math.floor(Math.random() * alphabet.length)]) // я умею брать один случайный символ 
        newPasswordEasy.push(randomAlphabet) // newpassword будет строкой 
      }
    } else if (level === 'medium') {
      for (let i = 0; i < length; i++) {
        const randomAlphDig = alphabet.concat('', digits)
        let one_symbol = randomAlphDig.charAt([Math.floor(Math.random() * randomAlphDig.length)])
        newPasswordEasy.push(one_symbol)  // newpassword будет массивом
      }
    } else if (level === 'hard') {
      for (let i = 0; i < length; i++) {
        const randomAlphDigSymb = alphabet.concat('', digits, symbols)
        let one_symbol = randomAlphDigSymb.charAt([Math.floor(Math.random() * randomAlphDigSymb.length)])
        newPasswordEasy.push(one_symbol)  // newpassword будет массивом
      }
    }
  }

  let manyPasswords = []

  if (count !== 1) {
    for (let i = 0; i < count; i++) {
      let arr = ''
      for (let j = 0; j < length; j++) {
        arr += newPasswordEasy[0]
        newPasswordEasy.splice(0, 1)
      }
      manyPasswords.push(arr) // ['HOMhg', 'pTTaz'] 
    }

  }

  return count > 1 ? manyPasswords : newPasswordEasy.join('')
}
// console.log(newPassword) // Я добавляю 10 строчек, так как count 2 
// console.log(typeof newPassword) //.join('')


console.log(generatePassword(10, 'easy',10 ))
// generatePassword(10, 'hard')


/*Данная подзадача имеет высокий уровень сложности.
Её нужно решить самостоятельно, без чьей-либо помощи. 
Если найти решение не удаётся, то разрешается не выполнять её.

Если передан третий параметр, то есть малая вероятность, что пароли будут дублироваться. 
Чем короче пароль, тем больше эта вероятность.
Доработай добавление паролей в массив так, чтобы перед каждым добавлением проводилась проверка, 
существует ли такой элемент. Если такой пароль уже есть в массиве, то нужно сгенирировать новый.*/