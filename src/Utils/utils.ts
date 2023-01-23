import domtoimage from "dom-to-image";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export type ArrayZipFileTypeProps = {
  dados: ArrayZipFileType[];
  onlyImage?: boolean;
  fileNameEnd: "iPhone" | "iPad" | "Todos";
};

export type ArrayZipFileType = {
  ref: any;
  name: string;
  deviceType: "iphone" | "ipad";
};

export function exportAsImage({
  dados,
  fileNameEnd,
  onlyImage = false,
}: ArrayZipFileTypeProps) {
  if (onlyImage) {
    dados.map((item) => {
      return domtoimage
        .toBlob(item.ref, {
          width: item.deviceType === "iphone" ? 720 : 1100,
          height: item.deviceType === "iphone" ? 1553 : 1471,
        })
        .then(function (blob) {
          saveAs(blob, `${item.name}.png`);
        });
    });
  } else {
    var zip = new JSZip();

    const baixarZips = dados.map((item) => {
      return domtoimage
        .toBlob(item.ref, {
          width: item.deviceType === "iphone" ? 720 : 1100,
          height: item.deviceType === "iphone" ? 1553 : 1471,
        })
        .then(function (blob) {
          zip.file(`${item.name}.png`, blob);
        });
    });

    Promise.all(baixarZips).then(() => {
      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(
          content,
          fileNameEnd ? `prints-${fileNameEnd}.zip` : `prints.zip`
        );
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
