/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const Home = () => {
  const data = [
    {id: 1, name: 'Ngoc P.', position: 'Developer'},
    {id: 2, name: 'Ngoc P.', position: 'Developer'},
    {id: 3, name: 'Ngoc P.', position: 'Developer'},
    {id: 4, name: 'Ngoc P.', position: 'Developer'},
    {id: 5, name: 'Ngoc P.', position: 'Developer'},
  ];

  const renderList = data.map(item => {
    return (
      <Card style={styles.myCard} key={item.id}>
        <View style={styles.cardView}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25}}
            source={{
              uri: 'https://images.unsplash.com/photo-1665510363290-1e2d31f5ea52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  });

  return <View>{renderList}</View>;
};

const styles = StyleSheet.create({
  myCard: {
    margin: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontSize: 13,
  },
});

export default Home;
