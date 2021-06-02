import Team from '../app';

test('Add character to team', () => {
  const team = new Team();

  expect(team).toEqual({ members: new Set() });
});

test('Add character to team', () => {
  const team = new Team();
  const bowerman = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Bowerman',
  };

  const expected = new Set([bowerman]);
  team.add(bowerman);

  expect(team).toEqual({ members: expected });
});

test('Add character to team', () => {
  expect(() => {
    const team = new Team();
    const bowerman = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Bob',
      type: 'Bowerman',
    };

    team.add(bowerman);
    team.add(bowerman);
  }).toThrow('Персонаж уже добавлен');
});

test('Add character to team', () => {
  const team = new Team();
  const bowerman = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Bowerman',
  };
  const daemon = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Daemon',
  };
  const expected = new Set([bowerman, daemon]);

  team.addAll(bowerman, daemon);

  expect(team).toEqual({ members: expected });
});

test('Add character to team', () => {
  const team = new Team();
  const bowerman = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Bowerman',
  };
  const daemon = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Daemon',
  };
  const magician = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Bob',
    type: 'Magician',
  };
  const expected = [
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Bob',
      type: 'Bowerman',
    },
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Bob',
      type: 'Daemon',
    },
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Bob',
      type: 'Magician',
    },
  ];

  team.addAll(bowerman, daemon, bowerman, magician);

  expect(team.toArray()).toEqual(expected);
});
