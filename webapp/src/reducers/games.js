// const MAX_PLAYERS = 5;

function games(state = [], action) {
  if (typeof state === 'undefined') {
    return state;
  }
  const clone = { ...state };
  switch (action.type) {
    case "CREATE_NEW_GAME":
      if (typeof action.game === 'undefined')
        return clone;
      clone[3] = {}
      clone[3].info = action.game;
      clone[3].temp = {};
      return clone;
    case "UPDATE_CLOCK":
      clone[action.game.info.id].clock = action.clock;
      return clone;
    case "NEW_SHOT_EVENT":
      console.log(action);
      clone[action.game.info.id].temp.lastShotCoord = action.coord;
      clone[action.game.info.id].temp.lastShotLocation = action.location;
      if (action.isMissed === false) {
        switch (action.location) {
          case "left side outside shot":
            clone[action.game.info.id].temp.awayScore = 3 + (clone[action.game.info.id].temp.awayScore || 0);
            break;
          case "right side outside shot":
            clone[action.game.info.id].temp.homeScore = 3 + (clone[action.game.info.id].temp.homeScore || 0);
            break;
          case "left side layups":
          case "left side dunk":
          case "left side inside shot":
          case "left side paint":
          case "left side basket":
            clone[action.game.info.id].temp.awayScore = 2 + (clone[action.game.info.id].temp.awayScore || 0);
            break;
          case "right side layups":
          case "right side dunk":
          case "ride side inside shot":
          case "right side paint":
          case "right side basket":
            clone[action.game.info.id].temp.homeScore = 2 + (clone[action.game.info.id].temp.homeScore || 0);
            break;
        }
      }
      return clone;
    case "SUBSTITUTE_PLAYER_INTO_GAME":
      clone[action.game.info.id].events[0] = { playerId: action.player.id, eventId: 0, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
      return clone;
    case "SUBSTITUTE_PLAYER_OUT_OF_GAME":
      clone[action.game.info.id].events[1] = { playerId: action.player.id, eventId: 1, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
      return clone;
    default:
      return clone;
  }
}

export default games;