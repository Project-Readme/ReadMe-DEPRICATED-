import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import ReadContent from './components/readContent';
import TopBar from './components/topBar'

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <ReadContent />
    </View>
  )
}