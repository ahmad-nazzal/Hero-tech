// sw.d.ts
interface ExtendableEvent extends Event {
    waitUntil(promise: Promise<any>): void;
}

interface FetchEvent extends ExtendableEvent {
    request: Request;
    respondWith(response: Promise<Response> | Response): void;
}

interface SyncEvent extends ExtendableEvent {
    tag: string;
}

// تعريف خريطة الأحداث الخاصة بـ Service Worker
interface ServiceWorkerEventMap {
    install: ExtendableEvent;
    activate: ExtendableEvent;
    fetch: FetchEvent;
    sync: SyncEvent;
}

interface ServiceWorkerGlobalScope extends EventTarget {
    addEventListener<K extends keyof ServiceWorkerEventMap>(
        type: K,
        listener: (event: ServiceWorkerEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof ServiceWorkerEventMap>(
        type: K,
        listener: (event: ServiceWorkerEventMap[K]) => any,
        options?: boolean | EventListenerOptions
    ): void;
    skipWaiting(): Promise<void>;
    clients: Clients;
}

interface Clients {
    claim(): Promise<void>;
}

declare const self: ServiceWorkerGlobalScope;