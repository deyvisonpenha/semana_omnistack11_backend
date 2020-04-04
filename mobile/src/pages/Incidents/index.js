import React from 'react'
import { View, Image, Text } from 'react-native';

import logoImag from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){
    return(
        <View style={styles.container}>
            <View styles={styles.header}>
                <Image source={logoImag} />
                <Text styles={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve um animal.</Text>
        </View>
    );
}