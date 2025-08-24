declare module "bun" {
  interface Env {
    readonly BUN_PUBLIC_CELL_WIDTH: string;
    readonly BUN_PUBLIC_CELL_HEIGHT: string;
    readonly BUN_PUBLIC_NUMBER_OF_CELLS_PER_ROW: string;
    readonly BUN_PUBLIC_NUMBER_OF_CELLS_PER_COL: string;
  }
}

declare module "*.svg" {
  /**
   * A path to the SVG file
   */
  const path: `${string}.svg`;
  export = path;
}
