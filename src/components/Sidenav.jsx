import { Box, Stack, HStack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
export const Sidenav = () => {
  const navlinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: LuArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
  ];

  return (
    <Stack 
    bg="white"
    justify="space-between" 
    boxShadow="lg" 
    W="256px" 
    h="100vh" 
    display={{
      base:"none",
      lg:"flex",
    }}
    >
      <Box>
      <Heading 
      textAlign="center" 
      fontSize="20px" 
      fontWeight="700" 
      as="h1" 
      pt="56px"
      >@DOSOMECODING</Heading>
      <Box 
      mt="6" 
      mx="3"
      >
      {navlinks.map((nav) => (
        <HStack 
        borderRadius="10px" 
        mx="3" 
        key={nav.text} 
        py="3" 
        px="4" 
        _hover={{
          bg:"#F3F3F7",
          color:"#171717",
        }}
        color="#797E82" 
        >
          <Icon as={nav.icon} />
          <Text 
          fontSize="14px" 
          fontWeight="700" 
          color="#797E82" 
          >{nav.text}</Text>
        </HStack>
      ))}
      </Box>
      </Box>
        <Box 
        mt="6" 
        mx="3" 
        mb="6"
        >
        <HStack 
      borderRadius="10px" 
      mx="3"
        py="3"
         px="4"
          _hover={{
          bg:"#F3F3F7",
          color:"#171717",
        }}
        color="#797E82" 
        >
          <Icon as={MdOutlineSupportAgent} />
          <Text 
          fontSize="14px"
          fontWeight="700" 
          color="#797E82" 
          >
            Support
          </Text>
        </HStack>
        </Box>
    </Stack>
  );
};
