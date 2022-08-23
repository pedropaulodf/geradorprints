import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export function exportAsImage(element: any, imageFileName = "imagem") {
  domtoimage
    .toBlob(element, {
      width: 720,
      height: 1553,
    })
    .then(function (blob) {
      saveAs(blob, `${imageFileName}.png`);
    });
}
