"use strict";
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Graduated"] = 1] = "Graduated";
    Status[Status["Suspended"] = 2] = "Suspended";
})(Status || (Status = {}));
let studentStatus = Status.Active;
console.log(studentStatus);
