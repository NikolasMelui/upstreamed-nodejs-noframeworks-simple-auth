const { sleep } = require('./helpers');

module.exports = {
  getUsers: async () => {
    await sleep(1000);
    return ['Igor1', 'Igor2', 'Igor3'];
  },
  getUserIgor: () => ({
    name: 'Igor',
    surname: 'Transelvanskiy',
  }),
  favicon: () => 'There is no favicon here!!!!1',
};
