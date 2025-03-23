export const mineCraftEndPoint = async () => {
    try {
        const headers = {
        'Content-Type':'application/json',
        'Accept':'application/json',
        'x-api-key':'$2a$10$JEzg9yPd0QL4UrACvVTlg.1gBZKvitNgZuaqOX8XoI5k5RDEayT8a'
        };
        const baseURL = 'https://api.curseforge.com'
        const minecraftId = '432'
        const modId = "1114962"; // Your mod ID
        const fileId = "5782724"; // Your file ID
        const versionTypesURL = `${baseURL}/v1/games/${minecraftId}/version-types`
        const searchMods = `${baseURL}/v1/mods/search?gameId=${minecraftId}`
        const filesURL = `${baseURL}/v1/mods/${modId}/files/`
        const singleFileURL = `${baseURL}/v1/mods/${modId}/files/${fileId}`
        const getSpecificMod = `${baseURL}/v1/mods/search?gameId=${minecraftId}&classId=6`
        const response = await fetch(filesURL, { method: "GET", headers: headers });
        if (!response.ok) {
            throw new Error("HTTP error! Status:", response.status);
        }
        return await response.json();
    }catch(error) {
        console.error("Fetch error :", error);
    }
  };

async function getMods() {
}