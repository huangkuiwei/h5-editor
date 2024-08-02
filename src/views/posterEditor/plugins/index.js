import { usePlugin } from './helpers'
export { pluginMap, pluginWrap, pluginConstructorMap } from './helpers'

import pluginA from './pluginA'
import buttonWidget from './buttonWidget'
import inputWidget from './inputWidget'

usePlugin('inputWidget', inputWidget)
usePlugin('buttonWidget', buttonWidget)
usePlugin('pluginA', pluginA)
