//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("p", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("p", (self) => {
    self.addClassName("paragraph");
    if (element.hasAttribute("center")) {
      self.setAttribute("data-center", "");
    }
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

export default manager;