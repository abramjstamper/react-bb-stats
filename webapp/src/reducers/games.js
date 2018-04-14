import { eventsLookup, shotQualifiersLookup } from '../constants';

function addPlayerEvent(clonedState, action, playerEvent) {
  let eventsObject = clonedState[action.game.info.id].events;
  let newKey = Object.keys(eventsObject).length;
  eventsObject[newKey] = playerEvent;
}

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
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['TURNOVER'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          clone[action.game.info.id].temp.actionText = "Select Player for Steal";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['STEAL'];
          break;
        case eventsLookup['STEAL']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['STEAL'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          clone[action.game.info.id].temp.actionText = "Select Player for Turnover";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['TURNOVER'];
          break;
        case eventsLookup['FOUL']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['FOUL'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          break;
        case eventsLookup['OFFENSIVE_FOUL']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['OFFENSIVE_FOUL'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          break;
        case eventsLookup['TECHNICAL_FOUL']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['TECHNICAL_FOUL'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          break;
        case eventsLookup['BLOCK']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['BLOCK'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          clone[action.game.info.id].temp.actionText = "Select Player for Rebound";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['DEFENSIVE_REBOUND'];
          break;
        case eventsLookup['MISSED_2PT_FG']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['MISSED_2PT_FG'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          clone[action.game.info.id].temp.actionText = "Select Player for Rebound";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['DEFENSIVE_REBOUND'];
          break;
        case eventsLookup['MISSED_3PT_FG']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['MISSED_3PT_FG'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          clone[action.game.info.id].temp.actionText = "Select Player for Rebound";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['DEFENSIVE_REBOUND'];
          break;
        case eventsLookup['2PT_FG']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['2PT_FG'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          if (action.team.id === action.game.info.homeTeam) {
            clone[action.game.info.id].temp.homeScore = 2 + (clone[action.game.info.id].temp.homeScore || 0);
          } else {
            clone[action.game.info.id].temp.awayScore = 2 + (clone[action.game.info.id].temp.awayScore || 0);
          }
          clone[action.game.info.id].temp.actionText = "Select Player for Assist";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['ASSIST'];
          break;
        case eventsLookup['3PT_FG']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['3PT_FG'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          if (action.team.id === action.game.info.homeTeam) {
            clone[action.game.info.id].temp.homeScore = 3 + (clone[action.game.info.id].temp.homeScore || 0);
          } else {
            clone[action.game.info.id].temp.awayScore = 3 + (clone[action.game.info.id].temp.awayScore || 0);
          }
          clone[action.game.info.id].temp.actionText = "Select Player for Assist";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['ASSIST'];
          break;
        case eventsLookup['OFFENSIVE_REBOUND']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['OFFENSIVE_REBOUND'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        case eventsLookup['DEFENSIVE_REBOUND']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['DEFENSIVE_REBOUND'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        case eventsLookup['ASSIST']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['ASSIST'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        // case eventsLookup['PARTIAL_TIMEOUT']:
        //   clone[action.game.info.id].events[key] = { playerId: action.player.id, teamId: action.team.id, eventId: eventsLookup['PARTIAL_TIMEOUT'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
        //   clone[action.game.info.id].temp.actionText = "Select an Action";
        //   break;
        // case eventsLookup['TIMEOUT']:
        //   clone[action.game.info.id].events[key] = { playerId: action.player.id, teamId: action.team.id, eventId: eventsLookup['TIMEOUT'], time: action.game.clock.displayTime, gameId: action.game.info.id, period: action.game.clock.period }
        //   clone[action.game.info.id].temp.actionText = "Select an Action";
        //   break;
      }
      console.log(clone[action.game.info.id].events);
      return clone;
    case "REGISTER_GAME_EVENT":
      clone[action.game.info.id].temp.lastEventAction = action.event;
      return clone;
    case "SUBSTITUTE_PLAYER_INTO_GAME":
      addPlayerEvent(clone, action, {
        playerId: action.player.id,
        eventId: eventsLookup['SUBSTITUTE_PLAYER_INTO_GAME'],
        time: action.game.clock.displayTime,
        gameId: action.game.info.id,
        period: action.game.clock.period
      });
      return clone;
    case "SUBSTITUTE_PLAYER_OUT_OF_GAME":
      addPlayerEvent(clone, action, {
        playerId: action.player.id,
        eventId: eventsLookup['SUBSTITUTE_PLAYER_OUT_OF_GAME'],
        time: action.game.clock.displayTime,
        gameId: action.game.info.id,
        period: action.game.clock.period
      });
      return clone;
    default:
      return clone;
  }
}

export default games;