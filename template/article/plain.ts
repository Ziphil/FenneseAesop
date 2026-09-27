//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("plain", "root", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("article", (self) => {
    self.addClassName("plain");
    if (element.hasAttribute("id")) {
      self.setAttribute("id", element.getAttribute("id")!);
    }
    self.appendChild(transformer.call("plain-page", element, "plain"));
    if (element.searchXpath("title")[0]) {
      self.appendChild(transformer.call("plain-heading", element, "plain"));
    }
    self.appendChild(transformer.apply(element, "plain"));
  });
  return self;
});

manager.registerElementFactory("plain-heading", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const titleElement = element.searchXpath("title")[0] as Element;
  self.appendElement("h1", (self) => {
    self.addClassName("plain-heading");
    self.appendElement("div", (self) => {
      self.addClassName("plain-heading-content");
      self.appendChild(transformer.apply(titleElement, "plain.heading"));
    });
  });
  return self;
});

manager.registerElementFactory("plain-page", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const titleElement = element.searchXpath("title")[0] as Element;
  self.appendElement("footer", (self) => {
    self.addClassName("page");
    self.setAttribute("data-position", "left");
    self.setAttribute("data-article", "plain");
    self.appendElement("div", (self) => {
      self.addClassName("page-number");
      self.setAttribute("data-position", "left");
    });
    if (titleElement) {
      self.appendElement("div", (self) => {
        self.addClassName("page-title");
        self.setAttribute("data-position", "left");
        self.appendElement("div", (self) => {
          self.addClassName("page-title-inner");
          self.appendChild(transformer.apply(titleElement, "plain"));
        });
      });
    }
  });
  self.appendElement("footer", (self) => {
    self.addClassName("page");
    self.setAttribute("data-position", "right");
    self.setAttribute("data-article", "plain");
    self.appendElement("div", (self) => {
      self.addClassName("page-number");
      self.setAttribute("data-position", "right");
    });
    if (titleElement) {
      self.appendElement("div", (self) => {
        self.addClassName("page-title");
        self.setAttribute("data-position", "right");
        self.appendElement("div", (self) => {
          self.addClassName("page-title-inner");
          self.appendChild(transformer.apply(titleElement, "plain"));
        });
      });
    }
  });
  return self;
});

export default manager;