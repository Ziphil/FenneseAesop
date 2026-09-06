//

import {VivliostyleDocumentFragment, VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("word", "root", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  transformer.apply(element, "word");
  return self;
});

manager.registerElementRule("li", "word", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const name = element.getAttribute("name");
  const wordNodes = (transformer.variables as any).wordNodes as Map<string, VivliostyleDocumentFragment>;
  self.appendElement("li", (self) => {
    self.addClassName("word-item");
    self.appendChild(transformer.apply(element, "word.li"));
  });
  wordNodes.set(name, self);
  return self;
});

manager.registerElementRule("cat", "word.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("word-item-category");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

manager.registerElementRule("sh", "word.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("word-item-shaleian");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

manager.registerElementRule("shc", "word.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("word-item-conjugated");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

manager.registerElementRule("eql", "word.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("ul", (self) => {
    self.addClassName("equivalent-list");
    self.appendChild(transformer.apply(element, "word.li.eql"));
  });
  return self;
});

manager.registerElementRule("li", "word.li.eql", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("li", (self) => {
    self.addClassName("equivalent-item");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

manager.registerElementRule("cat", "word.li.eql", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("equivalent-item-category");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

manager.registerElementRule("ja", "word.li.eql", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("equivalent-item-japanese");
    self.appendChild(transformer.apply(element));
  });
  return self;
});

export default manager;