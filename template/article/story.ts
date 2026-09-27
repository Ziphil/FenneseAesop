//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("story", "root", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const number = element.searchXpath("preceding-sibling::story").length + 1;
  self.appendElement("article", (self) => {
    self.addClassName("story");
    if (element.hasAttribute("id")) {
      self.setAttribute("id", element.getAttribute("id")!);
    }
    self.appendChild(transformer.call("story-page", element, "story"));
    self.appendChild(transformer.call("story-heading", element, "story", {number}));
    self.appendChild(transformer.apply(element, "story"));
  });
  return self;
});

manager.registerElementFactory("story-heading", (transformer, document, element, scope, args) => {
  const self = document.createDocumentFragment();
  const number = args.number;
  const titleFenneseElement = element.searchXpath("title/sh")[0] as Element;
  const titleJapaneseElement = element.searchXpath("title/ja")[0] as Element;
  self.appendElement("hgroup", (self) => {
    self.addClassName("story-heading");
    self.appendElement("div", (self) => {
      self.addClassName("story-heading-number");
      self.appendTextNode(number.toString());
    });
    self.appendElement("div", (self) => {
      self.addClassName("story-heading-content");
      self.appendElement("h1", (self) => {
        self.addClassName("story-heading-title-fennese");
        self.appendChild(transformer.apply(titleFenneseElement, "story"));
      });
      self.appendElement("div", (self) => {
        self.addClassName("story-heading-title-japanese");
        self.appendChild(transformer.apply(titleJapaneseElement, "story"));
      });
    });
  });
  return self;
});

manager.registerElementFactory("story-page", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const titleElement = element.searchXpath("title/ja")[0] as Element;
  self.appendElement("footer", (self) => {
    self.addClassName("page");
    self.setAttribute("data-position", "left");
    self.setAttribute("data-article", "story");
    self.appendElement("div", (self) => {
      self.addClassName("page-number");
      self.setAttribute("data-position", "left");
    });
    self.appendElement("div", (self) => {
      self.addClassName("page-title");
      self.setAttribute("data-position", "left");
      self.appendElement("div", (self) => {
        self.addClassName("page-title-inner");
        self.appendTextNode("『");
        self.appendChild(transformer.apply(titleElement, "story"));
        self.appendTextNode("』");
      });
    });
  });
  self.appendElement("footer", (self) => {
    self.addClassName("page");
    self.setAttribute("data-position", "right");
    self.setAttribute("data-article", "story");
    self.appendElement("div", (self) => {
      self.addClassName("page-number");
      self.setAttribute("data-position", "right");
    });
    self.appendElement("div", (self) => {
      self.addClassName("page-title");
      self.setAttribute("data-position", "right");
      self.appendElement("div", (self) => {
        self.addClassName("page-title-inner");
        self.appendTextNode("『");
        self.appendChild(transformer.apply(titleElement, "story"));
        self.appendTextNode("』");
      });
    });
  });
  return self;
});

export default manager;