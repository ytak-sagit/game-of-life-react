const BINARY_PATTERN = /^(?=([01]+))\1$/;

/**
 * 指定した文字列を2進数へ変換する
 * @param src 2進数を表す文字列
 * @returns 2進数
 * @throws {Error} 2進数へ変換できなかった場合にスロー
 */
export const toBinaryNumber = (src: string) => {
  if (!BINARY_PATTERN.test(src)) {
    throw new Error(`指定した文字列は2進数へ変換できません: ${src}`);
  }

  return Number.parseInt(src, 2);
};
