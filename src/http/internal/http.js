'use strict';


let nowCache;
let utcCache;

function nowDate() {
  if (!nowCache) cache();
  return nowCache;
}

function utcDate() {
  if (!utcCache) cache();
  return utcCache;
}

function cache() {
  const d = new Date();
  nowCache = d.valueOf();
  utcCache = d.toUTCString();
}

function resetCache() {
  nowCache = undefined;
  utcCache = undefined;
}

// class HttpRequestTiming extends PerformanceEntry {
//   constructor(statistics) {
//     super();
//     this.name = 'HttpRequest';
//     this.entryType = 'http';
//     const startTime = statistics.startTime;
//     const diff = process.hrtime(startTime);
//     this.duration = diff[0] * 1000 + diff[1] / 1e6;
//     this.startTime = startTime[0] * 1000 + startTime[1] / 1e6;
//   }
// }

function emitStatistics(statistics) {
  // notify('http', new HttpRequestTiming(statistics));
}

module.exports = {
  kOutHeaders: Symbol('kOutHeaders'),
  kNeedDrain: Symbol('kNeedDrain'),
  nowDate,
  utcDate,
  emitStatistics
};
