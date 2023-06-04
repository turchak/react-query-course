interface RequestOptions {}

interface ApiInterface {
  get: (url: string, options: RequestOptions) => Promise<unknown>;
}

interface RequestOptions extends RequestInit {
  params: { [key: string]: string };
}

class Api implements ApiInterface {
  private domain: string;
  constructor(path: string) {
    this.domain = path;
  }

  get<T>(url: string, options?: RequestOptions): Promise<T> {
    let finalUrl = `${this.domain}${url}`;
    let searchParams = new URLSearchParams();
    if (options?.params) {
      for (const key in options.params) {
        const value = options.params[key];
        if (value) searchParams.set(key, value);
      }
    }
    if (searchParams) {
      finalUrl = `${finalUrl}?${searchParams}`;
    }
    console.log(searchParams.toString());
    return fetch(finalUrl, { method: 'GET', ...options }).then((response) => response.json());
  }
}

export const api = new Api('/api');
