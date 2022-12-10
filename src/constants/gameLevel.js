export const beginner = {
  width: 9,
  height: 9,
  mines: 10
};

export const intermediate = {
  width: 16,
  height: 16,
  mines: 40
};

export const expert = {
  width: 16,
  height: 30,
  mines: 99
};

export const gameLevel = (level) => {
  if (level === 'beginner') {
    return beginner;
  }
  if (level === 'intermediate') {
    return intermediate;
  }
  if (level === 'expert') {
    return expert;
  }
  return {};
};
