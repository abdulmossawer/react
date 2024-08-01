import { useEffect, useState } from 'react';

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${baseCurrency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[baseCurrency]));
  }, [baseCurrency]);
  return data;
}

export default useCurrencyInfo;
