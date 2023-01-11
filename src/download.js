import { default as html2canvas } from "html2canvas";

export function runsInBrowser() {
  return !(typeof document === "undefined");
}

export function element(selector) {
  var el2 = document.getElementById(selector);
  if (!el2) throw new Error("no element for selector: " + selector);
  return el2;
}

export function initiateDownloadURL(url, filename) {
  let a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}

export function pngDownload(id, filename = "image", callback) {
  html2canvas(element(id), {
    scale: 4,
    logging: true,
  }).then((canvas) => {
    initiateDownloadURL(canvas.toDataURL(), filename);
    if (callback) callback();
  });
}
