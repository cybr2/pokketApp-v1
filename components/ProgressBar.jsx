import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { progressStore } from '../stores/store';
import { useProgressBar } from '../hooks/hooks';
import { INTERVAL_TIME, PROGRESS_PER_SEC } from '@env';

const ProgressBar = () => {
    const { progress } = progressStore();

    const progressIncrement = parseFloat(PROGRESS_PER_SEC);
    const intervalTime = parseInt(INTERVAL_TIME);
    useProgressBar(progressIncrement,intervalTime);

    return (
        <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
                <View style={{ ...styles.progress, width: `${progress * 100}%` }} />
            </View>
            <Text style={styles.progressText}>{Math.floor(progress * 100)}%</Text>
        </View>
    )
}

export default ProgressBar

const styles = StyleSheet.create({
    progressBarContainer:{
        width: '100%',
        alignItems: 'center',
    },
    progressBar: {
        width: '80%',
        height: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: '#F03E3E',
    },
    progressText: {
        marginTop: 10,
        fontSize: 18,
        color: '#2f80ed',
    },
})