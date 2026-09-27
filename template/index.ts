//

import articleBlankManager from "./article/blank";
import articleExplanationManager from "./article/explanation";
import articlePlainManager from "./article/plain";
import articleLessonManager from "./article/story";
import blockContentTableManager from "./block/content-table";
import blockDescriptionListManager from "./block/description-list";
import blockGlossManager from "./block/gloss";
import blockNormalTableManager from "./block/normal-table";
import blockParagraphManager from "./block/paragraph";
import blockSectionManager from "./block/section";
import blockTextManager from "./block/text";
import blockTitleManager from "./block/title";
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
  articlePlainManager,
  articleBlankManager,
  blockTextManager,
  blockGlossManager,
  blockSectionManager,
  blockParagraphManager,
  blockDescriptionListManager,
  blockNormalTableManager,
  blockContentTableManager,
  blockTitleManager,
  inlineCommonManager,
  inlineBasicManager,
  inlineMiscManager,
  wordManager,
  fallbackManager
];

export default managers;