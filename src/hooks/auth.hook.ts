import { useMutation } from "@tanstack/react-query"

import { registerUser } from "../Service/Auths/createUser"
import { toast } from "sonner"

export const useRegisterUser:any  = () => {
return useMutation({
    mutationKey:['USERs'],
    mutationFn: async (u) => await registerUser(u),
    onSuccess:()=> {
       toast.success('user created')
    }
})


} 