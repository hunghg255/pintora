import { parse } from '../parser'
import db from '../db'

describe('er parser', () => {
  afterEach(() => {
    db.clear()
  })

  const example = `erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
  `
  it('just works', () => {
    parse(example)
    // console.log(db.getDiagramIR())
  })
})
