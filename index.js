import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis non sapien in maximus. Aenean tempor elit non lobortis finibus. Quisque in feugiat arcu. Fusce non enim dignissim leo egestas sagittis vitae id ligula. Donec at vulputate enim, eget efficitur arcu. Donec consectetur tempus quam id dignissim. Nunc vestibulum mattis lacus, at blandit tellus gravida elementum. Suspendisse hendrerit nisi sit amet lectus imperdiet egestas vitae in erat. In eleifend consequat enim vel ultricies.";

let books = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  books = [];
  const book = {
    id: 0,
    title: "Some Title",
    cover: "https://covers.openlibrary.org/b/id/12547191-M.jpg",
    description: description,
  };
  books.push(book);
  res.render("index.ejs", { books: books });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
