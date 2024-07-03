import express from 'express';



const router = express.Router();

router.get('/test');
router.post('/update/:id')
router.delete('/delete/:id')
router.get('/listings/:id')
router.get('/:id')

export default router;