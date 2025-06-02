import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#F2F2F2',
    flex: 1,
    paddingTop: 40,
  };

  const handleNavigate = (screen: string) => {
    // Aqui futuramente entrará a navegação (React Navigation)
    console.log(`Você clicou em: ${screen}`);
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <Text style={styles.title}>Beba com Consciência</Text>
        <Text style={styles.subtitle}>
          Capacitação e Gestão para o Comércio Local
        </Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigate('Capacitação')}>
          <Text style={styles.cardTitle}>📚 Capacitação</Text>
          <Text style={styles.cardText}>
            Acesse módulos de aprendizado sobre preparo de bebidas, atendimento
            ao cliente e consumo responsável.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigate('Vendas')}>
          <Text style={styles.cardTitle}>🧾 Controle de Vendas</Text>
          <Text style={styles.cardText}>
            Registre suas vendas de forma simples e acompanhe o desempenho do
            seu negócio.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#444',
  },
});

export default App;
