//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("text", "story", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("text");
    self.appendChild(transformer.apply(element, "text"));
  });
  return self;
});

manager.registerElementRule("sh", "text", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("text-fennese");
    self.appendChild(transformer.apply(element, "text"));
  });
  return self;
});

manager.registerElementRule("ja", "text", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("text-japanese");
    self.appendChild(transformer.apply(element, "text"));
  });
  return self;
});

manager.registerElementRule("p", "text", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("p", (self) => {
    self.addClassName("text-paragraph");
    self.appendChild(transformer.apply(element, "text"));
  });
  return self;
});

export default manager;