export function formatVietnameseDate(date: string | Date) {
  const parsed = typeof date === "string" ? new Date(date) : date;

  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsed);
}
