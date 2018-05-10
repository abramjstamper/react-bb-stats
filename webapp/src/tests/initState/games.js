const games = {
  1: {
    info: {
      id: 1,
      seasonId: 1,
      homeTeam: 1,
      awayTeam: 2,
      date: '03/03/13',
      time: '6:00 PM',
      location: 'Memorial Gym',
      official1: "Tom Smith",
      official2: "Lisa Smith",
      official3: "Bryan Baller",
      attendance: 5030
    },
    temp: {
      actionText: "Select Starters & Begin Clock to Start",
      homeScore: 22,
      awayScore: 11
    },
    clock: {
      period: 4, displayTime: "00:00", seconds: 0, runTimer: false
    },
    events: {"0":{"playerId":1,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":1},"1":{"playerId":2,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":1},"2":{"playerId":3,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":1},"3":{"playerId":4,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":1},"4":{"playerId":5,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":1},"5":{"playerId":11,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":2},"6":{"playerId":12,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":2},"7":{"playerId":13,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":2},"8":{"playerId":14,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":2},"9":{"playerId":15,"eventId":0,"time":"00:30","gameId":1,"period":1,"teamId":2},"10":{"playerId":11,"eventId":5,"time":"00:26","gameId":1,"period":1,"teamId":2},"11":{"playerId":1,"eventId":13,"time":"00:25","gameId":1,"period":1,"teamId":1},"12":{"playerId":1,"eventId":5,"time":"00:22","gameId":1,"period":1,"teamId":1},"13":{"playerId":11,"eventId":13,"time":"00:19","gameId":1,"period":1,"teamId":2},"14":{"playerId":5,"eventId":5,"time":"00:13","gameId":1,"period":1,"teamId":1},"15":{"playerId":15,"eventId":13,"time":"00:12","gameId":1,"period":1,"teamId":2},"16":{"playerId":15,"eventId":5,"time":"00:09","gameId":1,"period":1,"teamId":2},"17":{"playerId":5,"eventId":13,"time":"00:08","gameId":1,"period":1,"teamId":1},"18":{"playerId":11,"eventId":7,"time":"00:04","gameId":1,"period":1,"teamId":2},"19":{"playerId":12,"eventId":15,"time":"00:02","gameId":1,"period":1,"teamId":2},"20":{"playerId":1,"eventId":8,"time":"00:27","gameId":1,"period":2,"teamId":1},"21":{"playerId":2,"eventId":15,"time":"00:27","gameId":1,"period":2,"teamId":1},"22":{"playerId":1,"eventId":8,"time":"00:25","gameId":1,"period":2,"teamId":1},"23":{"playerId":2,"eventId":15,"time":"00:24","gameId":1,"period":2,"teamId":1},"24":{"playerId":4,"eventId":7,"time":"00:22","gameId":1,"period":2,"teamId":1},"25":{"playerId":5,"eventId":15,"time":"00:22","gameId":1,"period":2,"teamId":1},"26":{"playerId":4,"eventId":7,"time":"00:20","gameId":1,"period":2,"teamId":1},"27":{"playerId":5,"eventId":15,"time":"00:20","gameId":1,"period":2,"teamId":1},"28":{"playerId":13,"eventId":7,"time":"00:18","gameId":1,"period":2,"teamId":2},"29":{"playerId":14,"eventId":15,"time":"00:17","gameId":1,"period":2,"teamId":2},"30":{"playerId":15,"eventId":7,"time":"00:16","gameId":1,"period":2,"teamId":2},"31":{"playerId":12,"eventId":15,"time":"00:15","gameId":1,"period":2,"teamId":2},"32":{"playerId":14,"eventId":4,"time":"00:13","gameId":1,"period":2,"teamId":2},"33":{"playerId":1,"eventId":13,"time":"00:13","gameId":1,"period":2,"teamId":1},"34":{"playerId":15,"eventId":4,"time":"00:11","gameId":1,"period":2,"teamId":2},"35":{"playerId":3,"eventId":13,"time":"00:10","gameId":1,"period":2,"teamId":1},"36":{"playerId":4,"eventId":4,"time":"00:08","gameId":1,"period":2,"teamId":1},"37":{"playerId":5,"eventId":13,"time":"00:08","gameId":1,"period":2,"teamId":1},"38":{"playerId":3,"eventId":4,"time":"00:06","gameId":1,"period":2,"teamId":1},"39":{"playerId":4,"eventId":13,"time":"00:05","gameId":1,"period":2,"teamId":1},"40":{"playerId":4,"eventId":17,"time":"00:04","gameId":1,"period":2,"teamId":1},"41":{"playerId":15,"eventId":18,"time":"00:03","gameId":1,"period":2,"teamId":2},"42":{"playerId":3,"eventId":17,"time":"00:01","gameId":1,"period":2,"teamId":1},"43":{"playerId":12,"eventId":18,"time":"00:01","gameId":1,"period":2,"teamId":2},"44":{"playerId":10,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":1},"45":{"playerId":9,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":1},"46":{"playerId":8,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":1},"47":{"playerId":7,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":1},"48":{"playerId":6,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":1},"49":{"playerId":20,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":2},"50":{"playerId":19,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":2},"51":{"playerId":18,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":2},"52":{"playerId":17,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":2},"53":{"playerId":16,"eventId":0,"time":"00:30","gameId":1,"period":3,"teamId":2},"54":{"playerId":16,"eventId":5,"time":"00:27","gameId":1,"period":3,"teamId":2},"55":{"playerId":6,"eventId":13,"time":"00:25","gameId":1,"period":3,"teamId":1},"56":{"playerId":6,"eventId":7,"time":"00:24","gameId":1,"period":3,"teamId":1},"57":{"playerId":20,"eventId":15,"time":"00:22","gameId":1,"period":3,"teamId":2},"58":{"playerId":20,"eventId":7,"time":"00:18","gameId":1,"period":3,"teamId":2},"59":{"playerId":19,"eventId":15,"time":"00:17","gameId":1,"period":3,"teamId":2},"60":{"playerId":10,"eventId":7,"time":"00:15","gameId":1,"period":3,"teamId":1},"61":{"playerId":8,"eventId":15,"time":"00:14","gameId":1,"period":3,"teamId":1},"62":{"playerId":8,"eventId":5,"time":"00:12","gameId":1,"period":3,"teamId":1},"63":{"playerId":19,"eventId":13,"time":"00:11","gameId":1,"period":3,"teamId":2},"64":{"playerId":10,"eventId":17,"time":"00:10","gameId":1,"period":3,"teamId":1},"65":{"playerId":20,"eventId":18,"time":"00:09","gameId":1,"period":3,"teamId":2},"66":{"playerId":17,"eventId":17,"time":"00:07","gameId":1,"period":3,"teamId":2},"67":{"playerId":8,"eventId":18,"time":"00:06","gameId":1,"period":3,"teamId":1},"68":{"playerId":20,"eventId":17,"time":"00:04","gameId":1,"period":3,"teamId":2},"69":{"playerId":6,"eventId":18,"time":"00:03","gameId":1,"period":3,"teamId":1},"70":{"playerId":1,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":1},"71":{"playerId":2,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":1},"72":{"playerId":3,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":1},"73":{"playerId":4,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":1},"74":{"playerId":5,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":1},"75":{"playerId":11,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":2},"76":{"playerId":12,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":2},"77":{"playerId":13,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":2},"78":{"playerId":14,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":2},"79":{"playerId":15,"eventId":0,"time":"00:00","gameId":1,"period":3,"teamId":2},"80":{"playerId":11,"eventId":8,"time":"00:27","gameId":1,"period":4,"teamId":2},"81":{"playerId":1,"eventId":15,"time":"00:26","gameId":1,"period":4,"teamId":1},"82":{"playerId":1,"eventId":8,"time":"00:23","gameId":1,"period":4,"teamId":1},"83":{"playerId":14,"eventId":15,"time":"00:22","gameId":1,"period":4,"teamId":2},"84":{"playerId":5,"eventId":7,"time":"00:20","gameId":1,"period":4,"teamId":1},"85":{"playerId":1,"eventId":15,"time":"00:18","gameId":1,"period":4,"teamId":1},"86":{"playerId":1,"eventId":7,"time":"00:15","gameId":1,"period":4,"teamId":1},"87":{"playerId":3,"eventId":15,"time":"00:13","gameId":1,"period":4,"teamId":1},"88":{"playerId":5,"eventId":5,"time":"00:07","gameId":1,"period":4,"teamId":1},"89":{"playerId":15,"eventId":12,"time":"00:05","gameId":1,"period":4,"teamId":2},"90":{"playerId":15,"eventId":13,"time":"00:05","gameId":1,"period":4,"teamId":2},"91":{"playerId":14,"eventId":4,"time":"00:03","gameId":1,"period":4,"teamId":2},"92":{"playerId":2,"eventId":12,"time":"00:01","gameId":1,"period":4,"teamId":1},"93":{"playerId":1,"eventId":13,"time":"00:01","gameId":1,"period":4,"teamId":1}}
  },
  2: {
    info: {
      id: 2,
      seasonId: 2,
      homeTeam: 2,
      awayTeam: 1,
      date: '05/05/15',
      time: '6:00 PM',
      location: 'Fishers High School'
    },
    clock: {

    },
    temp: {
      actionText: "Select Starters & Begin Clock to Start"
    },
    events: {

    }
  }
}

export default games;