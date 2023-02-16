import  express, { Router } from "express"
const router = express.Router()
import {getTransaction,addtransaction,deleteTransaction,
Add_Income,get_Income,Add_Expense,get_Expense,income_get_dates,expense_get_dates, deleteIncome, deleteExpense
} from '../Controllers/TransactionController.js'

import {bookingController} from '../Controllers/BookingController.js'


router.get('/transactions',getTransaction)
router.post('/addTransactions',addtransaction)
router.delete('/deleteTransaction/:id',deleteTransaction)

////
router.get('/get_income',get_Income)
router.post('/add_income',Add_Income)
router.delete('/delete_income/:id',deleteIncome)
router.delete('/delete_expense/:id',deleteExpense)

router.get('/get_expense',get_Expense)
router.post('/add_expense',Add_Expense)
router.delete('/delete_expense/:id',deleteTransaction)
router.post('/income_date',income_get_dates)
router.post('/expense_date',expense_get_dates)
router.post('/add_booking',bookingController.addbooking)
router.get('/all_bookings',bookingController.getAllBookings)


export default router;   