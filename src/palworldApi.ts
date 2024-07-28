import axios, {
    type AxiosBasicCredentials,
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
} from 'axios'
import * as ResponseTypes from './types'

export default class {
    private axiosInstance: AxiosInstance

    /**
     *
     * @param ip server IP address
     * @param username server admin username. Default is "admin"
     * @param port REST API port. NOT THE SAME AS THE SERVER PORT! Default is 8212
     * @param password server admin password
     */
    constructor(ip: string, password: string, port: number = 8212, username = 'admin') {
        const auth: AxiosBasicCredentials = { username, password }
        const baseURL = `http://${ip}/v1/api`

        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                Accept: 'application/json',
            },
            auth,
        })
    }

    private async getRequest(endpoint: string): Promise<any> {
        try {
            const response: AxiosResponse = await this.axiosInstance.get(endpoint)
            return response.data
        } catch (error) {
            throw new Error(`Failed to get resource`)
        }
    }
    private async postRequest(endpoint: string, data: any): Promise<ResponseTypes.ServerAction> {
        try {
            const response: AxiosResponse = await this.axiosInstance.post(endpoint)
            return response.data
        } catch (error) {
            throw new Error(`Failed to get resource`)
        }
    }

    async basicInfo(): Promise<ResponseTypes.BasicInfo> {
        return this.getRequest(`/info`)
    }

    async playerList(): Promise<ResponseTypes.PlayerList> {
        return this.getRequest(`/players`)
    }

    async settings(): Promise<ResponseTypes.ServerSettings> {
        return this.getRequest(`/settings`)
    }

    async metrics(): Promise<ResponseTypes.ServerMetrics> {
        return this.getRequest(`/metrics`)
    }

    async announce(message: string): Promise<ResponseTypes.ServerAction> {
        return this.postRequest(`/accounce`, { message })
    }

    async kick(userid: string, message: string): Promise<ResponseTypes.ServerAction> {
        return this.postRequest(`/kick`, { userid, message })
    }

    async ban(userid: string, message: string): Promise<ResponseTypes.ServerAction> {
        return this.postRequest(`/ban`, { userid, message })
    }

    async unban(userid: string): Promise<ResponseTypes.ServerAction> {
        return this.postRequest(`/unban`, { userid })
    }

    async save(): Promise<ResponseTypes.ServerAction> {
        return this.postRequest(`/save`, {})
    }

    async shutdown(waittime: number, message: string): Promise<ResponseTypes.ServerAction> {
        return this.postRequest(`/shutdown`, { waittime, message })
    }

    async stop(): Promise<ResponseTypes.ServerAction> {
        return this.postRequest(`/stop`, {})
    }
}
