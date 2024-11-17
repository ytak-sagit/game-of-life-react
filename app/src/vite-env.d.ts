/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CELL_WIDTH: number;
  readonly VITE_CELL_HEIGHT: number;
  readonly VITE_NUMBER_OF_CELLS_PER_ROW: number;
  readonly VITE_NUMBER_OF_CELLS_PER_COL: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
