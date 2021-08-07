/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

//imports
const xlsx = require('node-xlsx').default
const fs = require('fs')
const Typo = require("typo-js");

//functions
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

const parseXlsx = ({ filePath }) => {
  return new Promise((resolve, reject) => {
    try {
      const jsonData = xlsx.parse(fs.readFileSync(filePath));
      resolve(jsonData);
    } catch (e) {
      reject(e)
    }
  })
}

const checkForTypos = ({ text }) => {
  return new Promise((resolve, reject) => {
    try {
      const regex = /[\W_]/g
      const dictionary = new Typo('en_US');
      const words = text.split(/\s+/)
      const missSpelled = words.filter((word) => {
        if (regex.test(word[word.length - 1])) {
          word = word.substring(0, word.length - 1)
        }
        if (!dictionary.check(word)) {
          return word
        }
      })
      resolve(missSpelled)
    }
    catch (e) {
      reject(e)
    }
  })
}

module.exports = (on, config) => {
  on('task', { downloadFile, parseXlsx, checkForTypos })
}