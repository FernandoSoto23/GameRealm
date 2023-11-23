import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Modal } from 'reactstrap';

interface ModalVideoProps {
  videoSrc: string;
  onClose: () => void;
}

const ModalVideo: React.FC<ModalVideoProps> = ({ videoSrc, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Video Modal"
    >
      <div>
        <button className='cerrar-modal' onClick={closeModal}><span><FontAwesomeIcon icon={faCircleXmark} size="xl" /></span></button>
        <iframe
          width="500"
          height="315"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};

export default ModalVideo;