import React, {useEffect} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {WatchListService} from '../api/watchlist-service';
import {useSnapshot} from 'valtio';
import tokenState from '../store/HelperStore';
import {WatchList} from '../models/watchlist-model';
import base64 from 'react-native-base64';

const HomeScreen = () => {
  const token = useSnapshot(tokenState);
  const baseToken = base64.encode(token.token);
  const [listItems, setListItems] = React.useState<WatchList[]>([]);
  const getWatchList = async () => {
    const resp = await WatchListService.getWatchList(baseToken);
    console.log('resp', resp);
    setListItems(resp.response.lots as any);
  };

  useEffect(() => {
    getWatchList();
  }, []);

  const Item = ({title}: {title: string}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome </Text>
      <ScrollView>
        <FlatList
          data={listItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  img: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default HomeScreen;
