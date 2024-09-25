import { envConfig } from "@/src/config/envconfig"

export const getALLpost = async () => {
const res = await fetch(`${envConfig.baseApi}/items`)

const data = await res.json()

return data

}

