const chalk = require('chalk');
const log = console.log;

module.exports = shipit => {
  require('shipit-deploy')(shipit);
  shipit.initConfig({
    default: {
      servers: 'root@104.248.73.146',
    },
  });
  shipit.task('deploy', async () => {
    await log(chalk.yellow('Starting deploy...'));
    await log(chalk.yellow('Updating...'));
    await shipit.local('git pull');
    await log(chalk.yellow('Installing Dependencies...'));
    await shipit.local('yarn install')
    await log(chalk.yellow('Building the app...'));
    await shipit.local('yarn run build')
    await log(chalk.yellow('Uploading the app to the server...'));
    await shipit.copyToRemote('build/', process.env.DEPLOY_URL);
    await shipit.local('rm -rf build/')
    await log(chalk.green('Hurray! 🎉 Done!'));
  });
};



