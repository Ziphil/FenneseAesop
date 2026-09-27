//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("title", "blank", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("title");
    self.appendChild(transformer.apply(element, "title"));
  });
  return self;
});

manager.registerElementRule("sh", "title", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("title-fennese");
    self.appendChild(transformer.apply(element, "title.sh"));
  });
  return self;
});

manager.registerElementRule("row", "title.sh", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("title-fennese-row");
    self.appendChild(transformer.apply(element, "title"));
  });
  return self;
});

manager.registerElementRule("ja", "title", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("title-japanese");
    self.appendChild(transformer.apply(element, "title"));
  });
  return self;
});

manager.registerElementRule("author", "blank", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("author");
    self.appendChild(transformer.apply(element, "author"));
  });
  return self;
});

export default manager;