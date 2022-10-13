// https://leetcode.com/problems/student-attendance-record-i/

const checkRecord = s => !/L{3,}/.test(s) && (s.match(/A/g) || []).length < 2;
const s = 'PPALLP';
console.log(checkRecord(s));
