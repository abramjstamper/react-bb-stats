function seasons(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }
  const clone = state;  
  switch(action.type){
    default:
      return clone;
  }
}

export default seasons;