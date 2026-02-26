"use client";

import commonEn from "@/translations/projects/common-en.json";
import longevityEn from "@/translations/projects/longevity-passport-en.json";
import orIntegrationEn from "@/translations/projects/or-integration-en.json";
import sevenSpringsEn from "@/translations/projects/seven-springs-en.json";

const projectTranslations: Record<
  string,
  typeof longevityEn | typeof sevenSpringsEn | typeof orIntegrationEn
> = {
  "longevity-passport": longevityEn,
  "seven-springs": sevenSpringsEn,
  "or-integration": orIntegrationEn,
};

export function useProjectTranslation(slug: string) {
  const project = projectTranslations[slug] || {};
  const common = commonEn;

  return { ...project, common };
}
