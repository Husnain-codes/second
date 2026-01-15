import React from 'react'
import { Card, chakra } from '@chakra-ui/react'
import { HStack, Stack, Icon, Text, Tag, Button } from '@chakra-ui/react'
const PriceSection = () => {
    return (
        <Card  bg="white" borderRadius="xl" p="6" >
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
        </Card>
    )
}

export default PriceSection
