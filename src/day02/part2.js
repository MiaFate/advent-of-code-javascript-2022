// Advent of Code - Day 2 - Part Two

export function part2(input) {
/*
* A, ROCK 1 point
* B, PAPER 2 points
* C, SCISSOR 3 points
* X, LOSE = 0 points
* Y, DRAW = 3 points
* Z, WIN = 6 points
*/

 const scoreTable = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7,
  };

  const games = input.trim().split("\n")
  
  let totalScore = 0;

  games.forEach(game => {
    totalScore=totalScore+scoreTable[game]
  });


  return totalScore;
}
