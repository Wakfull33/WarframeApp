import React from 'react';
import ItemContainer from "./src/components/ItemContainer";
import { Provider } from 'react-redux';
import store from "./src/redux/store";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ItemContainer />
            </Provider>
        );
    }
}
