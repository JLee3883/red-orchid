
import {
    GREGORIAN_MONTHS,
    GREGORIAN_WEEK_DAYS
  } from './constants';
  import { toExtendedDay } from './generalUtils';
  
  const localeLanguages = {
    en: {
      months: GREGORIAN_MONTHS,
      weekDays: GREGORIAN_WEEK_DAYS,
      weekStartingIndex: 0,
      getToday(gregorainTodayObject) {
        return gregorainTodayObject;
      },
      toNativeDate(date) {
        return new Date(date.year, date.month - 1, date.day);
      },
      getMonthLength(date) {
        return new Date(date.year, date.month, 0).getDate();
      },
      transformDigit(digit) {
        return digit;
      },
      nextMonth: 'Next Month',
      previousMonth: 'Previous Month',
      openMonthSelector: 'Open Month Selector',
      openYearSelector: 'Open Year Selector',
      closeMonthSelector: 'Close Month Selector',
      closeYearSelector: 'Close Year Selector',
      from: 'from',
      to: 'to',
      defaultPlaceholder: 'Select...',
      digitSeparator: ',',
      yearLetterSkip: 0,
      isRtl: false,
    },
  };
  const getLocaleDetails = locale => {
    if (typeof locale === 'string') return localeLanguages[locale];
    return locale;
  };
  
  export { localeLanguages };
  export default getLocaleDetails;