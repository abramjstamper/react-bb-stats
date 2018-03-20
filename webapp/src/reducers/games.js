function games(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }
  const clone = state;
  switch (action.type) {
    case "CREATE_NEW_GAME":
      if (typeof action.game === 'undefined')
        return clone;
      clone[3] = {}
      clone[3].info = action.game;
      return clone;
    case "UPDATE_CLOCK":
      console.log(action);
      clone[action.game.info.id].clock = action.clock;
      return clone;
    default:
      return clone;
  }
}

export default games;