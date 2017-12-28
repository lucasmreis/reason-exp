// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry                   = require("bs-platform/lib/js/curry.js");
var Js_exn                  = require("bs-platform/lib/js/js_exn.js");
var Js_option               = require("bs-platform/lib/js/js_option.js");
var Pervasives              = require("bs-platform/lib/js/pervasives.js");
var Caml_format             = require("bs-platform/lib/js/caml_format.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function parseNumValue(str) {
  var parsed;
  try {
    parsed = /* Some */[Caml_format.caml_int_of_string(str)];
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    if (exn[0] === Caml_builtin_exceptions.failure) {
      parsed = /* None */0;
    } else {
      throw exn;
    }
  }
  if (parsed) {
    var n = parsed[0];
    if (n >= 2 && n <= 10) {
      return /* Some */[/* Num */[n]];
    } else {
      return /* None */0;
    }
  } else {
    return /* None */0;
  }
}

function parseValue(valueStr) {
  switch (valueStr) {
    case "A" : 
        return /* Some */[/* Ace */0];
    case "J" : 
        return /* Some */[/* Jack */3];
    case "K" : 
        return /* Some */[/* King */1];
    case "Q" : 
        return /* Some */[/* Queen */2];
    default:
      return parseNumValue(valueStr);
  }
}

function parseSuit(suitStr) {
  switch (suitStr) {
    case "C" : 
        return /* Some */[/* Clubs */2];
    case "D" : 
        return /* Some */[/* Diamonds */1];
    case "H" : 
        return /* Some */[/* Hearts */0];
    case "S" : 
        return /* Some */[/* Spades */3];
    default:
      return /* None */0;
  }
}

function parseOrdinaryCard(cardStr) {
  var length = cardStr.length;
  var suitStr = cardStr.slice(length - 1 | 0);
  var valueStr = cardStr.slice(0, length - 1 | 0);
  var match = parseValue(valueStr);
  var match$1 = parseSuit(suitStr);
  if (match && match$1) {
    return Js_option.some(/* OrdinaryCard */[
                match[0],
                match$1[0]
              ]);
  } else {
    return /* None */0;
  }
}

function parseCard(cardStr) {
  if (cardStr === "J") {
    return /* Some */[/* Joker */0];
  } else {
    return parseOrdinaryCard(cardStr);
  }
}

var Parser = /* module */[
  /* parseNumValue */parseNumValue,
  /* parseValue */parseValue,
  /* parseSuit */parseSuit,
  /* parseOrdinaryCard */parseOrdinaryCard,
  /* parseCard */parseCard
];

function suitToString(suit) {
  switch (suit) {
    case 0 : 
        return "Hearts";
    case 1 : 
        return "Diamonds";
    case 2 : 
        return "Clubs";
    case 3 : 
        return "Spades";
    
  }
}

function numToString(num) {
  var switcher = num - 2 | 0;
  if (switcher > 8 || switcher < 0) {
    return Pervasives.failwith("numToString");
  } else {
    switch (switcher) {
      case 0 : 
          return "Two";
      case 1 : 
          return "Three";
      case 2 : 
          return "Four";
      case 3 : 
          return "Five";
      case 4 : 
          return "Six";
      case 5 : 
          return "Seven";
      case 6 : 
          return "Eight";
      case 7 : 
          return "Nine";
      case 8 : 
          return "Ten";
      
    }
  }
}

function valueToString(value) {
  if (typeof value === "number") {
    switch (value) {
      case 0 : 
          return "Ace";
      case 1 : 
          return "King";
      case 2 : 
          return "Queen";
      case 3 : 
          return "Jack";
      
    }
  } else {
    return numToString(value[0]);
  }
}

function renderCard(card) {
  if (card) {
    return valueToString(card[0]) + (" of " + suitToString(card[1]));
  } else {
    return "Joker";
  }
}

var defaultErrorCard = "-- card not valid --";

var RenderToString = /* module */[
  /* suitToString */suitToString,
  /* numToString */numToString,
  /* valueToString */valueToString,
  /* renderCard */renderCard,
  /* defaultErrorCard */defaultErrorCard
];

function map(fn, opt) {
  if (opt) {
    return /* Some */[Curry._1(fn, opt[0])];
  } else {
    return /* None */0;
  }
}

function withDefault(defaultValue, opt) {
  if (opt) {
    return opt[0];
  } else {
    return defaultValue;
  }
}

var Option = /* module */[
  /* map */map,
  /* withDefault */withDefault
];

console.log(withDefault(defaultErrorCard, map(renderCard, parseCard("J"))));

exports.Parser         = Parser;
exports.RenderToString = RenderToString;
exports.Option         = Option;
/*  Not a pure module */
