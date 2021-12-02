/* eslint-disable import/extensions */
import _sequelize from 'sequelize';
import _status from './status.js';
import _tasks from './tasks.js';
import _users from './users.js';
import config from '../config/config.js';

const { DataTypes } = _sequelize;

export default function initModels() {
  const env = process.env.NODE_ENV || 'development';

  const configObj = config[env];
  let sequelize;

  if (configObj.use_env_variable) {
    sequelize = new _sequelize(
      process.env[configObj.use_env_variable],
      configObj,
    );
  } else {
    sequelize = new _sequelize(
      configObj.database,
      configObj.username,
      configObj.password,
      configObj,
    );
  }

  const status = _status.init(sequelize, DataTypes);
  const tasks = _tasks.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  tasks.belongsTo(status, { as: 'status', foreignKey: 'status_id' });
  status.hasMany(tasks, { as: 'tasks', foreignKey: 'status_id' });
  tasks.belongsTo(users, { as: 'user', foreignKey: 'user_id' });
  users.hasMany(tasks, { as: 'tasks', foreignKey: 'user_id' });

  return {
    status,
    tasks,
    users,
  };
}
