import domtoimage from "dom-to-image";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export type ArrayZipFileTypeProps = {
  dados: ArrayZipFileType[];
  type: "iphone" | "ipad";
  onlyImage?: boolean;
};

export type ArrayZipFileType = {
  ref: any;
  name: string;
};

export function exportAsImage({
  dados,
  type,
  onlyImage = false,
}: ArrayZipFileTypeProps) {
  if (onlyImage) {
    dados.map((item) => {
      return domtoimage
        .toBlob(item.ref, {
          width: type === "iphone" ? 720 : 1100,
          height: type === "iphone" ? 1553 : 1471,
        })
        .then(function (blob) {
          saveAs(blob, `${item.name}.png`);
        });
    });
  } else {
    var zip = new JSZip();

    const teste = dados.map((item) => {
      return domtoimage
        .toBlob(item.ref, {
          width: type === "iphone" ? 720 : 1100,
          height: type === "iphone" ? 1553 : 1471,
        })
        .then(function (blob) {
          zip.file(`${item.name}.png`, blob);
        });
    });

    Promise.all(teste).then(() => {
      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(content, `prints-${type}.zip`);
      });
    });
  }
}

export function changeRootVarAtribute(
  atributeValue: string,
  rootColorAtributeName: string
) {
  document.documentElement.style.setProperty(
    rootColorAtributeName,
    atributeValue
  );
}
