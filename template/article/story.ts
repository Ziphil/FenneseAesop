//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("story", "root", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("article", (self) => {
    self.addClassName("story");
    if (element.hasAttribute("id")) {
      self.setAttribute("id", element.getAttribute("id")!);
    }
    self.appendChild(transformer.call("page"));
    self.appendChild(transformer.apply(element, "story"));
  });
  return self;
});

export default manager;