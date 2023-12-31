import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
});
