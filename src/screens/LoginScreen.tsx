import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {LoginService} from '../api/login-service';
import tokenState from '../store/HelperStore';

const LoginScreen = (props: any) => {
  let {navigation} = props;
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const resp = await LoginService.Login({userName, password});
      console.log('error', resp);
      if (resp.success && resp.token) {
        console.log('resp', resp);
        tokenState.token = resp.token;
        navigation.navigate('Home');
      } else {
        console.log(`resp ${resp.message}`);
      }
    } catch (e) {
      console.log(`login eroor ${e}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={userName}
          placeholder="Enter email"
          onChangeText={text => setUserName(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
});

export default LoginScreen;
