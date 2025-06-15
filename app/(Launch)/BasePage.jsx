import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const lunchdata = {
  lunchItems: [
    {
      id: 1,
      name: "Chicken Biriyani",
      price: 130,
      image: require("../../assets/images/biryani.png"),
    },
    {
      id: 2,
      name: "Chicken Muglai + Roti",
      price: 130,
       image: require("../../assets/images/biryani.png"),
    },
    {
      id: 3,
      name: "Chicken Biriyani",
      price: 130,
       image: require("../../assets/images/biryani.png"),
    },
    {
      id: 4,
      name: "Chicken Biriyani",
      price: 130,
      image: require("../../assets/images/biryani.png"),
    },
    {
      id: 5,
      name: "Chicken Biriyani",
      price: 130,
      image: require("../../assets/images/biryani.png"),
    },
    {
      id: 6,
      name: "Chicken Biriyani",
      price: 130,
      image: require("../../assets/images/biryani.png"),
    },
    {
      id: 7,
      name: "Chicken Biriyani",
      price: 130,
      image: require("../../assets/images/biryani.png"),
    },
    {
      id: 9,
      name: "Chicken Biriyani",
      price: 130,
      image: require("../../assets/images/biryani.png"),
    },
  ],
};

export default function BasePage() {
  const [lunchItems, setLunchItems] = useState([]);

  useEffect(() => {
    setLunchItems(lunchdata.lunchItems);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
     <Image source={item.image} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.price}>Rs. {item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderText}>ORDER</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
    {/* Combined Header and Note Section */}
<View style={styles.combinedBox}>
  <View style={styles.headerRow}>
    <View>
      <Text style={styles.vendorText}>Vender : Jnana Ranjan Behura</Text>
      <Text style={styles.dateText}>Order Date : 11/06/2025</Text>
    </View>
    <TouchableOpacity style={styles.orderListBtn}>
      <Text style={styles.orderListText}>Order List</Text>
    </TouchableOpacity>
  </View>
  <Text style={styles.noteText}>
    #Note : You can't order lunch after 11:45 AM.{"\n"}
    For more details contact to HR
  </Text>
</View>


      {/* Veg / Non-Veg Indicator */}
      <View style={styles.indicatorRow}>
        <View style={styles.indicatorItem}>
          <Text style={styles.itemname}>Veg</Text>
          <View style={[styles.colorBox, { borderColor: "  green" }]} />
          
        </View>
        <View style={styles.indicatorItem}>
          <Text style={styles.itemname}>Non-Veg</Text>
          <View style={[styles.colorBox, { borderColor: "red" }]} />
          
        </View>
      </View>

      {/* Lunch Items */}
      <FlatList
        data={lunchItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2EAF1",
  },
  combinedBox: {
    backgroundColor: "#22A1D6",
    marginTop: 63,
    marginHorizontal: 14,
    padding: 10,
    borderRadius: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2797C5",
    borderRadius: 10,
    padding: 8,
    marginBottom: 14,
  },
  vendorText: {
    fontWeight: "500",
    color: "#FFFFFF",
    fontSize: 15,
  },
  dateText: {
    fontSize: 15,
    color: "#FFFFFF",
    marginTop: 4,
  },
  orderListBtn: {
    backgroundColor: "#FAAC1A",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },
  orderListText: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 14,
  },
  noteText: {
    color: "#FFFFFF",
    fontSize: 13,
    lineHeight: 20,
    paddingHorizontal: 5,
  },
  indicatorRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingTop: 6,
    gap: 12,
    marginVertical:14,
    marginRight:10,
  },
  indicatorItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  itemname: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "400",
  },
  colorBox: {
    width: 16,
    height: 16,
    borderWidth: 2,
   
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 80,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 14,
  },
  card: {
    width: "48%",
    
    borderRadius: 12,
    padding: 10,
  
   
  },
  foodImage: {
    width: "100%",
    height: 110,
    borderRadius: 10,
    resizeMode: "cover",
  },
  foodName: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 15,
    color: "#000",
  },
  price: {
    fontSize: 13,
    marginVertical: 4,
    color: "#000",
  },
  orderButton: {
    backgroundColor: "#FAAC1A",
    paddingVertical: 6,
    borderRadius: 16,
    marginTop: 6,
    alignItems: "center",
  },
  orderText: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 13,
  },
});

