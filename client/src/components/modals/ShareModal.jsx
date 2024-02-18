import {
  WhatsappShareButton,
  EmailShareButton,
  EmailIcon,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { context } from "../../App";
import { useContext } from "react";

const ShareModal = () => {
  const { url, isShareModalOpen, setIsShareModalOpen } = useContext(context);

  return isShareModalOpen ? (
    <div className="modal-jsx flex flex-col gap-5">
      <i className="fa-solid fa-xmark scale-125" onClick={() => setIsShareModalOpen(false)} />
      <div className="flex gap-5">
        <WhatsappShareButton url={window.location.href + url} title={window.location.href + url}>
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
        <EmailShareButton url={window.location.href + url} subject={window.location.href + url}>
          <EmailIcon size={40} round />
        </EmailShareButton>
        <LinkedinShareButton url={window.location.href + url} title={window.location.href + url}>
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        <TelegramShareButton url={window.location.href + url} title={window.location.href + url}>
          <TelegramIcon size={40} round />
        </TelegramShareButton>
        <TwitterShareButton url={window.location.href + url} title={window.location.href + url}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <FacebookShareButton url={window.location.href + url} title={window.location.href + url}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </div>
    </div>
  ) : null;
};

export default ShareModal;
