function players(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }  
  switch(action.type){
    case 'UPDATE_PLAYER_ACTIVE_STATUS':
      console.log(action);
      const clone = state;
      clone.push(action.team);
      return clone;
    default:
      return state;
  }
}

export default teams;