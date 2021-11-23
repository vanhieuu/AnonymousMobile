import React from 'react';
import {ActivityIndicator, Alert, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import URL from '../../../config/Api';
import {
  EStatusAuth,
  getAuthAsync,
  IAuth,
  IResUser,
  IUser,
  onLogin,
  updateStatusAuth,
} from '../../../redux/authSlice';
import {RootState} from '../../../redux/store';
import {Colors, Text, View, Image} from 'react-native-ui-lib';
import {Header} from 'react-native-elements';

const Profile = ({item}: {item: IUser}) => {
  const statusAuth = useSelector<RootState, EStatusAuth>(
    state => state.auth.statusAuth,
  );
  const token = useSelector<RootState, string>(state => state.auth.accessToken);

  const dispatch = useDispatch();
  const [profles, setProfiles] = React.useState<IUser[]>([]);
  const checkLogin = React.useCallback(async () => {
    const auth: IAuth | null = await getAuthAsync();
    if (auth) {
      fetch(URL.ValidateToken, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then((json: IResUser) => {
          const success = json.success;
          if (!success) {
            Alert.alert('Thông báo', json.message);
            dispatch(updateStatusAuth({statusAuth: EStatusAuth.unauth}));
            return;
          }
          dispatch(onLogin(auth));
          setProfiles(json.profile);
          return json;
        });
    } else {
      dispatch(updateStatusAuth({statusAuth: EStatusAuth.unauth}));
    }
  }, []);
  React.useEffect(() => {
    checkLogin();
  });
  if (statusAuth === EStatusAuth.check) {
    return (
      <View flex center>
        <ActivityIndicator color={Colors.primary} />
      </View>
    );
  }
  return (
    <View flex center>
      <Header
        placement="center"
        leftComponent={{icon: 'menu', color: Colors.bgApp}}
        centerComponent={{
          text: 'Shopping',
          style: {color: Colors.primary, fontSize: 20},
        }}
        rightComponent={{icon: 'search', color: Colors.bgApp}}
        containerStyle={{
          backgroundColor: 'white',
          justifyContent: 'space-around',
        }}
        barStyle="light-content"
        statusBarProps={{barStyle: 'light-content'}}
      />
      <View row center>
        <View style={styles.img}>
          <Image
            source={{uri: item.photoURL}}
            resizeMode="center"
            style={styles.img}
          />
        </View>
        <View>
          <Text h24 black marginL-16>
            {' '}
            {item.displayName}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
});
