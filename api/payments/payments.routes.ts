import { Router } from 'express'
import Payments from './payments.model'

import type { Request, Response } from 'express'

const router = Router()

router.get('/', async (_: Request, res: Response) => {
  const payments = await Payments.findAll()

  res.json(payments)
})

router.post('/', async (req: Request, res: Response) => {
  const payment = await Payments.create(req.body)
  res.json(payment)
})

router.put('/:id', async (req: Request, res: Response) => {
    const [updated] = await Payments.update(req.body, {
      where: { id: req.params.id }
    })

    if (!updated)
      return res.status(404).send('Not Found')

    res.json(req.body)
  }
)

router.delete('/:id', async (req: Request, res: Response) => {
    const deleted = await Payments.destroy({
      where: { id: req.params.id }
    })

    if (!deleted)
      return res.status(404).send('Not Found')

    const cards = await Payments.findAll()
    res.json(cards)
  }
)

export default router