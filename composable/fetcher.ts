export function fetcher() {
  return async (input: RequestInfo, init: RequestInit, ...args: any[]) => {
    const res = await fetch(input, init);
    return res.json();
  };
}
