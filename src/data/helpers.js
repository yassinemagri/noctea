// 1 000 = 1k || 1 000 000 = 1M
export function formatNumber(value) {
  var valueToNumber = Number(value);
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
  window.open(url || "#", "_blank");
}
export function toggleFn(fn){
  fn(prevfn => !prevfn)
}