import { initialize, setListener } from './Firebase.js';

export const initApi = () => initialize();

// get cards from current firebase database
export const getCards = (updaterFn) => setListener('events', updaterFn);
