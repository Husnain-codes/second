import React from 'react'
import { Flex, Container, Heading, Menu, MenuButton, Button, MenuList, MenuItem, HStack, Box, Icon } from '@chakra-ui/react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const TopNav = ({title, onOpen}) => {
    return (
        <Box ps="4" bg="white">
        <HStack
        maxW="1120px"
        mx="auto"
        justifyContent="space-between"
        h="16"
        >
            <Icon
  as={FaBars}
  onClick={onOpen}
  cursor="pointer"
  display={{
    base: "block",
    lg: "none",
  }}
/>

        <Heading
        fontWeight="700"
        fontSize="28px"
        >Dashboard</Heading>
        <Menu>
        <MenuButton>
            <Icon as={FaRegUserCircle} fontSize="24px"/>
        </MenuButton>
        <MenuList>
        <MenuItem>Logout</MenuItem>
        <MenuItem>Support</MenuItem>
        </MenuList>
        </Menu>
        </HStack>
        </Box>
    )
}

export default TopNav
