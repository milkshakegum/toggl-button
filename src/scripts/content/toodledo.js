/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/

'use strict';

togglbutton.render('.row:not(.toggl)', {observe: true}, function (elem) {
  var link,
    taskElem = $('.col0', elem),
    goalElem = $('.col1024', elem),
    folderElem = $('.col1', elem).firstChild,
    folderName = folderElem && folderElem.textContent;

  folderName = (folderName === "No Folder") ? "" : " - " + folderName;

  link = togglbutton.createTimerLink({
    className: 'toodledo',
    buttonType: 'minimal',
    description: taskElem.firstChild.textContent + folderName,
    projectName: goalElem && goalElem.textContent
  });

  var newElem = document.createElement('div');
  newElem.appendChild(link);
  newElem.setAttribute('style', 'float:left;width:30px;height:20px;');

  var landmarkElem = $('.subm', elem) || $('.subp', elem);
  elem.insertBefore(newElem, landmarkElem.nextSibling);
});
