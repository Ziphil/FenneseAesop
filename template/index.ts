//

import articleBlankManager from "./article/blank";
import articleExplanationManager from "./article/explanation";
import articlePlainManager from "./article/plain";
import articleLessonManager from "./article/story";
import blockDescriptionListManager from "./block/description-list";
import blockGlossManager from "./block/gloss";
import blockMiscManager from "./block/misc";
import blockNormalTableManager from "./block/normal-table";
import blockParagraphManager from "./block/paragraph";
import blockSectionManager from "./block/section";
import blockTextManager from "./block/text";
import fallbackManager from "./fallback";
import inlineBasicManager from "./inline/basic";
import inlineCommonManager from "./inline/common";
import inlineMiscManager from "./inline/misc";
import plainColophonManager from "./plain/colophon";
import plainContentTableManager from "./plain/content-table";
import plainTitleManager from "./plain/first";
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
  blockMiscManager,
  plainContentTableManager,
  plainTitleManager,
  plainColophonManager,
  inlineCommonManager,
  inlineBasicManager,
  inlineMiscManager,
  wordManager,
  fallbackManager
];

export default managers;