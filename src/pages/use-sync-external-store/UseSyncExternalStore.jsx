import './use-sync-external.css';
import { useSyncExternalStore } from 'react';

const getSnapshot = () => {
  return navigator.onLine ? 'online' : 'offline';
};

const subscribe = (callback) => {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);

  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
};

export default function UseSyncExternalStorePage() {
  const networkStatus = useSyncExternalStore(subscribe, getSnapshot);

  // const [networkStatus, setNetworkStatus] = useState('online');

  // useEffect(() => {
  //   const handleNetworkStatusChange = () => {
  //     navigator.onLine
  //       ? setNetworkStatus('online')
  //       : setNetworkStatus('offline');
  //   };

  //   window.addEventListener('online', handleNetworkStatusChange);
  //   window.addEventListener('offline', handleNetworkStatusChange);

  //   return () => {
  //     window.removeEventListener('online', handleNetworkStatusChange);
  //     window.removeEventListener('offline', handleNetworkStatusChange);
  //   };
  // }, []);

  return (
    <div>
      <h1 className="pb-4 capitalize">{networkStatus}</h1>
      <div className="justify-items-center">
        <div
          className={`w-10 h-10 rounded-4xl ${
            networkStatus === 'online' ? 'bg-green-600 pulse' : 'bg-gray-500'
          }`}
        ></div>
      </div>
    </div>
  );
}
