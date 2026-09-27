//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("blank", "root", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("article", (self) => {
    self.addClassName("plain");
    if (element.hasAttribute("id")) {
      self.setAttribute("id", element.getAttribute("id")!);
    }
    self.appendChild(transformer.apply(element, "blank"));
  });
  return self;
});

export default manager;