import data from "@data/module_doc.json"

export interface ModuleDoc {
  category: string
  author: string
  date: string
  brief: string
  notes?: string[]
  params?: any
  inputs?: any
  outputs?: any
}

/**
 * @returns {Object.<string, ModuleDoc>}
 */
export function getModules() {
  return data
}

/**
 * @returns {string[]}
 */
export function getCategories() {
  return Array.from(new Set(Object.values(data).map(({ category }) => category)))
}

/**
 * @param {string} category
 * @returns {string[]}
 */
export function getCategoryModuleNames(category) {
  return Object.keys(getCategoryModules(category))
}

/**
 * @param {string} category
 * @returns {ModuleDoc[]}
 */
export function getCategoryModules(category) {
  return Object.keys(data)
    .filter(key => data[key].category === category)
    .reduce((obj, key) => {
      obj[key] = data[key]
      return obj
    }, {})
}
