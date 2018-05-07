import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = ({
       isLoading: true, 
       dataSource: null
    })
  };

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response)=> response.json())
      .then((responseJson)=>{
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson
        },function () {
        
        });
      })
      .catch((error)=>{
        console.error(error);
      });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <Text style={{paddingTop:10}}>{item.title} {item.releaseYear}</Text>} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
