function games(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }
  const clone = state;
  switch (action.type) {
    case "CREATE_NEW_GAME":
      if (typeof action.game === 'undefined')
        return clone;
      console.log(state);
      console.log(action);
      clone[3] = {}
      clone[3].info = action.game;
      return clone;
    default:
      return clone;
  }
}

export default games;