const Calculate = {
    factorial(inputNumber) {
      if (inputNumber === 0) {
        return 1
      }
  
      let result = inputNumber
      for (let i = inputNumber - 1; i > 0; i--) {
        result *= i
      }
      return result
    }
  }
  
  module.exports = Calculate;
  
  
  