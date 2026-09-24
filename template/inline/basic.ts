//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("ch", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  if (element.hasAttribute("c")) {
    const codePoint = parseInt(element.getAttribute("c"), 16);
    self.appendTextNode(String.fromCodePoint(codePoint));
  } else if (element.hasAttribute("n")) {
    const query = element.getAttribute("n");
    if (query === "nbsp") {
      self.appendTextNode(String.fromCodePoint(0xA0));
    }
  }
  return self;
});

manager.registerElementRule("hs", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("half-space");
  });
  return self;
});

manager.registerElementRule("u", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("em", (self) => {
    self.addClassName("underline");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

const GENERAL_DIACRITICS = new Map([["a", "ˊ"], ["g", "ˋ"], ["c", "ˆ"]]);

manager.registerElementRule("d", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const type = (element.getAttribute("g") || element.getAttribute("t")) ?? "";
  self.appendElement("span", (self) => {
    self.addClassName("diacritic");
    self.appendElement("span", (self) => {
      self.addClassName("diacritic-char");
      self.appendChild(transformer.apply(element));
    });
    if (element.hasAttribute("t")) {
      self.appendElement("span", (self) => {
        self.addClassName("diacritic-mark");
        self.setAttribute("data-position", "above");
        self.appendTextNode(GENERAL_DIACRITICS.get(type) ?? "");
      });
    }
  });
  return self;
});

export default manager;