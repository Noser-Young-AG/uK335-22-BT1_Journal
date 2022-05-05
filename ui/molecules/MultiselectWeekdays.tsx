import React from 'react'
import { View, StyleSheet } from 'react-native';
import MultiselectElement from '../atoms/MultiselectElement';

type MultiselectProps = {
    elements: string[]
  };

export default function MultiselectWeekdays(props: MultiselectProps) {
  return (
      <View style={styles.container}>
      {props.elements.map(x => <MultiselectElement text={x}></MultiselectElement>)}
      </View>
  )

  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: '3%',
      marginTop: '20%'
    },
  });
