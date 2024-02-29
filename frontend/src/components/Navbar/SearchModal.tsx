import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import SearchAssetCard from "./SearchAssetCard";
import { items } from "./data";

const SearchModal = ({
  isOpen,
  onClose,
  onOpen,
  searchRef,
}: {
  isOpen: boolean;
  onClose: any;
  onOpen: any;
  searchRef: any;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={() => {
        searchRef.current?.focus();
      }}
      onClose={onClose}
      placement="top"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-gray-400",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
      backdrop="transparent"
    >
      <ModalContent>
        {(onClose: any) => (
          <>
            <ModalBody>
              <h3>Popular assets</h3>
              {items.map((item, index) => (
                <SearchAssetCard item={item} index={index} key={index} />
              ))}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;
