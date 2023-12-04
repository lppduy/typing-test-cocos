function calculateWPM(sampleText, inputText, minutes = 1) {
  const sampleWordsArr = sampleText.split(' ');
  const userWordsArr = inputText.split(' ');

  let correctWords = 0;
  for (let i = 0; i <= sampleWordsArr.length; i++) {
    if (sampleWordsArr[i] === userWordsArr[i]) {
      correctWords++;
    }
  }

  return correctWords / minutes;
}

// // Sử dụng hàm calculateWPM
const sampleText = 'Đây afdffdsf ';
const inputText = 'Đây là đoạn nhập từ người dùng';

const wpm = calculateWPM(sampleText, inputText);
console.log('Số từ mỗi phút:', wpm);

module.exports = { calculateWPM };
