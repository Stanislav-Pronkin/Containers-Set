// TODO: write your code here
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен');
    } else {
      this.members.add(character);
    }
  }

  addAll(...args) {
    args.forEach((element) => {
      this.members.add(element);
    });
  }

  toArray() {
    return [...this.members];
  }
}
