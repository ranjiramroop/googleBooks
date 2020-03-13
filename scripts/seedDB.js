const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Never Split The Difference",
    author: "Chris Voss",
    synopsis:
      "A former international hostage negotiator for the FBI offers a new, field-tested approach to high-stakes negotiations—whether in the boardroom or at home. After a stint policing the rough streets of Kansas City, Missouri, Chris Voss joined the FBI, where his career as a hostage negotiator brought him face-to-face with a range of criminals, including bank robbers and terrorists. Reaching the pinnacle of his profession, he became the FBI’s lead international kidnapping negotiator. Never Split the Difference takes you inside the world of high-stakes negotiations and into Voss’s head, revealing the skills that helped him and his colleagues succeed where it mattered most: saving lives. In this practical guide, he shares the nine effective principles—counterintuitive tactics and strategies—you too can use to become more persuasive in both your professional and personal life. Life is a series of negotiations you should be prepared for: buying a car, negotiating a salary, buying a home, renegotiating rent, deliberating with your partner. Taking emotional intelligence and intuition to the next level, Never Split the Difference gives you the competitive edge in any discussion.",
    image:
      "http://books.google.com/books/content?id=RmdqCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:
      "http://books.google.com/books?id=RmdqCgAAQBAJ&printsec=frontcover&dq=Neversplitthedifference&hl=&cd=1&source=gbs_api",
    date: new Date(Date.now())
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
