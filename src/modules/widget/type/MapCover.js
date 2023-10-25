/**
 * @Author : NarutoGIS
 */

import Widget from '../Widget'
import State from '../../state/State'
import { DomUtil } from '../../utils'

class MapCover extends Widget {
  constructor() {
    super()
    this._wrapper = DomUtil.create('div', 'widget map-cover')
    this._config = undefined
    this._cache = []
    this._state = State.INITIALIZED
  }

  get type() {
    return Widget.getWidgetType('map_cover')
  }

  /**
   * Override the superclass function
   * @private
   */
  _enableHook() {
    !this._wrapper.parentNode &&
      this._viewer &&
      this._viewer.widgetContainer.appendChild(this._wrapper)
      this._wrapper.innerHTML = '   <div class="bg-cover" ></div>\n' +
      '    <div class="bg-cover2" ></div>'
  }

  /**
   *
   * @private
   */
  _installHook() {
    const self = this
    Object.defineProperty(this._viewer, 'mapCover', {
      get() {
        return self
      },
    })
  }

  _addItem(map) {

  }

  /**
   * add map
   * @param map
   */
  addMap(map = {}) {
  }
}

Widget.registerType('map_cover')

export default MapCover
