const getCurrentLang = (req) => {
  if (!req) {
    if (global.__initProps && global.__initProps.currentLang) {
      return global.__initProps.currentLang;
    } else {
      if (!global.location) {
        console.log("不能在ssr时执行.......");
      }
    }
  } else {
    let currentLang =
      req.headers["lang"] || req.query.currentLang || req.query.lang;
    if (currentLang) {
      return currentLang;
    }
  }
  let prePath = LangTool.getPrePath(req);
  prePath = prePath.replace("/", "");
  return PathMap[prePath] || FinalLang;
};
