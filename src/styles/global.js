import {StyleSheet} from 'react-native';

export const darkbg = '#33ABB3';
export const lightbg = '#7DCAD8';
export const darkgrey = '#4A4A4A';
export const mediumgrey = '#767576';
export const lightgrey = '#A3A3A3';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    width:"90%",
    borderBottomWidth:0.5,
    fontWeight: 'bold',
    color: '#4A4A4A',
    fontFamily: 'Roboto Black',
    marginBottom:10
  },
  lightTitleText: {
    color: '#A3A3A3',
    fontFamily: 'Roboto Thin',
    width: '90%',
  },
  lightTitleCenterText: {
    color: '#A3A3A3',
    fontFamily: 'Roboto Thin',
    textAlign: 'center',
  },

  textLine: {
    color: '#A3A3A3',
  },
  container: {
    flex: 1,
    padding: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#4A4A4A',
    padding: 7,
    fontSize: 18,
    width: '100%',
    borderRadius: 6,
    marginBottom: 20,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
  background: {
    backgroundColor: '#33ABB3',
  },
  bakgroundTilt: {
    backgroundColor: '#7DCAD8',
  },
});

// export const images = {
//   // ratings: {
//   //   "1": require("../assets/rating-1.png"),
//   //   "2": require("../assets/rating-2.png"),
//   //   "3": require("../assets/rating-3.png"),
//   //   "4": require("../assets/rating-4.png"),
//   //   "5": require("../assets/rating-5.png"),
//   // },
// };
