export const fetchApi = async (api) => {
    const res = await fetch(api);
    const results = await res.json();
    return results;
 }