function changeTextColorSlidingTheDiv(text) {
  const slid_section = document.createElement("section");
  const wrap_div = document.createElement("div");

  // Set attributes
  wrap_div.setAttribute("class", "wrapper");

  wrap_div.appendChild(createContentAroundText());
  slid_section.appendChild(createContentAroundText());

  slid_section.appendChild(wrap_div);
  document.body.appendChild(slid_section);

  function createContentAroundText() {
    const slid_span = document.createElement("span");

    // Set attributes
    slid_span.setAttribute("class", "sliding");

    const arrayText = text.trim().split(" ");

    arrayText.forEach((text) => {
      const span = document.createElement("span");
      const span_text = document.createTextNode(` ${text}`);

      span.appendChild(span_text);
      slid_span.appendChild(span);
    });

    return slid_span;
  }
}
