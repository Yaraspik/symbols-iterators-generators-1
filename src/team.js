export default class Team {
  constructor() {
    this.characters = [
      {
        name: 'Зомби',
        type: 'Zombie',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Маг',
        type: 'Magician',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
    this.teamLength = 2;
  }

  [Symbol.iterator]() {
    let count = 0;
    const { characters } = this;
    const { teamLength } = this;
    return {
      next() {
        if (count > teamLength - 1) {
          return {
            value: undefined,
            done: true,
          };
        }
        const char = characters[count];
        count += 1;
        return {
          value: char,
          done: false,
        };
      },
    };
  }
}

const team = new Team();
for (const item of team) {
  console.log(item);
}
