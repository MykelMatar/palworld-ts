import axios, { type AxiosBasicCredentials, type AxiosInstance, type AxiosResponse } from 'axios'
import type {
  BasicInfo,
  PlayerList,
  ServerAction,
  ServerMetrics,
  ServerSettings,
  Status,
} from './types'

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
    const baseURL = `http://${ip}:${port}/v1/api`

    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        Accept: 'application/json',
      },
      auth,
    })
  }

  private defaultErrorHandler() {
    return new Error(`Failed to get resource. Double check Server IP and API Port`)
  }

  private async getRequest<T>(
    endpoint: string,
    errorHandler: () => any = this.defaultErrorHandler
  ): Promise<T> {
    try {
      const response: AxiosResponse = await this.axiosInstance.get(endpoint)
      return response.data
    } catch (error) {
      return errorHandler()
    }
  }
  private async postRequest<T>(
    endpoint: string,
    data: any,
    errorHandler: () => any = this.defaultErrorHandler
  ): Promise<T> {
    try {
      const response: AxiosResponse = await this.axiosInstance.post(endpoint, data)
      return response.data
    } catch (error) {
      return errorHandler()
    }
  }

  async status(): Promise<Status> {
    const errHandler = () => ({ online: false })
    const info = await this.getRequest<BasicInfo>('/info', errHandler)

    return {
      online: true,
      ...info,
    }
  }

  async playerList(): Promise<PlayerList> {
    return this.getRequest(`/players`)
  }

  async settings(): Promise<ServerSettings> {
    return this.getRequest(`/settings`)
  }

  async metrics(): Promise<ServerMetrics> {
    return this.getRequest(`/metrics`)
  }

  async announce(message: string): Promise<ServerAction> {
    return this.postRequest(`/accounce`, { message })
  }

  async kick(userid: string, message: string): Promise<ServerAction> {
    return this.postRequest(`/kick`, { userid, message })
  }

  async ban(userid: string, message: string): Promise<ServerAction> {
    return this.postRequest(`/ban`, { userid, message })
  }

  async unban(userid: string): Promise<ServerAction> {
    return this.postRequest(`/unban`, { userid })
  }

  async save(): Promise<ServerAction> {
    return this.postRequest(`/save`, {})
  }

  async shutdown(waittime: number, message: string): Promise<ServerAction> {
    return this.postRequest(`/shutdown`, { waittime, message })
  }

  async stop(): Promise<ServerAction> {
    return this.postRequest(`/stop`, {})
  }
}
