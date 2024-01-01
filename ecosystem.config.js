module.exports = {
  apps: [
    {
      name: 'queue-conumer',
      script: './dist/main.js',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
    },
  ],
};
