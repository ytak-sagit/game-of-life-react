/** セルの横幅 */
export const CELL_WIDTH = Number.parseInt(import.meta.env.VITE_CELL_WIDTH);

/** セルの縦幅 */
export const CELL_HEIGHT = Number.parseInt(import.meta.env.VITE_CELL_HEIGHT);

/** シャーレ1行あたりのセル配置件数 */
export const NUMBER_OF_CELLS_PER_ROW = Number.parseInt(
  import.meta.env.VITE_NUMBER_OF_CELLS_PER_ROW,
);

/** シャーレ1列あたりのセル配置件数 */
export const NUMBER_OF_CELLS_PER_COL = Number.parseInt(
  import.meta.env.VITE_NUMBER_OF_CELLS_PER_COL,
);
