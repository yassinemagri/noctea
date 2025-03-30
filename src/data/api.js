const headers = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'x-api-key':'$2a$10$JEzg9yPd0QL4UrACvVTlg.1gBZKvitNgZuaqOX8XoI5k5RDEayT8a'
};
const baseURL = 'https://api.curseforge.com'
const minecraftId = '432'
// It gets all mods categories
export const getAllCategories = async (modLoaderId) => {
    try {
        const allModsURL = `${baseURL}/v1/mods/search?gameId=${minecraftId}${modLoaderId && `&modLoaderType=${modLoaderId}`}`
        const response = await fetch(allModsURL, { method: "GET", headers: headers });
        if (!response.ok) {
            throw new Error("HTTP error! Status:", response.status);
        }
        return await response.json();
    }catch(error) {
        console.error("Fetch error :", error);
    }
}
// It gets specific category by class Id and specific Mod loader optional
export const getModByClassId = async (classId,modLoaderId) => {
    if(modLoaderId) {
        if(!(classId === 6 || classId === 4471)) {
            throw new Error("This mod category doesn't have a mod loader!")
        }
    }
    try {
        const modByIdURL = `${baseURL}/v1/mods/search?gameId=${minecraftId}&classId=${classId}${modLoaderId && `&modLoaderType=${modLoaderId}`}`
        const response = await fetch(modByIdURL, { method: "GET", headers: headers });
        if (!response.ok) {
            throw new Error("HTTP error! Status:", response.status);
        }
        return await response.json();
    }catch(error) {
        console.error("Fetch error :", error);
    }
}
// It gets a Single Mod(Not Category)
export const getMod = async (modId) => {
    try {
        const modByIdURL = `${baseURL}/v1/mods/${modId}`
        const response = await fetch(modByIdURL, { method: "GET", headers: headers });
        if (!response.ok) {
            throw new Error("HTTP error! Status:", response.status);
        }
        return await response.json();
    }catch(error) {
        console.error("Fetch error :", error);
    }
}
// It gets all Files by Mod Id
export const getFilesByModId = async (modId) => {
    try {
        const modByIdURL = `${baseURL}/v1/mods/${modId}/files`
        const response = await fetch(modByIdURL, { method: "GET", headers: headers });
        if (!response.ok) {
            throw new Error("HTTP error! Status:", response.status);
        }
        return await response.json();
    }catch(error) {
        console.error("Fetch error :", error);
    }
}
// It gets a single File by Mod Id
export const getFileByModId = async (modId, fileId) => {
    try {
        const modByIdURL = `${baseURL}/v1/mods/${modId}/files/${fileId}`
        const response = await fetch(modByIdURL, { method: "GET", headers: headers });
        if (!response.ok) {
            throw new Error("HTTP error! Status:", response.status);
        }
        return await response.json();
    }catch(error) {
        console.error("Fetch error :", error);
    }
}