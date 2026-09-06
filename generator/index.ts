//

import "source-map-support/register";
import {VivliostyleGenerator} from "@zenml/vivliostyle";
import "@zenml/xmldom";
import commandLineArgs from "command-line-args";
import templateManagers from "../template";


const options = commandLineArgs([
], {partial: true});

const generator = new VivliostyleGenerator({
  pluginManagers: [],
  templateManagers,
  manuscriptPath: "document/manuscript/main.zml",
  stylePath: "document/style/main.scss",
  watchDirPath: "document",
  outputDirPath: "out",
  errorLogPath: "log/error.txt"
});
generator.execute();