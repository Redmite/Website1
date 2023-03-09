import pb from "Backend/UIM.js"
import { useEffect, useState } from "react";

export default function useVerified() {
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    async function checkVerified() {
      const id = pb.authStore.model.id;

      const userdata = await pb.collection('users').getOne(id);
      setIsVerified(userdata.verified);
    }
    const isLoggedIn = pb.authStore.isValid;
    if (isLoggedIn) checkVerified();
}, []);

return {isVerified}
}