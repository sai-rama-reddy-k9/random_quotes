const new_quote_el = document.getElementById("new_quote_button");
const quote_el = document.getElementById("quote");
const save_el = document.getElementById("save_button");
const show_saved_el = document.getElementById("show_saved_btn");
const saved_ones_el = document.getElementById("saved_ones");
const share_btn_el = document.getElementById("share_btn");
const download_btn_el = document.getElementById("download_btn");
const like_button = document.getElementById("like_btn");
const heart = document.getElementById("heart");

let currentQuote = ""; // global

async function new_quote() {
  try {
    let data = await fetch("./quotes.json");
    data = await data.json();
    let rand_int = Math.floor(Math.random() * data.quotes.length);
    currentQuote = data.quotes[rand_int].quote;
    quote_el.textContent = currentQuote;
    heart.classList.remove("heart_yes");
    return currentQuote;
  } catch (error) {
    console.log("Error loading quotes:", error);
  }
}
new_quote();
new_quote_el.addEventListener("click", new_quote);

function toggle_save() {
  let saved = JSON.parse(localStorage.getItem("saved_quotes")) || [];
  if (saved.includes(currentQuote)) {
    saved = saved.filter((q) => q !== currentQuote);
  } else {
    saved.push(currentQuote);
  }
  localStorage.setItem("saved_quotes", JSON.stringify(saved));
  console.log(saved);
}
save_el.addEventListener("click", toggle_save);
// localStorage.clear();
let isSavedVisible = false;
function show_saved() {
  if (isSavedVisible) {
    saved_ones_el.innerHTML = "";
    show_saved_el.textContent = "Show saved";
    isSavedVisible = false;
    return;
  }
  let saved = JSON.parse(localStorage.getItem("saved_quotes")) || [];
  if (saved.length == 0) {
    saved_ones_el.textContent = "No saved quotes yet...";
    return;
  }
  show_saved_el.innerHTML = "Hide saved";
  saved_ones_el.innerHTML = saved.map((q) => `<p>• ${q}</p>`).join("");
  isSavedVisible = true;
}
show_saved_el.addEventListener("click", show_saved);

function download_quote() {
  const text_to_write = currentQuote;
  const file_name_to_save_as = "quote.txt";
  const text_file_as_blob = new Blob([text_to_write], { type: "text/plain" });

  const download_link = document.createElement("a");
  download_link.download = file_name_to_save_as;

  // if (window.URL != null) {
  //   download_link.href = window.URL.createObjectURL(text_file_as_blob);
  // }
  download_link.href = window.URL.createObjectURL(text_file_as_blob);

  document.body.appendChild(download_link);
  download_link.click();

  document.body.removeChild(download_link);
  window.URL.revokeObjectURL(download_link.href);
}
download_btn_el.addEventListener("click", download_quote);

function share_quote() {
  if (!currentQuote) return;
  if (navigator.share) {
    navigator
      .share({
        title: "Quote",
        text: currentQuote,
      })
      .catch((error) => console.log("Share cancelled", error));
  } else {
    navigator.clipboard
      .writeText(currentQuote)
      .then(() => alert("Quote copied to clipboard"))
      .catch((err) => console.log("Copy failed", err));
  }
}
share_btn_el.addEventListener("click", share_quote);
console.log(like_button, heart);

like_button.addEventListener("click", () => {
  heart.classList.toggle("heart_yes");
});
