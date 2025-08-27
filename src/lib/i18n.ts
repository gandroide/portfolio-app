export function getDirection(lng: string | undefined): "ltr" | "rtl" {
  if (!lng) return "ltr"; // fallback estable
  return ["ar", "he", "fa"].includes(lng) ? "rtl" : "ltr";
}
