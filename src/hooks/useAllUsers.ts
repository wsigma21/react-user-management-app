import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const { showMessage } = useMessage();


  const getUsers = useCallback(() => {
    setLoading(true);
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch(() => {
      showMessage({ title:"ユーザ取得に失敗しました", status: "error"})
    }).finally(() => {
      setLoading(false);
    })
  },[showMessage]);

  return { getUsers, users, loading }
}