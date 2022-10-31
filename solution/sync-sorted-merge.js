"use strict";

// Print all entries, across all of the sources, in chronological order.
const Printer = require("../lib/printer");
let printer = new Printer();

module.exports = (logSources) => {
  logSources = logSources.sort((a, b) => a.date - b.date);
  for (let i = 0; i < logSources.length; i++) {
    printer.print(logSources[i]);
  }
  printer.done();
};
