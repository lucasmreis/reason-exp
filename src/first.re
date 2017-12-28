let parseSuit = suitStr =>
  switch suitStr {
  | "H" => Some("Hearts")
  | "D" => Some("Diamonds")
  | "C" => Some("Clubs")
  | "S" => Some("Spades")
  | _ => None
  };

let parseValue = valueStr =>
  switch valueStr {
  | "A" => Some("Ace")
  | "K" => Some("King")
  | "Q" => Some("Queen")
  | "J" => Some("Jack")
  | "10" => Some("Ten")
  | _ => None
  };

let parseCard = cardStr => {
  let length = Js.String.length(cardStr);
  let suitStr = Js.String.sliceToEnd(~from=length - 1, cardStr);
  let valueStr = Js.String.slice(~from=0, ~to_=length - 1, cardStr);
  switch (parseValue(valueStr), parseSuit(suitStr)) {
  | (Some(value), Some(suit)) => value ++ " of " ++ suit
  | _ => "-- not valid --"
  };
};

Js.log(parseCard("JC"));