import {HttpClient} from "@/api/axiosInstance";

export const getAssets = async (websiteUrl: string) => {
    try {
        const baseInstance = HttpClient.getBaseInstance();

        return (await baseInstance.get(`get-assets?url=${websiteUrl}`)).data;
    } catch (error) {
        console.log(error)
    }
};
