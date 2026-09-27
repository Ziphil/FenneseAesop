//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("colophon", "blank", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const titleElement = element.searchXpath("title")[0] as Element;
  self.appendElement("aside", (self) => {
    self.addClassName("colophon");
    self.appendElement("div", (self) => {
      self.addClassName("colophon-inner");
      self.appendElement("div", (self) => {
        self.addClassName("colophon-title");
        self.appendChild(transformer.apply(titleElement, "section"));
      });
      self.appendElement("div", (self) => {
        self.addClassName("colophon-main");
        self.appendChild(transformer.apply(element, "colophon"));
      });
      self.appendElement("p", (self) => {
        self.addClassName("colophon-caution");
        self.appendTextNode("本書の無断での複製や転載は、著作権法上の例外を除き禁止されています。");
      });
    });
  });
  return self;
});

manager.registerElementRule("vl", "colophon", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dl", (self) => {
    self.addClassName("colophon-version-list");
    self.appendChild(transformer.apply(element, "colophon.vl"));
  });
  return self;
});

manager.registerElementRule("li", "colophon.vl", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendChild(transformer.apply(element, "colophon.vl.li"));
  return self;
});

manager.registerElementRule("vd", "colophon.vl.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dt", (self) => {
    self.addClassName("colophon-version-date");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("ve", "colophon.vl.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dd", (self) => {
    self.addClassName("colophon-version-edition");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("al", "colophon", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dl", (self) => {
    self.addClassName("colophon-author-list");
    self.appendChild(transformer.apply(element, "colophon.al"));
  });
  return self;
});

manager.registerElementRule("li", "colophon.al", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendChild(transformer.apply(element, "colophon.al.li"));
  return self;
});

manager.registerElementRule("at", "colophon.al.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dt", (self) => {
    self.addClassName("colophon-author-type");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("ad", "colophon.al.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dd", (self) => {
    self.addClassName("colophon-author-detail");
    self.appendChild(transformer.apply(element, "colophon.al.li.ad"));
  });
  return self;
});

manager.registerElementRule("name", "colophon.al.li.ad", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("colophon-author-name");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("info", "colophon.al.li.ad", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("colophon-author-info");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("player", "blank", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("aside", (self) => {
    self.addClassName("player");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("br", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("br");
  return self;
});

export default manager;