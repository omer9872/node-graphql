import { connect } from 'mongoose'

connect(process.env.MONGODB_CONNECTION_URL as string)
  .then(_ => {
    console.log("successfully connected to DB.")
  })
  .catch(error => {
    console.log(error)
  });
