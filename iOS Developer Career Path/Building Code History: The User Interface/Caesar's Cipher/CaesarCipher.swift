let alphabet: [Character] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let secretMessage = "codecademy"
var message = Array(secretMessage.lowercased())

for i in 0...message.count - 1 {
  for j in 0...alphabet.count - 1 {
    if message[i] == alphabet[j] {
      message[i] = alphabet[(j + 3) % 26]
      break
    }
  }
}

let messageString = String(message)

print(messageString)