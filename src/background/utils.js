import includes from 'lodash/includes';

export const isNewTabUrl = url =>
  includes(['chrome://newtab/', 'about:newtab'], url);
