import { useCallback, useState } from "react"
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: User[];
  onOpen: () => void;
}

// 選択したユーザー情報を特定し、モーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selecedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback(({ id, users, onOpen }: Props) => {
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser!);
    onOpen();
  },[]);
  return { onSelectUser, selecedUser }
}