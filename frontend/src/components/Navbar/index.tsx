import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Avatar,
  Dropdown,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Card,
  CardBody,
} from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo";
import { SearchIcon } from "./SearchIcon";
import { useAtom } from "jotai";
import { isConnectedAtom } from "@/store/atom";
import { useDisclosure } from "@chakra-ui/react";
import ConnectModal from "./ConnectModal";
import SearchModal from "./SearchModal";
import { supabase } from "@/utils/supabaseClient";
import useDebounce from "@/hooks/useDebounce";
import SearchAssetCard from "./SearchAssetCard";

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isConnected, setIsConnected] = useAtom(isConnectedAtom);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const btnRef = React.useRef();
  const searchRef = React.useRef();

  const debouncedSearchTerm = useDebounce(searchTerm, 500); // Debounce searchTerm

  useEffect(() => {
    if (debouncedSearchTerm) {
      performSearch();
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const performSearch = async () => {
    const { data, error } = await supabase
      .from("assets")
      .select("*")
      .ilike("name", `%${debouncedSearchTerm}%`);

    if (!error && data) {
      setResults(data);
    } else {
      console.error("Error searching:", error);
    }
  };

  console.log("searchTerm", searchTerm);
  console.log("results", results);

  return (
    <>
      <Navbar isBordered maxWidth="2xl" className="z-100 justify-between">
        <NavbarContent className="flex">
          <NavbarBrand className="flex-grow-0">
            <AcmeLogo />
            {/* <p className="hidden sm:block font-bold text-inherit">ACME</p> */}
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3 text-sm">
            <NavbarItem>
              <Link color="foreground" href="/">
                Exchange
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/etfs">
                Collections
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/leaderboard">
                Leaderboard
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent>
          <Input
            classNames={{
              base: "w-full max-w-full h-10 w-72 sm:w-96",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search for derivatives, stocks and more"
            size="md"
            startContent={<SearchIcon size={18} />}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={onModalOpen}
            type="search"
            ref={searchRef}
            fullWidth
          />
          <Card className="p-5 bg-opacity-50 w-72 sm:w-96 flex flex-col absolute top-14">
            {results ? (
              results.map((result: any, index) => (
                <Card key={index} bordered shadow={false} hoverable>
                  <CardBody className="p-0 ">
                    <SearchAssetCard item={result} index={index} key={index} />
                  </CardBody>
                </Card>
              ))
            ) : (
              <div></div>
            )}
          </Card>
        </NavbarContent>
        {/* 
        <SearchModal
          isOpen={isModalOpen}
          onClose={onModalClose}
          onOpen={onModalOpen}
          searchRef={searchRef}
        /> */}

        <NavbarContent className="items-center" justify="end">
          {isConnected ? (
            <Dropdown placement="bottom-end" className="bg-gray-900">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
                className="text-gray-100 "
              >
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button
              // as="div"
              className="justify-end"
              onClick={onOpen}
              ref={btnRef}
              colorScheme="teal"
            >
              <Link href="/signin" className="text-gray-200">
                Connect
              </Link>
            </Button>
          )}
        </NavbarContent>

        <ConnectModal
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
          onOpen={onOpen}
        />
      </Navbar>
    </>
  );
};

export default CustomNavbar;
