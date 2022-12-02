// Advent of Code - Day 1 - Part Two

export function part2(input) {

  const elvesByCalories = input.split("\n\n");
  
  const elvesByFood = elvesByCalories.map((elf)=>{
    return elf.split("\n").reduce((food, calories)=> food + Number(calories),0);
  });
  
  elvesByFood.sort((a,b)=>b-a);

  const topThreeElvesTotal = elvesByFood[0]+elvesByFood[1]+elvesByFood[2];

  return topThreeElvesTotal;
}
