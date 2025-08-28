export function getDirection(lng?: string): "ltr" | "rtl" {
  if (!lng) return "ltr";
  return ["ar", "he", "fa"].includes(lng) ? "rtl" : "ltr";
}
