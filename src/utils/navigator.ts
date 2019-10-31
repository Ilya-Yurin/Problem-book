import { history } from 'redux/store';

export const goToPath = (path: string) => history.push(path);
