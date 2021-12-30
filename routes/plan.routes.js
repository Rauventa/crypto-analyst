const {Router} = require('express');
const Plan = require('../models/Plan');
const {check, validationResult} = require('express-validator');
const router = Router();

// router.get('/', async (req, res) => {
//     try {
//         const cars = await Car.find({}).populate('parts');
//         res.status(200).json(cars)
//     } catch(e) {
//         res.status(500).json({message: 'Что-то пошло не так'})
//     }
// })

router.post(
    '/create',
    [
        check('type', 'Некорректный тип плана').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные'
                })
            }

            const {type} = req.body;

            await new Plan({type}).save()

            res.status(201).json({message: 'План успешно создан'});
        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

module.exports = router;