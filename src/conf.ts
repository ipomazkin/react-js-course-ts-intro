export const conf = {
  appName: 'app',
  isDevelopment: true,
};

const conf2 = {
  ...conf,
  test: 1,
};

export const confMapped: typeof conf = conf2;
