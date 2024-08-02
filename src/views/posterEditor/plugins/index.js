import { usePlugin } from './helpers'
export { pluginMap, pluginWrap, pluginConstructorMap } from './helpers'

import pluginA from './pluginA'
import buttonWidget from './buttonWidget'

usePlugin('pluginA', pluginA)
usePlugin('buttonWidget', buttonWidget)

