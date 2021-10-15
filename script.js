const quoteContainer = document.querySelector(".quote-container");
var quotes;
var quoteBody;
var quoteAuthor;
var AuthorName;

const randomNumber = () => {
  return Math.floor(Math.random() * quotes.length);
};

const generateQuote = () => {
  let randNum = randomNumber();
  quoteBody.innerText = quotes[randNum].innerText;
  AuthorName.innerText = quoteAuthor[randNum].innerText.toLowerCase();
};
var allQuotes = "";
var quotesJSON = [];
fetch("https://type.fit/api/quotes")
  .then((res) => res.json())
  .then((res) => {
    quotesJSON.push(res);
    quotesJSON = quotesJSON[0];
    for (let i = 0; i <= 200; i++) {
      allQuotes += `
      <div class="col-md-4 p-3">
      <div class="card mt-4 hover-card h-100" style="background-color: #030a13;border-radius: 12px;">
          <div class="card-body pb-0">

            <h5 class="card-title text-center  text-light"><span> </span>
            <span class='quote-text'>${quotesJSON[i].text}</span>
              <span></span></h5>
            <p class="card-body text-center pb-0"><span
                class="text-center  text-info quote-author">${quotesJSON[i].author}</span></p>

          </div>
          </div>
          </div>
      `;
    }
    quoteContainer.innerHTML = allQuotes;
    quotes = document.querySelectorAll(".quote-text");
    quoteBody = document.querySelector(".quote-generate");
    quoteAuthor = document.querySelectorAll(".quote-author");
    AuthorName = document.querySelector(".author-name");
    AuthorName.style.textTransform = "capitalize";
  });
