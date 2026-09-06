//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule(["x", "xn"], true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("sans");
    self.appendChild(transformer.apply());
  });
  return self;
});

manager.registerElementRule("i", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("var", (self) => {
    self.addClassName("italic");
    self.appendChild(transformer.apply());
  });
  return self;
});

manager.registerElementRule("k", true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("japanese");
    self.appendChild(transformer.apply());
  });
  return self;
});

export default manager;