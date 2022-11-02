import {proxy} from 'valtio';

interface tokeProps {
  token: string;
}

const tokenState: tokeProps = proxy({
  token: '',
});

export default tokenState;
