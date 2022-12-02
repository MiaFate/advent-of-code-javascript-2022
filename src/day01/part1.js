// Advent of Code - Day 1 - Part One

export function part1(input) {

  const elvesByCalories = input.split("\n\n");
  
  const elvesByFood = elvesByCalories.map((elf)=>{
    return elf.split("\n").reduce((food, calories)=> food + Number(calories),0);
  });

  return Math.max(...elvesByFood);

}
