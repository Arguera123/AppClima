import Mongoose from 'mongoose';
import debug from 'debug';

const dbhost = process.env.DB_HOST || 'localhost';
const dbport = process.env.DB_PORT || '27017';
const dbname = process.env.DB_NAME || 'appclima';
const dburl = process.env.DB_URL || 'mongodb://admin:adminpassword@localhost:27017/appclima-db?authSource=admin';

const log = debug('appclima:database');

/**
 * Connect to the database
 */

const connect = async () => {
  try {
    await Mongoose.connect(dburl); 
    log('Connected to the database');
  } catch (error) {
    log('Error connecting to the database');
    log(error);
    process.exit(1);
  }  
}

/**
 * Disconnect from the database
 */

const disconnect = async () => {
  try {
    await Mongoose.disconnect();
    log('Disconnected from the database');
  } catch (error) {
    log('Error disconnecting from the database');
    process.exit(1);
  }
}

export default {
  connect,
  disconnect,
}
