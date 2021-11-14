import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View, Text, Colors, Image, Button} from 'react-native-ui-lib';
import Onboarding from 'react-native-onboarding-swiper';

import {RootStackParamList} from '../../nav/RootStack';
import {ScrollView} from 'react-native-gesture-handler';
const width = Dimensions.get('window').width;

const dataOnboarding = [
  {
    assetName: 'onboarding1',
    title: 'Your Voucher',
    des: 'Own Your Voucher',
  },
  {
    assetName: 'onboarding2',
    title: 'Your Voucher',
    des: 'Own Your Voucher',
  },
  {
    assetName: 'onboarding3',
    title: 'Your Voucher',
    des: 'Own Your Voucher',
  },
];
interface IPageOnboarding {
  assetName: string;
  title: string;
  des: string;
  onPress: () => void;
}

const PageOnboarding = ({assetName, title, des, onPress}: IPageOnboarding) => {
  return (
    <View width={width} height={'100%'} backgroundColor={Colors.onBoard3}>
      <Image
        assetGroup="onboarding"
        assetName={assetName}
        style={{width: width, height: (width / 375) * 464}}
      />
      <View flex bottom centerH>
        <Text h30 marginB-10>
          {title}
        </Text>
        <Text b17 color={Colors.dark10} marginB-36 center>
          {des}
        </Text>
        <Button
          label="CREATE ACCOUNT"
          marginB-30
          color={Colors.onBoard1}
          backgroundColor={Colors.onBoard2}
          style={{width: width - 32}}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

interface IRefDots {
  setIndexPageFocus: React.Dispatch<React.SetStateAction<number>>;
}
const Dots = React.forwardRef<IRefDots>((props, ref) => {
  const [indexPageFocus, setIndexPageFocus] = React.useState<number>(0);

  React.useImperativeHandle(ref, () => {
    return {
      setIndexPageFocus,
    };
  });
  const renderDots = React.useCallback(() => {
    let views = [];
    let length = dataOnboarding.length;
    for (let i = 0; i < length; i++) {
      views.push(
        <View
          backgroundColor={
            indexPageFocus === i ? Colors.onBoard3 : Colors.dark40
          }
          style={styles.dot}
          key={i}
        />,
      );
    }
    return views;
  }, [indexPageFocus]);
  return <View style={styles.containerDots}>{renderDots()}</View>;
});

const OnboardingScreen = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>()
  const refDots = React.useRef<IRefDots>(null);
  const refScrollView = React.useRef<ScrollView>(null);
  const onMomentumScrollEnd = React.useCallback(({nativeEvent}) => {
    const x = nativeEvent.contentOffset.x;
    let indexFocus = Math.round(x / width);
  }, []);

  return (
    <View flex backgroundColor={Colors.onBoard2}>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={onMomentumScrollEnd}
        showsHorizontalScrollIndicator={false}
        ref={refScrollView}>
        {dataOnboarding.map((item, index) => (
          <PageOnboarding
            assetName={item.assetName}
            title={item.title}
            des={item.des}
            key={item.assetName}
            onPress={() => {
               return navigate('SignIn');
              // refScrollView.current?.scrollTo({
              //   x: (index + 1) * width,
              //   y: 0,
              //   animated: true,
              // });
              refDots.current?.setIndexPageFocus(index + 1);
            }}
          />
        ))}
      </ScrollView>
      <Dots ref={refDots}/>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  containerDots: {
    position: 'absolute',
    top: (width / 375) * 464,
    height: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dot: {
    borderRadius: 5,
    marginHorizontal: 5,
    height: 10,
    width: 10,
  },
});
