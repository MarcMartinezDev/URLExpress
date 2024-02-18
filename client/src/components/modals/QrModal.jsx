import { context } from "../../App";
import { useContext, useEffect, useRef } from "react";

const QrModal = () => {
  const { isQrModalOpen, setIsQrModalOpen, url, modalAnimation } = useContext(context);
  const qrModalDiv = useRef();

  const closeModal = () => {
    setIsQrModalOpen(false);
  };

  useEffect(() => {
    if (isQrModalOpen) {
      const qrcode = new QRCode(qrModalDiv.current, {
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
      });
      qrcode.makeCode(window.location.href + url);
    }
  }, [isQrModalOpen]);

  return isQrModalOpen ? (
    <div className="modal-jsx relative flex flex-col">
      <i className="fa-solid fa-xmark absolute top-2 right-2" onClick={closeModal}></i>
      <div className="text-center shadow-md m-auto">
        <div ref={qrModalDiv}></div>
        <div className="flex justify-between rounded-md">
          <p className="bg-gray-800 w-full p-2 cursor-pointer text-gray-200">Download</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default QrModal;
