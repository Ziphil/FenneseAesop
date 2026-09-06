//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule(["div", "span"], true, (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement(element.tagName, (self) => {
    for (let i = 0 ; i < element.attributes.length ; i ++) {
      const {name, value} = element.attributes.item(i)!;
      self.setAttribute(name, value);
    }
    self.appendChild(transformer.apply());
  });
  return self;
});

manager.registerElementRule(true, true, (transformer, document) => {
  return document.createDocumentFragment();
});

manager.registerTextRule(true, (transformer, document, text) => {
  let content = text.data;
  content = content.replace(/\uFEFF/gu, "");
  const self = document.createTextNode(content);
  return self;
});

export default manager;