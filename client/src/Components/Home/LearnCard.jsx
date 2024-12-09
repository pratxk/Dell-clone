import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BiArrowBack, BiBarChart, BiCart, BiCheckShield, BiFileFind, BiStar, BiUser } from 'react-icons/bi'


export function Learn_Card({ url, head, subHead }) {
    return (
        <Box
            w={{ base: "60% ", sm: "500px", md: "400px", lg: "200px", xl: "260px" }}
            h={{ base: "auto", md: "175px", lg: "300px", xl: "350px" }}
            backgroundColor={'#001730'}
            mb={4}
            display={ "flex"}
            flexDirection={{ base: "row", md: "row",lg:'column',xl:'column' }}
        >
            <Box flex={{sm:1, base:1}}
            >
                <Image src={url} w={'100%'} h={'100%'} objectFit={'cover'} />
            </Box>
            <Box
                color={'white'} pt={3} pb={3} pl={3}
                h={{ base: "auto", md: "60%" }}
                display={'flex'}
                flexDir={'column'}
                justifyContent={'space-between'}
                flex={{ base: "3", md: 2 }}
            >
                <Box>
                    <Text fontSize={{ base: 14,sm:15,md:16, lg: 18, xl: 20 }}>{head}</Text>
                </Box>
                <Box mt={{ base: 2, lg: 2, xl: 0 }}>
                    <Link _hover={{ textDecoration: 'underline' }}>
                        <Flex color={'white'} align={'center'} gap={1}>
                            <Text fontSize={{ base: 14, lg: 14, xl: 16 }}>{subHead}</Text>
                            <BiArrowBack style={{ transform: 'rotate(180deg)' }} fontSize={"18px"} color={"white"} />
                        </Flex>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
