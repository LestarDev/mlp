import postgres from "postgres"
import { dbHost, dbName, dbPassword, dbPort, dbUserName } from "../../config/dbConfig"

const sql = postgres({
    username: dbUserName,
    password: dbPassword,
    host: dbHost,
    port: dbPort,
    database: dbName,
})

const useSql = () => {

    const getNickFromDemonic = async () => {
        return await sql`
            SELECT nick FROM postac WHERE postac.id=2; 
        `
    }

    return ({
        getNickFromDemonic
    })
}

export default useSql