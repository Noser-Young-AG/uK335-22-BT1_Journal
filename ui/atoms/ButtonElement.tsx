
import { Button } from "react-native-paper";

export default function ButtonElement(props: {
  name: string;
  color: string;
  onPress: () => void;
}) {
  const nullableIcon = () => null;

  return (
      <Button
        icon={nullableIcon}
        mode="contained"
        onPress={() => props.onPress()}
        color={props.color}
        style={{margin: "2%"}}
      >
        {props.name}
      </Button>
  );
}