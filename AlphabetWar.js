
//question
/***
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.
***/


// the clever one
// using reduce function so only loop string once
function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}

// my solution
// key point: using map rather than dictionary
function alphabetWarMySolution(fight)
{
   const leftScoreDic = new Map();
   leftScoreDic.set("w", 4);
   leftScoreDic.set("p", 3);
   leftScoreDic.set("b", 2);
   leftScoreDic.set("s", 1);
   const rightScoreDic = new Map();
   rightScoreDic.set("m", 4);
   rightScoreDic.set("q", 3);
   rightScoreDic.set("d", 2);
   rightScoreDic.set("z", 1);
   let left = 0;
   let right = 0;
   for(let i = 0; i < fight.length; i++){
     let ch = fight.charAt(i);
     if(leftScoreDic.has(ch)){
       left = left + leftScoreDic.get(ch);
     }
   }
   for(let i = fight.length - 1; i >= 0; i--){
     let ch = fight.charAt(i);
     if(rightScoreDic.has(ch)){
       right = right + rightScoreDic.get(ch);
     }
   }
   if(left > right){
     return "Left side wins!";
   } else if (right > left) {
     return "Right side wins!";
   } else {
     return "Let's fight again!";
   }
}
