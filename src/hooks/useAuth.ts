import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user"
import { useNavigate } from "react-router-dom";
import { useMassage } from "./useMessage";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { showMessage } = useMassage();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "ログインしました", status: "success" });
            navigate("/home");
          } else {
            showMessage({ title: "ユーザが見つかりません", status: "error" });
          }})
        .catch(()=>{showMessage({ title: "ログインできません", status: "error" })})
        .finally(() => setLoading(false));
  },[navigate, showMessage])
  return { login, loading }
}