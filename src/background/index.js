chrome?.runtime?.onMessage.addListener((req, sender, sendRes) => {
  const { action, data } = req;

  if (action === 'hello') {
    sendRes({
      message: 'background is alive and healthy',
    });
  }

  return true;
});
