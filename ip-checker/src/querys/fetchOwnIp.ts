export const fetchOwnIp = async () => {
    const res = await fetch("https://api.ipify.org/?format=json");
    return res.json();
}