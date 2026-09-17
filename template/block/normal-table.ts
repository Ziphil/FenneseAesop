//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("table", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("table", (self) => {
    self.addClassName("normal-table");
    self.appendChild(transformer.apply(element, "section.table"));
  });
  return self;
});

manager.registerElementRule("tr", "section.table", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("tr", (self) => {
    self.appendChild(transformer.apply(element, "section.table.tr"));
  });
  return self;
});

manager.registerElementRule(["th", "td"], "section.table.tr", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement(element.tagName, (self) => {
    if (element.hasAttribute("row")) {
      self.setAttribute("rowspan", element.getAttribute("row")!);
    }
    if (element.hasAttribute("col")) {
      self.setAttribute("colspan", element.getAttribute("col")!);
    }
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

export default manager;