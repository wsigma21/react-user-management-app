import { Wrap, WrapItem, Spinner, Center, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading} = useAllUsers();
  const { onSelectUser, selecedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  // 初期マウント時1回だけ実行
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onClickUser = useCallback((id: number) => {
    // console.log(id);
    onSelectUser({id, users, onOpen});
  }, [onOpen, onSelectUser, users]);

  return (
    <>
      { loading ? (
        <Center h="100vh">
         <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id} 
                imageUrl="https://picsum.photos/800"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
                />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selecedUser} isAdmin={loginUser?.isAdmin} isOpen={isOpen} onClose={onClose} />
    </>
  );
})