const hitPlays = new Set();
hitPlays.add('1B');
hitPlays.add('2B');
hitPlays.add('3B');
hitPlays.add('HR');

export const isHit = (play) => hitPlays.has(play);