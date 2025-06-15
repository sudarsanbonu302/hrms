import React, { useState } from 'react';
import {
  View, StyleSheet, ScrollView, Text, TextInput,
  TouchableOpacity, SafeAreaView, Platform
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { pickerStyles} from "../(Hrpage)/pickerStyles";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from '@react-navigation/drawer';
import * as DocumentPicker from 'expo-document-picker';
const LeaveFormScreen = () => {
  const [leaveType, setLeaveType] = useState('');
  const [fromSpan, setFromSpan] = useState('1st half');
  const [toSpan, setToSpan] = useState('2nd half');
  const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = React.useState<Date | null>(null);
const [showFromDatePicker, setShowFromDatePicker] = React.useState(false);

const [toDate, setToDate] = React.useState<Date | null>(null);
const [showToDatePicker, setShowToDatePicker] = React.useState(false);

const [fileName, setFileName] = React.useState<string | null>(null);

const navigation = useNavigation<DrawerNavigationProp<any>>();
function formatDate(date: Date | null) {
  if (!date) return "-Select-";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
const handlePickDocument = async () => {
  const result = await DocumentPicker.getDocumentAsync({
    type: ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'],
    copyToCacheDirectory: true,
    multiple: false,
  });
 
};

  return (
    <SafeAreaView style={styles.safeArea}>
      
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30}  color="#000000" style={{ marginTop: 35 }}/>
        </TouchableOpacity>
          <Text style={styles.headerTitle}>Leave</Text>
          <View style={{ width: 24 }} />
        </View>

      <ScrollView style={styles.container}         
     contentContainerStyle={{  paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.formBox}>
          <View style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Leave Application Form</Text>
          </View>

          <Text style={styles.infoText}>Application No. <Text style={styles.boldText}>12/5545/245 (New)</Text></Text>
          <Text style={styles.infoText}>Total Calculated Leave : <Text style={styles.boldText}>0</Text></Text>

          <Text style={styles.label}>Leave Type & Code :</Text>
          <RNPickerSelect
            placeholder={{ label: '-Select-', value: '' }}
            onValueChange={value => setLeaveType(value)}
            items={[
              { label: 'Casual Leave (CL)', value: 'CL' },
              { label: 'Priviledge Leave (PL)', value: 'PL' },
                 { label: 'Leave Without Pay (LWP)', value: 'LWP' }
            ]}
            style={pickerStyles}
            value={leaveType}
            useNativeAndroidPickerStyle={false}
            Icon={() => <Ionicons name="chevron-down" size={20} color="gray" />}
          />

          <Text style={styles.label}>From Date & Span :</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.dateInput} onPress={() => setShowFromDatePicker(true)}>
              <Text>{formatDate(fromDate)}</Text>
            </TouchableOpacity>
            {showFromDatePicker && (
              <DateTimePicker
                value={fromDate || new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(_, date) => {
                  setShowFromDatePicker(false);
                  if (date) setFromDate(date);
                }}
              />
            )}
            <View style={styles.halfPicker}>
              <RNPickerSelect
                onValueChange={value => setFromSpan(value)}
                items={[
                  { label: '1st half', value: '1st half' },
                  { label: '2nd half', value: '2nd half' },
                  { label: 'Full day', value: 'full' },
                ]}
            
                value={fromSpan}
                useNativeAndroidPickerStyle={false}
                Icon={() => <Ionicons name="chevron-down" size={20} color="gray" />}
              />
            </View>
          </View>

          <Text style={styles.label}>Till Date & Span :</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.dateInput} onPress={() => setShowToDatePicker(true)}>
              <Text>{formatDate(toDate)}</Text>
            </TouchableOpacity>
            {showToDatePicker && (
              <DateTimePicker
                value={toDate || new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(_, date) => {
                  setShowToDatePicker(false);
                  if (date) setToDate(date);
                }}
              />
            )}
            <View style={styles.halfPicker}>
              <RNPickerSelect
                onValueChange={value => setToSpan(value)}
                items={[
                  { label: '1st half', value: '1st half' },
                  { label: '2nd half', value: '2nd half' },
                  { label: 'Full day', value: 'full' },
                ]}
               
                value={toSpan}
                useNativeAndroidPickerStyle={false}
                Icon={() => <Ionicons name="chevron-down" size={20} color="gray" />}
              />
            </View>
          </View>

          <Text style={styles.label}>Leave Reason :</Text>
          <TextInput
            placeholder="Type reason....."
            value={reason}
            onChangeText={setReason}
            style={styles.textArea}
            multiline
          />

        <Text style={styles.label}>
          Upload Document : <Text style={styles.noteText}>(.jpg/.jpeg/.png/.pdf, Max 2mb)</Text>
        </Text>

        <View style={styles.uploadBox}>
          <TouchableOpacity style={styles.uploadButton} onPress={handlePickDocument}>
            <Text style={styles.uploadButtonText}>Choose file</Text>
          </TouchableOpacity>
         <Text style={styles.noFileText}>{fileName ? fileName : "No file chosen"}</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.exitBtn}>
            <Text style={styles.btnText}>Exit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.withdrawBtn}>
            <Text style={styles.btnText}>Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.saveBtn}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaveFormScreen;
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f2f5fb' },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
      padding:14,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    color:'#000000',
    marginTop:30,
  },
  container: {
    flex: 1,
  },
  formBox: {
    backgroundColor: '#FFFFFF',
    margin: 14,
    padding: 16,
    borderRadius: 16,
    elevation: 4,
    
  },
  headerButton: {
    backgroundColor: '#209CD1',
    paddingVertical: 10,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 10,
  },
  headerButtonText: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 15,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 2,
  },
  boldText: {
    fontWeight: 400,
  },
  label: {
    marginTop: 14,
    marginBottom: 4,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
 dateInput: {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 10,
  flex: 1,
  borderRadius: 5,
  backgroundColor: '#fff', 
},
halfPicker: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  backgroundColor: '#fff',
  paddingHorizontal: 5,
},
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    minHeight: 60,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  noteText: {
    fontSize: 12,
    color: 'gray',
  },
  uploadRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 8,
  marginBottom: 14,
},

chooseFileBtn: {
  backgroundColor: '#e0e0e0',
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderRadius: 4,
},

chooseFileText: {
  color: '#000',
  fontSize: 14,
},

noFileText: {
  color: 'gray',
  fontSize: 14,
  marginLeft: 10,
},

 
  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 24,
},

exitBtn: {
  flex: 1,
  backgroundColor: '#F9A825',
  paddingVertical: 12,
  borderRadius: 10,
  alignItems: 'center',
  marginRight: 8,
},

withdrawBtn: {
  flex: 1,
  backgroundColor: '#F8BBD0',
  paddingVertical: 12,
  borderRadius: 10,
  alignItems: 'center',
  marginHorizontal: 8,
},

saveBtn: {
  flex: 1,
  backgroundColor: '#4CAF50',
  paddingVertical: 12,
  borderRadius: 10,
  alignItems: 'center',
  marginLeft: 8,
},
btnText: {
  color: '#fff',
  fontWeight: 'bold',
},
uploadContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  backgroundColor: '#f9f9f9',
  marginTop: 6,
  marginBottom: 16,
},
uploadBox: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 6,
  backgroundColor: '#fff',
  paddingVertical: 10,
  paddingHorizontal: 12,
  marginTop: 8,
},

uploadButton: {
  backgroundColor: '#D9D9D9',
  paddingVertical: 8,
  paddingHorizontal: 16,
  borderRadius: 4,
},

uploadButtonText: {
  fontSize: 14,
  color: '#000',
},
});