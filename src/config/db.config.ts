/* eslint-disable prettier/prettier */
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as path from "path";

export default():PostgresConnectionOptions=>({
    url:process.env.dbUrl,
    type:"postgres",
    port:3306,
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
    synchronize:true,
})
