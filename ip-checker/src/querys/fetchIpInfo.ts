export const fetchIpInfo = async ({ queryKey }: any) => {
    const [, { ipAddress }] = queryKey;
    const fetchConfig: RequestInit = {
        method: "GET",
        headers: new Headers({
            "Authorization": "Bearer WookieIP2022",
            "Content-Type": "application/json",
        })
    };

    const res = await fetch(`https://wookie.codesubmit.io/ipcheck?ip=${ipAddress}`, fetchConfig);
    return res.json();
}