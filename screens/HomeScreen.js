import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  constructor() {
    super()

    console.log("HI! I need some state here so I can show more cards!")
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card Title</Text>
            <Text style={styles.cardDescription}>Card Description</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  card: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 10
  },
  cardDescription: {
    fontSize: 12
  }
});
