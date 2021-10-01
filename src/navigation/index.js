const composePath = (...args) => args.map((item) => (typeof item === 'function' ? item() : item.toString())).join('/');

export const getHomePath = () => '';

export const getChatPath = () => composePath(getHomePath(), 'chat');

export const getChatByIDPath = (chatID = ':chatID') => composePath(getChatPath(), chatID);

export const getProfilePath = () => composePath(getHomePath(), 'profile');