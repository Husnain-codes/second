import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { Sidenav } from './Sidenav'
const SideDrawer = ({isOpen,onClose}) => {
    return (
        <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        >
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton>
        <DrawerHeader>
            <Sidenav />
        </DrawerHeader>
        </DrawerCloseButton>
        </DrawerContent>
        </Drawer>
    )
}

export default SideDrawer
