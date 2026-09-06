//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("sentence", "story", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("sentence");
    self.appendChild(transformer.apply(element, "story.sentence"));
  });
  return self;
});

manager.registerElementRule("ja", "story.sentence", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("sentence-translation");
    self.appendChild(transformer.apply(element, "story"));
  });
  return self;
});

manager.registerElementRule("gloss", "story.sentence", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const number = element.parentNode!.searchXpath("preceding-sibling::sentence").length + 1;
  self.appendElement("div", (self) => {
    self.addClassName("gloss");
    self.appendElement("div", (self) => {
      self.addClassName("gloss-number");
      self.appendChild(document.createTextNode(number.toString()));
    });
    self.appendElement("div", (self) => {
      self.addClassName("gloss-content");
      self.appendChild(transformer.apply(element, "story.sentence.gloss"));
    });
  });
  return self;
});

manager.registerElementRule("li", "story.sentence.gloss", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("gloss-word");
    self.appendChild(transformer.apply(element, "story.sentence.gloss.li"));
  });
  return self;
});

const GLOSS_CLASS_NAMES = new Map<string, string>([
  ["sh", "gloss-spelling"],
  ["pr", "gloss-pronunciation"],
  ["ct", "gloss-category"],
  ["an", "gloss-annotation"],
  ["ja", "gloss-japanese"]
]);

manager.registerElementRule(["sh", "pr", "ct", "an", "ja"], "story.sentence.gloss.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const className = GLOSS_CLASS_NAMES.get(element.tagName) ?? "";
  self.appendElement("span", (self) => {
    self.addClassName(className);
    self.appendChild(transformer.apply(element, "story.sentence"));
  });
  return self;
});

manager.registerElementRule("focus", "story.sentence.gloss", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("gloss-focus");
    self.appendChild(transformer.apply(element, "story.sentence.gloss"));
  });
  return self;
});

export default manager;