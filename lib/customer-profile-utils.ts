export const PROFILE_INTEREST_OPTIONS = [
  "Ẩm thực địa phương",
  "Nghỉ dưỡng cao cấp",
  "Khám phá văn hóa",
  "Hoạt động ngoài trời",
  "Chụp ảnh thiên nhiên",
];

export function extractDefaultProfileName(heading: string) {
  const raw = heading.split(",").slice(1).join(",").replace(".", "").trim();
  return raw || "Khách hàng Smart Travel";
}
