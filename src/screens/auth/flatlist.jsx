import React from 'react';
import { View, Text , FlatList} from 'react-native';

const FlatListPro=() =>{
    const users=[
        {
            id:1,
            name:'Bruce'
        },
        {
            id:2,
            name: 'Ankita'
        },
        {
            id:3,
            name: 'Ginger'
        },
        {
            id:4,
            name: 'Ashish'
        },
        {
id: 11,
name:'Preety'
        }
    ]
  return (
    <View>
      <Text> The list of Items Are:</Text>
      <FlatList
      data={users}
      renderItems={({item})=><Text style={{fontSize:20, color:'black'}} >{item.name}</Text>}
/>
     </View>
  );
}
export default FlatListPro;