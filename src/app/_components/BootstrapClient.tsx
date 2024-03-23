'use client';

import { useEffect } from 'react';

/**
 * Load bootstrap JS
 * @constructor
 */
function BootstrapClient() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}

export default BootstrapClient;
