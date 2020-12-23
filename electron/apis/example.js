'use strict';

const path = require('path');
const { app, shell } = require('electron');

exports.getPath = function () {
  const dir = app.getAppPath();
  ELog.info('dir:', dir);

  return dir;
}

exports.openDir = function (dir = 'D:/www/xing/electron-egg') { 
  if (!dir) {
    return false;
  }
  dir = getElectronPath(dir);
  shell.openItem(dir);

  return true;
}

function getElectronPath (filepath) {
  filepath = path.resolve(filepath);
  filepath=filepath.replace("resources",""); 
  filepath=filepath.replace("app.asar",""); 
  filepath = path.normalize(filepath);
  return filepath;
};