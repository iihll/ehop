export function isKorean(text: string) {
  return /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text)
}
