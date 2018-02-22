export function startClock() {
  return {
    type: 'START_CLOCK'
  }
}

export function stopClock() {
  return {
    type: 'STOP_CLOCK'
  }
}

export function loadTeamList() {
  return {
    type: "LOAD_TEAM_LIST"
  }
}

export function createNewTeam(team) {
  return {
    team: team,
    type: "CREATE_NEW_TEAM"
  }
}

export function loadTeam() {
  return {
    type: "LOAD_TEAM"
  }
}