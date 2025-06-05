import {ScrollView, StyleSheet, Text} from 'react-native';

const ConsumoConscienteScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dicas de Consumo Consciente de Álcool</Text>
      <Text style={styles.item}>• Não incentive o consumo excessivo.</Text>
      <Text style={styles.item}>
        • Ofereça opções não alcoólicas no cardápio.
      </Text>
      <Text style={styles.item}>
        • Informe os clientes sobre limites seguros.
      </Text>
      <Text style={styles.item}>• Nunca sirva menores de idade.</Text>
      <Text style={styles.item}>
        • Tenha mensagens educativas no ambiente do bar.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 16},
  item: {fontSize: 16, marginBottom: 12},
});

export default ConsumoConscienteScreen;
