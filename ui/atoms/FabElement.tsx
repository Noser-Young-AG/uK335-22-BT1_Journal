import React from 'react'
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

export default function FabElement(props: {name: string}) {
  return (
    <FAB
    style={styles.fab}
    small
    icon="plus"
    label={props.name}
    color='#FFFFFF'
    onPress={() => console.log('Pressed')}
  />
  )
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 10,
      bottom: 10,
    },
  })
