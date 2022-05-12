import React from "react";
import { Avatar } from "react-native-paper";

type BellIconProps = {
  size?: number;
  iconColor?: string;
  iconBackgroundColor?: string;
};

function BellIcon({
  size = 40,
  iconColor,
  iconBackgroundColor = "white",
}: BellIconProps) {
  return (
    <Avatar.Icon
      size={size}
      icon="bell"
      color={iconColor}
      style={{ backgroundColor: iconBackgroundColor }}
    />
  );
}

export default BellIcon;
