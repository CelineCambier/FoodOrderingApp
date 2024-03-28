import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Colors'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pizza Pepperoni</Text>
      <Text style={styles.price}>$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  }
});
