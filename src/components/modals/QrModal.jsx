import { createQrcode, downloadQrcode } from "../../utils/app.utils.js";
import { context } from "../../App";
import { useContext, useEffect, useRef } from "react";

const QrModal = () => {
  const { isQrModalOpen, setIsQrModalOpen, url } = useContext(context);
  const qrImg = useRef();

  const closeModal = () => {
    setIsQrModalOpen(false);
  };

  const download = () => {
    downloadQrcode(qrImg.current.src);
  };

  useEffect(() => {
    if (isQrModalOpen) {
      createQrcode(url, qrImg);
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
