import React from "react";
import { ActivityIndicator, NativeModules, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const { RaonWireless: RNRaonWireless } = NativeModules;

export default class RaonWireless extends React.PureComponent {

    static async clearTempDir() {
        return await RNRaonWireless.clearTempDir();
    }

    static async getItems() {
        return await RNRaonWireless.getItems();
    }

    static async removeItem(subjectDn) {
        return await RNRaonWireless.removeItem(subjectDn);
    }

    static async getPath(subjectDn) {
        return await RNRaonWireless.getPath(subjectDn);
    }

    static async checkPassword(subjectDn, password) {
        return await RNRaonWireless.checkPassword(subjectDn, password);
    }

    static async getCode() {
        try{
            return await RNRaonWireless.getReceiveCode();    
        }catch(e){
            return '0'
        }
    }

    static async importCert() {
        try {
            return await RNRaonWireless.importCertify();
        }
        catch(e) {
            return e
        }
    }

    state = {};
    constructor(props){
        super(props);
    }



    async showItem() {
        if (this.state.code) return;
        try {
            let response = await RNRaonWireless.getReceiveCode();
            const code = response.code.substring(0, 4) +
                ' - ' + response.code.substring(4, 8) +
                ' - ' + response.code.substring(8);

            this.setState({ code });
        }
        catch(e) {
            this.setState({ code : 'ERR - SERVER' });
            console.log('Raon Connection error: ', e)
        }
    }

    async import() {
        try {
            let response = await RNRaonWireless.importCertify();
            if (!response.isError) {
                if (this.props.onSuccess) {
                    this.props.onSuccess(response);
                }
            }
            else {
                this.props.onError(response);
            }
        }
        catch(e) {
            console.log(e);
            if (this.props.onError) {
                this.props.onError();
            }
        }
    }

    render () {
        const { labelStyle, labelText, textStyle, buttonStyle, buttonTextStyle, buttonText, disableButtonStyle, disableButtonTextStyle, ...props } = this.props;

        let realButtonStyle = [ buttonStyle ];
        let realButtonTextStyle = [ buttonTextStyle ];

        if (!this.state.code) {
            realButtonStyle.push(disableButtonStyle);
            realButtonTextStyle.push(disableButtonTextStyle);
        }

        return (
            <View style={[ styles.container ]}>
                <Text style={ labelStyle }>{ labelText }</Text>
                <View>
                    {!this.state.code ? (
                    <View style={[ StyleSheet.absoluteFill, ]}>
                        <ActivityIndicator />
                    </View>
                    ) : (null)}
                    <Text style={[ textStyle, { opacity: (this.state.code ? 1 : 0) } ]}>{ this.state.code ? this.state.code : '0000 - 0000 - 0000' }</Text>
                    <TouchableOpacity
                        disabled={!this.state.code}
                        onPress={() => this.import() }
                        style={ realButtonStyle }>
                        <Text style={ realButtonTextStyle }>{ buttonText }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
    }
});


