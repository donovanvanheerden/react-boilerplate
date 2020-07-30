import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './languageSwitch.styles';

const LanguageSwitch = (props: unknown) => {
  const classes = useStyles(props);
  const { t: translate, i18n } = useTranslation();

  const handleLanguageSwitch = (lng: string) => () => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={classes.langSwitch}>
      <button
        className={clsx({ [classes.selected]: i18n.language === 'de' })}
        onClick={handleLanguageSwitch('de')}
        title={translate('German')}
        value="de"
      >
        DE
      </button>
      <button
        className={clsx({ [classes.selected]: i18n.language === 'en' })}
        onClick={handleLanguageSwitch('en')}
        title={translate('English')}
        value="en"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
