/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 375,
            height: 667,
            backgroundColor: '#faf7fa',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              width: 376,
              height: 196,
              backgroundColor: '#ffffff',
              borderTopWidth: 1,
              borderTopStyle: 'solid',
              borderTopColor: '#f5f5f5',
              position: 'relative',
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: -1,
            }}
          >
            <View
              style={{
                width: 297.717,
                height: 22,
                position: 'relative',
                zIndex: 28,
                marginTop: 18.34,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 49.546,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: '12.43%',
                  height: 22,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'SF Pro',
                  fontSize: 17,
                  fontWeight: '590',
                  lineHeight: 22,
                  color: '#000000',
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  textAlign: 'center',
                  zIndex: 24,
                  transform: [{ translateY: -11 }],
                }}
                numberOfLines={1}
              >
                9:41
              </Text>
              <ImageBackground
                style={{
                  width: 27.328,
                  height: '59.09%',
                  position: 'absolute',
                  top: '21.18%',
                  left: '50%',
                  zIndex: 26,
                  transform: [{ translateY: 0 }, { translateX: 121.53 }],
                }}
                source={require('./assets/images/b097adf0-eb61-42d4-b6cf-08b7bb8991b6.png')}
                resizeMode='cover'
              />
              <ImageBackground
                style={{
                  width: 19.2,
                  height: '55.57%',
                  position: 'absolute',
                  top: '23.62%',
                  left: '50%',
                  zIndex: 28,
                  transform: [{ translateY: 0 }, { translateX: 70.53 }],
                }}
                source={require('./assets/images/35f6b065-e7cd-463e-aa13-7ebf2d84cfdf.png')}
                resizeMode='cover'
              />
              <ImageBackground
                style={{
                  width: 17.142,
                  height: '56.04%',
                  position: 'absolute',
                  top: '24.08%',
                  left: '50%',
                  zIndex: 27,
                  transform: [{ translateY: 0 }, { translateX: 97.23 }],
                }}
                source={require('./assets/images/1b7f4417-e1b7-4f81-ab3c-f95e3fd93766.png')}
                resizeMode='cover'
              />
            </View>
            <View
              style={{
                width: 286,
                height: 75,
                position: 'relative',
                zIndex: 29,
                marginTop: 13.66,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 18,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  width: 111,
                  height: 45,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  fontFamily: 'SF Pro',
                  fontSize: 38,
                  fontWeight: '860',
                  lineHeight: 45,
                  color: '#000000',
                  position: 'absolute',
                  top: 0,
                  left: 82,
                  textAlign: 'center',
                  zIndex: 1,
                }}
                numberOfLines={1}
              >
                NAME
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 69,
                  height: 69,
                  gap: 8,
                  alignItems: 'flex-start',
                  flexWrap: 'nowrap',
                  position: 'absolute',
                  top: 6,
                  left: 0,
                  zIndex: 29,
                }}
              >
                <ImageBackground
                  style={{
                    width: 69,
                    height: 69,
                    flexShrink: 0,
                    backgroundColor: 'rgba(180, 219, 255, 0.2)',
                    borderTopLeftRadius: 48,
                    borderTopRightRadius: 48,
                    borderBottomRightRadius: 48,
                    borderBottomLeftRadius: 48,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 30,
                  }}
                  source={require('./assets/images/ddafd214680dadd2835dc69a669d8ce023421b1c.png')}
                  resizeMode='cover'
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 83,
                  height: 21,
                  paddingTop: 2,
                  paddingRight: 9,
                  paddingBottom: 2,
                  paddingLeft: 9,
                  flexDirection: 'row',
                  gap: 4,
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  backgroundColor: '#e7dfe6',
                  borderTopLeftRadius: 6,
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                  borderBottomLeftRadius: 6,
                  position: 'absolute',
                  top: 15,
                  left: 203,
                  zIndex: 6,
                }}
              >
                <Text
                  style={{
                    height: 13,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'SF Pro',
                    fontSize: 11,
                    fontWeight: '590',
                    lineHeight: 13,
                    color: '#918895',
                    letterSpacing: -0.23,
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 7,
                  }}
                  numberOfLines={1}
                >
                  名刺NFT
                </Text>
                <View
                  style={{
                    width: 17,
                    height: 17,
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 8,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 12.75,
                      height: 12.75,
                      position: 'relative',
                      zIndex: 9,
                      marginTop: 2.125,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 2.125,
                    }}
                    source={require('./assets/images/56429211-d1f9-4cbd-ad10-1dfb0da85efa.png')}
                  />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 127,
                  height: 30,
                  gap: 4,
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  position: 'absolute',
                  top: 45,
                  left: 85,
                  zIndex: 2,
                }}
              >
                <Text
                  style={{
                    height: 13,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'SF Pro',
                    fontSize: 13,
                    fontWeight: '590',
                    lineHeight: 13,
                    color: 'rgba(60, 60, 67, 0.6)',
                    letterSpacing: -0.23,
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 3,
                  }}
                  numberOfLines={1}
                >
                  ボードゲームプレイ歴
                </Text>
                <Text
                  style={{
                    height: 13,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'SF Pro',
                    fontSize: 13,
                    fontWeight: '590',
                    lineHeight: 13,
                    color: 'rgba(60, 60, 67, 0.6)',
                    letterSpacing: -0.23,
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 4,
                  }}
                  numberOfLines={1}
                >
                  0年0ヶ月
                </Text>
              </View>
            </View>
            <Text
              style={{
                height: 13,
                fontFamily: 'SF Pro',
                fontSize: 18,
                fontWeight: '590',
                lineHeight: 13,
                color: '#000000',
                letterSpacing: -0.23,
                position: 'relative',
                textAlign: 'left',
                zIndex: 5,
                marginTop: 41,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 10,
              }}
              numberOfLines={1}
            >
              ⁨⁩クリアバッジ一覧
            </Text>
          </View>
          <ImageBackground
            style={{
              display: 'flex',
              width: 332,
              height: 297,
              flexDirection: 'row',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 21,
              marginTop: 27,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 17,
            }}
            source={require('./assets/images/dbd6302e-de22-4b07-90c6-037e4f40ec53.png')}
            resizeMode='cover'
          />
          <View
            style={{
              width: 376,
              height: 83,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              position: 'relative',
              zIndex: 10,
              marginTop: 64,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: -1,
            }}
          >
            <View
              style={{
                display: 'flex',
                width: 377,
                paddingTop: 0,
                paddingRight: 42,
                paddingBottom: 0,
                paddingLeft: 42,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 11,
                marginTop: 7,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}
            >
              <View
                style={{
                  width: 48,
                  height: 40,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 12,
                }}
              >
                <ImageBackground
                  style={{
                    width: 30,
                    height: 21,
                    fontFamily: 'SF Pro',
                    fontSize: 18,
                    fontWeight: '510',
                    lineHeight: 21,
                    position: 'relative',
                    zIndex: 14,
                    marginTop: 1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 9,
                  }}
                  source={require('./assets/images/091ee739-cfb3-4e50-b71f-7032815a3480.png')}
                />
                <Text
                  style={{
                    display: 'flex',
                    width: 60,
                    height: 12,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'SF Pro',
                    fontSize: 10,
                    fontWeight: '510',
                    lineHeight: 11.934,
                    color: '#007aff',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 13,
                    marginTop: 6,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: -6.5,
                  }}
                  numberOfLines={1}
                >
                  プロフィール
                </Text>
              </View>
              <View
                style={{
                  width: 48,
                  height: 40,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 15,
                }}
              >
                <ImageBackground
                  style={{
                    width: 30,
                    height: 21,
                    fontFamily: 'SF Pro',
                    fontSize: 18,
                    fontWeight: '510',
                    lineHeight: 21,
                    position: 'relative',
                    zIndex: 17,
                    marginTop: 1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 9,
                  }}
                  source={require('./assets/images/602d384d-1968-4c3f-b7f8-d96ad1f5dc17.png')}
                />
                <Text
                  style={{
                    display: 'flex',
                    width: 107,
                    height: 12,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'SF Pro',
                    fontSize: 10,
                    fontWeight: '510',
                    lineHeight: 11.934,
                    color: '#999999',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 16,
                    marginTop: 6,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: -29.5,
                  }}
                  numberOfLines={1}
                >
                  TRPGキャラクター情報
                </Text>
              </View>
              <View
                style={{
                  width: 48,
                  height: 40,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 18,
                }}
              >
                <ImageBackground
                  style={{
                    width: 30,
                    height: 21,
                    fontFamily: 'SF Pro',
                    fontSize: 18,
                    fontWeight: '510',
                    lineHeight: 21,
                    position: 'relative',
                    zIndex: 20,
                    marginTop: 1,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 9,
                  }}
                  source={require('./assets/images/723c3de0-f44f-4dd1-a00a-7d9573f77fda.png')}
                />
                <Text
                  style={{
                    display: 'flex',
                    width: 40,
                    height: 12,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    fontFamily: 'SF Pro',
                    fontSize: 10,
                    fontWeight: '510',
                    lineHeight: 11.934,
                    color: '#999999',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 19,
                    marginTop: 6,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 3.5,
                  }}
                  numberOfLines={1}
                >
                  名刺一覧
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
