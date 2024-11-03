// TODO: 環境変数として設定できるようにする

/** セルの横幅 */
export const CELL_WIDTH = 10;

/** セルの縦幅 */
export const CELL_HEIGHT = 10;

/** シャーレ1行あたりのセル配置件数 */
export const NUMBER_OF_CELLS_PER_ROW = 128;

/** シャーレ1列あたりのセル配置件数 */
export const NUMBER_OF_CELLS_PER_COL = 128;

/** スクロール可能領域の横幅 */
export const SCROLLABLE_AREA_WIDTH =
  Math.min(
    NUMBER_OF_CELLS_PER_ROW,
    Math.trunc(window.innerWidth / CELL_WIDTH) - 4,
  ) *
    CELL_WIDTH +
  6;

/** スクロール可能領域の縦幅 */
export const SCROLLABLE_AREA_HEIGHT =
  Math.min(
    NUMBER_OF_CELLS_PER_COL,
    Math.trunc(window.innerHeight / CELL_HEIGHT) - 14,
  ) *
    CELL_HEIGHT +
  6;
