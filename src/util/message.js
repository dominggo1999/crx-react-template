export const messageBackground = async ({ action, data }) => {
  return chrome?.runtime?.sendMessage({ action, data });
};

export const sendMessageToTab = async (tabId, message) => {
  if (chrome?.runtime?.id && tabId && message) {
    return chrome.tabs.sendMessage(tabId, message);
  }
};
