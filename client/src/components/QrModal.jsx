import { context } from "../App";
import { useContext, useEffect, useRef } from "react";

const QrModal = () => {
  const { isModalOpen, setIsModalOpen, url } = useContext(context);
  const qrModalDiv = useRef();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      const qrcode = new QRCode(qrModalDiv.current, {
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
      });
      qrcode.makeCode(window.location.href + url);
    }
  }, [isModalOpen]);

  return isModalOpen ? (
    <div className="absolute m-auto w-fit bg-gray-900 shadow-md p-10 rounded-md flex flex-col items-end">
      <i
        className="fa-solid fa-xmark scale-125 mb-10 cursor-pointer"
        onClick={closeModal}
      ></i>
      <div className=" rounded-mdbn text-center shadow-md text-gray-900 w-full">
        <div className="rounded-md mb-2" ref={qrModalDiv}></div>
        <div className="flex justify-between rounded-md">
          <p className="bg-green-300 w-full p-2 cursor-pointer rounded-bl-md">
            Share
          </p>
          <p className="bg-blue-300 w-full p-2 cursor-pointer rounded-br-md">
            Download
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default QrModal;
