import { existsSync, statSync } from "fs";
import Debug from 'debug';
const debug = Debug('older');
const guts = Debug('older:guts');
export default older;

function older(target, other, fudge = 0) {
  const targetStats = statSync(target);
  const otherStats = statSync(other);
  const targetDate = new Date(targetStats.mtime).getTime();
  const otherDate = new Date(otherStats.mtime).getTime();
  guts(`     fudge: ${fudge}`)
  guts(`targetDate: ${targetDate}`)
  guts(` otherDate: ${otherDate}`)
  guts(` otherDate - targetDate: ${otherDate - targetDate}`)
  guts(` targetDate - otherDate: ${targetDate - otherDate}`)
  guts(` otherDate > targetDate + fudge: ${otherDate > targetDate + fudge}`)
  debug(` ${target} older than ${other}? ${(otherDate > targetDate + fudge)?'YES':'NO'}`)
  return (otherDate > targetDate + fudge);
}
