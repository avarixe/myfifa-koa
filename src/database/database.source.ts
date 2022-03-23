import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import { join } from 'path'

const parentDir = join(__dirname, '..')

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'myfifa_koa',
  entities: [
    `${parentDir}/**/*.entity.ts`
  ],
  synchronize: true
}

const AppDataSource: DataSource = new DataSource(dataSourceOptions)

export default AppDataSource
