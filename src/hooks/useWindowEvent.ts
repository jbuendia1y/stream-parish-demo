import { useEffect, useState } from "react";

export const useWindowEvent = <T>(
  event: string,
  options: { defaultValue: T }
) => {
  const [payload, setPayload] = useState<T>(options.defaultValue);

  useEffect(() => {
    const handlerListener = (e: Event) => {
      const custom = e as CustomEvent<T>;
      setPayload(custom.detail);
    };
    window.addEventListener(event, handlerListener);
    return () => {
      window.removeEventListener(event, handlerListener);
    };
  }, [event]);

  return { payload };
};
