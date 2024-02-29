import qrcode from "qrcode";
import emailjs from "@emailjs/browser";

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

export const initEmail = () => {
  emailjs.init({
    publicKey: "cBdqhdPI9lDBr0Lna",
    blockHeadless: true,
    blockList: {
      list: [],
      watchVariable: "from_email",
    },
    limitRate: {
      throttle: 5000,
    },
  });
};

export const sendForm = async form =>
  emailjs
    .sendForm("service_rux5eas", "template_0lqs56v", form, {
      publicKey: "cBdqhdPI9lDBr0Lna",
    })
    .then(res => {
      if (res.error) return res.error;
      else return { message: "Your email has been sent successfully" };
    });
