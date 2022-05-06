import React from 'react'
import { Appbar } from 'react-native-paper'

type NavbarProps = {
    title: string
}

export default function Navbar(props: NavbarProps) {
  return (
    <Appbar.Header>
        <Appbar.Content title={props.title}></Appbar.Content>
    </Appbar.Header>
  )
}
