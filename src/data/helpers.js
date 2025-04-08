// 1 000 = 1k || 1 000 000 = 1M
export function formatNumber(value) {
  let valueToNumber = Number(value);
  if (isNaN(valueToNumber)) return "Invalid number";
  if (valueToNumber >= 1_000_000_000_000) {
    return (valueToNumber / 1_000_000_000_000).toFixed(1) + "T";
  } else if (valueToNumber >= 1_000_000_000) {
    return (valueToNumber / 1_000_000_000).toFixed(1) + "B";
  } else if (valueToNumber >= 1_000_000) {
    return (valueToNumber / 1_000_000).toFixed(1) + "M";
  } else if (valueToNumber >= 1_000) {
    return (valueToNumber / 1_000).toFixed(1) + "K";
  }
  return valueToNumber.toString();
}
// url open new tabe
export function urlFn(url) {
  window.open(url, "_blank");
}

export function toggleFn(fn) {
  fn((prevfn) => !prevfn);
}

export function downloadUrl(value, isActive) {
  const { id, mainFileId, latestFiles } = value;
  const urlBaldi = `https://www.curseforge.com/api/v1/mods/${id}/files/${mainFileId}/download`;

  if (isActive === false) {return !latestFiles[0].downloadUrl ? urlFn(urlBaldi) : urlFn(latestFiles[0].downloadUrl);} 
  else {return !latestFiles[0].downloadUrl ? urlBaldi : latestFiles[0].downloadUrl;}
}

export function filterGameVersion(value) {
  const filterModLeader = value.filter(
    (client) => !/\d/.test(client) && client !== "Server" && client !== "Client"
  );
  const filterGameVersion = value.filter((client) => /\d/.test(client));
  return [filterModLeader, filterGameVersion];
}
