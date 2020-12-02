import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from "react-native-maps";

export default class MapAndDir extends React.Component {
    render() {
        return (
            <MapView
                style={{flex: 1}}
            >
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
