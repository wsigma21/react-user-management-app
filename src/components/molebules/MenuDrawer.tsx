import { FC, memo } from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";

type Props = {
  onClose: () => void,
  isOpen: boolean,
  onClickHome: () => void,
  onClickUserManagement: () => void,
  onClickSetting: () => void,
}

export const MenuDrawer: FC<Props> = memo(({ onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting }) => {
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>TOP</Button>
            <Button w="100%" onClick={onClickUserManagement}>ユーザ一覧</Button>
            <Button w="100%" onClick={onClickSetting}>設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
})