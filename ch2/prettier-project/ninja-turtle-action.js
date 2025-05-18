const generateNinjaTurtleAction = () => {
  const randomNumber = Math.random();
  if (randomNumber < 0.1) {
    return "Fight Shredder";
  } else if (randomNumber < 0.5) {
    return "Rescue April";
  } else {
    return "Eat pizza";
  }
};
