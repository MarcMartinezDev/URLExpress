import qrcode from "qrcode";
import { context } from "../../App";
import { useContext, useEffect, useRef } from "react";

const QrModal = () => {
  const { isQrModalOpen, setIsQrModalOpen, url } = useContext(context);
  const qrImg = useRef();

  const closeModal = () => {
    setIsQrModalOpen(false);
  };

  const download = () => {
    const srcImg = qrImg.current.src;

    const link = document.createElement("a");
    link.href = srcImg;
    link.download = "qrcode.png";
    link.click();
  };

  useEffect(() => {
    if (isQrModalOpen) {
      qrcode.toDataURL(
        url,
        {
          errorCorrectionLevel: "H",
          type: "image/jpeg",
          quality: 0.3,
          margin: 1,
          width: 200,
          height: 200,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        },
        (err, url) => {
          if (err) throw err;
          qrImg.current.src = url;
        }
      );
    }
  }, [isQrModalOpen]);

  return isQrModalOpen ? (
    <div className="modal-jsx relative flex flex-col">
      <i className="fa-solid fa-xmark absolute top-2 right-2" onClick={closeModal}></i>
      <div className="text-center shadow-md m-auto">
        <div>
          <img src="" alt="" ref={qrImg} />
        </div>
        <div className="flex justify-between rounded-md">
          <p className="bg-gray-800 w-full p-2 cursor-pointer text-gray-200" onClick={download}>
            Download
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default QrModal;
