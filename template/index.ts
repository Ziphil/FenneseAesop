//

import articleExplanationManager from "./article/explanation";
import articleLessonManager from "./article/story";
import blockDescriptionListManager from "./block/description-list";
import blockGlossManager from "./block/gloss";
import blockParagraphManager from "./block/paragraph";
import blockSectionManager from "./block/section";
import fallbackManager from "./fallback";
import inlineBasicManager from "./inline/basic";
import inlineCommonManager from "./inline/common";
import inlineMiscManager from "./inline/misc";
import rootManager from "./root";
import wordManager from "./word";


const managers = [
  rootManager,
  articleLessonManager,
  articleExplanationManager,
  blockGlossManager,
  blockSectionManager,
  blockParagraphManager,
  blockDescriptionListManager,
  inlineCommonManager,
  inlineBasicManager,
  inlineMiscManager,
  wordManager,
  fallbackManager
];

export default managers;