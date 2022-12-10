import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Images from './common/images';
import List from './helper/script.json';
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View style={styles.navContainer}>
          <View>
            <Image source={Images.menu} style={{width: 25, height: 25}} />
          </View>
          <View>
            <Image source={Images.logo} style={{width: 60, height: 30}} />
          </View>
          <View>
            <Image source={Images.bell} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View style={[styles.rowBetween, {paddingHorizontal: 50}]}>
          <TouchableHighlight style={styles.buttonUpcoming}>
            <Text style={[styles.buttonViewTop, {color: '#fff'}]}>
              Upcoming
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonPast}>
            <Text style={[styles.buttonViewTop, {color: '#000'}]}>Past</Text>
          </TouchableHighlight>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingHorizontal: 8, marginBottom: 70}}>
          {List.list.map((val, index) => (
            <View style={styles.cardTop}>
              <View style={styles.rowBetween}>
                <View
                  style={{
                    borderWidth: 1,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 30,
                    height: 80,
                    width: 100,
                  }}>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: 'bold',
                      color: '#2764b3',
                      textAlign: 'center',
                    }}>
                    {val.date}
                  </Text>
                  <Text style={{textAlign: 'center'}}>{val.month}</Text>
                </View>
                <View style={{width: '45%', marginRight: 20}}>
                  <Image
                    style={styles.imgView}
                    source={{
                      uri: `${val.img}`,
                    }}
                  />
                </View>
              </View>
              <View style={{paddingHorizontal: 15, marginTop: 14}}>
                <View>
                  <Text style={{fontSize: 16, color: '#000'}}>{val.des}</Text>
                  <View style={styles.rowBetween}>
                    <Text>{val.company}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={Images.bell}
                        style={{
                          width: 15,
                          height: 15,
                          alignSelf: 'center',
                        }}
                      />
                      <Text>{val.time} hrs</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rowBetween}>
                  <TouchableHighlight style={styles.buttonContiner}>
                    <Text style={styles.buttonView}>Register Now</Text>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.buttonContiner}>
                    <Text style={styles.buttonView}>Details</Text>
                  </TouchableHighlight>
                </View>
                <View
                  style={{
                    marginTop: 14,
                  }}>
                  <TouchableHighlight style={styles.inviteButton}>
                    <Text style={styles.inviteText}>Invite</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View
          style={[
            styles.rowBetween,
            {
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: '#fff',
              paddingVertical: 10,
              paddingHorizontal: 15,
            },
          ]}>
          <TouchableHighlight>
            <Image source={Images.home} style={{width: 25, height: 25}} />
          </TouchableHighlight>
          <TouchableHighlight>
            <Image source={Images.chat} style={{width: 25, height: 25}} />
          </TouchableHighlight>
          <TouchableHighlight>
            <Image source={Images.webinar} style={{width: 30, height: 30}} />
          </TouchableHighlight>
          <TouchableHighlight>
            <Image source={Images.user} style={{width: 25, height: 25}} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  cardTop: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 20,
    marginVertical: 10,
  },
  buttonContiner: {
    backgroundColor: '#2764b3',
    width: '45%',
    borderRadius: 7,
  },
  buttonUpcoming: {
    backgroundColor: '#050c4a',
    width: '45%',
    borderRadius: 7,
  },
  buttonPast: {
    borderColor: '#2764b3',
    borderWidth: 1,
    width: '45%',
    borderRadius: 7,
  },
  buttonView: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  buttonViewTop: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  inviteButton: {
    borderColor: '#2764b3',
    borderWidth: 1,
    borderRadius: 7,
  },
  inviteText: {
    color: '#2764b3',
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  imgView: {
    width: '100%',
    height: 100,
  },
});
