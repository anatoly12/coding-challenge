"use strict";

// Print all entries, across all of the *async* sources, in chronological order.
const Printer = require("../lib/printer");
let printer = new Printer();

module.exports = (logSources) => {
  return new Promise(async (resolve, reject) => {
    let logs = await Promise.all(logSources);
    logs = logs.sort((a, b) => a.date - b.date);
    for (let i = 0; i < logs.length; i++) {
      printer.print(logs[i]);
    }
    printer.done();
    resolve(true);
  });
};
