/**
 * 以下を参考に実装:
 * https://zenn.dev/ncdc/articles/react_window_size_subscription
 */

import { useSyncExternalStore } from "react";

type WindowSize = {
  windowWidth: number;
  windowHeight: number;
};

const getWindowWidth = () => window.innerWidth;

const getWindowHeight = () => window.innerHeight;

const subscribeWindowSizeChange = (listener: () => void) => {
  window.addEventListener("resize", listener);
  return () => window.removeEventListener("resize", listener);
};

export const useWindowSize = (): WindowSize => {
  const width = useSyncExternalStore(subscribeWindowSizeChange, getWindowWidth);
  const height = useSyncExternalStore(
    subscribeWindowSizeChange,
    getWindowHeight,
  );
  return { windowWidth: width, windowHeight: height };
};
