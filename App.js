/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 1, backgroundColor: '#CCCCCC', flexDirection: 'row', }} >
            <View style={{ flex: 0.5, backgroundColor: '#46B1FA', height: hp('8%'), justifyContent: 'center', marginRight: 5, marginLeft: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Home</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#3E62D0', flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Start Date: 2020/10/02</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: '#3E62D0', flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ color: 'white', textAlign: 'left' }}>Start Date: 2020/10/02</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }} >
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 1 }}>
                {/* Box Menu */}

                <View style={{ flex: 1, flexDirection: 'row', }}>
                  <View style={{ flex: 1, }}>
                    <View style={styles.buttom}>
                      <Text style={styles.buttomText}>Rice Dishes</Text>
                    </View>
                  </View>

                  <View style={{ flex: 1, }}>
                    <View style={styles.buttom}>
                      <Text style={styles.buttomText}>Thai Food</Text>
                    </View>
                  </View>

                  <View style={{ flex: 1 }}>
                    <View style={styles.buttom}>
                      <Text style={styles.buttomText}>Chinese Food</Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttom}>
                      <Text style={styles.buttomText}>Japanese Food</Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttom}>
                      <Text style={styles.buttomText}>Italain Food</Text>
                    </View>
                  </View>
                </View>

                {/* Ens Box Menu */}
              </View>
              <View style={{ flex: 1 }}>
                {/* Box Select Menu */}

                <View style={{ flex: 1, flexDirection: 'row', }}>
                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}>ข้าวคลุกกระปิ</Text>
                    </View>
                  </View>

                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}>ต้มยำกุ้ง</Text>
                    </View>
                  </View>

                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}> </Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}> </Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}> </Text>
                    </View>
                  </View>
                </View>

                {/* Ens Select Menu */}
              </View>
              <View style={{ flex: 1 }}>
                {/* Box Select Menu */}

                <View style={{ flex: 1, flexDirection: 'row', }}>
                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}></Text>
                    </View>
                  </View>

                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}></Text>
                    </View>
                  </View>

                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}> </Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}> </Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}> </Text>
                    </View>
                  </View>
                </View>

                {/* Ens Select Menu */}
              </View>
              <View style={{ flex: 1 }}>
                {/* Box Select Menu */}

                <View style={{ flex: 1, flexDirection: 'row', }}>
                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}></Text>
                    </View>
                  </View>

                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}></Text>
                    </View>
                  </View>

                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}> </Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}> </Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomSelect}>
                      <Text style={styles.buttomTextSelect}> </Text>
                    </View>
                  </View>
                </View>

                {/* Ens Select Menu */}
              </View>
              <View style={{ flex: 1 }}>
                {/* Box Select Menu */}

                <View style={{ flex: 1, flexDirection: 'row', }}>
                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomsize}>
                      <Text style={styles.buttomTextSize}>Small</Text>
                    </View>
                  </View>

                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomsize}>
                      <Text style={styles.buttomTextSize}>Medium</Text>
                    </View>
                  </View>

                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomsize}>
                      <Text style={styles.buttomTextSize}>Large</Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomsize}>
                      <Text style={styles.buttomTextSize}></Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomsize}>
                      <Text style={styles.buttomTextSize}></Text>
                    </View>
                  </View>
                </View>

                {/* Ens Select Menu */}
              </View>
              <View style={{ flex: 1 }}>
                {/* Box Select Menu */}

                <View style={{ flex: 1, flexDirection: 'row', }}>
                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomCustom}>
                      <Text style={styles.buttomTextCustom}>Not Sweet</Text>
                    </View>
                  </View>

                  <View style={{ flex: 1, }}>
                    <View style={styles.buttomCustom}>
                      <Text style={styles.buttomTextCustom}>Less Sweet</Text>
                    </View>
                  </View>

                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomCustom}>
                      <Text style={styles.buttomTextCustom}>Normal Sweet</Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomCustom}>
                      <Text style={styles.buttomTextCustom}>Cold</Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <View style={styles.buttomCustom}>
                      <Text style={styles.buttomTextCustom}>Hot</Text>
                    </View>
                  </View>
                </View>

                {/* Ens Select Menu */}
              </View>

            </ScrollView>


            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 4, flexDirection: 'column', marginLeft: 5, marginTop: 10 }}>
                  <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white' }}>
                    <Text>Box Right</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <View style={{ flex: 1, }}>
                        <View style={styles.sectionItemt}>
                          <Text style={styles.sectionItemtText}>Item Void</Text>
                        </View>
                        <View style={styles.sectionItemtGreen}>
                          <Text style={styles.sectionItemtText}>Higlight All</Text>
                        </View>
                        <View style={styles.sectionItemtGreen}>
                          <Text style={styles.sectionItemtText}>Suspend</Text>
                        </View>
                        <View style={styles.sectionItemtGreen}>
                          <Text style={styles.sectionItemtText}>Recall</Text>
                        </View>
                        <View style={styles.sectionItemtGreen}>
                          <Text style={styles.sectionItemtText}>Change Price</Text>
                        </View>
                        <View style={styles.sectionItemt}>
                          <Text style={styles.sectionItemtText}>Change Qty.</Text>
                        </View>
                      </View>
                      <View style={{ flex: 3, }}>
                         
                          <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 5 }}>
                              <Text>Sub Total :</Text>
                              <Text>Discount :</Text>
                              <Text>Service :</Text>
                              <Text style={{ color: 'red' }}>Total :</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                              <Text>0.00</Text>
                              <Text>0.00</Text>
                              <Text style={{ color: 'red' }}>37.80</Text>
                            </View>
                          </View>

                          <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                              <View style={{ flex: 3, flexDirection: 'column', marginLeft: 5 }}>
                                <View>
                                  <TextInput style={{ height: 40, borderColor: 'white', backgroundColor: 'white', borderWidth: 1, borderRadius: 20, flex: 1 }} /></View>
                              </View>
                              
                              <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5 }}>
                                <View style={{ height: 40, borderColor: '#DF9729', backgroundColor: '#DF9729', borderWidth: 1, borderRadius: 20, flex: 1, justifyContent: 'center' }}>
                                  <Text style={{ color: 'white', alignItems: 'center', textAlign: 'center' }}>X</Text>
                                </View>

                              </View>
                            </View>
                          </View>
                          <View style={{ flex: 6, flexDirection: 'column' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                              <View style={{flex:4,flexDirection:'column'}}>
                             
                              <View style={{ flex: 1, flexDirection: 'row', margin:4}}>
                                      <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{flex:1,flexDirection:'row',backgroundColor: '#766B69',marginLeft:5, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                          <Text style={styles.numberText}>1</Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',backgroundColor: '#766B69', marginLeft:5,justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                        <Text style={styles.numberText}>2</Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',backgroundColor: '#766B69', marginLeft:5, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                        <Text style={styles.numberText}>3</Text>
                                        </View>
                                      </View>  
                                      
                              </View>

                              <View style={{ flex: 1, flexDirection: 'row', margin:4}}>
                                      <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{flex:1,flexDirection:'row',backgroundColor: '#766B69',marginLeft:5, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                        <Text style={styles.numberText}>4</Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',backgroundColor: '#766B69', marginLeft:5,justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                        <Text style={styles.numberText}>5</Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',backgroundColor: '#766B69', marginLeft:5, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                        <Text style={styles.numberText}>6</Text>
                                        </View>
                                      </View>  
                                      
                              </View>
                              <View style={{ flex: 1, flexDirection: 'row', margin:4}}>
                                      <View style={{flex:1,flexDirection:'row'}}>
                                        <View style={{flex:1,flexDirection:'row',backgroundColor: '#766B69',marginLeft:5, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                        <Text style={styles.numberText}>7</Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',backgroundColor: '#766B69', marginLeft:5,justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                        <Text style={styles.numberText}>8</Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row',backgroundColor: '#766B69', marginLeft:5, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                        <Text style={styles.numberText}>9</Text>
                                        </View>
                                      </View>  
                                      
                              </View>
                              
                              </View> 

                              <View style={{ flex: 1, flexDirection: 'row', marginLeft: 5 }}>
                                <View style={{flex:1,flexDirection:'column'}}>
                                <View style={{flex:1,flexDirection:'row',backgroundColor: '#42AA93', margin:2, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                  <Text style={styles.numberText}>1</Text>
                                  </View>
                                  <View style={{flex:1,flexDirection:'row',backgroundColor: '#0BD1BD', margin:2, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                  <Text style={styles.numberText}>1</Text>
                                  </View>
                                  <View style={{flex:1,flexDirection:'row',backgroundColor: '#0BD1BD', margin:2, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}>
                                  <Text style={styles.numberText}>1</Text>
                                  </View>
                                 
                                </View>

                               

                            </View>
                            
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#CCCCCC', margin: 5 }}>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 0.7, marginTop: 5, flexDirection: 'row', backgroundColor: '#DF9729', borderRadius: 5, justifyContent: 'center', alignItems: 'center', }}>
                      <Text style={styles.sectionContainerBoxText}>Manager</Text>
                    </View>
                    <View style={styles.sectionContainerBox}>
                      <Text style={{ color: '#623B02', textAlign: 'center', alignItems: 'center' }}>30</Text>
                    </View>
                    <View style={styles.sectionContainerBox}>
                      <Text style={{ color: '#623B02', textAlign: 'center', alignItems: 'center' }}>40</Text>
                    </View>
                    <View style={styles.sectionContainerBox}>
                      <Text style={{ color: '#623B02', textAlign: 'center', alignItems: 'center' }}>50</Text>
                    </View>
                    <View style={styles.sectionContainerBox}>
                      <Text style={{ color: '#623B02', textAlign: 'center', alignItems: 'center' }}>60</Text>
                    </View>
                    <View style={styles.sectionContainerBox}>
                      <Text style={{ color: '#623B02', textAlign: 'center', alignItems: 'center' }}>70</Text>
                    </View>
                    <View style={styles.sectionContainerBox}>
                      <Text style={{ color: '#623B02', textAlign: 'center', alignItems: 'center' }}>90</Text>
                    </View>
                    <View style={styles.sectionContainerBoxPink}>
                      <Text style={styles.contentWhite}>DISCOUNT</Text>
                    </View>
                    <View style={styles.sectionContainerBoxRed}>
                      <Text style={styles.contentWhite}>CARD PAYMENT</Text>
                    </View>
                    <View style={styles.sectionContainerBoxPink}>
                      <Text style={styles.contentWhite}>EXACT</Text>
                    </View>
                    <View style={styles.sectionContainerBoxRed}>
                      <Text style={styles.contentWhite}>Box</Text>
                    </View>
                  </View>

                </View>

              </View>

            </View>

          </View>

        </View>
      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#CCCCCC',

  },
  numberText:{
    color:'white',fontSize:30
  },
  sectionItemt: {
    flex: 1, flexDirection: 'row', backgroundColor: '#42AA93', marginTop: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5
  },
  sectionItemtGreen: {
    flex: 1, flexDirection: 'row', backgroundColor: '#0BD1BD', marginTop: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5
  },
  sectionItemtText: {
    color: 'white', textAlign: 'center', alignItems: 'center'
  },

  sectionContainerBox: {
    flex: 1, flexDirection: 'row', backgroundColor: '#F9D976', marginTop: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5
  },
  sectionContainerBoxPink: {
    flex: 1, flexDirection: 'row', backgroundColor: '#F67975', marginTop: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5
  },
  sectionContainerBoxRed: {

    flex: 1, flexDirection: 'row', backgroundColor: '#C34744', marginTop: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5

  },
  sectionContainerBoxText: {
    color: 'white', textAlign: 'center', alignItems: 'center'
  },
  contentWhite: {
    color: 'white'
  },
  buttom: {
    height: hp('15%'),
    marginLeft: 5,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#49E1F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#49E1F8',
    justifyContent: 'center'

  },
  buttomText: {
    color: '#3E62D0',
    textAlign: 'center',
    alignItems: 'center'

  },
  buttomSelect: {
    height: hp('15%'),
    marginLeft: 5,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center'

  },
  buttomTextSelect: {
    color: 'black',
    textAlign: 'center',
    alignItems: 'center'

  },
  buttomsize: {
    height: hp('15%'),
    marginLeft: 5,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 90,
    backgroundColor: '#48B0F7',
    borderWidth: 1,
    borderColor: '#48B0F7',
    justifyContent: 'center'

  },
  buttomTextSize: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center'

  },

  buttomCustom: {
    height: hp('10%'),
    marginLeft: 5,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#3E62D0',
    borderWidth: 1,
    borderColor: '#3E62D0',
    justifyContent: 'center'

  },
  buttomTextCustom: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center'

  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
