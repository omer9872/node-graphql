import { connect } from 'mongoose'

connect(process.env.DB_CONN_STRING as string)
  .then(_ => {
    console.log("successfully connected to DB.")
  })
  .catch(error => {
    console.log(error)
  });
