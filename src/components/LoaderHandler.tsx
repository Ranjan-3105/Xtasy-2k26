import { useEffect } from 'react';

export const LoaderHandler = () => {
  useEffect(() => {
    // Once React mounts this component (meaning JS has loaded and parsed),
    // wait a tiny moment to ensure the first render is painted
    // and then fade out the CSS loader.
    const timer = setTimeout(() => {
      const loader = document.getElementById('initial-loader');
      if (loader) {
        // Add the CSS class to fade it out gracefully
        loader.classList.add('loader-hidden');
        
        // Completely remove it from the DOM after the 500ms transition finishes
        setTimeout(() => {
          loader.remove();
        }, 500);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component handles DOM side logic only
};
