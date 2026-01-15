import React from 'react'
import { HStack, Stack, Icon, Text, Tag, Button } from '@chakra-ui/react'
import {AiOutlineInfoCircle, AiOutlineArrowDown,AiOutlineArrowUp} from "react-icons/ai"
export const PortfolioSection = () => {
    return (
        <HStack justifyContent="space-between" bg="white" borderRadius="xl" p="6" m="6" display="flex" spacing={16}  >
            <Stack>
            <HStack  color="#535D66">  
            <Text fontSize="14px">Totan Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
            </HStack> 
            <Text fontSize="24px" fontWeight="700">$1112,123</Text>
            </Stack>
            <Stack>
            <HStack  color="#535D66">  
            <Text fontSize="14px">Wallet Balance</Text>
            </HStack> 
            <Text fontSize="24px" fontWeight="700">$14562,123</Text> <Tag>BTC</Tag>
            </Stack>
            <Stack>
            <HStack  color="#535D66">  
            </HStack> 
            <Text fontSize="24px" fontWeight="700">$7652,123</Text> <Tag>INR</Tag>
            </Stack>
            <HStack>
                <Button leftIcon={<Icon as={AiOutlineArrowDown}/>} bg="purple" color="white"  w="100px" h="50px" borderRadius="10px" >Deposit</Button>
                <Button  leftIcon={<Icon as={AiOutlineArrowUp}/>} bg="purple" color="white" w="100px" h="50px" borderRadius="10px">Withdrawl</Button>
            </HStack>
        </HStack>
    )
}
