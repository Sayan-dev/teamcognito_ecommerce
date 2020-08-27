import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import {darkbg, lightgrey, mediumgrey} from '../../styles/global';
import {Icon} from 'react-native-elements';
import {FlatButton} from '../../shared/button';

export default SingleProductScreen3 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{marginTop: 10, marginBottom: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: darkbg,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}>
                Make Payment
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: darkbg,
                width: '100%',
              }}></View>
            <View style={{position: 'absolute', top: '1%', right: '1%'}}>
              <Icon
                name="close"
                size={40}
                color="grey"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <View style={styles.cardBox}>
              <Text style={styles.boxText}>**** 3241</Text>
              <View style={styles.ImageCC}>
                <Image
                  style={{
                    height: 160,
                    width: 270,
                  }}
                  source={require('../../assets/payment-cc.png')}
                />
              </View>
            </View>
            <Text style={{width: '80%', color: lightgrey}}>
              Enter the CVC number
            </Text>
            <View style={styles.TextInput}>
              <TextInput></TextInput>
              <View style={styles.Image}>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                  }}
                  source={require('../../assets/card.png')}
                />
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity>
                <FlatButton
                  text="Proceed"
                  onPress={() =>
                    this.props.navigation.navigate('SingleProductScreen3')
                  }></FlatButton>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalButtons: {
    width: '90%',
    marginLeft: '3%',
    marginRight: '3%',
  },
  cardBox: {
    borderWidth: 1,
    borderRadius: 10,
    height: '40%',
    width: '70%',
    marginBottom: 10,
    marginTop: 20,
  },
  boxText: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 15,
    left: 25,
    zIndex: 1,
  },
  Image: {
    position: 'absolute',
    right: 10,
    top: 0,
  },
  ImageCC: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: mediumgrey,
    borderRadius: 5,
    height: '0%',
    width: '90%',
    paddingBottom: '12%',
  },
  modalView: {
    margin: 0,
    width: '90%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
