const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  // the structure / rules that we want to impose on the data
  name: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true, default: "No info available" },
  img: { type: String, required: true, default: "***INSERT IMAGE URL***" },
  synopsis: {
    type: String,
    required: true,
    default: "***INSERT DUMMY SYNOPSIS TEXT***",
  },
  price: {
    type: Number,
    required: true,
    default: 0.99,
  } /* *** NEED TO UPDATE DEFAULT VALUES  */,
  quantity: { type: Number, required: true, default: 1 },
});

module.exports = mongoose.model("Book", bookSchema);

// const bookData = [
//   {
//     name: "The Old Man and the Sea",
//     author: "Hemingway, Ernest",
//     genre: "General Fiction",
//     img: "https://i.imgur.com/cgJfAqw.jpg",
//     synopsis:
//       "The Old Man and the Sea is one of Hemingway's most enduring works. Told in language of great simplicity and power, it is the story of an old Cuban fisherman, down on his luck, and his supreme ordeal -- a relentless, agonizing battle with a giant marlin far out in the Gulf Stream.",
//     price: 10.0,
//     quantity: 2,
//   },
//   {
//     name: "Letters to a Young Poet",
//     author: "Rilke, Rainer Maria",
//     genre: "Letters",
//     img: "https://i.imgur.com/kFtLKk7.jpg",
//     synopsis:
//       "Written during an important stage in Rilke's artistic development, these letters contain many of the themes that later appeared in his best works. Essential reading for scholars and poetry lovers.",
//     price: 12.0,
//     quantity: 1,
//   },
//   {
//     name: "Slaughterhouse-five",
//     author: "Vonnegut, Kurt",
//     genre: "General Fiction",
//     img: "https://i.imgur.com/vvhOdKN.jpg",
//     synopsis:
//       "Billy Pilgrim survives capture by the Gemans in World War II, the Dresden bombings, and the struggle for financial success only to be kidnapped in a flying saucer and taken to the planet Tralfamadore",
//     price: 8.0,
//     quantity: 6,
//   },
//   {
//     name: "The Brief Wondrous Life of Oscar Wao",
//     author: "Diaz, Junot",
//     genre: "General Fiction",
//     img: "https://i.imgur.com/QifjKKD.jpg",
//     synopsis:
//       "Winner of both the National Book Critics Circle Award and the Pulitzer Prize for Fiction, the most talked about--and praised--smash hit of 2007 follows the adventures of a sweet but disastrously overweight ghetto nerd plagued by a family curse.",
//     price: 14.0,
//     quantity: 3,
//   },
//   {
//     name: "The Catcher in the Rye",
//     author: "Salinger, J.D.",
//     genre: "General Fiction",
//     img: "https://i.imgur.com/nvIst5B.jpg",
//     synopsis:
//       "In an effort to escape the hypocrisies of life at his boarding school, sixteen-year-old Holden Caulfield seeks refuge in New York City",
//     price: 6.0,
//     quantity: 5,
//   },
//   {
//     name: "Mountains Beyond Mountains",
//     author: "Kidder, Tracy",
//     genre: "Medical",
//     img: "https://i.imgur.com/twQRCue.jpg",
//     synopsis:
//       "A thought-provoking portrait of world-renowned infectious disease expert Dr. Paul Farmer follows the efforts of this unconventional Harvard genius to understand the world's great health, economic, and social problems and to bring healing to humankind.",
//     price: 12.0,
//     quantity: 3,
//   },
//   {
//     name: "But What If We're Wrong",
//     author: "Klosterman, Chuck",
//     genre: "Essays",
//     img: "https://i.imgur.com/KxIegxI.jpg",
//     synopsis:
//       "The best-selling author of Sex, Drugs, and Cocoa Puffs explores the idea that today's mainstream beliefs about the world are fundamentally incorrect, drawing on original interviews with forefront intellectuals and experts to consider how the music, sports, literature and other present-day conventions may be perceived in future centuries.",
//     price: 10.0,
//     quantity: 4,
//   },
//   {
//     name: "Sex, Drugs, and Cocoa Puffs",
//     author: "Klosterman, Chuck",
//     genre: "General Fiction",
//     img: "https://i.imgur.com/GlDqzfz.jpg",
//     synopsis:
//       "The author of Fargo Rock City explores a range of modern cultural phenomena, including Internet pornography, tribute bands, baseball rivalries, and reality television, as he explores the role of the media in American life.",
//     price: 8.0,
//     quantity: 8,
//   },
// ];

// module.exports = bookData;
