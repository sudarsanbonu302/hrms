import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LeaveListScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
    
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" style={{ marginTop: 35 }} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Leave List</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.card}>
        
        <View style={styles.rowBetween}>
          <Text style={styles.boldText}>
            Appl. No. : <Text style={styles.normalText}>12/1254/456</Text>
          </Text>
          <Text style={styles.boldText}>
            Leave Type : <Text style={styles.normalText}>PL</Text>
          </Text>
        </View>

       
        <View style={styles.appliedOnWrapper}>
          <Text style={styles.appliedOnText}>Applied On : 01/06/2025</Text>
        </View>

       
       <View style={styles.dateRangeRow}>
      <View style={styles.dateBox}>
        <Text style={styles.dateText}>04/06/2025, 1st Half</Text>
      </View>
      <Ionicons name="arrow-forward" size={16} color="#000" style={{ marginHorizontal: 5 }} />
      <View style={styles.dateBox}>
        <Text style={styles.dateText}>06/06/2025, 2nd Half</Text>
      </View>
      <View style={styles.equalBox}>
        <Text style={styles.equalText}>3.0</Text>
      </View>
    </View>
    
        <View style={styles.divider} />

        <View style={styles.rowBetween}>
          <Text style={styles.statusText}>
            Status : <Text style={{ fontWeight: 'bold' }}>APPLIED</Text>
          </Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
            <Ionicons name="pencil" size={14} color="#000" style={{ marginLeft: 4 }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeaveListScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f5fb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    borderBottomColor: '#dee2e6',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginTop: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    margin: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
  },
  normalText: {
    fontWeight: '400',
    color: '#000',
  },
  appliedOnWrapper: {
    backgroundColor: '#D9D9D9',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginVertical: 10,
  },
  appliedOnText: {
    fontSize: 13,
    color: '#000',
  },
  dateRangeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateBox: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 4,
    paddingVertical: 5,
    borderRadius: 20,
    fontSize: 13,
    color: '#000',
  },
  equalBox: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  equalText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#000',
  },
  editButton: {
    backgroundColor: '#FFB800',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  editButtonText: {
    fontWeight: '600',
    color: '#000',
    fontSize: 14,
  },
dateText: {
  fontSize: 13,
  color: '#000',
},





});
