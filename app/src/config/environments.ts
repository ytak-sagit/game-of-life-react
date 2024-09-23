// TODO: 環境変数として設定できるようにする

/** セルの横幅 */
export const CELL_WIDTH = 10;

/** セルの縦幅 */
export const CELL_HEIGHT = 10;

/** シャーレ1行あたりのセル配置件数 既定値 */
const DEFAULT_NUMBER_OF_CELLS_PER_ROW = 128;

/** シャーレ1行あたりのセル配置件数 */
export const NUMBER_OF_CELLS_PER_ROW = Math.min(
  DEFAULT_NUMBER_OF_CELLS_PER_ROW,
  Math.trunc(window.innerWidth / CELL_WIDTH) - 4,
);

/** シャーレ1列あたりのセル配置件数 既定値 */
const DEFAULT_NUMBER_OF_CELLS_PER_COL = 98;

/** シャーレ1列あたりのセル配置件数 */
export const NUMBER_OF_CELLS_PER_COL = Math.min(
  DEFAULT_NUMBER_OF_CELLS_PER_COL,
  Math.trunc(window.innerHeight / CELL_HEIGHT) - 14,
);
