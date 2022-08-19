import React, { useEffect } from 'react';

import { messageBackground } from '~/util/message';

const Popup = () => {
  const sayHello = async () => {
    const res = await messageBackground({
      action: 'hello',
      data: 'test data',
    });

    console.log(res);
  };

  return (
    <div>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  );
};

export default Popup;
