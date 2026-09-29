//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("itable", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("table", (self) => {
    self.addClassName("inflection-table");
    self.appendElement("thead", (self) => {
      self.appendChild(transformer.apply(element, "section.itable.thead"));
    });
    self.appendElement("tbody", (self) => {
      self.appendChild(transformer.apply(element, "section.itable.tbody"));
    });
  });
  return self;
});

manager.registerElementRule("thead", "section.itable.thead", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("tr", (self) => {
    self.appendChild(transformer.apply(element, "section.itable.thead.tr"));
  });
  return self;
});

manager.registerElementRule("th", "section.itable.thead.tr", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("th", (self) => {
    if (element.hasAttribute("row")) {
      self.setAttribute("rowspan", element.getAttribute("row")!);
    }
    if (element.hasAttribute("col")) {
      self.setAttribute("colspan", element.getAttribute("col")!);
    }
    self.appendChild(transformer.apply(element, "section.itable.thead.tr.th"));
  });
  return self;
});

manager.registerElementRule("sh", "section.itable.thead.tr.th", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("inflection-table-heading-fennese");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("ja", "section.itable.thead.tr.th", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("inflection-table-heading-japanese");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("tr", "section.itable.tbody", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("tr", (self) => {
    if (element.hasAttribute("bd")) {
      self.setAttribute("data-border", "");
    }
    self.appendChild(transformer.apply(element, "section.itable.tbody.tr"));
  });
  return self;
});

manager.registerElementRule("an", "section.itable.tbody.tr", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("td", (self) => {
    self.addClassName("inflection-table-annotation");
    self.appendElement("span", (self) => {
      self.addClassName("inflection-table-annotation-inner");
      const splitParts = element.textContent!.split(/(·|\.)/);
      for (const part of splitParts) {
        self.appendElement("span", (self) => {
          if (part === "·" || part === ".") {
            self.addClassName("annotation-separator");
          }
          self.appendTextNode(part);
        });
      }
    });
  });
  return self;
});

manager.registerElementRule("fm", "section.itable.tbody.tr", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("td", (self) => {
    self.addClassName("inflection-table-form");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

export default manager;