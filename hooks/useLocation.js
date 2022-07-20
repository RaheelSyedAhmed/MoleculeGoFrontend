import React, {useState, useEffect} from 'react';
import * as Location from 'expo-location';

function useLocation(){
    const [region, setRegion] = useState(
        {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }
    );

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            
            setRegion(region => {
                return { ...region, latitude: location.coords.latitude, longitude: location.coords.longitude }
            });
        })();
    }, []);

    
    return {region, setRegion};
}

export default useLocation;