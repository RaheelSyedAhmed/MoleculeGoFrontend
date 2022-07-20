import React, {useState} from 'react';

function useLocation(){
    const [region, setRegion] = useState(
        {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }
    );

    return {region, setRegion};
}

export default useLocation;