export const pad = (number: number, length: number): string => {
  let str = '' + number;
  while (str.length < length) {
    str  = '0' + str;
  }
  return str;
}