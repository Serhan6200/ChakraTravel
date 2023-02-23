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
  ButtonGroup,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { GiWorld } from "react-icons/gi";
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

const defaultlinks = [
  { linkName: "About", path: "/about" },
  { linkName: "Contact", path: "/contact" },
];

const blogLinks = [
  { linkName: "All Blog", category: "/all" },
  { linkName: "Latest", category: "/latest" },
  { linkName: "Europe", category: "/europe" },
  { linkName: "Asia", category: "/asia" },
  { linkName: "Ocenaia", category: "/oceania" },
  { linkName: "Africa", category: "/africa" },
];

const NavLink = ({ path, children }) => (
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
  </Link>
);

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { logoHover, setLogoHover } = useState();
  return (
    <Box bg={mode("blue.200", "blue.900")} px={4}>
      <Flex h="16" alignItems="center" justifyContent="space-between">
        <IconButton
          bg={mode("blue.200", "blue.900")}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        ></IconButton>

        <HStack>
          <Link
            as={ReactLink}
            to="/asd"
            style={{ textDecoration: "none" }}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <Flex alignItems="center">
              <Icon as={GiWorld} h="10" w="10" ml="5" color={logoHover ? "gray.200" : mode("gray.600", "gray.400")} />
              <Text fontWeight="extrabold" ml="2" color={mode("gray.600", "gray.400")}>
                TravelArt
              </Text>
            </Flex>
          </Link>
          <HStack display={{ base: "none", md: "flex" }} pl="10">
            {defaultlinks.map((item) => (
              <NavLink key={item.linkName} path={item.path}>
                {item.linkName}
              </NavLink>
            ))}
            <Menu>
              <MenuButton fontWeight="semibold" p="2" _hover={{ bg: mode("blue.200", "blue.800") }}>
                Blog
              </MenuButton>
              <MenuList>
                {blogLinks.map((item) => (
                  <MenuItem key={item.linkName} as={ReactLink} to={`/blog/${item.category}`}>
                    {item.linkName}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
        <HStack>
          <ButtonGroup spacing="0" variant="ghost" mr="3" display={{ base: "none", md: "flex" }}>
            <IconButton as="a" href="#" icon={<FaFacebook fontSize="1.25rem" />}></IconButton>
            <IconButton as="a" href="#" icon={<FaTwitter fontSize="1.25rem" />}></IconButton>
            <IconButton as="a" href="#" icon={<FaYoutube fontSize="1.25rem" />}></IconButton>
            <IconButton as="a" href="#" icon={<FaInstagram fontSize="1.25rem" />}></IconButton>
          </ButtonGroup>
          <Icon
            cursor="pointer"
            as={colorMode === "light" ? MoonIcon : SunIcon}
            onClick={() => toggleColorMode()}
            w="40px"
          />
        </HStack>
      </Flex>
      {isOpen ? (
        <Box pb="4" display={{ md: "none" }}>
          <Stack as="nav" spacing="4">
            {defaultlinks.map((item) => (
              <NavLink key={item.linkName} path={item.path}>
                {item.linkName}
              </NavLink>
            ))}
          </Stack>
          <Menu>
            <MenuButton
              textAlign="left"
              w="full"
              mt="3"
              fontWeight="semibold"
              p="2"
              _hover={{ bg: mode("blue.200", "blue.800") }}
            >
              Blog
            </MenuButton>
            <MenuList>
              {blogLinks.map((item) => (
                <MenuItem key={item.linkName} as={ReactLink} to={`/blog/${item.category}`}>
                  {item.linkName}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <ButtonGroup spacing="0" variant="ghost" mr="3" mt="5">
            <IconButton as="a" href="#" icon={<FaFacebook fontSize="1.25rem" />}></IconButton>
            <IconButton as="a" href="#" icon={<FaTwitter fontSize="1.25rem" />}></IconButton>
            <IconButton as="a" href="#" icon={<FaYoutube fontSize="1.25rem" />}></IconButton>
            <IconButton as="a" href="#" icon={<FaInstagram fontSize="1.25rem" />}></IconButton>
          </ButtonGroup>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
