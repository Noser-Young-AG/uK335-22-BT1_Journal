import React from 'react'
import { View, StyleSheet } from 'react-native'
import GroupTitle from '../atoms/GroupTitle'
import MultiselectWeekdays from '../molecules/MultiselectWeekdays'

type MultiselectWeekdaysGroupProps = {
    title: string
    elements: string[]
  };

export default function MultiselectWeekdaysGroup(props: MultiselectWeekdaysGroupProps) {
  return (
      <View style={styles.container}>
         <GroupTitle title={props.title}></GroupTitle>
         <MultiselectWeekdays elements={props.elements}></MultiselectWeekdays>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: '2%',
        marginTop: '15%',
        width: '100%'
    }
  });

