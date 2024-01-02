import { FC, memo } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molebules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav" 
        bg="teal.500" 
        color="gray.50" 
        align="center" 
        justify="space-between"
        padding={{ base: 3, md: 5}}
      >
        <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>ユーザ管理アプリ</Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link>ユーザ一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
        <MenuDrawer onClose={onClose} isOpen={isOpen}/>
      </Flex>
      
    </>
  )
});

