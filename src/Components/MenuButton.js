import React,{useEffect} from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native'

const MenuButton = ({isOpen,onPressButton}) => {

    useEffect(() => {
        // alert(isOpen);
      }, [isOpen]); // Only re-run the effect if count changes
   
    if(isOpen){
        return (
            <TouchableOpacity onPress={onPressButton} style={{ width: 74, height: 74, borderRadius: 37, backgroundColor: '#5aa74a', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20, left: 20 }}>
                <Image
                    source={require('../Assets/menu.png')}
                    style={{ width: 32, height: 24 }}
                />
                <Text style={{ color: '#fff', marginTop: 2 }}>Menu</Text>
            </TouchableOpacity>
        )
    }else{
        return(
            <TouchableOpacity onPress={onPressButton} style={{ width: 74, height: 74, borderRadius: 37, backgroundColor: '#5aa74a', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20, left: 20 }}>
            <Text style={{fontSize:35,color:'#fff'}}>X</Text>
            <Text style={{ color: '#fff', marginTop: -8 }}>Menu</Text>
        </TouchableOpacity>
        )
    }
}

export default MenuButton;