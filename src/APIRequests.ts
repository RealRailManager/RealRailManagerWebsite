const URL = "http://localhost:3000/"

export async function fetchMods() {
    const response = await fetch(URL + "mods");
    const data = await response.json();
    return data;
}

export interface Mod {
  name: string;
  author: string;
}

export async function fetchMinimalMods(): Promise<Mod[]> {
  const data = await fetchMods();
  const modsArray = data["mods"];

  if (!Array.isArray(modsArray)) {
    throw new Error("Expected mods array from server");
  }

  const mods: Mod[] = [];
  for (const item of modsArray) {
    mods.push({ name: item.name, author: item.author});
  }

  return mods;
}