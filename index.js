const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
function superbowlWin(record){
    const win = record.find(game => game.result === "W");
    if (win) {
        return win.year;
      } else {
        return undefined;
      }
    }
