import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });

const Map = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
            >
            </MapView>
        </View>
    )
}

export default Map