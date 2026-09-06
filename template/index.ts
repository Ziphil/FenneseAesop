//

import articleExplanationManager from "./article/explanation";
import articleLessonManager from "./article/story";
import blockGlossManager from "./block/gloss";
import fallbackManager from "./fallback";
import inlineBasicManager from "./inline/basic";
import inlineCommonManager from "./inline/common";
import rootManager from "./root";
import wordManager from "./word";


const managers = [
  rootManager,
  articleLessonManager,
  articleExplanationManager,
  blockGlossManager,
  inlineCommonManager,
  inlineBasicManager,
  wordManager,
  fallbackManager
];

export default managers;