//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("first", "blank", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("first");
    self.appendChild(transformer.apply(element, "first"));
  });
  return self;
});

manager.registerElementRule("title", "first", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("first-title");
    self.appendChild(transformer.apply(element, "first.title"));
  });
  return self;
});

manager.registerElementRule("sh", "first.title", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("first-title-fennese");
    self.appendChild(transformer.apply(element, "first.title.sh"));
  });
  return self;
});

manager.registerElementRule("row", "first.title.sh", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("first-title-fennese-row");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("ja", "first.title", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("first-title-japanese");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("author", "first", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("first-author");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

export default manager;