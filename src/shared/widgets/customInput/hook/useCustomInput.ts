import { useState } from "react";

export const useCustomInput = () => {
  const [value, setValue] = useState("");

  return {
    value,
    setValue,
  } as const
}