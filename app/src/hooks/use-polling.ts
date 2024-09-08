import { useRef, useState } from "react";

type PollingAction = () => void;

export const usePolling = (
  pollingAction: PollingAction,
  intervalMilliSeconds = 100,
) => {
  const [isPolling, setIsPolling] = useState(false);
  const pollingRef = useRef(isPolling);
  pollingRef.current = isPolling;

  // ポーリング処理
  // 指定した時間間隔ごとにアクションを定期実行する
  // TODO: useCallback() の導入検討
  const polling = () => {
    if (!pollingRef.current) {
      return;
    }

    pollingAction();

    // 再帰呼び出し
    setTimeout(polling, intervalMilliSeconds);
  };

  // ポーリングのON/OFF切り替え
  // OFF->ONの場合はポーリング開始、ON->OFFの場合はポーリング停止
  const togglePolling = () => {
    setIsPolling((prev) => !prev);
    // NOTE:
    // setState() は非同期で state を更新するため、
    // setState() 直後は更新前の state の値が参照される
    if (isPolling) {
      pollingRef.current = false;
    } else {
      pollingRef.current = true;
      polling();
    }
  };

  return { isPolling, togglePolling };
};
