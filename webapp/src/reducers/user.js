function user(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }
  const clone = state;
  switch (action.type) {
    case "CREATE_NEW_USER":
      return clone;
    case "LOGIN":
      return clone;
    default:
      return clone;
  }
}

export default user;