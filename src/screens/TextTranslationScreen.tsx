import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Pressable,
} from 'react-native';
import '../localization';
import {useTranslation} from 'react-i18next';
import LanguageSelector from '../utils/languageSelector';
import Section from '../utils/section';
import NextnPrevious, { Stack } from '../components/NextnPrevious';

declare const global: {HermesInternal: null | {}};

const TextTranslationScreen = () => {
  const {t} = useTranslation();

  const user = {
    username: 'Rajesh',
  };

  const userBill = {
    total: 420.69,
    paymentDueDate: 'May the fourth',
  };

  const genderPronouns = ['she', 'he', 'they', 'ze', 'ey'];
  const randomMessages: any = t('randomLoadingMessages', {returnObjects: true});
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <SafeAreaView style={styles.main}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <Section testID='NamespacesSection' title="NAMESPACES">
            <Text>{t('homePage:welcome')}</Text>
            <Text>{t('ok')}</Text>
          </Section>
          <Section  testID='ChangeLanguageSection' title="CHANGE LANGUAGE">
            <LanguageSelector />
          </Section>
          <Section testID='InterpolationSection' title="INTERPOLATION">
            <Text>{t('accountSuspended', {user, userBill})}</Text>
          </Section>
          <Section testID='PluralizationSection' title="PLURALIZATION">
            <Text>{t('autopsy', {count: 0})}</Text>
            <Text>{t('autopsy', {count: 1})}</Text>
            <Text>{t('autopsy', {count: 7})}</Text>
          </Section>
          <Section testID='ContextGenderSection' title="CONTEXT: GENDER">
            {genderPronouns.map(context => (
              <Text key={context}>{t('loveThyself', {context})}</Text>
            ))}
          </Section>
          <Section title="CONTEXT: PLURALIZATION">
            <Text>{t('autopsy', {count: 0, context: '0'})}</Text>
            <Text>{t('autopsy', {count: 1, context: '1'})}</Text>
            <Text>{t('autopsy', {count: 7, context: '7'})}</Text>
          </Section>
        </ScrollView>
      </SafeAreaView>
      <NextnPrevious testID='np_btn' currentScreen={Stack.TextTranslationScreen} />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },
  scroll: {
    flex: 1,
  },
});

export default TextTranslationScreen;
