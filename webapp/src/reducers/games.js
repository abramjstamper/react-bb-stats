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
      const newKey = Object.keys(clone).length;
      clone[newKey] = { temp: {}, info: action.game, events: {}, clock: {} };
      return clone;
    case "EDIT_GAME_INFO":
      if (typeof action.game === 'undefined')
        return clone;
      clone[action.game.id] = {...clone, info: action.game}
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
          default:
            throw new Error("Unexpected input when recieving a NEW_SHOT_EVENT");
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
          default:
            throw new Error("Unexpected input when recieving a NEW_SHOT_EVENT");
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
            period: action.game.clock.period,
            teamId: action.team.id
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
            period: action.game.clock.period,
            teamId: action.team.id
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
            period: action.game.clock.period,
            teamId: action.team.id
          });
          clone[action.game.info.id].temp.actionText = "Select Player for Foul Drawn";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['FOUL_DRAWN'];
          break;
        case eventsLookup['FOUL_DRAWN']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['FOUL_DRAWN'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period,
            teamId: action.team.id
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        case eventsLookup['OFFENSIVE_FOUL']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['OFFENSIVE_FOUL'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period,
            teamId: action.team.id
          });
          clone[action.game.info.id].temp.actionText = "Select Player for Charge Taken";
          clone[action.game.info.id].temp.lastEventAction = eventsLookup['TAKEN_CHARGE'];
          break;
        case eventsLookup['TAKEN_CHARGE']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['TAKEN_CHARGE'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period,
            teamId: action.team.id
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        case eventsLookup['TECHNICAL_FOUL']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['TECHNICAL_FOUL'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period,
            teamId: action.team.id
          });
          break;
        case eventsLookup['BLOCK']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['BLOCK'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period,
            teamId: action.team.id
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
            period: action.game.clock.period,
            teamId: action.team.id
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
            period: action.game.clock.period,
            teamId: action.team.id
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
            period: action.game.clock.period,
            teamId: action.team.id
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
            period: action.game.clock.period,
            teamId: action.team.id
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
            period: action.game.clock.period,
            teamId: action.team.id
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        case eventsLookup['DEFENSIVE_REBOUND']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['DEFENSIVE_REBOUND'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period,
            teamId: action.team.id
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        case eventsLookup['ASSIST']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['ASSIST'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period,
            teamId: action.team.id
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        case eventsLookup['PARTIAL_TIMEOUT']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['PARTIAL_TIMEOUT'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period,
            teamId: action.team.id
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        case eventsLookup['TIMEOUT']:
          addPlayerEvent(clone, action, {
            playerId: action.player.id,
            eventId: eventsLookup['TIMEOUT'],
            time: action.game.clock.displayTime,
            gameId: action.game.info.id,
            period: action.game.clock.period,
            teamId: action.team.id
          });
          clone[action.game.info.id].temp.actionText = "Select an Action";
          break;
        default:
          throw new Error("Unexpected input when recieving a SELECT_PLAYER game event");
      }
      // console.log(JSON.stringify(clone[action.game.info.id].events));
      return clone;
    case "REGISTER_GAME_EVENT":
      switch (action.event) {
        case eventsLookup['PARTIAL_TIMEOUT']:
          clone[action.game.info.id].temp.actionText = "Select a Team or Player";
          break;
        case eventsLookup['TIMEOUT']:
          clone[action.game.info.id].temp.actionText = "Select a Team or Player";
          break;
        // default:
        //   throw new Error("Unexpected input when recieving a REGISTER_GAME_EVENT game event");
      }
      clone[action.game.info.id].temp.lastEventAction = action.event;
      return clone;
    case "SUBSTITUTE_PLAYER_INTO_GAME":
      addPlayerEvent(clone, action, {
        playerId: action.player.id,
        eventId: eventsLookup['SUBSTITUTE_PLAYER_INTO_GAME'],
        time: action.game.clock.displayTime,
        gameId: action.game.info.id,
        period: action.game.clock.period,
        teamId: action.team.id
      });
      return clone;
    case "SUBSTITUTE_PLAYER_OUT_OF_GAME":
      addPlayerEvent(clone, action, {
        playerId: action.player.id,
        eventId: eventsLookup['SUBSTITUTE_PLAYER_OUT_OF_GAME'],
        time: action.game.clock.displayTime,
        gameId: action.game.info.id,
        period: action.game.clock.period,
        teamId: action.team.id
      });
      return clone;
    default:
      return clone;
  }
}

export default games;