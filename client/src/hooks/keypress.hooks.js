import { useEffect } from 'react';

export function useKeypress(keyCode, callback, deps) {
  useEffect(() => {
    function onKeyup(e) {
      e.preventDefault();
      if (e.keyCode === keyCode) callback();
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
