import googleFonts from "google-fonts";
var FontFaceObserver = require("fontfaceobserver");

let fonts = ["Roboto"];

export async function loadFonts() {
  let fontPromises = fonts.map((fontName: string) => {
    googleFonts.add({ [fontName]: ["400", "700"] });
    let font = new FontFaceObserver(fontName);
    return font.load(null, 10000);
  });

  return Promise.all(fontPromises);
}
