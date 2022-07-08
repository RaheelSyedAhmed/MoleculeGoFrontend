import React, {useState} from 'react';

function useATP(){
    const [ATP, setATP] = useState(100);

    return {ATP, setATP};
}
export default useATP;