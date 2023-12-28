import en from './en';
import zh from './zh';
import polyglotI18nProvider from "ra-i18n-polyglot";

const i18nProvider = polyglotI18nProvider(locale =>
        locale === 'zh' ? zh : en,
    'zh', // Default locale
    [
        {locale: 'en', name: 'English'},
        {locale: 'zh', name: '简体中文'}
    ],
    +{allowMissing: true}
);

export default i18nProvider;