/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CELL_WIDTH: string;
  readonly VITE_CELL_HEIGHT: string;
  readonly VITE_NUMBER_OF_CELLS_PER_ROW: string;
  readonly VITE_NUMBER_OF_CELLS_PER_COL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
