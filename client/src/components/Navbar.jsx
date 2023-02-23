import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link as ReactLink } from "react-router-dom";
import {
  Box,
  Flex,
  Link,
  Stack,
  HStack,
  Icon,
  IconButton,
  Text,
  useDisclosure,
  useColorMode,
  useColorModeValue as mode,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiWorld } from "react-icons/gi";
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

const link = [
  { linkName: "About", path: "/about" },
  { linkName: "Contact", path: "/contact" },
];

const blogLinks = [
  { linkName: "All Blog", path: "/all" },
  { linkName: "Latest", path: "/latest" },
  { linkName: "Europe", path: "/europe" },
  { linkName: "Asia", path: "/asia" },
  { linkName: "Ocenaia", path: "/oceania" },
  { linkName: "Africa", path: "/africa" },
];

const NavLink = ({ path, children }) => {
  <Link
    as={ReactLink}
    to={path}
    px="2"
    py="2"
    fontWeight="semibold"
    _hover={{
      textDecoration: "none",
      bg: mode("blue.100", "blue:800"),
    }}
  >
    {children}
  </Link>;
};

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={mode("blue.200", "blue.900")} px={4}>
      <Flex h="16" alignItems="center" justifyContent="space-between">
        <IconButton
          bg={mode("blue.200", "blue.900")}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        ></IconButton>
      </Flex>
    </Box>
  );
};

export default Navbar;
