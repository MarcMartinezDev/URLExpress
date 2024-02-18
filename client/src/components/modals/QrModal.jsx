import { context } from "../../App";
import { useContext, useEffect, useRef } from "react";

const QrModal = () => {
  const { isQrModalOpen, setIsQrModalOpen, url } = useContext(context);
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
    <div className="modal-jsx flex flex-col gap-5">
      <i className="fa-solid fa-xmark" onClick={closeModal}></i>
      <div className=" rounded-mdbn text-center shadow-md text-gray-900 w-full">
        <div className="rounded-md mb-2" ref={qrModalDiv}></div>
        <div className="flex justify-between rounded-md">
          <p className="bg-green-300 w-full p-2 cursor-pointer rounded-bl-md">Share</p>
          <p className="bg-blue-300 w-full p-2 cursor-pointer rounded-br-md">Download</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default QrModal;
