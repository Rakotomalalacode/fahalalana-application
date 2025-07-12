import NetInfo from '@react-native-community/netinfo'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NetworkBanner = () => {
    const [isConnected, setIsConnected] = useState(true)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state?.isConnected ?? true)
        })

        return () => unsubscribe()
    }, [])

    if (!isConnected) {
        return (
            <View style={styles.banner}>
                <Text style={styles.text}>Pas de connexion Internet</Text>
            </View>
        )
    }

    return null
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#FE4B4B',
        padding: 10,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default NetworkBanner
