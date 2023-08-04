class SpacecraftController {
  // constructor(command) {
  //   // this.movementTable = {
  //   //   N: { x: 0, y: 1, z: 0 },
  //   //   S: { x: 0, y: -1, z: 0 },
  //   //   E: { x: 1, y: 0, z: 0 },
  //   //   W: { x: -1, y: 0, z: 0 },
  //   //   Up: { x: 0, y: 0, z: 1 },
  //   //   Down: { x: 0, y: 0, z: -1 },
  //   // };
  //   // this.rotationTable = {
  //   //   N: { l: "W", r: "E", u: "N", d: "N" },
  //   //   S: { l: "E", r: "W", u: "S", d: "S" },
  //   //   E: { l: "N", r: "S", u: "E", d: "E" },
  //   //   W: { l: "S", r: "N", u: "W", d: "W" },
  //   //   Up: { l: "W", r: "E", u: "N", d: "N" },
  //   //   Down: { l: "E", r: "W", u: "N", d: "N" },
  //   // };
  // }

  processCommands(command, position, direction) {
    var Position = position;
    // var DirectionOfCraft = "N";

    var CurrentDirection = direction;
    console.log("CurrentDirection - ", CurrentDirection);

    console.log(CurrentDirection);
    // var direction = { N: "N", S: "S", E: "E", W: "W" }
    var commands = { f: "f", b: "b", l: "l", r: "r", u: "u", d: "d" };
    if (command == commands.f || command == commands.b || command == commands.r || command == commands.l || command == commands.u || command == commands.d) {
      if (command == commands.f) {
        if (CurrentDirection == "N") {
          Position.y = Position.y + 1;
        }
        else if (CurrentDirection == "S") {
          Position.y = Position.y - 1;
        }
        else if (CurrentDirection == "E") {
          Position.x = Position.x + 1;
        }
        else if (CurrentDirection == "W") {
          Position.x = Position.x - 1;
        }
        else if (CurrentDirection == "U") {
          Position.z = Position.z + 1;
        }
        else if (CurrentDirection == "D") {
          Position.z = Position.z - 1;
        }
      }
      if (command == commands.b) {
        if (CurrentDirection == "N") {
          Position.y = Position.y - 1;
        }
        else if (CurrentDirection == "S") {
          Position.y = Position.y + 1;
        }
        else if (CurrentDirection == "E") {
          Position.x = Position.x - 1;
        }
        else if (CurrentDirection == "W") {
          Position.x = Position.x + 1;
        }
        else if (CurrentDirection == "U") {
          Position.z = Position.z - 1;
        }
        else if (CurrentDirection == "D") {
          Position.z = Position.z + 1;
        }
      }
      if (command == commands.l) {
        if (CurrentDirection == "N") {
          CurrentDirection = "W";
        }
        else if (CurrentDirection == "S") {
          CurrentDirection = "E";
        }
        else if (CurrentDirection == "E") {
          CurrentDirection = "N";
        }
        else if (CurrentDirection == "W") {
          CurrentDirection = "S";
        }
        else if (CurrentDirection == "U") {
          CurrentDirection = "W";
        }
        else if (CurrentDirection == "D") {
          CurrentDirection = "E";
        }
      }
      if (command == commands.r) {
        if (CurrentDirection == "N") {
          CurrentDirection = "E";
        }
        else if (CurrentDirection == "S") {
          CurrentDirection = "W";
        }
        else if (CurrentDirection == "E") {
          CurrentDirection = "S";
        }
        else if (CurrentDirection == "W") {
          CurrentDirection = "N";
        }
        else if (CurrentDirection == "U") {
          CurrentDirection = "E";
        }
        else if (CurrentDirection == "D") {
          CurrentDirection = "W";
        }
      }
      if (command == commands.u) {
        if (CurrentDirection == "N") {
          CurrentDirection = "U";
        }
        else if (CurrentDirection == "S") {
          CurrentDirection = "U";
        }
        else if (CurrentDirection == "E") {
          CurrentDirection = "U";
        }
        else if (CurrentDirection == "W") {
          CurrentDirection = "U";
        }
        else if (CurrentDirection == "U") {
          CurrentDirection = "U";
        }
        else if (CurrentDirection == "D") {
          CurrentDirection = "U";
        }
      }
      if (command == commands.d) {
        if (CurrentDirection == "N") {
          CurrentDirection = "D";
        }
        else if (CurrentDirection == "S") {
          CurrentDirection = "D";
        }
        else if (CurrentDirection == "E") {
          CurrentDirection = "D";
        }
        else if (CurrentDirection == "W") {
          CurrentDirection = "D";
        }
        else if (CurrentDirection == "U") {
          CurrentDirection = "D";
        }
        else if (CurrentDirection == "D") {
          CurrentDirection = "D";
        }
      }
    }

    return {
      Position,
      CurrentDirection
    };

  }
}


module.exports = SpacecraftController;  