import {Typography} from 'react-native-ui-lib';
const FONTS_BASE = 'Avenir';
export const FONTS = {
  Heavy: `${FONTS_BASE}-Heavy`,
  Medium: `${FONTS_BASE}-Medium`,
  Book: `${FONTS_BASE} Book`,
  Light: `${FONTS_BASE} Heavy`,
  Black: `${FONTS_BASE}-Black`,
  Roman: `${FONTS_BASE}-Roman`,
};

Typography.loadTypographies({
  welcome: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: FONTS.Book,
  },
  Button_login: {
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 20,
    fontFamily: FONTS.Book,
  },
  ButtonSocial: {
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 20,
    fontFamily: FONTS.Book,
  },
  Onboarding_Tittle: {
    fontSize: 30,
    fontWeight: '900',
    lineHeight: 40,
    fontFamily: FONTS.Book,
  },
  Onboarding_Text: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: FONTS.Book,
  },
  CreateAccountScreenTittle: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 40.61,
    fontFamily: FONTS.Book,
  },
  CreateAccountText: {
    fontSize: 16,
    fontWeight: '300',
    lineHeight: 20,
    fontFamily: FONTS.Book,
  },
  SignUpScreenTittle: {
    fontSize: 26,
    fontWeight: '900',
    lineHeight: 40.61,
    fontFamily: FONTS.Book,
  },
  Title: {
    fontSize: 27,
    fontWeight: '900',
    lineHeight: 42.17,
    fontFamily: FONTS.Book,
  },
  Content: {
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 22,
    fontFamily: FONTS.Book,
  },
  Excersise: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: FONTS.Book,
  },
  TabBarBottom: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20.15,
    fontFamily: FONTS.Book,
  },
  ScheduleList: {
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 22,
    fontFamily: FONTS.Book,
  },
  h8: {
    fontSize: 8,
    lineHeight: 12.5,
    fontFamily: FONTS.Book,
  },
  b28: {fontSize: 28, lineHeight: 44, fontFamily: FONTS.Book},
  m30: {fontSize: 30, lineHeight: 48, fontFamily: FONTS.Medium},
  b10: {fontSize: 8, lineHeight: 15, fontFamily: FONTS.Book},
});
