import {useState} from "react";

const useVisualMode = function(initial) {
  const [mode, setMode] = useState(initial);
  function transition(newMode) {
    setMode(newMode);
  }
  return { mode, transition };
}

export { useVisualMode }