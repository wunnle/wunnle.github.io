document
  .querySelector("#xml-url-input")
  .addEventListener("input", function (e) {
    console.log(e.target.value);
    document.querySelector("#xml-link").href = e.target.value;
  });