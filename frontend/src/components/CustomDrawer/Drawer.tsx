import React from "react";
import { Modal, ModalProps, useModal } from "@nextui-org/react";

type SubComponents = {
  Header: typeof Modal.Header;
  Body: typeof Modal.Body;
  Footer: typeof Modal.Footer;
};

type Props = Omit<
  ModalProps,
  "className" | "fullScreen" | "closeButton" | "animated" | "blur"
>;

const Drawer: React.FC<Props> & SubComponents = ({ children, ...props }) => {
  const { open } = props;

  return (
    <Modal
      className={`drawer drawer-animated ${
        open ? "drawer-animated-slide-in" : ""
      }`}
      closeButton
      animated={false}
      {...props}
    >
      {children}
    </Modal>
  );
};

Drawer.Header = Modal.Header;
Drawer.Body = Modal.Body;
Drawer.Footer = Modal.Footer;

export const useDrawer = useModal;

export default Drawer;
