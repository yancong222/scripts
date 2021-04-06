/***************************** 
 * Officialxpragnothing Test *
 *****************************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'OfficialXpragNothing';  // from the Builder filename that created this script
let expInfo = {'session': '002', 'participant': 'nb', '性别': '', '年龄': '', '除了中文，您还说什么语言？': '', '平日您和家人朋友交流用什么语言？': '', '您在说英语的国家生活了几年？': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(introRoutineBegin());
flowScheduler.add(introRoutineEachFrame());
flowScheduler.add(introRoutineEnd());
flowScheduler.add(Blank500RoutineBegin());
flowScheduler.add(Blank500RoutineEachFrame());
flowScheduler.add(Blank500RoutineEnd());
const trialsTrainingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsTrainingLoopBegin, trialsTrainingLoopScheduler);
flowScheduler.add(trialsTrainingLoopScheduler);
flowScheduler.add(trialsTrainingLoopEnd);
flowScheduler.add(PresstoStartRoutineBegin());
flowScheduler.add(PresstoStartRoutineEachFrame());
flowScheduler.add(PresstoStartRoutineEnd());
const trialsTestLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsTestLoopLoopBegin, trialsTestLoopLoopScheduler);
flowScheduler.add(trialsTestLoopLoopScheduler);
flowScheduler.add(trialsTestLoopLoopEnd);
flowScheduler.add(Blank500RoutineBegin());
flowScheduler.add(Blank500RoutineEachFrame());
flowScheduler.add(Blank500RoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var introClock;
var welcome;
var Iagree;
var key_space;
var Blank500Clock;
var blank;
var trainingClock;
var context_0;
var referent_0;
var utterance_0;
var feedback_0;
var true_can_0;
var explain_0;
var nextPractice;
var PresstoStartClock;
var pressme;
var key_resp;
var expClock;
var context_1;
var referent_1;
var utterance_1;
var true_can_1;
var intruct_1;
var testDone;
var endClock;
var thanks;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: '您好！欢迎参加调查实验！\n\n这项实验由32个问题组成。\n每个问题由一个语境，一副图片，和一个句子组成。\n\n您的任务是：在指定语境下，判断所给句子是否可以真实地描述图片。\n如果可以，请选择“可以”，否则请选择“不可以”。\n\n点击“我同意”会出现红三角，表示您愿意参加实验。\n\n首先，我们开始实验前的练习。练习题目有四个，您会看到提示（蓝色）。\n\n请按空格键开始。',
    font: 'Songti SC',
    units: 'norm', 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  Iagree = new visual.Slider({
    win: psychoJS.window, name: 'Iagree',
    size: [0.7, 0.1], pos: [0, (- 0.8)], units: 'norm',
    labels: ['我同意', ' '], ticks: [1, 2],
    granularity: 1, style: [visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'Songti SC', bold: true, italic: false, 
    flip: false,
  });
  
  key_space = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank500"
  Blank500Clock = new util.Clock();
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "training"
  trainingClock = new util.Clock();
  context_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'context_0',
    text: 'default text',
    font: 'Songti SC',
    units: 'norm', 
    pos: [(- 0.2), 0.8], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  referent_0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'referent_0', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.3], size : [0.7, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  utterance_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'utterance_0',
    text: 'default text',
    font: 'Songti SC',
    units: 'norm', 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  feedback_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_0',
    text: 'default text',
    font: 'Songti SC',
    units: 'norm', 
    pos: [0, (- 0.4)], height: 0.055,  wrapWidth: undefined, ori: 0,
    color: new util.Color('blue'),  opacity: 1,
    depth: -3.0 
  });
  
  true_can_0 = new visual.Slider({
    win: psychoJS.window, name: 'true_can_0',
    size: [0.7, 0.1], pos: [0, (- 0.6)], units: 'norm',
    labels: ['不可以真实描述图片', '可以真实描述图片'], ticks: [0, 1],
    granularity: 1, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'Songti SC', bold: true, italic: false, 
    flip: false,
  });
  
  explain_0 = new visual.TextStim({
    win: psychoJS.window,
    name: 'explain_0',
    text: '练习帮您了解语言中的歧义现象。点击“不可以”或“可以”会出现红点。按空格进入下题。一旦按下空格键，您将无法回到上一题！',
    font: 'Songti SC',
    units: 'norm', 
    pos: [0, (- 0.9)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('blue'),  opacity: 1,
    depth: -5.0 
  });
  
  nextPractice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PresstoStart"
  PresstoStartClock = new util.Clock();
  pressme = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressme',
    text: '现在我们进入正式的实验！请按空格键。',
    font: 'Songti SC',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp"
  expClock = new util.Clock();
  context_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'context_1',
    text: 'default text',
    font: 'Songti SC',
    units: 'norm', 
    pos: [(- 0.1), 0.6], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  referent_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'referent_1', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.7, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 256, interpolate : true, depth : -1.0 
  });
  utterance_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'utterance_1',
    text: 'default text',
    font: 'Songti SC',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  true_can_1 = new visual.Slider({
    win: psychoJS.window, name: 'true_can_1',
    size: [0.7, 0.1], pos: [0, (- 0.8)], units: 'norm',
    labels: ['不可以真实描述图片', '可以真实描述图片'], ticks: [0, 1],
    granularity: 1, style: [visual.Slider.Style.RATING],
    color: new util.Color('LightGray'), 
    fontFamily: 'Songti SC', bold: true, italic: false, 
    flip: false,
  });
  
  intruct_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'intruct_1',
    text: '按空格建进入下一题。一旦按下空格键，您将无法回到上一题！',
    font: 'Songti SC',
    units: 'norm', 
    pos: [0, (- 0.85)], height: 0.045,  wrapWidth: undefined, ori: 0,
    color: new util.Color('blue'),  opacity: 1,
    depth: -4.0 
  });
  
  testDone = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Blank500"
  Blank500Clock = new util.Clock();
  blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: '谢谢您的参与！',
    font: 'Songti SC',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_space_allKeys;
var introComponents;
function introRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'intro'-------
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Iagree.reset()
    key_space.keys = undefined;
    key_space.rt = undefined;
    _key_space_allKeys = [];
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(welcome);
    introComponents.push(Iagree);
    introComponents.push(key_space);
    
    for (const thisComponent of introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function introRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'intro'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome* updates
    if (t >= 0.0 && welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome.tStart = t;  // (not accounting for frame time here)
      welcome.frameNStart = frameN;  // exact frame index
      
      welcome.setAutoDraw(true);
    }

    
    // *Iagree* updates
    if (t >= 2.0 && Iagree.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Iagree.tStart = t;  // (not accounting for frame time here)
      Iagree.frameNStart = frameN;  // exact frame index
      
      Iagree.setAutoDraw(true);
    }

    
    // *key_space* updates
    if (t >= 3.0 && key_space.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_space.tStart = t;  // (not accounting for frame time here)
      key_space.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_space.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_space.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_space.clearEvents(); });
    }

    if (key_space.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_space.getKeys({keyList: ['space'], waitRelease: false});
      _key_space_allKeys = _key_space_allKeys.concat(theseKeys);
      if (_key_space_allKeys.length > 0) {
        key_space.keys = _key_space_allKeys[_key_space_allKeys.length - 1].name;  // just the last key pressed
        key_space.rt = _key_space_allKeys[_key_space_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'intro'-------
    for (const thisComponent of introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Iagree.response', Iagree.getRating());
    psychoJS.experiment.addData('Iagree.rt', Iagree.getRT());
    psychoJS.experiment.addData('key_space.keys', key_space.keys);
    if (typeof key_space.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_space.rt', key_space.rt);
        routineTimer.reset();
        }
    
    key_space.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Blank500Components;
function Blank500RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'Blank500'-------
    t = 0;
    Blank500Clock.reset(); // clock
    frameN = -1;
    routineTimer.add(0.050000);
    // update component parameters for each repeat
    // keep track of which components have finished
    Blank500Components = [];
    Blank500Components.push(blank);
    
    for (const thisComponent of Blank500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function Blank500RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'Blank500'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank* updates
    if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank.tStart = t;  // (not accounting for frame time here)
      blank.frameNStart = frameN;  // exact frame index
      
      blank.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.05 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Blank500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Blank500RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'Blank500'-------
    for (const thisComponent of Blank500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trialsTraining;
var currentLoop;
function trialsTrainingLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialsTraining = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'training_stim.xlsx',
    seed: undefined, name: 'trialsTraining'
  });
  psychoJS.experiment.addLoop(trialsTraining); // add the loop to the experiment
  currentLoop = trialsTraining;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrialsTraining of trialsTraining) {
    const snapshot = trialsTraining.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trainingRoutineBegin(snapshot));
    thisScheduler.add(trainingRoutineEachFrame(snapshot));
    thisScheduler.add(trainingRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsTrainingLoopEnd() {
  psychoJS.experiment.removeLoop(trialsTraining);

  return Scheduler.Event.NEXT;
}


var trialsTestLoop;
function trialsTestLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trialsTestLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'exp_stim_nothing.xlsx', '0:32'),
    seed: undefined, name: 'trialsTestLoop'
  });
  psychoJS.experiment.addLoop(trialsTestLoop); // add the loop to the experiment
  currentLoop = trialsTestLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrialsTestLoop of trialsTestLoop) {
    const snapshot = trialsTestLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(expRoutineBegin(snapshot));
    thisScheduler.add(expRoutineEachFrame(snapshot));
    thisScheduler.add(expRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsTestLoopLoopEnd() {
  psychoJS.experiment.removeLoop(trialsTestLoop);

  return Scheduler.Event.NEXT;
}


var _nextPractice_allKeys;
var trainingComponents;
function trainingRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'training'-------
    t = 0;
    trainingClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    context_0.setText(context_t);
    referent_0.setImage(pic_meaning_t);
    utterance_0.setText(utterance_t);
    feedback_0.setText(feedback_t);
    true_can_0.reset()
    nextPractice.keys = undefined;
    nextPractice.rt = undefined;
    _nextPractice_allKeys = [];
    // keep track of which components have finished
    trainingComponents = [];
    trainingComponents.push(context_0);
    trainingComponents.push(referent_0);
    trainingComponents.push(utterance_0);
    trainingComponents.push(feedback_0);
    trainingComponents.push(true_can_0);
    trainingComponents.push(explain_0);
    trainingComponents.push(nextPractice);
    
    for (const thisComponent of trainingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trainingRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'training'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *context_0* updates
    if (t >= 0.0 && context_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      context_0.tStart = t;  // (not accounting for frame time here)
      context_0.frameNStart = frameN;  // exact frame index
      
      context_0.setAutoDraw(true);
    }

    
    // *referent_0* updates
    if (t >= 1.0 && referent_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      referent_0.tStart = t;  // (not accounting for frame time here)
      referent_0.frameNStart = frameN;  // exact frame index
      
      referent_0.setAutoDraw(true);
    }

    
    // *utterance_0* updates
    if (t >= 3.0 && utterance_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      utterance_0.tStart = t;  // (not accounting for frame time here)
      utterance_0.frameNStart = frameN;  // exact frame index
      
      utterance_0.setAutoDraw(true);
    }

    
    // *feedback_0* updates
    if (t >= 7.0 && feedback_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_0.tStart = t;  // (not accounting for frame time here)
      feedback_0.frameNStart = frameN;  // exact frame index
      
      feedback_0.setAutoDraw(true);
    }

    
    // *true_can_0* updates
    if (t >= 3.0 && true_can_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      true_can_0.tStart = t;  // (not accounting for frame time here)
      true_can_0.frameNStart = frameN;  // exact frame index
      
      true_can_0.setAutoDraw(true);
    }

    
    // *explain_0* updates
    if (t >= 9.0 && explain_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      explain_0.tStart = t;  // (not accounting for frame time here)
      explain_0.frameNStart = frameN;  // exact frame index
      
      explain_0.setAutoDraw(true);
    }

    
    // *nextPractice* updates
    if (t >= 9.0 && nextPractice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextPractice.tStart = t;  // (not accounting for frame time here)
      nextPractice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { nextPractice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { nextPractice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { nextPractice.clearEvents(); });
    }

    if (nextPractice.status === PsychoJS.Status.STARTED) {
      let theseKeys = nextPractice.getKeys({keyList: ['space'], waitRelease: false});
      _nextPractice_allKeys = _nextPractice_allKeys.concat(theseKeys);
      if (_nextPractice_allKeys.length > 0) {
        nextPractice.keys = _nextPractice_allKeys[_nextPractice_allKeys.length - 1].name;  // just the last key pressed
        nextPractice.rt = _nextPractice_allKeys[_nextPractice_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trainingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainingRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'training'-------
    for (const thisComponent of trainingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('true_can_0.response', true_can_0.getRating());
    psychoJS.experiment.addData('true_can_0.rt', true_can_0.getRT());
    psychoJS.experiment.addData('nextPractice.keys', nextPractice.keys);
    if (typeof nextPractice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('nextPractice.rt', nextPractice.rt);
        routineTimer.reset();
        }
    
    nextPractice.stop();
    // the Routine "training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var PresstoStartComponents;
function PresstoStartRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'PresstoStart'-------
    t = 0;
    PresstoStartClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    PresstoStartComponents = [];
    PresstoStartComponents.push(pressme);
    PresstoStartComponents.push(key_resp);
    
    for (const thisComponent of PresstoStartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function PresstoStartRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'PresstoStart'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = PresstoStartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pressme* updates
    if (t >= 0.0 && pressme.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressme.tStart = t;  // (not accounting for frame time here)
      pressme.frameNStart = frameN;  // exact frame index
      
      pressme.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PresstoStartComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PresstoStartRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'PresstoStart'-------
    for (const thisComponent of PresstoStartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "PresstoStart" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _testDone_allKeys;
var expComponents;
function expRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'exp'-------
    t = 0;
    expClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    context_1.setText(context);
    referent_1.setImage(pic_meaning);
    utterance_1.setText(utterance);
    true_can_1.reset()
    testDone.keys = undefined;
    testDone.rt = undefined;
    _testDone_allKeys = [];
    // keep track of which components have finished
    expComponents = [];
    expComponents.push(context_1);
    expComponents.push(referent_1);
    expComponents.push(utterance_1);
    expComponents.push(true_can_1);
    expComponents.push(intruct_1);
    expComponents.push(testDone);
    
    for (const thisComponent of expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function expRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'exp'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *context_1* updates
    if (t >= 0.0 && context_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      context_1.tStart = t;  // (not accounting for frame time here)
      context_1.frameNStart = frameN;  // exact frame index
      
      context_1.setAutoDraw(true);
    }

    
    // *referent_1* updates
    if (t >= 0.0 && referent_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      referent_1.tStart = t;  // (not accounting for frame time here)
      referent_1.frameNStart = frameN;  // exact frame index
      
      referent_1.setAutoDraw(true);
    }

    
    // *utterance_1* updates
    if (t >= 0.0 && utterance_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      utterance_1.tStart = t;  // (not accounting for frame time here)
      utterance_1.frameNStart = frameN;  // exact frame index
      
      utterance_1.setAutoDraw(true);
    }

    
    // *true_can_1* updates
    if (t >= 0.0 && true_can_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      true_can_1.tStart = t;  // (not accounting for frame time here)
      true_can_1.frameNStart = frameN;  // exact frame index
      
      true_can_1.setAutoDraw(true);
    }

    
    // *intruct_1* updates
    if (t >= 5.0 && intruct_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intruct_1.tStart = t;  // (not accounting for frame time here)
      intruct_1.frameNStart = frameN;  // exact frame index
      
      intruct_1.setAutoDraw(true);
    }

    
    // *testDone* updates
    if (t >= 5.0 && testDone.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testDone.tStart = t;  // (not accounting for frame time here)
      testDone.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { testDone.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { testDone.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { testDone.clearEvents(); });
    }

    if (testDone.status === PsychoJS.Status.STARTED) {
      let theseKeys = testDone.getKeys({keyList: ['space'], waitRelease: false});
      _testDone_allKeys = _testDone_allKeys.concat(theseKeys);
      if (_testDone_allKeys.length > 0) {
        testDone.keys = _testDone_allKeys[_testDone_allKeys.length - 1].name;  // just the last key pressed
        testDone.rt = _testDone_allKeys[_testDone_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function expRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'exp'-------
    for (const thisComponent of expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('true_can_1.response', true_can_1.getRating());
    psychoJS.experiment.addData('true_can_1.rt', true_can_1.getRT());
    psychoJS.experiment.addData('testDone.keys', testDone.keys);
    if (typeof testDone.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('testDone.rt', testDone.rt);
        routineTimer.reset();
        }
    
    testDone.stop();
    // the Routine "exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(thanks);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
