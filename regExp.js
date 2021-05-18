function test(regExp, ...args) {
  let [result] = [args];

  for (const i of result) {
    console.log(regExp.test(i));
  }
}

// Lesson 1: An Introduction, and the ABCs
/*
let word1 = "abcdefg";
let word2 = "abcde";
let word3 = "abc";
let regEx = new RegExp("abc");

test(regEx, word1, word2, word3);
*/

// Lesson 1½: The 123s
/*
let num1 = `abc123xyZ`;
let num2 = `define "123"`;
let num3 = 123;
let regEx = /\d/;

test(regEx, num1, num2, num3);
*/

// Lesson 2: The Dot
/*
let dot1 = "cat.";
let dot2 = "234.";
let dot3 = "?$+=.";
let dot4 = "abc1"; //skip
let regEx = /\./;

test(regEx, dot1, dot2, dot3, dot4);
*/

// Lesson 3: Matching specific characters
/*
let word1 = "can";
let word2 = "man";
let word3 = "fan";
let word4 = "ran"; //skip
let regEx = /[cmf]/;

test(regEx, word1, word2, word3, word4);
*/
// Lesson 4: Excluding specific characters
/*
let word1 = "hot";
let word2 = "dog";
let word3 = "bog";
let regEx = /[^bog]/;

test(regEx, word1, word2, word3);
*/
// Lesson 5: Character ranges
/*
let word1 = "HOT";
let word2 = "hot";
let word3 = "DOG";
let regEx = /[A-Z]/;

test(regEx, word1, word2, word3);
*/
// Lesson 6: Catching some zzz's
/*
let word1 = "wazzzzzup";
let word2 = "wazzzup";
let word3 = "wazap";
let regEx = /z{3,5}/;

test(regEx, word1, word2, word3);
*/
// Lesson 7: Mr. Kleene, Mr. Kleene
/*
let word1 = "aaaabbcc";
let word2 = "aabbbcc";
let word3 = "a";
let regEx = /a.+/;

test(regEx, word1, word2, word3);
*/
// Lesson 8: Characters optional
/*
let word1 = "1 file found?";
let word2 = "2 files found?";
let word3 = "24 files found?";
let word4 = "No files found";
let regEx = /\?/;

test(regEx, word1, word2, word3, word4);
*/
// Lesson 9: All this whitespace
/*
let word1 = "1  abc";
let word2 = "2   abc";
let word3 = "3      abc";
let word4 = "4abc";
let regEx = /( )/; //   \d\.\s+abc

test(regEx, word1, word2, word3, word4);
*/
// Lesson 10: Starting and ending
/*
let match = "Mission: successful";
let skip1 = "Last Mission: unsuccessful";
let skip2 = "Next Mission: successful upon capture of target";
let regEx = /^Mission: successful$/;

test(regEx, match, skip1, skip2);
*/
// Lesson 11: Match groups
/*
let match1 = "file_record_transcript.pdf";
let match2 = "file_07241999.pdf";
let skip1 = "testfile_fake.pdf.tmp";
let regEx = /^(file.+)\.pdf$/;

test(regEx, match1, match2, skip1);
*/
// Lesson 12: Nested groups
/*
let match1 = "Jan 1987";
let match2 = "May 1969";
let match3 = "Aug 2011";
let regEx = /([A-z]+ (\d+))/;

test(regEx, match1, match2, match3);
*/
// Lesson 13: More group work
/*
let match1 = "1280x720";
let match2 = "1920x1600";
let match3 = "1024x768";
let regEx = /(\d+)x(\d+)/;

test(regEx, match1, match2, match3);
*/
// Lesson 14: It's all conditional
/*
let match1 = "I love cats";
let match2 = "I love dogs";
let match3 = "I love mouse";
let regEx = /I love *(cats|dogs)/;

test(regEx, match1, match2, match3);
*/
