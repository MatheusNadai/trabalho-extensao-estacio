import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Capacitacao: undefined;
  ConsumoConsciente: undefined;
};

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#F2F2F2',
    flex: 1,
    paddingTop: 40,
  };

  return (
    <View style={backgroundStyle}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Beba com Consciência</Text>
        <Text style={styles.subtitle}>
          Capacitação e Gestão para o Comércio Local
        </Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Capacitacao')}>
          <Text style={styles.cardTitle}>📚 Mão de Obra Especializada</Text>
          <Text style={styles.cardText}>
            Aprenda boas práticas de atendimento, preparo e operação no setor de
            bebidas.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ConsumoConsciente')}>
          <Text style={styles.cardTitle}>🍻 Consumo Consciente</Text>
          <Text style={styles.cardText}>
            Veja orientações sobre limites, prevenção de abusos e
            responsabilidade social.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
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
  cardTitle: {fontSize: 20, fontWeight: '600', marginBottom: 6},
  cardText: {fontSize: 14, color: '#444'},
});

export default HomeScreen;
