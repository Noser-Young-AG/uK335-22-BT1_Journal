import React from 'react'
import { Button } from 'react-native-paper';

export default function ButtonElement(props: {name: string, color: string}) {
const nullableIcon = () => null;

  return (
    <Button 
    icon= {nullableIcon} 
    mode="contained" 
    onPress={() => console.log('Pressed')}
    color= {props.color}
    >
    {props.name}
    </Button>
  );
}
