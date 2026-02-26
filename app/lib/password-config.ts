export const PROJECT_PASSWORDS: Record<string, string> = {
  "longevity-passport":
    process.env.NEXT_PUBLIC_LONGEVITY_PASSWORD || "HB-ux-pass!",
  "or-integration": process.env.NEXT_PUBLIC_OR_PASSWORD || "HB-ux-pass!",
};

export function requiresPassword(slug: string): boolean {
  return slug in PROJECT_PASSWORDS;
}

export function verifyPassword(slug: string, password: string): boolean {
  return PROJECT_PASSWORDS[slug] === password;
}
