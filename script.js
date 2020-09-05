function changeTextColorSlidingTheDiv(text) {
  var html = "";
  var content = document.querySelector(".content");

  html += `
    <section>
      <span class="sliding">
        ${createContentAroundText()}
      </span>
      <div class="wrapper">
        <span class="sliding">
          ${createContentAroundText()}
        </span>
      </div>
    </section>
  `;

  content.innerHTML = html;

  function createContentAroundText() {
    var span = "";
    var arrayText = text.trim().split(" ");

    arrayText.forEach((text) => (span += `<span> ${text}</span>`));

    return span;
  }
}
