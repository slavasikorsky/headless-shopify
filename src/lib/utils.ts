import { ReadonlyURLSearchParams } from "next/navigation";

export function ensureStartWidth(stringToCheck: string, startWidth: string) {
  return stringToCheck.startsWith(startWidth)
    ? stringToCheck
    : `${startWidth}${stringToCheck}`;
}

export function createUrl(
  path: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${path}${queryString}`;
}
