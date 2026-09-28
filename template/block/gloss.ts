//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("sentence", "story", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("sentence");
    self.appendChild(transformer.apply(element, "sentence"));
  });
  return self;
});

manager.registerElementRule("ja", "sentence", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("p", (self) => {
    self.addClassName("sentence-translation");
    self.appendChild(transformer.apply(element, "story"));
  });
  return self;
});

manager.registerElementRule("supp", "sentence", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("p", (self) => {
    self.addClassName("sentence-supplement");
    self.appendChild(transformer.apply(element, "sentence"));
  });
  return self;
});

manager.registerElementRule("gloss", "sentence", (transformer, document, element) => {
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
      self.appendChild(transformer.apply(element, "sentence.gloss"));
    });
  });
  return self;
});

manager.registerElementRule("li", ["sentence.gloss", "section.glfigure"], (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("gloss-word");
    self.appendChild(transformer.apply(element, "sentence.gloss.li"));
  });
  return self;
});

const GLOSS_CLASS_NAMES = new Map<string, [string, string]>([
  ["sh", ["gloss-spelling", "gloss-explanation-spelling"]],
  ["pr", ["gloss-pronunciation", "gloss-explanation-pronunciation"]],
  ["ct", ["gloss-category", "gloss-explanation-category"]],
  ["an", ["gloss-annotation", "gloss-explanation-annotation"]],
  ["ja", ["gloss-japanese", "gloss-explanation-japanese"]]
]);

manager.registerElementRule(["sh", "pr", "ct", "ja"], "sentence.gloss.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const [className] = GLOSS_CLASS_NAMES.get(element.tagName) ?? ["", ""];
  self.appendElement("span", (self) => {
    self.addClassName(className);
    self.appendChild(transformer.apply(element, "sentence"));
  });
  return self;
});

manager.registerElementRule("an", "sentence.gloss.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const [className] = GLOSS_CLASS_NAMES.get(element.tagName) ?? ["", ""];
  self.appendElement("span", (self) => {
    self.addClassName(className);
    const splitParts = element.textContent!.split(/(·|\.)/);
    for (const part of splitParts) {
      self.appendElement("span", (self) => {
        if (part === "·" || part === ".") {
          self.addClassName("gloss-annotation-separator");
        }
        self.appendTextNode(part);
      });
    }
  });
  return self;
});

manager.registerElementRule("glfigure", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("gloss-figure");
    self.appendChild(transformer.apply(element, "section.glfigure"));
  });
  return self;
});

manager.registerElementRule("ex", "section.glfigure", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("span", (self) => {
    self.addClassName("gloss-explanation-word");
    self.appendChild(transformer.apply(element, "section.glfigure.ex"));
  });
  return self;
});

manager.registerElementRule(["sh", "pr", "ct", "an", "ja"], "section.glfigure.ex", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const [, className] = GLOSS_CLASS_NAMES.get(element.tagName) ?? ["", ""];
  self.appendElement("span", (self) => {
    self.addClassName("gloss-explanation-item");
    self.addClassName(className);
    self.appendChild(transformer.apply(element, "sentence"));
  });
  return self;
});


export default manager;