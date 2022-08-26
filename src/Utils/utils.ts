import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export function exportAsImage(
  element: any,
  imageFileName = "imagem",
  printType: "iphone" | "ipad"
) {
  domtoimage
    .toBlob(element, {
      width: printType === "iphone" ? 720 : 1100,
      height: printType === "iphone" ? 1553 : 1471,
    })
    .then(function (blob) {
      saveAs(blob, `${imageFileName}.png`);
    });
}
