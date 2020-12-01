import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";


const Map = () => {
    return (
        <View>
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
            >
            </MapView>
        </View>
    )
}

export default Map