export function downloadCv (fileName: any) {
    const link = document.createElement("a");
    link.href = `./files/${fileName}`;
    link.download = fileName;
    link.click();
  };