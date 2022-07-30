import { default as html2canvas } from "html2canvas";

export function runsInBrowser() {
  return !(typeof document === "undefined");
}

export function element(selector) {
  var el2 = document.getElementById(selector);
  if (!el2) throw new Error("no element for selector: " + selector);
  return el2;
}

export function downloadURL(url, fname) {
  let a = document.createElement("a");
  a.href = url;
  a.download = fname;
  a.click();
}

export function downloadBlob(blob, fname) {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, fname);
  } else {
    downloadURL(URL.createObjectURL(blob), fname);
  }
}

export function pngDownload(id, filename, callback) {
  html2canvas(element(id), {
    scale: 4,
    logging: true,
  }).then((canvas) => {
    downloadURL(canvas.toDataURL(), filename);
    if (callback) callback();
  });
}
