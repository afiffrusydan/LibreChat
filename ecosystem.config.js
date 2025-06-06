module.exports = {
  apps: [
    {
      name: 'LibreChat',
      script: 'npm',
      args: 'run backend',
      interpreter: 'none', // ensures that 'npm' is run directly, not via node
      cron_restart: '2 2 * * *',
    },
  ],
};
