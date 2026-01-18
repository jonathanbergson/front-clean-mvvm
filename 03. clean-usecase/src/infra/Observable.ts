export default class Observable<Events extends EventMap> {
  private handlers: {
    [K in keyof Events]?: Array<(payload: Events[K]) => void | Promise<void>>;
  } = {};

  register<K extends keyof Events>(
    event: K,
    callback: (payload: Events[K]) => void | Promise<void>,
  ) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event].push(callback);
  }

  protected async notifyAll<K extends keyof Events>(event: K, data: Events[K]) {
    for (const callback of this.handlers[event] ?? []) {
      await callback(data);
    }
  }
}

type EventMap = Record<string, unknown>;
