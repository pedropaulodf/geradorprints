import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export function exportAsImage(element: any, imageFileName = "imagem") {
  domtoimage.toBlob(element).then(function (blob) {
    saveAs(blob, `${imageFileName}.png`);
  });
}
