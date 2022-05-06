import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function TitleElement(props: {name: string}) {
  return (
    <View style={styles.container}>
    <Text style= {styles.text}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    text: {
        fontWeight: "bold", 
        fontSize: 24
    }
  });