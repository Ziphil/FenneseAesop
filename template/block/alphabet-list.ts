//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("al", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("ul", (self) => {
    self.addClassName("alphabet-list");
    self.appendChild(transformer.apply(element, "section.al"));
  });
  return self;
});

manager.registerElementRule("li", "section.al", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("li", (self) => {
    self.addClassName("alphabet-item");
    self.appendChild(transformer.apply(element, "section.al.li"));
  });
  return self;
});

const ALPHABET_LIST_CLASS_NAMES = new Map<string, [string]>([
  ["ltc", ["alphabet-letter-capital"]],
  ["lts", ["alphabet-letter-small"]],
  ["prs", ["alphabet-pronunciation"]],
  ["pre", ["alphabet-explanation"]]
]);

manager.registerElementRule(["ltc", "lts", "prs", "pre"], "section.al.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const [className] = ALPHABET_LIST_CLASS_NAMES.get(element.tagName) ?? [""];
  self.appendElement("div", (self) => {
    self.addClassName(className);
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

export default manager;