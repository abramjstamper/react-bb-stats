function findObjectByKey(array, key, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return null;
}

function teams(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }  
  switch(action.type){
    case 'LOAD_TEAM_LIST':
      return state;
    case 'CREATE_NEW_TEAM':
      if(typeof action.team === 'undefined')
        return state;
      const clone = state;
      clone.push(action.team);
      return clone;
    case 'UPDATE_PLAYER_ACTIVE_STATUS':
      const oldTeam = findObjectByKey(state, "id", action.team.id);
      const oldPlayer = findObjectByKey(oldTeam, "id", action.player.id);
      // oldTeam.players[oldPlayer.id]
      return state;
    default:
      return state;
  }
}

export default teams;