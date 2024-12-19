import { Sequelize, DataTypes } from 'sequelize';
import CONFIG from './config.js'

// Initialize Sequelize
const DBConfig = CONFIG.Database
const SequelizeDatabase = new Sequelize(DBConfig.DB_Name, DBConfig.DB_Name, DBConfig.DB_Password, {
  host: DBConfig.Host,
  port: DBConfig.Port,
  dialect: 'postgres',
});

const User = SequelizeDatabase.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'recruiter', 'applicant'),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
  
const JobPosting = SequelizeDatabase.define('JobPosting', {
job_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
title: {
    type: DataTypes.STRING(150),
    allowNull: false,
},
description: {
    type: DataTypes.TEXT,
    allowNull: false,
},
location: {
    type: DataTypes.STRING(100),
    allowNull: false,
},
salary: {
    type: DataTypes.STRING(50),
},
required_skills: {
    type: DataTypes.TEXT,
},
job_type: {
    type: DataTypes.ENUM('full-time', 'contract', 'part-time', 'internship'),
    allowNull: false,
},
created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
},
updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
},
});

const Application = SequelizeDatabase.define('Application', {
application_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
resume_url: {
    type: DataTypes.STRING(255),
    allowNull: false,
},
contact_details: {
    type: DataTypes.STRING(255),
},
applied_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
},
});

const JobCategory = SequelizeDatabase.define('JobCategory', {
category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
},
created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
},
updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
},
});

const JobCategoryLink = SequelizeDatabase.define('JobCategoryLink', {
job_id: {
    type: DataTypes.INTEGER,
    references: {
    model: JobPosting,
    key: 'job_id',
    },
},
category_id: {
    type: DataTypes.INTEGER,
    references: {
    model: JobCategory,
    key: 'category_id',
    },
},
}, {
indexes: [
    {
    unique: true,
    fields: ['job_id', 'category_id'],
    },
],
});

User.hasMany(JobPosting, { foreignKey: 'employer_id' });
JobPosting.belongsTo(User, { foreignKey: 'employer_id' });

User.hasMany(Application, { foreignKey: 'job_seeker_id' });
Application.belongsTo(User, { foreignKey: 'job_seeker_id' });

JobPosting.hasMany(Application, { foreignKey: 'job_id' });
Application.belongsTo(JobPosting, { foreignKey: 'job_id' });

JobPosting.belongsToMany(JobCategory, { through: JobCategoryLink, foreignKey: 'job_id' });
JobCategory.belongsToMany(JobPosting, { through: JobCategoryLink, foreignKey: 'category_id' });

//We should Invoke this after changes
const syncDatabase = async () => {
try {
    await SequelizeDatabase.sync({ alter: true });
    console.log('Database synchronized successfully.');
} catch (err) {
    console.error('Error synchronizing database:', err);
}
};
//Sync after initial start
syncDatabase();
  
export {SequelizeDatabase, User, JobCategory, JobPosting, JobCategoryLink, Application, syncDatabase};