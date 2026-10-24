// Solution for the 5862f663b4e9d6f12b00003b problem at CodeWars - Training on Thinkful: Number Drills: blue and red marbles (8 kyu)

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const remainingRed = redStart - redPulled
  const remainingBlue = blueStart - bluePulled
  return remainingBlue / (remainingRed + remainingBlue);
}