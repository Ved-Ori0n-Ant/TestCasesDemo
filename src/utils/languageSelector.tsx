import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import '../localization';

const {width} = Dimensions.get('window');

const LANGS = [
  {lngCode: 'en', label: 'English'},
  {lngCode: 'hi', label: 'हिन्दी'},
  {lngCode: 'ar', label: 'عربي'},
];

const LanguageSelector = () => {
  const {t, i18n} = useTranslation();
  const selectedLngCode: any = i18n.language;
  const setLng = (lngCode: string) => i18n.changeLanguage(lngCode);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {/* Should return select your language in respective language */}
        <Text style={styles.select}>{t('languageSelector:selectLng')}</Text> 
      </View>
      {LANGS.map((l) => {
        const selected = l.lngCode === selectedLngCode;
        return (
          <TouchableOpacity
            onPress={() => setLng(l.lngCode)}
            key={l.lngCode}
            disabled={selected}>
            <View style={[styles.row, selected ? styles.selectedRow : {}]}>
              <Text style={[selected ? styles.selectedText : styles.text]}>
                {l.label}
              </Text>
              {selected && <Image source={require('../utils/images/world.png')} style={{height: 20, width:20}} />}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'rgb(231, 232, 235)',
    width: width * 0.8,
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  select: {
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedRow: {
    backgroundColor: 'rgb(45, 45, 45)',
  },
  selectedText: {
    color: 'rgb(231, 232, 235)',
  },
  text: {
    color: 'rgb(45, 45, 45)',
  },
});