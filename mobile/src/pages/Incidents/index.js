import React from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

import logoImag from '../../assets/logo.png';
import styles from './styles';

export default function Incidents(){

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={logoImag} />
            <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>0 casos</Text>
            </Text>
        </View>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

        <FlatList
            data={[1, 2, 3, 4, 5]}
            style={styles.incidentList}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false} 
            renderItem={() => (
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>testeste ete tet ete et</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>
                120
                </Text>

                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() => {}}
                >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#E02041" />
                </TouchableOpacity>
            </View>
            )}
        />
        </View>
    )
}