//      ####  Problem statement  ####

// The Western Suburbs Croquet Club has two categories
// of membership, Senior and Open. They would like your
// help with an application form that will tell prospective
// members which category they will be placed.

// To be a senior, a member must be at least 55 years old
// and have a handicap greater than 7. In this croquet club,
// handicaps range from -2 to +26; the better the player the
// lower the handicap.

// Input

// Input will consist of a list of pairs. Each pair contains
// information for a single potential member. Information
// consists of an integer for the person's age and an integer
// for the person's handicap.

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

export function openOrSenior(data: number[][]): string[] {
  const ranks: string[] = data.map((playerData) => {
    if (
      playerData[0] >= 55 &&
      playerData[0] <= 110 &&
      playerData[1] > 7 &&
      playerData[1] <= 26
    ) {
      return "Senior";
    } else {
      return "Open";
    }
  });

  return ranks;
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);
