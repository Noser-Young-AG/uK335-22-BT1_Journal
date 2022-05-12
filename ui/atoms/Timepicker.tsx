import RNDateTimePicker from '@react-native-community/datetimepicker'
import React from 'react'
import { View, StyleSheet } from 'react-native'

type timepickerProps = {
  onChange: (event: any, date?: Date) => void
}

export default function Timepicker(props: timepickerProps) {
  return (
    <View>
    <RNDateTimePicker  style={styles.timepicker} mode='time' value={new Date()} onChange={props.onChange}/>
    </View>
  )
}

const styles = StyleSheet.create({
  timepicker: {
      backgroundColor: 'red'
  }
});
