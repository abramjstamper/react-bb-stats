function seasons(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }
  const clone = {...state};
  switch (action.type) {
    case 'CREATE_NEW_SEASON':
      if (typeof action.season === 'undefined')
        return clone;
//change number to be actual id in the future
      clone[2] = action.season;
      return clone;
    default:
      return clone;
  }
}

export default seasons;