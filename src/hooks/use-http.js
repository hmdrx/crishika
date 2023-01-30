import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useHttp = ({ url, method, postData }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const auth = useSelector(state => state.auth.token);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: method,
          url: url,
          headers: {
            authorization: `Bearer ${auth}`,
          },
          data: {
            ...postData,
          },
        });

        setData(response.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    })();
  }, [auth, url, method, postData]);

  return [data, loading, error];
};

export default useHttp;
