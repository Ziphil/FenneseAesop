//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";
import {renderSVG} from "uqr";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("sign", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("signature");
    self.appendChild(transformer.apply(element, "section.sign"));
  });
  return self;
});

manager.registerElementRule("date", "section.sign", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("signature-date");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("name", "section.sign", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("signature-name");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("url", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const url = element.textContent ?? "";
  self.appendElement("a", (self) => {
    self.addClassName("url");
    self.setAttribute("href", url);
    if (element.hasAttribute("qrcode")) {
      const qrcodeUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(renderSVG(url));
      self.appendElement("img", (self) => {
        self.addClassName("url-qrcode");
        self.setAttribute("src", qrcodeUrl);
      });
    }
    self.appendElement("div", (self) => {
      self.addClassName("url-text");
      self.appendChild(transformer.apply(element, "section"));
    });
  });
  return self;
});

export default manager;