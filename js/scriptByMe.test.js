import { JSDOM } from "jsdom";

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;

import { selectWristSize } from "./scriptByMe.js";

describe("selectWristSize", () => {});
