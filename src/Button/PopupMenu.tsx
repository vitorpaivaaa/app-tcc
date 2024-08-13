import { TouchableOpacity } from 'react-native';
import Icon from "@expo/vector-icons/MaterialIcons";

const PopupMenu = () =>{
  return <>
    <TouchableOpacity>
        <Icon name="menu" size={22} color={"#FFFFFF"}/>
    </TouchableOpacity>
  </>
}