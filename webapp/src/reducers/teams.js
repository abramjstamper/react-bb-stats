function teams(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }
  const clone = state;
  switch (action.type) {
    case 'LOAD_TEAM_LIST':
      return clone;
    case 'CREATE_NEW_TEAM':
      if (typeof action.team === 'undefined')
        return clone;
      clone.push(action.team);
      return clone;
    case 'CREATE_NEW_PLAYER':
      if (typeof action.player === 'undefined')
        return clone;
      clone[action.teamId].players[11] = action.player;
      return clone;
    case 'UPDATE_PLAYER_ACTIVE_STATUS':
      clone[action.team.id].players[action.player.id].isActive = !clone[action.team.id].players[action.player.id].isActive;
      return clone;
    default:
      return clone;
  }
}

export default teams;