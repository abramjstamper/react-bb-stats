// const MAX_PLAYERS = 5;

function games(state = {}, action) {
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
        clone[action.game.info.id].temp.actionText = "Select Player for FG Make"
        switch (action.location) {
          case "left side outside shot":
            clone[action.game.info.id].temp.lastEventAction = "3PT_FG";
            // clone[action.game.info.id].temp.awayScore = 3 + (clone[action.game.info.id].temp.awayScore || 0);
            break;
          case "right side outside shot":
            clone[action.game.info.id].temp.lastEventAction = "3PT_FG";
            // clone[action.game.info.id].temp.homeScore = 3 + (clone[action.game.info.id].temp.homeScore || 0);
            break;
          case "left side layups":
          case "left side dunk":
          case "left side inside shot":
          case "left side paint":
          case "left side basket":
            // clone[action.game.info.id].temp.awayScore = 2 + (clone[action.game.info.id].temp.awayScore || 0);
            clone[action.game.info.id].temp.lastEventAction = "2PT_FG";
            break;
          case "right side layups":
          case "right side dunk":
          case "ride side inside shot":
          case "right side paint":
          case "right side basket":
            // clone[action.game.info.id].temp.homeScore = 2 + (clone[action.game.info.id].temp.homeScore || 0);
            clone[action.game.info.id].temp.lastEventAction = "2PT_FG";
            break;
        }
      } else {
        clone[action.game.info.id].temp.actionText = "Select Player for FG Miss"
        switch (action.location) {
          case "left side outside shot":
            clone[action.game.info.id].temp.lastEventAction = "MISSED_3PT_FG";
            // clone[action.game.info.id].temp.awayScore = 3 + (clone[action.game.info.id].temp.awayScore || 0);
            break;
          case "right side outside shot":
          clone[action.game.info.id].temp.lastEventAction = "MISSED_3PT_FG";
            // clone[action.game.info.id].temp.homeScore = 3 + (clone[action.game.info.id].temp.homeScore || 0);
            break;
          case "left side layups":
          case "left side dunk":
          case "left side inside shot":
          case "left side paint":
          case "left side basket":
            // clone[action.game.info.id].temp.awayScore = 2 + (clone[action.game.info.id].temp.awayScore || 0);
            clone[action.game.info.id].temp.lastEventAction = "MISSED_2PT_FG";
            break;
          case "right side layups":
          case "right side dunk":
          case "ride side inside shot":
          case "right side paint":
          case "right side basket":
            // clone[action.game.info.id].temp.homeScore = 2 + (clone[action.game.info.id].temp.homeScore || 0);
            clone[action.game.info.id].temp.lastEventAction = "MISSED_2PT_FG";
            break;
        }
      }
      return clone;
    case "SELECT_PLAYER":
      let key = Object.keys(clone[action.game.info.id].events).length;
      clone[action.game.info.id].temp.lastPlayerClicked = action.player;
      switch (clone[action.game.info.id].temp.lastEventAction) {
        case 'TURNOVER':
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 7, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case 'STEAL':
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 8, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case 'FOUL':
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 9, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case "MISSED_2PT_FG":
        clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 3, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case "MISSED_3PT_FG":
        clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 4, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case "2PT_FG":
        clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 5, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case "3PT_FG":
        clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 6, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
      }
      console.log(clone[action.game.info.id].events);
      return clone;
    case "REGISTER_GAME_EVENT":
      clone[action.game.info.id].temp.lastEventAction = action.event;
      return clone;
    // case "SUBSTITUTE_PLAYER_INTO_GAME":
    //   key = Object.keys(clone[action.game.info.id].events).length;
    //   clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 0, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
    //   return clone;
    // case "SUBSTITUTE_PLAYER_OUT_OF_GAME":
    //   key = Object.keys(clone[action.game.info.id].events).length;
    //   clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 1, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
    //   return clone;
    default:
      return clone;
  }
}

export default games;