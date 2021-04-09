function addEventEditionButton(btnId, cssPropetie, propertie) {
  let buttonTarget = document.getElementById(btnId);
  buttonTarget.addEventListener("click", function () {
    let selection = window.getSelection().getRangeAt(0);
    let selectedText = selection.extractContents();
    let span = document.createElement("span");
    try {
      span.style[cssPropetie] = propertie;
    } catch (e) {
      console.trace(e);
    }
    span.appendChild(selectedText);
    selection.insertNode(span);
  });
}

addEventEditionButton("bold", "fontWeight", "bold");
addEventEditionButton("italic", "fontStyle", "italic");
addEventEditionButton("underline", "textDecoration", "underline");

function alignText(elem, alignType) {
  if (alignType == "center") {
    elem.classList.toggle("Centeractive");
    document.getElementById("input-container-id").style.textAlign = alignType;
  } else if (alignType == "left") {
    elem.classList.toggle("Leftactive");
    document.getElementById("input-container-id").style.textAlign = alignType;
  } else {
    elem.classList.toggle("Rightactive");
    document.getElementById("input-container-id").style.textAlign = alignType;
  }
}
