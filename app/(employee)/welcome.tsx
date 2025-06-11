import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
const profile = require("../../assets/images/profile.png");
const Welcome = () => {
  const today = dayjs().format('YYYY-MM-DD');
  const [selectDate, setSelectDate] = useState(today);

  return (
    <SafeAreaView style={styles.safeArea}>

      <LinearGradient
        colors={['#1B95C8', '#0A719C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.profileCard}
      >
        <View style={styles.profileRow}>
          <Image
            source={profile} 
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Dibi Hembram</Text>
            <Text style={styles.profileRole}>Graphic-Cum-UI/UX Designer</Text>
          </View>
          <TouchableOpacity style={styles.bell}>
            <Feather name="bell" size={35} color="#ffffff" />
            <View style={styles.bellDot}>
              <Text style={styles.bellText}>5</Text>
            </View>
          </TouchableOpacity>
        </View>

      <View style={styles.taskRow}>
  
  <LinearGradient
    colors={[ '#F5B77F', '#C951BF', '#7D55CA']}
    start={{x: 1, y: 0}}
    end={{x: 0, y: 1}}
    style={styles.taskCard}
  >
    <Text style={styles.taskNumber}>3</Text>
    <Text style={styles.taskLabel}>Assigned {'\n'}Task</Text>
    
  </LinearGradient>
  <LinearGradient
    colors={['#FF888A', '#F74B70' ,'#FF7994']}
    start={{x: 1, y: 0}}
    end={{x: 0, y: 1}}
    style={styles.taskCard}
  >
    <Text style={styles.taskNumber}>1</Text>
    <Text style={styles.taskLabel}>Ongoing{'\n'}Task</Text>
  
  </LinearGradient>
  <LinearGradient
    colors={['#3BD189','#535CC8', '#2998AC']}
     start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    style={styles.taskCard}
  >
    <Text style={styles.taskNumber}>2</Text>
    <Text style={styles.taskLabel}>Completed {'\n'}Task</Text>
    
  </LinearGradient>
</View>
      </LinearGradient>

      <Calendar
        current={today}
        minDate={today}
        onDayPress={(day) => setSelectDate(day.dateString)}
        markedDates={{
          [selectDate]: {
            selected: true,
            selectedColor: '#3C4CCF',
            textColor: '#fff',
          },
        }}
        theme={{
          backgroundColor: '#fff',
          calendarBackground: '#fff',
          textSectionTitleColor: '#000',
          textDayHeaderFontWeight: 'bold',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textMonthFontWeight: 'bold',
          arrowColor: '#000',
          selectedDayTextColor: '#ffffff',
        }}

      />
    </SafeAreaView>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
   safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profileCard: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal:10,
    marginVertical:20,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 30,
    marginRight: 12,
  },
  profileName: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 500,
  },
  profileRole: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 400,
  },
  bell: {
    marginLeft: 'auto',
    position: 'relative',
    padding: 5,
  },
  bellDot: {
    position: 'absolute',
    top: -4,
    right: -1,
    backgroundColor: '#F7EBEB',
    width: 17,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellText: {
    color: '#EC0505',
    fontSize: 8,
    fontWeight:400,
  },
taskRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 10,
},
taskCard: {
  flex: 1,
  
  marginHorizontal: 4,
  borderRadius: 12,
  paddingVertical: 10,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 3,
  padding:5,
},
taskNumber: {
  color: '#FFFFFF',
 fontFamily: 'Poppins-Medium',
  fontWeight: '500',           
  fontSize: 30,
},
taskLabel: {
  color: '#FFFFFF',
  fontSize: 15,
  textAlign: 'center',
},


});
