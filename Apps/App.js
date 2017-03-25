/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux'
import {fetchData} from './actions'

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress = {()=> this.props.fetchData()}>
                    <Text style={styles.buttonLoad}>Load Data</Text>
                </TouchableOpacity>

                {
                    this.props.appData.isFetching && <Text>Loading...</Text>
                }
                {
                    this.props.appData.data.length ? (
                            this.props.appData.data.map((person, i) => {
                                return <View key={i} >
                                    <Text>Name: {person.name}</Text>
                                    <Text>Age: {person.age}</Text>
                                </View>
                            })
                        ) : null
                }

            </View>
        );
    }
}

function mapStateToProps (state) {
    console.log("mapStateToProps", state);
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonLoad: {
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor :'#006789',
        marginBottom: 5,
        padding:20,
        width:300,

    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App)