import { createPortal } from 'react-dom'
import { Backdrop } from './styled';

function Modal({children}) {
  return createPortal(
    <Backdrop>{children}</Backdrop>
    ,document.body)
}

export default Modal