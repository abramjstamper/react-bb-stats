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
      console.log(action);
      const clone = state;
      clone.push(action.team);
      return clone;
    default:
      return state;
  }
}

export default teams;