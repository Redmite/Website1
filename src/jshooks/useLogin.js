import { useMutation } from "react-query";
import pb from "../Backend/pocketbase.js";

export default function useLogin() {
  async function login({email, password}){
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

}
return useMutation(login);
}