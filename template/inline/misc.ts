//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("box", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("box");
    self.appendElement("span", (self) => {
      self.addClassName("box-inner");
      if (element.hasAttribute("tag")) {
        self.appendTextNode(element.getAttribute("tag"));
      }
      self.appendChild(transformer.apply());
    });
  });
  return self;
});

export default manager;