import { Router } from 'express'

import type { Request, Response } from 'express'

const router = Router()

router.get('/', (request: Request, res: Response) => {
  const randomCharacter = () => {
    const character = Math.floor(Math.random() * 26 + 'a'.charCodeAt(0))
    return String.fromCharCode(character)
  }

  const characters = new Array<number[]>(10)
    .fill(new Array(10).fill(undefined))
    .map((line) => line.map(randomCharacter))

  const bias = /^[a-z]$/i.test(request.query.bias as string) ? request.query.bias : undefined

  const setBias = () => {
    const totalIndexes = characters.flatMap(line => line).length
    const numberOfIndexes = Math.ceil(totalIndexes * 0.2)

    const randomIndexes = new Map()

    while (randomIndexes.size < numberOfIndexes) {
      const line = Math.floor(Math.random() * characters.length)
      const cell = Math.floor(Math.random() * characters[line].length)

      const key = `${line}-${cell}`
      randomIndexes.set(key, [line, cell])
    }

    Array
      .from(randomIndexes.values())
      .forEach(([line, cell]) => {
        characters[line][cell] = bias as string
      })
  }

  if (bias) {
    setBias()
  }

  const seconds = new Date().getSeconds().toString().padStart(2, '0')

  const codeCharacters = [
    characters[+seconds.charAt(0)][+seconds.charAt(1)], 
    characters[+seconds.charAt(1)][+seconds.charAt(0)]
  ]

  const smallerThan9 = (num: number) => {
    if (num <= 9) return num

    let divisor = 2
    let result: number | undefined

    while (!result) {
        const test = Math.round(num / divisor)

        if (test <= 9) {
            result = Math.round(test)
        }

        divisor++
    }
  
    return result
  }

  const code = codeCharacters.map(codeCharacter => {
    const matches = characters
      .map(line => line.join(''))
      .join('')
      .match(new RegExp(codeCharacter, 'g'))

    return matches ? smallerThan9(matches.length) : 0
  }).join('')

  res.json({
    characters,
    code
  })
})

export default router
