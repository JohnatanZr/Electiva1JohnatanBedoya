export const GetGiphy = async (filter) => {
    const api_key = "0P4jYvrl03NbijHeXnxJv8mwH3NQR0ja";

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${filter}&limit=21`;

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
