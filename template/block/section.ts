//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("section", ["explanation", "plain"], (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("section", (self) => {
    self.addClassName("section");
    if (element.hasAttribute("nobr")) {
      self.setAttribute("data-no-break", "");
    }
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("heading", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const number = element.parentNode!.searchXpath("preceding-sibling::section").length + 1;
  self.appendElement("h2", (self) => {
    self.addClassName("section-title");
    self.appendElement("span", (self) => {
      self.addClassName("section-title-text");
      self.appendChild(transformer.apply(element, "section"));
    });
  });
  return self;
});

export default manager;