import { addLocaleData } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
// import tw from 'react-intl/locale-data/zu';
import zhCN from './locale/zh_CN';
import enUS from './locale/en_US';
// import zhTW from './locale/zh_TW';

const url = {
	// baseUri: '//47.94.130.229:8888',
	// tradeUri: '//116.62.202.229',
	// klineUri: '//116.62.202.229/kline/',
	// historyUri: '//116.62.202.229/history/',
	// websocketUri: 'ws://116.62.202.229/ws/'
	
	baseUri: 'https://qaapie33e690ab2de05dc.top.one',
	tradeUri: 'https://qatradee33e690ab2de05dc.top.one',
	klineUri: 'https://qatradee33e690ab2de05dc.top.one/kline/',
	historyUri: 'https://qatradee33e690ab2de05dc.top.one/history/',
	websocketUri: 'wss://qasube33e690ab2de05dc.top.one/ws/',

	// baseUri: '//54.199.111.182',
	// tradeUri: '//52.197.202.202',
	// klineUri: '//52.197.202.202/kline/',
	// historyUri: '//52.197.202.202/history/',
	// websocketUri: 'wss://54.95.94.240/ws/',
};
window.url = url;

const defaultConfig = {
	deaultLocale: 'zh-cn',
	deaultMessages: zhCN,
	deaultLanguage: 'zh',
	deaultLanguageText: '中文',
	defaultCoin: 'TOP/ETH',
	defaultTimezone: 'Asia/Shanghai'
};

const setLang = () => {
	const { language } = localStorage;
	let locale;
	let messages;

  //提供url给app使用作为webview使用
  const {pathname} = window.location;
	if (pathname === '/agreement' || pathname === '/download') {
		console.log(
			'if the page is not the agreement and show this log error that is big error'
		);
		const langUrl = window.location.search.slice(6);
		if (langUrl) {
			locale = langUrl;
			if (langUrl === 'zh') {
				messages = zhCN;
			} else if (langUrl === 'en') {
				messages = enUS;
			}
			addLocaleData([...zh, ...en]);

			return { locale, messages };
		}
	}

	if (!language) {
		// default language
		const {
			deaultLocale,
			deaultMessages,
			deaultLanguage,
			deaultLanguageText,
			defaultTimezone
		} = defaultConfig;

		locale = deaultLocale;
		messages = deaultMessages;
		localStorage.setItem('timezone', defaultTimezone);
		localStorage.setItem('language', deaultLanguage);
		localStorage.setItem('languageText', deaultLanguageText);
	} else if (language === 'zh') {
		locale = 'zh';
		messages = zhCN;
	} else if (language === 'en') {
		locale = 'en-US';
		messages = enUS;
	}
	// else if (language === 'zh_TW') {
	//   locale = 'zu';
	//   messages = zhTW;
	// }
	addLocaleData([...zh, ...en]);

	return { locale, messages };
};

const localeList = [
	{
		language: 'en',
		languageText: 'English',
		timezone: 'America/New_York'
	},
	{
		language: 'zh',
		languageText: '中文',
		timezone: 'Asia/Shanghai'
	}
	// {
	//   language: 'zh_TW',
	//   languageText: '繁體',
	//   timezone: 'Asia/TaiPei',
	// },
];

const dun = {
	// "captchaId": "4031f970621b463d8ff091f86fbdaa44", // 有感知
	captchaId: 'c56143bb571042b99cf5fcdaeae74b89' // 无感知
};

const key =
	'-----BEGIN PUBLIC KEY-----' +
	'MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQB1zsFQy2kMpURBUXAyk5pT' +
	'lnWs7Xq3AeUPLddzoYLGPdbZsbwe3NQoQT4TErZX0AwPtAVfc7EB5+THzf5QmwBU' +
	'obLNcePy6qj7gndh+etn2Tw7yxd+PjQ0gUUt+5h7yKNjewDFf9CO/Grbp51sEdHM' +
	'XW4EIMhkyp+dSJ306Ud+UcHt52yjJkjzsOU84TT2bJ/NYrLDAWjQINQUDbF17Dyj' +
	'p3PzjOjsTzfwO5MlPIgESxpzQcmkVSq21x2YKJFtKqv3lbZbzeYOCAm840mWmimC' +
	'1zEWRF7yAoyJUgE47OKzQVyC7Zr6T4gCKvlkA+4EwJsIQR9c+h6gLvoB5IjnBStV' +
	'AgMBAAE=' +
	'-----END PUBLIC KEY-----';

export { url, setLang, localeList, defaultConfig, dun, key };
