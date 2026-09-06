//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("root", "", (transformer, document, element) => {
  const headerNode = document.createDocumentFragment();
  const mainNode = document.createDocumentFragment();
  const variables = transformer.variables as any;
  variables.headerNode = headerNode;
  variables.wordNodes = new Map();
  mainNode.appendElement("main", (self) => {
    self.addClassName("root");
    self.appendChild(transformer.apply(element, "root"));
  });
  return mainNode;
});

manager.registerElementFactory("page", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("footer", (self) => {
    self.addClassName("page");
    self.setAttribute("data-position", "left");
    self.appendElement("div", (self) => {
      self.addClassName("page-number");
      self.setAttribute("data-position", "left");
    });
  });
  self.appendElement("footer", (self) => {
    self.addClassName("page");
    self.setAttribute("data-position", "right");
    self.appendElement("div", (self) => {
      self.addClassName("page-number");
      self.setAttribute("data-position", "right");
    });
  });
  return self;
});

export default manager;