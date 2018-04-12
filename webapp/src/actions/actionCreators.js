export function updateClock(game, clock) {
  return {
    type: 'UPDATE_CLOCK',
    game: game,
    clock: clock,
  }
}

export function loadTeamList() {
  return {
    type: "LOAD_TEAM_LIST"
  }
}

export function createAccount(user) {
  return {
    user: user,
    type: "CREATE_NEW_USER"
  }
}

export function login(user) {
  return {
    user: user,
    type: "LOGIN"
  }
}

export function createNewGame(game) {
  return {
    game: game,
    type: "CREATE_NEW_GAME"
  }
}

export function createNewPlayer(player, teamId) {
  return {
    player: player,
    teamId: teamId,
    type: "CREATE_NEW_PLAYER"
  }
}

export function createNewSeason(season) {
  return {
    season: season,
    type: "CREATE_NEW_SEASON"
  }
}

export function createNewTeam(team) {
  return {
    team: team,
    type: "CREATE_NEW_TEAM"
  }
}

export function editTeam(team) {
  return {
    team: team,
    type: "EDIT_TEAM"
  }
}

export function updatePlayerActiveStatus(team, player) {
  return {
    player: player,
    team: team,
    type: "UPDATE_PLAYER_ACTIVE_STATUS"
  }
}

export function loadTeam() {
  return {
    type: "LOAD_TEAM"
  }
}

export function createNewGameEvent(game, event) {
  return {
    type: "CREATE_NEW_GAME_EVENT",
    game: game,
    event: event
  }
}

export function fireNewShotEvent(game, coord, location, isMissed) {
  return {
    type: "NEW_SHOT_EVENT",
    game: game,
    coord: coord,
    location: location,
    isMissed: isMissed
  }
}

export function substitutePlayerIntoGame(game, player) {
  return {
    type: "SUBSTITUTE_PLAYER_INTO_GAME",
    game: game,
    player: player
  }
}

export function substitutePlayerOutOfGame(game, player) {
  return {
    type: "SUBSTITUTE_PLAYER_OUT_OF_GAME",
    game: game,
    player: player
  }
}

export function selectPlayer(game, player) {
  return {
    type: "SELECT_PLAYER",
    game: game,
    player: player
  }
}

export function registerGameEvent(game, event) {
  return {
    type: "REGISTER_GAME_EVENT",
    game: game,
    event: event
  }
}