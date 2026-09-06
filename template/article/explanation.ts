//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("explanation", "root", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("article", (self) => {
    self.addClassName("explanation");
    self.appendChild(transformer.apply(element, "explanation"));
  });
  return self;
});

export default manager;