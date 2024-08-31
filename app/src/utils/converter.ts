const BINARY_PATTERN = /^(?=([01]+))\1$/;

/**
 * 指定した文字列を2進数へ変換する
 * @param src 2進数を表す文字列
 * @returns 2進数 変換できなかった場合は undefined
 */
export const toBinaryNumber = (src: string) => {
  if (!BINARY_PATTERN.test(src)) {
    return undefined;
  }

  return Number.parseInt(src, 2);
};
