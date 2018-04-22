import React from 'react';
import { ScrollView } from 'react-native';
import ItemCard from "./ItemCard";
import { connect } from 'react-redux';
import {fetchItemData} from "../redux/actions/ItemDataActions";

class ItemContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    itemDetails = (item) => {
        console.log(item.title + " Clicked");
    };

    componentWillMount(){
        this.props.fetchItemData();
    }

    render() {
        return (
            <ScrollView>
                {this.renderItemCard()}
            </ScrollView>
        )
    }

    renderItemCard() {
        return this.props.data.map((item) => (
            <ItemCard key={item.id} data={item} onPress={() => this.itemDetails(item)}/>
        ))

    }
}

const mapStateToProps = (state) => {
    //console.log(state.itemDataReducer.data);
  return {
        data: state.itemDataReducer.data,
  }
};

export default connect(mapStateToProps, { fetchItemData }) (ItemContainer);