import { PintoraConfig } from '@pintora/core'
import { sequenceDiagram, SequenceDiagramIR } from './sequence'
import { erDiagram, ErDiagramIR } from './er'
import { componentDiagram, ComponentDiagramIR } from './component'
import { activityDiagram, ActivityDiagramIR } from './activity'
import { mindmap, MindmapIR } from './mindmap'
import './type' // type augmentation
import './util/symbols'

export { PintoraConfig }

export const DIAGRAMS = {
  erDiagram,
  sequenceDiagram,
  componentDiagram,
  activityDiagram,
  mindmap,
}

export {
  SequenceDiagramIR,
  sequenceDiagram,
  erDiagram,
  ErDiagramIR,
  componentDiagram,
  ComponentDiagramIR,
  ActivityDiagramIR,
  MindmapIR,
  mindmap,
}
