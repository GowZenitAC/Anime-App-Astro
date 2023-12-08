const url = "https://api.jikan.moe/v4/anime";
export const data = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}
