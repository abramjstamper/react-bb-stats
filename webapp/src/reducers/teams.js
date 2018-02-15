function teams(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }  
  switch(action.type){
    case 'LOAD_TEAM_LIST':
      return state;
    default:
      return state;
  }
}

export default teams;