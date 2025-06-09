import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const aashdithlogo = require("../assets/images/logo.png")
const { height, width} =Dimensions.get("window")
export default function Index() {
    const route=useRouter();
  const redirect_to_employeelogin=()=>{
    route.push("/(employee)/employeelogin");
  }
 useEffect(()=>{
      const redirectbtn = setTimeout(redirect_to_employeelogin,1000)
      return ()=> clearTimeout(redirectbtn)
  },[route])
  return <SafeAreaView style={{backgroundColor:"#000080",width:width,height:height,justifyContent:"flex-start",alignItems:"center",paddingTop:verticalScale(200),paddingHorizontal:moderateScale(15)}}>
         <Image source={aashdithlogo}/>
         <Text style={{fontSize:moderateScale(32),fontWeight:"bold",marginTop:verticalScale(15),color:"#FAC11A"}}>AASHDIT</Text>
         <Text style={{fontSize:moderateScale(21),fontWeight:"bold",color:"#ffffff"}}>HR Management Application</Text>
      </SafeAreaView>
}

