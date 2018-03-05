function teams(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }
  const clone = state;  
  switch(action.type){
    case 'LOAD_TEAM_LIST':
      return state;
    case 'CREATE_NEW_TEAM':
      if(typeof action.team === 'undefined')
        return state;
      clone.push(action.team);
      return clone;
    case 'UPDATE_PLAYER_ACTIVE_STATUS':
    clone[action.team.id].players[action.player.id].isActive = !clone[action.team.id].players[action.player.id].isActive;
      return clone;
    default:
      return state;
  }
}

export default teams;