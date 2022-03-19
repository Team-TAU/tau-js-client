import { WebSocketSubjectConfig } from 'rxjs/webSocket';

export function parseDate(date: string): Date {
  return new Date(date);
}

export function buildUrlBase(domain: string, port: number): string {
  return `wss://${domain}:${port}/ws/`;
}

export function getWsBaseConfig<T>(
  url: string,
  WebSocketCtor?: {
    new (url: string, protocols?: string | string[]): WebSocket;
  }
): WebSocketSubjectConfig<T> {
  let config: WebSocketSubjectConfig<T> = {
    url: url,
  };
  if (WebSocketCtor) {
    config = {
      ...config,
      WebSocketCtor: WebSocketCtor,
    };
  }
  return config;
}
