import global from "./global.module.css";
import light from "./light.module.css";
import dark from "./dark.module.css";
import medium from "./medium.module.css";
import large from "./large.module.css";
import { Theme } from "@react-types/provider";

/// <reference types="css-module-types" />

export let theme: Theme = {
  global,
  light,
  dark,
  medium,
  large,
};
