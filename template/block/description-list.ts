//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("el", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const type = element.getAttribute("type") || "desc";
  self.appendElement("dl", (self) => {
    self.addClassName("description-list");
    self.setAttribute("data-type", type);
    self.appendChild(transformer.apply(element, "section.el"));
  });
  return self;
});

manager.registerElementRule("li", "section.el", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendChild(transformer.apply(element, "section.el.li"));
  return self;
});

manager.registerElementRule("et", "section.el.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dt", (self) => {
    self.addClassName("description-left");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("ed", "section.el.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dd", (self) => {
    self.addClassName("description-right");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

export default manager;