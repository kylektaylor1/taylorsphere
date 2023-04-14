// export const fetcher = <T>(url: string): Promise<T> =>
//     fetch(url).then((res) => res.json());

export const dummy = 1;

export const fetcher = <T>(url: string): Promise<T> =>
    fetch(url).then((r) => r.json());
