import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { SocksProxyAgent, SocksProxyAgentOptions } from 'socks-proxy-agent';
import { HttpProxyAgent, HttpProxyAgentOptions } from 'http-proxy-agent';
import { URL } from 'url';
import UserAgent from 'user-agents';

enum ProxyProtocol {
  HTTP = 'http',
  SOCKS = 'socks',
  SOCKS5 = 'socks5',
}

export function createProxyAgent(
  proxyOptions: string | SocksProxyAgentOptions | HttpProxyAgentOptions,
): SocksProxyAgent | HttpProxyAgent {
  const url = (typeof proxyOptions === 'string') ? new URL(proxyOptions) : new URL(proxyOptions.host as string);
  if (url.protocol.includes(ProxyProtocol.HTTP)) {
    return new HttpProxyAgent(proxyOptions);
  }
  if (url.protocol.includes(ProxyProtocol.SOCKS) || url.protocol.includes(ProxyProtocol.SOCKS5)) {
    return new SocksProxyAgent(proxyOptions);
  }
  throw new Error('UNSUPPORTED PROXY');
}

export default function createHttpAgent(
  baseUrl: string,
  timeout: number = 15000,
  proxy?: string | SocksProxyAgentOptions | HttpProxyAgentOptions,
  auth?: { username: string, password: string },
  ContentType: string = 'multipart/form-data',
  headers?: any,
): AxiosInstance {
  const config: AxiosRequestConfig = {};
  if (proxy && (typeof proxy === 'string' && proxy !== '')) {
    const proxyAgent = createProxyAgent(proxy);
    config.httpAgent = proxyAgent;
    config.httpsAgent = proxyAgent;
  }

  if (auth) {
    config.auth = auth;
  }

  config.baseURL = baseUrl;

  config.timeout = timeout;

  config.headers = {
    'User-Agent': (new UserAgent()).toString(),
    'Content-Type': ContentType,
  };
  if (headers) {
    Object.assign(config.headers, headers);
  }

  return axios.create(config);
}
