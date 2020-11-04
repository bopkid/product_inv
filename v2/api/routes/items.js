const router = require('express').Router()

const ctrl = require('../controllers');

// PATH api/items
router.get('/', ctrl.items.index);
router.get('/:id', ctrl.items.show);
router.post('/', ctrl.items.create);
router.put('/:id' , ctrl.items.update);
router.delete('/:id' , ctrl.items.destory);


module.exports = router;