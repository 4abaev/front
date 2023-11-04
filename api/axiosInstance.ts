import axios, {AxiosInstance} from "axios";

const backUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export class HttpClient {
    private static baseInstance: AxiosInstance | null = null;

    public static getBaseInstance(): AxiosInstance {
        if (this.baseInstance) return this.baseInstance;
        this.baseInstance = axios.create({
            baseURL: backUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return this.baseInstance;
    }
}