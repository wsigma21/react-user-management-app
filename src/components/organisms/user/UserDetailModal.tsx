import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isAdmin?: boolean;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo(({
  user, isAdmin = false, isOpen, onClose
}) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? '');
    setName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setPhone(user?.phone ?? '');
  }, [user]);

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>)=> setUsername(event.target.value);
  const onChangeName = (event: ChangeEvent<HTMLInputElement>)=> setName(event.target.value);
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>)=> setEmail(event.target.value);
  const onChangePhone = (event: ChangeEvent<HTMLInputElement>)=> setPhone(event.target.value);

  const onClickUpdate = () => alert();
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent pb={2}>
          <ModalHeader>ユーザ詳細</ModalHeader>
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>MAIL</FormLabel>
                <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
          <ModalCloseButton />
        </ModalContent>
      </Modal>
  );
});