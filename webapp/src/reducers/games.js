import { eventsLookup, shotQualifiersLookup } from '../constants';

function getNextEventKey(events) {
  return Object.keys(events).length;
}

function games(state = {}, action) {
  const clone = { ...state };
  let key = -1;
  try {
    key = getNextEventKey(clone[action.game.info.id].events)
  } catch (err) {
    console.log(err);
  }
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
          case "right side outside shot":
            clone[action.game.info.id].temp.lastEventAction = eventsLookup['3PT_FG'];
            break;
          case "left side layups":
          case "left side dunk":
          case "left side inside shot":
          case "left side paint":
          case "left side basket":
          case "right side layups":
          case "right side dunk":
          case "ride side inside shot":
          case "right side paint":
          case "right side basket":
            clone[action.game.info.id].temp.lastEventAction = eventsLookup['2PT_FG'];
            break;
        }
      } else {
        clone[action.game.info.id].temp.actionText = "Select Player for FG Miss"
        switch (action.location) {
          case "left side outside shot":
          case "right side outside shot":
            clone[action.game.info.id].temp.lastEventAction = eventsLookup['MISSED_3PT_FG'];
            break;
          case "left side layups":
          case "left side dunk":
          case "left side inside shot":
          case "left side paint":
          case "left side basket":
          case "right side layups":
          case "right side dunk":
          case "ride side inside shot":
          case "right side paint":
          case "right side basket":
            clone[action.game.info.id].temp.lastEventAction = eventsLookup['MISSED_2PT_FG'];
            break;
        }
      }
      return clone;
    case "SELECT_PLAYER":
      clone[action.game.info.id].temp.lastPlayerClicked = action.player;
      switch (clone[action.game.info.id].temp.lastEventAction) {
        case eventsLookup['TURNOVER']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['TURNOVER'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case eventsLookup['STEAL']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['STEAL'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case eventsLookup['FOUL']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['FOUL'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case eventsLookup['OFFENSIVE_FOUL']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['OFFENSIVE_FOUL'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case eventsLookup['TECHNICAL_FOUL']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['TECHNICAL_FOUL'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case eventsLookup['BLOCK']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['BLOCK'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case eventsLookup['MISSED_2PT_FG']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['MISSED_2PT_FG'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case eventsLookup['MISSED_3PT_FG']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['MISSED_3PT_FG'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          break;
        case eventsLookup['2PT_FG']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['2PT_GF'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          if (action.team.id === action.game.info.homeTeam) {
            clone[action.game.info.id].temp.homeScore = 2 + (clone[action.game.info.id].temp.homeScore || 0);
          } else {
            clone[action.game.info.id].temp.awayScore = 2 + (clone[action.game.info.id].temp.awayScore || 0);
          }
          clone[action.game.info.id].temp.actionText = "Select Player for Assist";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['ASSIST'];
          break;
        case eventsLookup['3PT_FG']:
          clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: eventsLookup['3PT_FG'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
          if (action.team.id === action.game.info.homeTeam) {
            clone[action.game.info.id].temp.homeScore = 3 + (clone[action.game.info.id].temp.homeScore || 0);
          } else {
            clone[action.game.info.id].temp.awayScore = 3 + (clone[action.game.info.id].temp.awayScore || 0);
          }
          break;
      }
      console.log(clone[action.game.info.id].events);
      return clone;
    case "REGISTER_GAME_EVENT":
      clone[action.game.info.id].temp.lastEventAction = action.event;
      return clone;
    case "SUBSTITUTE_PLAYER_INTO_GAME":
      clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 0, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
      return clone;
    case "SUBSTITUTE_PLAYER_OUT_OF_GAME":
      clone[action.game.info.id].events[key] = { playerId: action.player.id, eventId: 1, time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
      return clone;
    default:
      return clone;
  }
}

export default games;