import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const BasePage = () => {
  return (
    <SafeAreaView style={{flex:1,justifyContent:"flex-start",alignItems:"flex-start",backgroundColor:"#E2EAF1",paddingHorizontal:7,paddingTop:50}}>
        <View style={{width:"100%",height:150,borderRadius:10,backgroundColor:"#22A1D6",padding:10,justifyContent:"flex-start",alignItems:"center"}}>
           <View style={{width:"97%",height:70,backgroundColor:"#2797C5",borderRadius:5,flexDirection:"row"}}>
             <View style={{flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}}>
                <Text style={{color:"white"}}>Vender:</Text>
                <Text style={{color:"white"}}>Order Date:</Text>
             </View>
             <TouchableOpacity>
                <Text>Order List</Text>
             </TouchableOpacity>
           </View>
        </View>
    </SafeAreaView>
  )
}

export default BasePage