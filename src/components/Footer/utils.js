import { BUILD_YEAR } from "./constants";

// eslint-disable-next-line import/prefer-default-export
export function getCopyrightYears() {
  const currentYear = new Date().getFullYear();

  return `${BUILD_YEAR}–${currentYear}`;
}
