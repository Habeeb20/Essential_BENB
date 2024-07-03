import express from 'express';

const router = express.Router();

router.post("/");
router.post("/signin");
router.post('/google');
router.get('/signout' )

export default router;