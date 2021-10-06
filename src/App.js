import { useState } from "react";
import "./styles.css";
var fruitsEmojiDictionary = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍋": "Lemon",
  "🍌": "Banana"
};

var fingerDown = "👇";

export default function App() {
  var EmojiswithUs = Object.keys(fruitsEmojiDictionary);

  // console.log(EmojiswithUs)

  var [fruitMeaning, setfruitMeaning] = useState(
    "Translation will appear here"
  );

  function changeInputHandler(event) {
    //  console.log(event.target.value)
    var inputValue = event.target.value;

    fruitMeaning = fruitsEmojiDictionary[inputValue];

    if (fruitMeaning === undefined) {
      fruitMeaning = "This fruit is not available in our Database";
    }
    setfruitMeaning(fruitMeaning);
  }

  function onclickHandler(item) {
    fruitMeaning = fruitsEmojiDictionary[item];
    setfruitMeaning(fruitMeaning);
  }

  return (
    <div className="App">
      <h1> Emoji's Meaning</h1>
      <input
        style={{ width: "60%", height: "8vh" }}
        placeholder="Please enter the emoji you want to search"
        onChange={changeInputHandler}
      />

      <h2 style={{ border: "1px solid black" }}>{fruitMeaning}</h2>
      <h3>Click on the below emoji's to know the name of it {fingerDown}</h3>

      <div style={{ paddingBottom: "5rem" }}>
        {EmojiswithUs.map(function (item) {
          return (
            <span
              onClick={() => onclickHandler(item)}
              key={item}
              style={{
                padding: "1rem 1rem",
                fontSize: "2rem"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
