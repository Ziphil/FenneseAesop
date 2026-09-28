//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("sref", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("sentence-reference");
    self.appendElement("span", (self) => {
      self.addClassName("sentence-reference-inner");
      if (element.hasAttribute("num")) {
        self.appendTextNode(element.getAttribute("num"));
      }
      self.appendChild(transformer.apply());
    });
  });
  return self;
});

manager.registerElementRule("tref", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("story-reference");
    self.appendElement("span", (self) => {
      self.addClassName("story-reference-inner");
      if (element.hasAttribute("num")) {
        self.appendTextNode("§");
        self.appendTextNode(element.getAttribute("num"));
      }
      self.appendChild(transformer.apply());
    });
  });
  return self;
});

export default manager;