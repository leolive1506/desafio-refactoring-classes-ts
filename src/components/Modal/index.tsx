import { ReactNode, useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean
  children: ReactNode
  setIsOpen: () => void
}
function Modal ({ isOpen, children, setIsOpen }: ModalProps) {
  const [isOpenModal, setIsOpenModal] = useState(isOpen)
  // const [isOpen, setIsOpen] = useState()
  // constructor(props) {
  //   super(props);

  //   const { isOpen } = this.props;
  //   this.state = {
  //     modalStatus: isOpen
  //   }
  // }
  const prevProps = useRef<Boolean>()
  useEffect(() => {
    prevProps.current = isOpenModal

  })

  const previousValue = prevProps.current ?? isOpenModal;

  useEffect(() => {
    if (previousValue !== isOpen) {
      setIsOpenModal(isOpen)
    }

  }, [previousValue, isOpen])


    return (
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={isOpenModal}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    );
  }

export default Modal;
