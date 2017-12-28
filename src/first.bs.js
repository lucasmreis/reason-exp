// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';


function parseSuit(suitStr) {
  switch (suitStr) {
    case "C" : 
        return /* Some */["Clubs"];
    case "D" : 
        return /* Some */["Diamonds"];
    case "H" : 
        return /* Some */["Hearts"];
    case "S" : 
        return /* Some */["Spades"];
    default:
      return /* None */0;
  }
}

function parseValue(valueStr) {
  switch (valueStr) {
    case "10" : 
        return /* Some */["Ten"];
    case "A" : 
        return /* Some */["Ace"];
    case "J" : 
        return /* Some */["Jack"];
    case "K" : 
        return /* Some */["King"];
    case "Q" : 
        return /* Some */["Queen"];
    default:
      return /* None */0;
  }
}

function parseCard(cardStr) {
  var length = cardStr.length;
  var suitStr = cardStr.slice(length - 1 | 0);
  var valueStr = cardStr.slice(0, length - 1 | 0);
  var match = parseValue(valueStr);
  var match$1 = parseSuit(suitStr);
  if (match && match$1) {
    return match[0] + (" of " + match$1[0]);
  } else {
    return "-- not valid --";
  }
}

console.log(parseCard("JC"));

exports.parseSuit  = parseSuit;
exports.parseValue = parseValue;
exports.parseCard  = parseCard;
/*  Not a pure module */