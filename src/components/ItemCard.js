import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-svg-charts';

const styles = StyleSheet.create(
    {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 40,
        },
        coinName:{
            fontWeight: 'bold',
        },
    }
);

const ItemCard = (props) => {

    function convertData(array) {
        const newData = [];

        for(var i = 0; i < array.lenght; i++)
        {
            if(data[i] === null)
            {
                newData[i] = 0;
            }
            else
            {
                Math.floor(array[i]);
            }
        }
    }

    const data = convertData(props.data.Components[0].data)
        return (
            <View style={styles.container}>
                <Text style={styles.coinName}>{props.data.Title}</Text>
                <Text>{props.data.Type}</Text>
                <LineChart
                    style={{ height: 200 }}
                    data={ data }
                    contentInset={ { top: 20, bottom: 20 } }
                />
            </View>
        )
};

export default ItemCard;