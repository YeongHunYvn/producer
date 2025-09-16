export function withBasePath(path: string): string {
  if (!path) return path;
  // 외부 URL은 그대로 반환
  if (/^https?:\/\//i.test(path)) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // 이미 base가 포함된 경우 중복 방지
  if (base && path.startsWith(base + "/")) return path;
  // 루트 시작이 아니면 그대로
  if (!path.startsWith("/")) return base ? `${base}/${path}` : path;
  return base ? `${base}${path}` : path;
}


