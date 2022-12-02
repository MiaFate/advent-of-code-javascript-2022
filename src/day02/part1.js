// Advent of Code - Day 2 - Part One

export function part1(input) {
  /*
* A X ROCK 1
* B Y PAPER 2
* C Z SCISSOR 3
*
* WIN 6
* TIE 3
* LOSE 0
   */
  const scoreTable = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6,
  };
  
  const games = input.trim().split("\n")
  
  let totalScore = 0;

  games.forEach(game => {
    totalScore=totalScore+scoreTable[game]
  });

  return totalScore;
  }
