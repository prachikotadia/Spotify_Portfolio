import { useBrowserHistory } from '@/hooks/useBrowserHistory';

// Component to manage browser history inside Router context
const BrowserHistoryManager = () => {
  useBrowserHistory();
  return null;
};

export default BrowserHistoryManager;
