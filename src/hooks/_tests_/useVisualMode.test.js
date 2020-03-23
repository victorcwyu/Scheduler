import { renderHook, act } from "@testing-library/react-hooks";
import { useVisualMode } from "hooks/useVisualMode";


const FIRST = "FIRST";
const SECOND = "SECOND";

test("useVisualMode should initialize with default value", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  expect(result.current.mode).toBe(FIRST);
});

test("useVisualMode should transition to another mode", () => {
  const { result } = renderHook(() => useVisualMode(FIRST));

  act(() => result.current.transition(SECOND));
  expect(result.current.mode).toBe(SECOND);
});