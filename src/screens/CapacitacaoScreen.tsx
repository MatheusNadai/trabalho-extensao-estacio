import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

const CapacitacaoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dicas de Mão de Obra Especializada</Text>
      <Text style={styles.item}>
        • Ofereça treinamento constante para seus atendentes.
      </Text>
      <Text style={styles.item}>
        • Incentive boas práticas de higiene e apresentação.
      </Text>
      <Text style={styles.item}>
        • Ensine técnicas de preparo de drinks e atendimento ao cliente.
      </Text>
      <Text style={styles.item}>
        • Utilize fichas técnicas e cardápios padronizados.
      </Text>
      <Text style={styles.item}>
        • Dê feedbacks regulares e valorize sua equipe.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 16},
  item: {fontSize: 16, marginBottom: 12},
});

export default CapacitacaoScreen;
