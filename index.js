// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import loanRoutes from './routes/loanRoutes.js';
// import userRoutes from './routes/userRoutes.js';

// const app = express();
// dotenv.config({ path: './config.env' });

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// app.use(express.json({ limit: '30mb', extended: true }));
// app.use(express.json({ limit: '30mb', extended: true }));
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('LoanCraft API here');
// });
// app.use('/loans', loanRoutes);
// app.use('/users', userRoutes);

// const PORT = process.env.PORT || 4000;

// mongoose
//   .connect(process.env.CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
//   })
//   .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);
