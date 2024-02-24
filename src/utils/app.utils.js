import qrcode from "qrcode";

export const createQrcode = (url, reference) => {
  qrcode.toDataURL(
    url,
    {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.3,
      margin: 1,
      width: 100,
      height: 100,
      color: {
        regular: "#000000",
        light: "#ffffff",
      },
    },
    (err, src) => {
      if (err) throw err;
      reference.current.src = src;
    }
  );
};

export const downloadQrcode = srcImage => {
  const linkDownload = srcImage;

  const link = document.createElement("a");
  link.href = linkDownload;
  link.download = "qrcode.png";
  link.click();
};
