import React from 'react'
import { View, StyleSheet } from 'react-native';
import MultiselectElement from '../atoms/MultiselectElement';
import { Title } from 'react-native-paper'

type MultiselectProps = {
    elements: string[],
    title?: string
  };

export default function MultiselectWeekdays(props: MultiselectProps) {
  return (
      <View style={styles.container}>
          <Title style={styles.title}>{props.title}</Title>
      {props.elements.map(x => <MultiselectElement text={x}></MultiselectElement>)}
      </View>
  )

  
}

const styles = StyleSheet.create({
    title: {
        margin: '2%',
        width: '100%'
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: '3%',
      marginTop: '20%'
    },
  });
