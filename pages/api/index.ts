import type { NextApiRequest, NextApiResponse } from 'next'
import { CartDetails } from '../../components/contextProvider'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1MJQ4BGNHVVYfPmxWXS8WCkn' },
          { shipping_rate: 'shr_1MJQ2wGNHVVYfPmx6UVAgtY5' },
        ],
        line_items: req.body.map((item: CartDetails) => {
          return {
            price_data: {
              currency: 'USD',
              product_data: { name: item.name, images: [item.image?.asset.url] },
              unit_amount: item.price! * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          }
        }),

        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }

      const session = await stripe.checkout.sessions.create(params)
      res.status(200).json(session)
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
