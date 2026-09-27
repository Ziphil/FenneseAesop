//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("content-table", "plain", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const articleElements = element.searchXpath("ancestor::root/*[name() = 'story' or name() = 'plain']") as Array<Element>;
  self.appendElement("ol", (self) => {
    self.addClassName("content-table");
    for (let i = 0 ; i < articleElements.length ; i ++) {
      const articleElement = articleElements[i];
      const prevArticleElement = articleElements[i - 1];
      const name = articleElement.tagName;
      if (name === "story") {
        const number = articleElement.searchXpath("preceding-sibling::story").length + 1;
        const titleFenneseElement = articleElement.searchXpath("title/sh")[0] as Element;
        const titleJapaneseElement = articleElement.searchXpath("title/ja")[0] as Element;
        self.appendElement("li", (self) => {
          self.addClassName("content-table-item");
          self.appendElement("div", (self) => {
            self.addClassName("content-table-story");
            self.appendElement("div", (self) => {
              self.addClassName("content-table-story-number");
              self.appendTextNode(number.toString());
            });
            self.appendElement("div", (self) => {
              self.addClassName("content-table-story-content");
              self.appendElement("h1", (self) => {
                self.addClassName("content-table-story-title-fennese");
                self.appendChild(transformer.apply(titleFenneseElement, "story"));
              });
              self.appendElement("div", (self) => {
                self.addClassName("content-table-story-title-japanese");
                self.appendChild(transformer.apply(titleJapaneseElement, "story"));
              });
            });
          });
          self.appendElement("div", (self) => {
            self.addClassName("content-table-page");
            self.setAttribute("data-type", "story");
            self.setAttribute("data-ref", "#" + articleElement.getAttribute("id"));
          });
        });
      } else if (name === "plain") {
        const titleElement = articleElement.searchXpath("title")[0] as Element;
        self.appendElement("li", (self) => {
          self.addClassName("content-table-item");
          self.appendElement("div", (self) => {
            self.addClassName("content-table-plain");
            self.appendElement("div", (self) => {
              self.addClassName("content-table-plain-content");
              self.appendChild(transformer.apply(titleElement, "plain"));
            });
          });
          self.appendElement("div", (self) => {
            self.addClassName("content-table-page");
            self.setAttribute("data-type", "plain");
            self.setAttribute("data-ref", "#" + articleElement.getAttribute("id"));
          });
        });
      }
    }
  });
  return self;
});

export default manager;