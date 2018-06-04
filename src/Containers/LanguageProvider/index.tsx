// @flow
import * as React from 'react';
import * as enLocaleData from 'react-intl/locale-data/en';
import { addLocaleData, IntlProvider} from 'react-intl';

addLocaleData(enLocaleData);

addLocaleData({
  locale: 'vn'
});

interface ILanguageProviderProps  { 
  locale: string
}

class LanguageProvider extends React.Component<ILanguageProviderProps, { }> {

  render() {
    const { locale  } = this.props;
    return(
      <IntlProvider locale={locale} >
        { this.props.children }
      </IntlProvider>
    );
  }
}

export default LanguageProvider