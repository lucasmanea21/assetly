import React from "react";

import { Input, Button } from "@nextui-org/react";
import WalletCard from "./WalletCard";
import Drawer, { useDrawer } from "../CustomDrawer/Drawer";

const ConnectModal = ({
  isOpen,
  onOpen,
  onClose,
  btnRef,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  btnRef: any;
}) => {
  // const { bindings, setVisible } = useDrawer();

  return (
    <div className="bg-slate-900 text-slate-100 tracking-tight dark:text-foreground dark:bg-slate-900">
      {/* <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="bg-gradient-to-tr from-slate-800 to-slate-800/25">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <h2>Demo</h2>
            <Button>Try out</Button>
            <h2>Connect Wallet</h2>
            <div>
              <WalletCard
                item={{
                  name: "Metamask",
                  link: "https://metamask.io/",
                  img: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
                }}
              />
              <WalletCard
                item={{
                  name: "WalletConnect",
                  link: "https://walletconnect.org/",
                  img: "https://upload.wikimedia.org/wikipedia/commons/8/82/WalletConnect_Logo.svg",
                }}
              />
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}

      {/* <Drawer {...bindings}>
        <Drawer.Header>
          <p>Header</p>
        </Drawer.Header>
        <Drawer.Body>Body</Drawer.Body>
        <Drawer.Footer>
          <Button auto onClick={() => setVisible(false)}>
            Button
          </Button>
        </Drawer.Footer>
      </Drawer> */}
    </div>
  );
};

export default ConnectModal;
