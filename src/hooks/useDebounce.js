import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [bounce, setbounce] = useState(value);

    useEffect(() => {
        const handleDelay = setTimeout(() => setbounce(value), delay);
        return () => clearTimeout(handleDelay);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return bounce;
}

export default useDebounce;
