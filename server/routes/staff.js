import express from 'express';
import 'express-async-error';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import * as staffController from '../controller/staff.js';
import { isAuth } from '../middleware/staff.js';


const router = express.Router();

// 로그인 요청 확인
const validateCredential = [
    body('staff_no').trim().notEmpty().withMessage('staff_no 입력하세요'),
    body('password').trim().notEmpty().withMessage('password 입력하세요'),
    validate,
];

const validateSignup = [
    ...validateCredential,
    body('staff_nm').trim().notEmpty().withMessage('staff_nm 입력하세요'),
    body('position_cd').trim().notEmpty().withMessage('position_cd 입력하세요'),
    body('account_no').trim().notEmpty().withMessage('account_no 입력하세요'),
];
// POST /staff/signup
router.post('/signup', validateSignup, staffController.signup);

router.post('/login', validateCredential, staffController.login,function(req,res){
    res.render('../../client/pages/login.ejs');
})

// GET /staff/me
router.get('/me', isAuth, staffController.me);

// GET /staff/all
router.get('/all', isAuth, staffController.all);

export default router;
