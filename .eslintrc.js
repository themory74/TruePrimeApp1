module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '../styles/ctaFinal',
            importNames: ['PRIMARY_BTN_CONTAINER', 'PRIMARY_BTN_DATA', 'SECONDARY_BTN_CONTAINER', 'SECONDARY_BTN_DATA', 'CTA_CONTAINER_STYLES'],
            message: 'These CTA styles are locked by design approval (True Prime Digital LLC). Do not override or modify.',
          },
        ],
      },
    ],
  },
};
