/*************** 
 * Costv4 Test *
 ***************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'costV4';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
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
flowScheduler.add(IunderstandRoutineBegin());
flowScheduler.add(IunderstandRoutineEachFrame());
flowScheduler.add(IunderstandRoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
flowScheduler.add(start_2RoutineBegin());
flowScheduler.add(start_2RoutineEachFrame());
flowScheduler.add(start_2RoutineEnd());
flowScheduler.add(bosa1RoutineBegin());
flowScheduler.add(bosa1RoutineEachFrame());
flowScheduler.add(bosa1RoutineEnd());
flowScheduler.add(fb_bosa1RoutineBegin());
flowScheduler.add(fb_bosa1RoutineEachFrame());
flowScheduler.add(fb_bosa1RoutineEnd());
flowScheduler.add(bosa1RoutineBegin());
flowScheduler.add(bosa1RoutineEachFrame());
flowScheduler.add(bosa1RoutineEnd());
flowScheduler.add(fb_bosa1RoutineBegin());
flowScheduler.add(fb_bosa1RoutineEachFrame());
flowScheduler.add(fb_bosa1RoutineEnd());
flowScheduler.add(bosa2RoutineBegin());
flowScheduler.add(bosa2RoutineEachFrame());
flowScheduler.add(bosa2RoutineEnd());
flowScheduler.add(fb_bosa2RoutineBegin());
flowScheduler.add(fb_bosa2RoutineEachFrame());
flowScheduler.add(fb_bosa2RoutineEnd());
flowScheduler.add(bosa2RoutineBegin());
flowScheduler.add(bosa2RoutineEachFrame());
flowScheduler.add(bosa2RoutineEnd());
flowScheduler.add(fb_bosa2RoutineBegin());
flowScheduler.add(fb_bosa2RoutineEachFrame());
flowScheduler.add(fb_bosa2RoutineEnd());
flowScheduler.add(proceedRoutineBegin());
flowScheduler.add(proceedRoutineEachFrame());
flowScheduler.add(proceedRoutineEnd());
flowScheduler.add(bosa1RoutineBegin());
flowScheduler.add(bosa1RoutineEachFrame());
flowScheduler.add(bosa1RoutineEnd());
flowScheduler.add(practice_trial_endRoutineBegin());
flowScheduler.add(practice_trial_endRoutineEachFrame());
flowScheduler.add(practice_trial_endRoutineEnd());
flowScheduler.add(phase1RoutineBegin());
flowScheduler.add(phase1RoutineEachFrame());
flowScheduler.add(phase1RoutineEnd());
const trials_phase1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_phase1LoopBegin, trials_phase1LoopScheduler);
flowScheduler.add(trials_phase1LoopScheduler);
flowScheduler.add(trials_phase1LoopEnd);
flowScheduler.add(proceedRoutineBegin());
flowScheduler.add(proceedRoutineEachFrame());
flowScheduler.add(proceedRoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(testRoutineBegin());
flowScheduler.add(testRoutineEachFrame());
flowScheduler.add(testRoutineEnd());
flowScheduler.add(phase2RoutineBegin());
flowScheduler.add(phase2RoutineEachFrame());
flowScheduler.add(phase2RoutineEnd());
const trials_phase_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_phase_2LoopBegin, trials_phase_2LoopScheduler);
flowScheduler.add(trials_phase_2LoopScheduler);
flowScheduler.add(trials_phase_2LoopEnd);
flowScheduler.add(proceedRoutineBegin());
flowScheduler.add(proceedRoutineEachFrame());
flowScheduler.add(proceedRoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(testRoutineBegin());
flowScheduler.add(testRoutineEachFrame());
flowScheduler.add(testRoutineEnd());
flowScheduler.add(phase3RoutineBegin());
flowScheduler.add(phase3RoutineEachFrame());
flowScheduler.add(phase3RoutineEnd());
const trials_phase3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_phase3LoopBegin, trials_phase3LoopScheduler);
flowScheduler.add(trials_phase3LoopScheduler);
flowScheduler.add(trials_phase3LoopEnd);
flowScheduler.add(proceedRoutineBegin());
flowScheduler.add(proceedRoutineEachFrame());
flowScheduler.add(proceedRoutineEnd());
flowScheduler.add(blankRoutineBegin());
flowScheduler.add(blankRoutineEachFrame());
flowScheduler.add(blankRoutineEnd());
flowScheduler.add(testRoutineBegin());
flowScheduler.add(testRoutineEachFrame());
flowScheduler.add(testRoutineEnd());
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.3';
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
var key_resp;
var IunderstandClock;
var blankClock;
var blank500ms;
var instructionClock;
var text_2;
var polygon;
var polygonblack;
var text_3;
var text_4;
var text_6;
var key_resp_2;
var text_7;
var start_2Clock;
var text1;
var mouse;
var bosa1Clock;
var key_resp_bosa;
var blicket1_11;
var blicket_st_b15_5;
var blicket_st_w15_6;
var option1_critical_14;
var option2_critical_14;
var fb_bosa1Clock;
var msg1;
var msg0;
var msg;
var feedback1_zud1_2;
var feedback0_zud1_2;
var feedback_zud01_2;
var bosa2Clock;
var key_resp_bosa2;
var blicket1_13;
var blicket_st_b15_7;
var blicket_st_w15_8;
var option1_critical_16;
var option2_critical_16;
var fb_bosa2Clock;
var feedback1_zud1_3;
var feedback0_zud1_3;
var feedback_zud01_3;
var proceedClock;
var text2;
var mouse_2;
var practice_trial_endClock;
var text_5;
var key_resp_3;
var phase1Clock;
var text;
var zud1Clock;
var zud1_corr2;
var star_1;
var triangle_1;
var cross_1;
var option1_01;
var option2_01;
var option3_01;
var key_resp_zud1;
var fb_zud1Clock;
var feedback1_zud1;
var feedback0_zud1;
var feedback_zud01;
var zud2Clock;
var zud2_corr1;
var triangle_2;
var star_2;
var cross_2;
var key_resp_zud2;
var option1_02;
var option2_02;
var option3_02;
var fb_zud2Clock;
var feedback1_zud2;
var feedback0_zud2;
var feedback_zud02;
var zud3Clock;
var zud3_corr1;
var triangle_3;
var star_3;
var cross_3;
var key_resp_zud3;
var option1_03;
var option2_03;
var option3_03;
var fb_zud3Clock;
var feedback1_zud3;
var feedback0_zud3;
var feedback_zud03;
var zud4Clock;
var zud4_corr1;
var triangle_4;
var star_4;
var cross_4;
var key_resp_zud4;
var option1_04;
var option2_04;
var option3_04;
var fb_zud4Clock;
var feedback1_zud4;
var feedback0_zud4;
var feedback_zud04;
var zud5Clock;
var zud5_corr3;
var star_5;
var cross_5;
var rectangle_5;
var key_resp_zud5;
var option1_05;
var option2_05;
var option3_05;
var fb_zud5Clock;
var feedback1_zud5;
var feedback0_zud5;
var feedback_zud5;
var zud6Clock;
var zud6_corr3;
var star_6;
var cross_6;
var rectangle_6;
var key_resp_zud6;
var option1_06;
var option2_06;
var option3_06;
var fb_zud6Clock;
var feedback1_zud6;
var feedback0_zud6;
var feedback_zud6;
var zud7Clock;
var zud7_corr1;
var rectangle_7;
var cross_7;
var star_7;
var key_resp_zud7;
var option1_07;
var option2_07;
var option3_07;
var fb_zud7Clock;
var feedback1_zud7;
var feedback0_zud7;
var feedback_zud7;
var zud8Clock;
var zud8_corr2;
var star_8;
var rectangle_8;
var cross_8;
var key_resp_zud8;
var option1_9;
var option2_9;
var option3_8;
var fb_zud8Clock;
var feedback1_zud8;
var feedback0_zud8;
var feedback_zud8;
var T1_corr1Clock;
var key_resp_t1;
var t1_zud;
var t1_triangle1;
var t1_rectangle1;
var option1_critical;
var option2_critical;
var T1_corr1_2Clock;
var key_resp_t1_2;
var t1_zud_2;
var t1_triangle1_2;
var t1_rectangle1_2;
var option1_critical_2;
var option2_critical_2;
var testClock;
var key_resp_t1_3;
var t1_zud_3;
var t1_triangle1_3;
var t1_rectangle1_3;
var option1_critical_13;
var option2_critical_13;
var phase2Clock;
var p2;
var dax9Clock;
var dax9_corr2;
var star_9;
var triange_9;
var cross_9;
var key_resp_dax9;
var option1;
var option2;
var option3;
var fb_dax9Clock;
var feedback1_dax9;
var feedback0_dax9;
var feedback_dax9;
var dax10Clock;
var dax10_corr1;
var triangle_10;
var cross_10;
var star_10;
var key_resp_dax10;
var option1_8;
var option2_8;
var option3_10;
var fb_dax10Clock;
var feedback1_dax9_2;
var feedback0_dax9_2;
var feedback_dax9_2;
var dax11Clock;
var dax11_corr3;
var star_11;
var cross_11;
var triangle_11;
var key_resp_dax11;
var option1_6;
var option2_6;
var option3_6;
var fb_dax11Clock;
var feedback1_dax9_3;
var feedback0_dax9_3;
var feedback_dax9_3;
var dax12Clock;
var dax11_corr2;
var star_12;
var tr_12;
var cr_12;
var key_resp_dax12;
var option1_7;
var option2_7;
var option3_7;
var fb_dax12Clock;
var feedback1_dax9_4;
var feedback0_dax9_4;
var feedback_dax9_4;
var blicket13Clock;
var key_resp_blicket13;
var blicket1;
var blicket_st_w;
var blicket_st_b;
var option1_critical_3;
var option2_critical_3;
var fb_blicket13Clock;
var feedback1_dax9_5;
var feedback0_dax9_5;
var feedback_dax9_5;
var blicket14Clock;
var key_resp_blicket14;
var blicket1_2;
var blicket_st_w_2;
var blicket_st_b_2;
var option1_critical_4;
var option2_critical_4;
var fb_blicket14Clock;
var feedback1_dax9_6;
var feedback0_dax9_6;
var feedback_dax9_6;
var blicket15Clock;
var key_resp_blicket15;
var blicket1_3;
var blicket_st_b15;
var blicket_st_w15;
var option1_critical_5;
var option2_critical_5;
var fb_blicket15Clock;
var feedback1_dax9_7;
var feedback0_dax9_7;
var feedback_dax9_7;
var blicket16Clock;
var key_resp_blicket16;
var blicket1_4;
var blicket_st_b15_2;
var blicket_st_w15_2;
var option1_critical_6;
var option2_critical_6;
var fb_blicket16Clock;
var feedback1_dax9_8;
var feedback0_dax9_8;
var feedback_dax9_8;
var smicket17Clock;
var key_resp_smicket17;
var blicket1_5;
var blicket_st_w_3;
var blicket_st_b_3;
var option1_critical_7;
var option2_critical_7;
var fb_smicket17Clock;
var feedback1_dax9_9;
var feedback0_dax9_9;
var feedback_dax9_9;
var smicket18Clock;
var key_resp_smicket18;
var blicket1_6;
var blicket_st_w_4;
var blicket_st_b_4;
var option1_critical_8;
var option2_critical_8;
var fb_smicket18Clock;
var feedback1_dax9_10;
var feedback0_dax9_10;
var feedback_dax9_10;
var smicket19Clock;
var key_resp_smicket19;
var blicket1_7;
var blicket_st_b15_3;
var blicket_st_w15_3;
var option1_critical_9;
var option2_critical_9;
var fb_smicket19Clock;
var feedback1_dax9_11;
var feedback0_dax9_11;
var feedback_dax9_11;
var smicket20Clock;
var key_resp_smicket20;
var blicket1_8;
var blicket_st_b20;
var blicket_st_w15_4;
var option1_critical_10;
var option2_critical_10;
var fb_smicket20Clock;
var feedback1_dax9_12;
var feedback0_dax9_12;
var feedback_dax9_12;
var blicketfep21Clock;
var dax9_corr2_2;
var star_13;
var triange;
var cross_12;
var key_resp_blicketfep21;
var option1_2;
var option2_2;
var option3_2;
var fb_blicketfep21Clock;
var feedback1_dax9_13;
var feedback0_dax9_13;
var feedback_dax9_13;
var blicketfep22Clock;
var dax9_corr2_3;
var star_14;
var triange_2;
var cross_13;
var key_resp_blicketfep22;
var option1_3;
var option2_3;
var option3_3;
var fb_blicketfep22Clock;
var feedback1_dax9_14;
var feedback0_dax9_14;
var feedback_dax9_14;
var blicketfep23Clock;
var dax9_corr2_4;
var star_15;
var triange_3;
var cross_14;
var key_resp_blicketfep23;
var option1_4;
var option2_4;
var option3_4;
var fb_blicketfep23Clock;
var feedback1_dax9_15;
var feedback0_dax9_15;
var feedback_dax9_15;
var blicketfep24Clock;
var dax9_corr2_5;
var star_16;
var triange_4;
var cross_15;
var key_resp_blicketfep24;
var option1_5;
var option2_5;
var option3_5;
var fb_blicketfep24Clock;
var feedback1_dax9_16;
var feedback0_dax9_16;
var feedback_dax9_16;
var smicketfep25Clock;
var dax9_corr2_6;
var star_17;
var triange_5;
var cross_16;
var key_resp_smicketfep25;
var option1_12;
var option2_12;
var option3_11;
var fb_smicketfep25Clock;
var feedback1_dax9_17;
var feedback0_dax9_17;
var feedback_dax9_17;
var smicketfep26Clock;
var dax9_corr2_7;
var star_18;
var triange_6;
var cross_17;
var key_resp_smicketfep26;
var option1_13;
var option2_13;
var option3_12;
var fb_smicketfep26Clock;
var feedback1_dax9_18;
var feedback0_dax9_18;
var feedback_dax9_18;
var smicketfep27Clock;
var dax9_corr2_8;
var star_19;
var triange_7;
var cross_18;
var key_resp_smicketfep27;
var option1_14;
var option2_14;
var option3_13;
var fb_smicketfep27Clock;
var feedback1_dax9_19;
var feedback0_dax9_19;
var feedback_dax9_19;
var smicketfep28Clock;
var dax9_corr2_9;
var star_20;
var triange_8;
var cross_19;
var key_resp_smicketfep28;
var option1_15;
var option2_15;
var option3_14;
var fb_smicketfep28Clock;
var feedback1_dax9_20;
var feedback0_dax9_20;
var feedback_dax9_20;
var dax12test2Clock;
var dax11_corr2_2;
var star_21;
var tr;
var cr;
var key_resp_dax12_2;
var option1_16;
var option2_16;
var option3_15;
var blicket15test2Clock;
var key_resp_blicket15_2;
var blicket1_9;
var blicket_st_b15_4;
var blicket_st_w15_5;
var option1_critical_11;
var option2_critical_11;
var smicket18test2Clock;
var key_resp_smicket18_2;
var blicket1_10;
var blicket_st_w_5;
var blicket_st_b_5;
var option1_critical_12;
var option2_critical_12;
var blicketfep21test2Clock;
var dax9_corr2_10;
var star_22;
var triange_10;
var cross_20;
var key_resp_blicketfep21_2;
var option1_17;
var option2_17;
var option3_16;
var smicketfep27test2Clock;
var dax9_corr2_11;
var star_23;
var triange_11;
var cross_21;
var key_resp_smicketfep27_2;
var option1_18;
var option2_18;
var option3_17;
var phase3Clock;
var p3;
var tas29Clock;
var dax9_corr2_12;
var star_24;
var triange_12;
var cross_22;
var key_resp_tas29;
var option1_19;
var option2_19;
var option3_18;
var fb_tas29Clock;
var feedback1_dax9_21;
var feedback0_dax9_21;
var feedback_dax9_21;
var tas30Clock;
var dax9_corr2_13;
var star_25;
var triange_13;
var cross_23;
var key_resp_tas30;
var option1_20;
var option2_20;
var option3_19;
var fb_tas30Clock;
var feedback1_dax9_22;
var feedback0_dax9_22;
var feedback_dax9_22;
var tas31Clock;
var dax9_corr2_14;
var star_26;
var triange_14;
var cross_24;
var key_resp_tas31;
var option1_21;
var option2_21;
var option3_20;
var fb_tas31Clock;
var feedback1_dax9_23;
var feedback0_dax9_23;
var feedback_dax9_23;
var tas32Clock;
var dax9_corr2_15;
var star_27;
var triange_15;
var cross_25;
var key_resp_tas32;
var option1_22;
var option2_22;
var option3_21;
var fb_tas32Clock;
var feedback1_dax9_24;
var feedback0_dax9_24;
var feedback_dax9_24;
var test2dax9Clock;
var dax9_corr2_16;
var star_28;
var triange_16;
var cross_26;
var key_resp_dax9_2;
var option1_23;
var option2_23;
var option3_22;
var test2tas32Clock;
var dax9_corr2_17;
var star_29;
var triange_17;
var cross_27;
var key_resp_tas32_2;
var option1_24;
var option2_24;
var option3_23;
var endClock;
var thankyou;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "intro"
  introClock = new util.Clock();
  welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome',
    text: 'Please consider this information carefully before deciding whether to participate in this research:\n\nWe invite you to participate in a research study related to language.\n\nIf you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time. However, please note that in order to validate your participation you need to complete the experiment and wait until the results are sent (this should only take a few seconds); otherwise, we have no way to ensure that you participated at all. There are no risks or benefits of any kind involved in this study. You will be paid for your participation at the posted rate.\n\nYour participation in this study will remain confidential. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.\n\nPress space bar to continue.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Iunderstand"
  IunderstandClock = new util.Clock();
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  blank500ms = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank500ms',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Suppose you are on Mars, and in order to communicte with aliens, you will learn their language. You will learn by feedback. You will see displays with fake words. They are used for describing colors and shapes, which are illustrated by the images.\n\nBelow is a group of word and images. Your task is to guess the meaning and to decide which image the word refers to.\n\nExample: word "bosa". It can be USED BY ITSELF to refer to a colored shape.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  polygon = new visual.Polygon ({
    win: psychoJS.window, name: 'polygon', 
    edges: 5, size:[0.1, 0.1],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  polygonblack = new visual.Polygon ({
    win: psychoJS.window, name: 'polygonblack', 
    edges: 5, size:[0.1, 0.1],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'For this example, suppose "bosa" means empty or white, when you TYPE 1 on your keyboard, you receive feedback "Correct".\n\nFor the learning part, you will receive prompts "Correct"/"Incorrect". Sometimes you will be tested on the words you have learned. You will not receive any feedback.\n\nSometimes, the task will seem very easy. Sometimes, it will seem trickier if not entirely arbitrary. This is not an IQ test and there may not always be a proper, unambiguous answer. What matters the most to us is that you follow your instinct and report your intuition, especially in these cases where it seems that you have to guess.\n\nPress SPACE bar to start the PRACTICE.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'bosa',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "start_2"
  start_2Clock = new util.Clock();
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: 'Please TYPE your answer using  keyboard.\n\nAllowed Keys: 1, 2, 3\n\nYou will receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('purple'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "bosa1"
  bosa1Clock = new util.Clock();
  key_resp_bosa = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_11',
    text: 'bosa',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_b15_5 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_b15_5', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_w15_6 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_w15_6', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_14',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_14',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_bosa1"
  fb_bosa1Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud1_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud1_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud01_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud01_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "bosa1"
  bosa1Clock = new util.Clock();
  key_resp_bosa = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_11',
    text: 'bosa',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_b15_5 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_b15_5', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_w15_6 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_w15_6', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_14',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_14',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_bosa1"
  fb_bosa1Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud1_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud1_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud01_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud01_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "bosa2"
  bosa2Clock = new util.Clock();
  key_resp_bosa2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_13',
    text: 'bosa',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_b15_7 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_b15_7', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_w15_8 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_w15_8', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_16',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_16',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_bosa2"
  fb_bosa2Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud1_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud1_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud01_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud01_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "bosa2"
  bosa2Clock = new util.Clock();
  key_resp_bosa2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_13',
    text: 'bosa',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_b15_7 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_b15_7', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_w15_8 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_w15_8', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_16',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_16',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_bosa2"
  fb_bosa2Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud1_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud1_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud01_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud01_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "proceed"
  proceedClock = new util.Clock();
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'You will NOT receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkorange'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "bosa1"
  bosa1Clock = new util.Clock();
  key_resp_bosa = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_11',
    text: 'bosa',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_b15_5 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_b15_5', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_w15_6 = new visual.Polygon ({
    win: psychoJS.window, name: 'blicket_st_w15_6', 
    edges: 5, size:[0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_14',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_14',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "practice_trial_end"
  practice_trial_endClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'This is the end of the practice! \n\nNow let’s start the real experiment!\n\nPress spacebar to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "phase1"
  phase1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('blue'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "start_2"
  start_2Clock = new util.Clock();
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: 'Please TYPE your answer using  keyboard.\n\nAllowed Keys: 1, 2, 3\n\nYou will receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('purple'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  blank500ms = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank500ms',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "zud1"
  zud1Clock = new util.Clock();
  zud1_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud1_corr2',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_1', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triangle_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_1', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_1', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_01',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_01',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option3_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_01',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  key_resp_zud1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fb_zud1"
  fb_zud1Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud01',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud2"
  zud2Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud2_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud2_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_2', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  star_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_2', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_2', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_02',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_02',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_02',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud2"
  fb_zud2Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud02',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud3"
  zud3Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud3_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud3_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_3', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  star_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_3', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_3', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_03',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_03',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_03',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud3"
  fb_zud3Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud03',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud4"
  zud4Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud4_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud4_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_4', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  star_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_4', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_4', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_04',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_04',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_04',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud4"
  fb_zud4Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud04',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud5"
  zud5Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud5_corr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud5_corr3',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_5', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_5', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  rectangle_5 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_5', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_05',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_05',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_05',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud5"
  fb_zud5Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud6"
  zud6Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud6_corr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud6_corr3',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_6', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_6', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  rectangle_6 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_6', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_06',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_06',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_06',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud6"
  fb_zud6Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud7"
  zud7Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud7_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud7_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rectangle_7 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_7', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_7', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  star_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_7', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_07',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_07',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_07',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud7"
  fb_zud7Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud8"
  zud8Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud8_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud8_corr2',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_8', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  rectangle_8 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_8', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_8', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_9',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_9',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_8',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud8"
  fb_zud8Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "proceed"
  proceedClock = new util.Clock();
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'You will NOT receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkorange'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "T1_corr1"
  T1_corr1Clock = new util.Clock();
  key_resp_t1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  t1_zud = new visual.TextStim({
    win: psychoJS.window,
    name: 't1_zud',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  t1_triangle1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 't1_triangle1', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  t1_rectangle1 = new visual.Rect ({
    win: psychoJS.window, name: 't1_rectangle1', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  option1_critical = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_critical = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "T1_corr1_2"
  T1_corr1_2Clock = new util.Clock();
  key_resp_t1_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  t1_zud_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 't1_zud_2',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  t1_triangle1_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 't1_triangle1_2', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  t1_rectangle1_2 = new visual.Rect ({
    win: psychoJS.window, name: 't1_rectangle1_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  option1_critical_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_2',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_critical_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_2',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "proceed"
  proceedClock = new util.Clock();
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'You will NOT receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkorange'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  blank500ms = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank500ms',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  key_resp_t1_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  t1_zud_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 't1_zud_3',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  t1_triangle1_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 't1_triangle1_3', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  t1_rectangle1_3 = new visual.Rect ({
    win: psychoJS.window, name: 't1_rectangle1_3', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_13',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_13',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "phase2"
  phase2Clock = new util.Clock();
  p2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('blue'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "start_2"
  start_2Clock = new util.Clock();
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: 'Please TYPE your answer using  keyboard.\n\nAllowed Keys: 1, 2, 3\n\nYou will receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('purple'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "zud1"
  zud1Clock = new util.Clock();
  zud1_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud1_corr2',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_1', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triangle_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_1', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_1', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_01',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_01',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option3_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_01',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  key_resp_zud1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fb_zud1"
  fb_zud1Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud01',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud2"
  zud2Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud2_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud2_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_2', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  star_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_2', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_2', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_02',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_02',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_02',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud2"
  fb_zud2Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud02',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud3"
  zud3Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud3_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud3_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_3', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  star_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_3', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_3', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_03',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_03',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_03',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud3"
  fb_zud3Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud03',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud4"
  zud4Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud4_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud4_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_4', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  star_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_4', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_4', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_04',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_04',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_04',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud4"
  fb_zud4Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud04',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud5"
  zud5Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud5_corr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud5_corr3',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_5', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_5', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  rectangle_5 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_5', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_05',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_05',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_05',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud5"
  fb_zud5Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud6"
  zud6Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud6_corr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud6_corr3',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_6', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_6', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  rectangle_6 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_6', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_06',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_06',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_06',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud6"
  fb_zud6Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud7"
  zud7Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud7_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud7_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rectangle_7 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_7', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_7', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  star_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_7', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_07',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_07',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_07',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud7"
  fb_zud7Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud8"
  zud8Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud8_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud8_corr2',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_8', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  rectangle_8 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_8', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_8', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_9',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_9',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_8',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud8"
  fb_zud8Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "dax9"
  dax9Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax9_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_9', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_9', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_9', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_dax9"
  fb_dax9Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "dax10"
  dax10Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax10_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax10_corr1',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_10', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_10', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  star_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_10', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_8',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_8',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_10',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_dax10"
  fb_dax10Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "dax11"
  dax11Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax11_corr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax11_corr3',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_11', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_11', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  triangle_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_11', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_6',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_6',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_6',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_dax11"
  fb_dax11Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "dax12"
  dax12Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax11_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax11_corr2',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_12', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  tr_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'tr_12', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cr_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cr_12', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_7',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_7',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_7',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_dax12"
  fb_dax12Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "blicket13"
  blicket13Clock = new util.Clock();
  key_resp_blicket13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1',
    text: 'blicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_w = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_w', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_b = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_b', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_3',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_3',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_blicket13"
  fb_blicket13Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "blicket14"
  blicket14Clock = new util.Clock();
  key_resp_blicket14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_2',
    text: 'blicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_w_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_w_2', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_b_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_b_2', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_4',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_4',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_blicket14"
  fb_blicket14Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "blicket15"
  blicket15Clock = new util.Clock();
  key_resp_blicket15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_3',
    text: 'blicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_b15 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_b15', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_w15 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_w15', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_5',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_5',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_blicket15"
  fb_blicket15Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "blicket16"
  blicket16Clock = new util.Clock();
  key_resp_blicket16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_4',
    text: 'blicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_b15_2 = new visual.Rect ({
    win: psychoJS.window, name: 'blicket_st_b15_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_w15_2 = new visual.Rect ({
    win: psychoJS.window, name: 'blicket_st_w15_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_6',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_6',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_blicket16"
  fb_blicket16Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "smicket17"
  smicket17Clock = new util.Clock();
  key_resp_smicket17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_5',
    text: 'smicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_w_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_w_3', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_b_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_b_3', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_7',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_7',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_smicket17"
  fb_smicket17Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "smicket18"
  smicket18Clock = new util.Clock();
  key_resp_smicket18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_6',
    text: 'smicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_w_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_w_4', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_b_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_b_4', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_8',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_8',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_smicket18"
  fb_smicket18Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_10',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "smicket19"
  smicket19Clock = new util.Clock();
  key_resp_smicket19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_7',
    text: 'smicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_b15_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_b15_3', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_w15_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_w15_3', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_9',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_9',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_smicket19"
  fb_smicket19Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_11',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "smicket20"
  smicket20Clock = new util.Clock();
  key_resp_smicket20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_8',
    text: 'smicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  blicket_st_b20 = new visual.Rect ({
    win: psychoJS.window, name: 'blicket_st_b20', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  blicket_st_w15_4 = new visual.Rect ({
    win: psychoJS.window, name: 'blicket_st_w15_4', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_10',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_10',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "fb_smicket20"
  fb_smicket20Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "blicketfep21"
  blicketfep21Clock = new util.Clock();
  dax9_corr2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_2',
    text: 'blicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_13 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_13', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triange = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_12 = new visual.Rect ({
    win: psychoJS.window, name: 'cross_12', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  key_resp_blicketfep21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_2',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_2',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option3_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_2',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "fb_blicketfep21"
  fb_blicketfep21Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_13',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "blicketfep22"
  blicketfep22Clock = new util.Clock();
  dax9_corr2_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_3',
    text: 'blicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_14 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_14', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triange_2 = new visual.Rect ({
    win: psychoJS.window, name: 'triange_2', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_13 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_13', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  key_resp_blicketfep22 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_3',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_3',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option3_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_3',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "fb_blicketfep22"
  fb_blicketfep22Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_14',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_14',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_14',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "blicketfep23"
  blicketfep23Clock = new util.Clock();
  dax9_corr2_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_4',
    text: 'blicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_15 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_15', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triange_3 = new visual.Rect ({
    win: psychoJS.window, name: 'triange_3', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_14 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_14', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  key_resp_blicketfep23 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_4',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_4',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option3_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_4',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "fb_blicketfep23"
  fb_blicketfep23Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_15',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_15',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_15',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "blicketfep24"
  blicketfep24Clock = new util.Clock();
  dax9_corr2_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_5',
    text: 'blicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_16 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_16', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triange_4 = new visual.Rect ({
    win: psychoJS.window, name: 'triange_4', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_15 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_15', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  key_resp_blicketfep24 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_5',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_5',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option3_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_5',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "fb_blicketfep24"
  fb_blicketfep24Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_16',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_16',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_16',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "smicketfep25"
  smicketfep25Clock = new util.Clock();
  dax9_corr2_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_6',
    text: 'smicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_17 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_17', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triange_5 = new visual.Rect ({
    win: psychoJS.window, name: 'triange_5', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_16 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_16', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  key_resp_smicketfep25 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_12',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_12',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option3_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_11',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "fb_smicketfep25"
  fb_smicketfep25Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_17',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_17',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_17',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "smicketfep26"
  smicketfep26Clock = new util.Clock();
  dax9_corr2_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_7',
    text: 'smicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_18 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_18', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triange_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_6', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_17 = new visual.Rect ({
    win: psychoJS.window, name: 'cross_17', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  key_resp_smicketfep26 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_13',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_13',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option3_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_12',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "fb_smicketfep26"
  fb_smicketfep26Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_18',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_18',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_18',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "smicketfep27"
  smicketfep27Clock = new util.Clock();
  dax9_corr2_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_8',
    text: 'smicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_19 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_19', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triange_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_7', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_18 = new visual.Rect ({
    win: psychoJS.window, name: 'cross_18', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  key_resp_smicketfep27 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_14',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_14',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option3_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_13',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "fb_smicketfep27"
  fb_smicketfep27Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_19',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_19',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_19',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "smicketfep28"
  smicketfep28Clock = new util.Clock();
  dax9_corr2_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_9',
    text: 'smicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_20 = new visual.Rect ({
    win: psychoJS.window, name: 'star_20', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triange_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_8', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_19 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_19', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  key_resp_smicketfep28 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_15',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_15',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option3_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_14',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "fb_smicketfep28"
  fb_smicketfep28Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_20',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_20',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_20',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "proceed"
  proceedClock = new util.Clock();
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'You will NOT receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkorange'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "dax12test2"
  dax12test2Clock = new util.Clock();
  dax11_corr2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax11_corr2_2',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_21 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_21', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  tr = new visual.ShapeStim ({
    win: psychoJS.window, name: 'tr', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cr = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cr', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax12_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_16',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_16',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_15',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "blicket15test2"
  blicket15test2Clock = new util.Clock();
  key_resp_blicket15_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_9',
    text: 'blicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  blicket_st_b15_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_b15_4', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  blicket_st_w15_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_w15_5', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  option1_critical_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_11',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_critical_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_11',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "smicket18test2"
  smicket18test2Clock = new util.Clock();
  key_resp_smicket18_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  blicket1_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blicket1_10',
    text: 'smicket',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  blicket_st_w_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_w_5', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  blicket_st_b_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'blicket_st_b_5', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  option1_critical_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_12',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option2_critical_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_12',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "blicketfep21test2"
  blicketfep21test2Clock = new util.Clock();
  dax9_corr2_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_10',
    text: 'blicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_22 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_22', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_10', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_20 = new visual.Rect ({
    win: psychoJS.window, name: 'cross_20', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_blicketfep21_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_17',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_17',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_16',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "smicketfep27test2"
  smicketfep27test2Clock = new util.Clock();
  dax9_corr2_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_11',
    text: 'smicket fep',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_23 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_23', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_11', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_21 = new visual.Rect ({
    win: psychoJS.window, name: 'cross_21', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_smicketfep27_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_18',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_18',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_17',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "proceed"
  proceedClock = new util.Clock();
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'You will NOT receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkorange'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  blank500ms = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank500ms',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  key_resp_t1_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  t1_zud_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 't1_zud_3',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  t1_triangle1_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 't1_triangle1_3', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  t1_rectangle1_3 = new visual.Rect ({
    win: psychoJS.window, name: 't1_rectangle1_3', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_13',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_13',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "phase3"
  phase3Clock = new util.Clock();
  p3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'p3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('blue'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "start_2"
  start_2Clock = new util.Clock();
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: 'Please TYPE your answer using  keyboard.\n\nAllowed Keys: 1, 2, 3\n\nYou will receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('purple'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "zud1"
  zud1Clock = new util.Clock();
  zud1_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud1_corr2',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  star_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_1', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  triangle_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_1', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_1 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_1', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_01',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_01',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  option3_01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_01',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  key_resp_zud1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fb_zud1"
  fb_zud1Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud01 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud01',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud2"
  zud2Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud2_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud2_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_2', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  star_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_2', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_2', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_02',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_02',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_02',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud2"
  fb_zud2Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud02 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud02',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud3"
  zud3Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud3_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud3_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_3', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  star_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_3', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_3', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_03',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_03',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_03',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud3"
  fb_zud3Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud03 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud03',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud4"
  zud4Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud4_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud4_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_4', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  star_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_4', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_4', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_04',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_04',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_04',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud4"
  fb_zud4Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud04 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud04',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud5"
  zud5Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud5_corr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud5_corr3',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_5', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_5', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  rectangle_5 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_5', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_05',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_05',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_05 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_05',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud5"
  fb_zud5Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud6"
  zud6Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud6_corr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud6_corr3',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_6', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_6', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  rectangle_6 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_6', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_06',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_06',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_06 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_06',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud6"
  fb_zud6Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud7"
  zud7Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud7_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud7_corr1',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rectangle_7 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_7', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_7', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  star_7 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_7', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_07',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_07',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_07 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_07',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud7"
  fb_zud7Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "zud8"
  zud8Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  zud8_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'zud8_corr2',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_8', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  rectangle_8 = new visual.Rect ({
    win: psychoJS.window, name: 'rectangle_8', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_8 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_8', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_zud8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_9',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_9',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_8',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_zud8"
  fb_zud8Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_zud8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_zud8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_zud8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_zud8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_zud8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_zud8',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "dax9"
  dax9Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax9_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_9', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_9', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_9', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_dax9"
  fb_dax9Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "dax10"
  dax10Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax10_corr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax10_corr1',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  triangle_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_10', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_10', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  star_10 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_10', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_8',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_8',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_10',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_dax10"
  fb_dax10Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "dax11"
  dax11Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax11_corr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax11_corr3',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_11', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cross_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_11', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  triangle_11 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triangle_11', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_6',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_6',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_6',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_dax11"
  fb_dax11Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "dax12"
  dax12Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax11_corr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax11_corr2',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_12', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  tr_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'tr_12', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cr_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cr_12', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_7',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_7',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_7',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_dax12"
  fb_dax12Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "tas29"
  tas29Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax9_corr2_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_12',
    text: 'tas',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_24 = new visual.Rect ({
    win: psychoJS.window, name: 'star_24', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_12 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_12', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_22 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_22', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_tas29 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_19',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_19',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_18',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_tas29"
  fb_tas29Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_21',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_21',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_21',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "tas30"
  tas30Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax9_corr2_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_13',
    text: 'tas',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_25 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_25', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_13 = new visual.Rect ({
    win: psychoJS.window, name: 'triange_13', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_23 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_23', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_tas30 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_20',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_20',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_19',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_tas30"
  fb_tas30Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_22',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_22',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_22',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "tas31"
  tas31Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax9_corr2_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_14',
    text: 'tas',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_26 = new visual.Rect ({
    win: psychoJS.window, name: 'star_26', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_14 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_14', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_24 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_24', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_tas31 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_21',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_21',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_20',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_tas31"
  fb_tas31Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_23',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_23',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_23',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "tas32"
  tas32Clock = new util.Clock();
  msg1 = "yeah!";
  msg0 = "doh!";
  
  dax9_corr2_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_15',
    text: 'tas',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_27 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_27', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_15 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_15', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_25 = new visual.Rect ({
    win: psychoJS.window, name: 'cross_25', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_tas32 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_22',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_22',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_21',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "fb_tas32"
  fb_tas32Clock = new util.Clock();
  msg1 = "";
  msg0 = "";
  msg = "";
  
  feedback1_dax9_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback1_dax9_24',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkgreen'),  opacity: undefined,
    depth: -1.0 
  });
  
  feedback0_dax9_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback0_dax9_24',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -2.0 
  });
  
  feedback_dax9_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_dax9_24',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkred'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "proceed"
  proceedClock = new util.Clock();
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'You will NOT receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkorange'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "test2dax9"
  test2dax9Clock = new util.Clock();
  dax9_corr2_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_16',
    text: 'dax',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_28 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_28', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_16 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_16', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_26 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_26', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_dax9_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_23',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_23',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_22',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "test2tas32"
  test2tas32Clock = new util.Clock();
  dax9_corr2_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dax9_corr2_17',
    text: 'tas',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  star_29 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'star_29', 
    vertices: 'cross', size:[0.2, 0.2],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  triange_17 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'triange_17', 
    vertices: 'star7', size: [0.2, 0.2],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cross_27 = new visual.Rect ({
    win: psychoJS.window, name: 'cross_27', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  key_resp_tas32_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  option1_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_24',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.5), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  option2_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_24',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  option3_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option3_23',
    text: '3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.5, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "proceed"
  proceedClock = new util.Clock();
  text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text2',
    text: 'You will NOT receive feedbacks in the next few trials.\n\nClick anywhere to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('darkorange'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  blank500ms = new visual.TextStim({
    win: psychoJS.window,
    name: 'blank500ms',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  key_resp_t1_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  t1_zud_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 't1_zud_3',
    text: 'zud',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  t1_triangle1_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 't1_triangle1_3', 
    vertices: [[-[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [+[0.2, 0.2][0]/2.0, -[0.2, 0.2][1]/2.0], [0, [0.2, 0.2][1]/2.0]],
    ori: 0.0, pos: [(- 0.2), 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  t1_rectangle1_3 = new visual.Rect ({
    win: psychoJS.window, name: 't1_rectangle1_3', 
    width: [0.2, 0.2][0], height: [0.2, 0.2][1],
    ori: 0.0, pos: [0.2, 0],
    lineWidth: 1.0, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  option1_critical_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option1_critical_13',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  option2_critical_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'option2_critical_13',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  thankyou = new visual.TextStim({
    win: psychoJS.window,
    name: 'thankyou',
    text: 'Thank you for your participation',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_allKeys;
var introComponents;
function introRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'intro'-------
    t = 0;
    introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    introComponents = [];
    introComponents.push(welcome);
    introComponents.push(key_resp);
    
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function introRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'intro'-------
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
    introComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'intro'-------
    introComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var IunderstandComponents;
function IunderstandRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Iunderstand'-------
    t = 0;
    IunderstandClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    IunderstandComponents = [];
    
    IunderstandComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IunderstandRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Iunderstand'-------
    // get current time
    t = IunderstandClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IunderstandComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IunderstandRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Iunderstand'-------
    IunderstandComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Iunderstand" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blankComponents;
function blankRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blank'-------
    t = 0;
    blankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blankComponents = [];
    blankComponents.push(blank500ms);
    
    blankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blankRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blank'-------
    // get current time
    t = blankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blank500ms* updates
    if (t >= 0.0 && blank500ms.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blank500ms.tStart = t;  // (not accounting for frame time here)
      blank500ms.frameNStart = frameN;  // exact frame index
      
      blank500ms.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blank500ms.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blank500ms.setAutoDraw(false);
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
    blankComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blankRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blank'-------
    blankComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(text_2);
    instructionComponents.push(polygon);
    instructionComponents.push(polygonblack);
    instructionComponents.push(text_3);
    instructionComponents.push(text_4);
    instructionComponents.push(text_6);
    instructionComponents.push(key_resp_2);
    instructionComponents.push(text_7);
    
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instruction'-------
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    
    // *polygonblack* updates
    if (t >= 0.0 && polygonblack.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygonblack.tStart = t;  // (not accounting for frame time here)
      polygonblack.frameNStart = frameN;  // exact frame index
      
      polygonblack.setAutoDraw(true);
    }

    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
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
    instructionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instruction'-------
    instructionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var start_2Components;
function start_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'start_2'-------
    t = 0;
    start_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    start_2Components = [];
    start_2Components.push(text1);
    start_2Components.push(mouse);
    
    start_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function start_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'start_2'-------
    // get current time
    t = start_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text1* updates
    if (t >= 0.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text1.tStart = t;  // (not accounting for frame time here)
      text1.frameNStart = frameN;  // exact frame index
      
      text1.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
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
    start_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function start_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'start_2'-------
    start_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    // the Routine "start_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_bosa_allKeys;
var bosa1Components;
function bosa1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'bosa1'-------
    t = 0;
    bosa1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_bosa.keys = undefined;
    key_resp_bosa.rt = undefined;
    _key_resp_bosa_allKeys = [];
    blicket_st_b15_5.setFillColor(new util.Color('white'));
    blicket_st_w15_6.setFillColor(new util.Color('black'));
    // keep track of which components have finished
    bosa1Components = [];
    bosa1Components.push(key_resp_bosa);
    bosa1Components.push(blicket1_11);
    bosa1Components.push(blicket_st_b15_5);
    bosa1Components.push(blicket_st_w15_6);
    bosa1Components.push(option1_critical_14);
    bosa1Components.push(option2_critical_14);
    
    bosa1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bosa1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'bosa1'-------
    // get current time
    t = bosa1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_bosa* updates
    if (t >= 0.0 && key_resp_bosa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_bosa.tStart = t;  // (not accounting for frame time here)
      key_resp_bosa.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_bosa.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_bosa.start(); }); // start on screen flip
    }

    if (key_resp_bosa.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_bosa.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_bosa_allKeys = _key_resp_bosa_allKeys.concat(theseKeys);
      if (_key_resp_bosa_allKeys.length > 0) {
        key_resp_bosa.keys = _key_resp_bosa_allKeys[_key_resp_bosa_allKeys.length - 1].name;  // just the last key pressed
        key_resp_bosa.rt = _key_resp_bosa_allKeys[_key_resp_bosa_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_bosa.keys == '1') {
            key_resp_bosa.corr = 1;
        } else {
            key_resp_bosa.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_11* updates
    if (t >= 0.0 && blicket1_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_11.tStart = t;  // (not accounting for frame time here)
      blicket1_11.frameNStart = frameN;  // exact frame index
      
      blicket1_11.setAutoDraw(true);
    }

    
    // *blicket_st_b15_5* updates
    if (t >= 0.0 && blicket_st_b15_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b15_5.tStart = t;  // (not accounting for frame time here)
      blicket_st_b15_5.frameNStart = frameN;  // exact frame index
      
      blicket_st_b15_5.setAutoDraw(true);
    }

    
    // *blicket_st_w15_6* updates
    if (t >= 0.0 && blicket_st_w15_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w15_6.tStart = t;  // (not accounting for frame time here)
      blicket_st_w15_6.frameNStart = frameN;  // exact frame index
      
      blicket_st_w15_6.setAutoDraw(true);
    }

    
    // *option1_critical_14* updates
    if (t >= 0.0 && option1_critical_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_14.tStart = t;  // (not accounting for frame time here)
      option1_critical_14.frameNStart = frameN;  // exact frame index
      
      option1_critical_14.setAutoDraw(true);
    }

    
    // *option2_critical_14* updates
    if (t >= 0.0 && option2_critical_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_14.tStart = t;  // (not accounting for frame time here)
      option2_critical_14.frameNStart = frameN;  // exact frame index
      
      option2_critical_14.setAutoDraw(true);
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
    bosa1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bosa1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'bosa1'-------
    bosa1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_bosa.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_bosa.corr = 1;  // correct non-response
      } else {
         key_resp_bosa.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_bosa.keys', key_resp_bosa.keys);
    psychoJS.experiment.addData('key_resp_bosa.corr', key_resp_bosa.corr);
    if (typeof key_resp_bosa.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_bosa.rt', key_resp_bosa.rt);
        routineTimer.reset();
        }
    
    key_resp_bosa.stop();
    // the Routine "bosa1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_bosa1Components;
function fb_bosa1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_bosa1'-------
    t = 0;
    fb_bosa1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_bosa.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
    } else {
        if (key_resp_bosa.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud1_2.setText(msg1);
    feedback0_zud1_2.setText(msg0);
    feedback_zud01_2.setText(msg);
    // keep track of which components have finished
    fb_bosa1Components = [];
    fb_bosa1Components.push(feedback1_zud1_2);
    fb_bosa1Components.push(feedback0_zud1_2);
    fb_bosa1Components.push(feedback_zud01_2);
    
    fb_bosa1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_bosa1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_bosa1'-------
    // get current time
    t = fb_bosa1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud1_2* updates
    if (t >= 0.0 && feedback1_zud1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud1_2.tStart = t;  // (not accounting for frame time here)
      feedback1_zud1_2.frameNStart = frameN;  // exact frame index
      
      feedback1_zud1_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud1_2.setAutoDraw(false);
    }
    
    // *feedback0_zud1_2* updates
    if (t >= 0.0 && feedback0_zud1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud1_2.tStart = t;  // (not accounting for frame time here)
      feedback0_zud1_2.frameNStart = frameN;  // exact frame index
      
      feedback0_zud1_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud1_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud1_2.setAutoDraw(false);
    }
    
    // *feedback_zud01_2* updates
    if (t >= 0.0 && feedback_zud01_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud01_2.tStart = t;  // (not accounting for frame time here)
      feedback_zud01_2.frameNStart = frameN;  // exact frame index
      
      feedback_zud01_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud01_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud01_2.setAutoDraw(false);
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
    fb_bosa1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_bosa1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_bosa1'-------
    fb_bosa1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_bosa2_allKeys;
var bosa2Components;
function bosa2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'bosa2'-------
    t = 0;
    bosa2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_bosa2.keys = undefined;
    key_resp_bosa2.rt = undefined;
    _key_resp_bosa2_allKeys = [];
    blicket_st_b15_7.setFillColor(new util.Color('black'));
    blicket_st_w15_8.setFillColor(new util.Color('white'));
    // keep track of which components have finished
    bosa2Components = [];
    bosa2Components.push(key_resp_bosa2);
    bosa2Components.push(blicket1_13);
    bosa2Components.push(blicket_st_b15_7);
    bosa2Components.push(blicket_st_w15_8);
    bosa2Components.push(option1_critical_16);
    bosa2Components.push(option2_critical_16);
    
    bosa2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bosa2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'bosa2'-------
    // get current time
    t = bosa2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_bosa2* updates
    if (t >= 0.0 && key_resp_bosa2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_bosa2.tStart = t;  // (not accounting for frame time here)
      key_resp_bosa2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_bosa2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_bosa2.start(); }); // start on screen flip
    }

    if (key_resp_bosa2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_bosa2.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_bosa2_allKeys = _key_resp_bosa2_allKeys.concat(theseKeys);
      if (_key_resp_bosa2_allKeys.length > 0) {
        key_resp_bosa2.keys = _key_resp_bosa2_allKeys[_key_resp_bosa2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_bosa2.rt = _key_resp_bosa2_allKeys[_key_resp_bosa2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_bosa2.keys == '2') {
            key_resp_bosa2.corr = 1;
        } else {
            key_resp_bosa2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_13* updates
    if (t >= 0.0 && blicket1_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_13.tStart = t;  // (not accounting for frame time here)
      blicket1_13.frameNStart = frameN;  // exact frame index
      
      blicket1_13.setAutoDraw(true);
    }

    
    // *blicket_st_b15_7* updates
    if (t >= 0.0 && blicket_st_b15_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b15_7.tStart = t;  // (not accounting for frame time here)
      blicket_st_b15_7.frameNStart = frameN;  // exact frame index
      
      blicket_st_b15_7.setAutoDraw(true);
    }

    
    // *blicket_st_w15_8* updates
    if (t >= 0.0 && blicket_st_w15_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w15_8.tStart = t;  // (not accounting for frame time here)
      blicket_st_w15_8.frameNStart = frameN;  // exact frame index
      
      blicket_st_w15_8.setAutoDraw(true);
    }

    
    // *option1_critical_16* updates
    if (t >= 0.0 && option1_critical_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_16.tStart = t;  // (not accounting for frame time here)
      option1_critical_16.frameNStart = frameN;  // exact frame index
      
      option1_critical_16.setAutoDraw(true);
    }

    
    // *option2_critical_16* updates
    if (t >= 0.0 && option2_critical_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_16.tStart = t;  // (not accounting for frame time here)
      option2_critical_16.frameNStart = frameN;  // exact frame index
      
      option2_critical_16.setAutoDraw(true);
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
    bosa2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bosa2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'bosa2'-------
    bosa2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_bosa2.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_bosa2.corr = 1;  // correct non-response
      } else {
         key_resp_bosa2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_bosa2.keys', key_resp_bosa2.keys);
    psychoJS.experiment.addData('key_resp_bosa2.corr', key_resp_bosa2.corr);
    if (typeof key_resp_bosa2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_bosa2.rt', key_resp_bosa2.rt);
        routineTimer.reset();
        }
    
    key_resp_bosa2.stop();
    // the Routine "bosa2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_bosa2Components;
function fb_bosa2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_bosa2'-------
    t = 0;
    fb_bosa2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_bosa2.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
    } else {
        if (key_resp_bosa2.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud1_3.setText(msg1);
    feedback0_zud1_3.setText(msg0);
    feedback_zud01_3.setText(msg);
    // keep track of which components have finished
    fb_bosa2Components = [];
    fb_bosa2Components.push(feedback1_zud1_3);
    fb_bosa2Components.push(feedback0_zud1_3);
    fb_bosa2Components.push(feedback_zud01_3);
    
    fb_bosa2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_bosa2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_bosa2'-------
    // get current time
    t = fb_bosa2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud1_3* updates
    if (t >= 0.0 && feedback1_zud1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud1_3.tStart = t;  // (not accounting for frame time here)
      feedback1_zud1_3.frameNStart = frameN;  // exact frame index
      
      feedback1_zud1_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud1_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud1_3.setAutoDraw(false);
    }
    
    // *feedback0_zud1_3* updates
    if (t >= 0.0 && feedback0_zud1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud1_3.tStart = t;  // (not accounting for frame time here)
      feedback0_zud1_3.frameNStart = frameN;  // exact frame index
      
      feedback0_zud1_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud1_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud1_3.setAutoDraw(false);
    }
    
    // *feedback_zud01_3* updates
    if (t >= 0.0 && feedback_zud01_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud01_3.tStart = t;  // (not accounting for frame time here)
      feedback_zud01_3.frameNStart = frameN;  // exact frame index
      
      feedback_zud01_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud01_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud01_3.setAutoDraw(false);
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
    fb_bosa2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_bosa2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_bosa2'-------
    fb_bosa2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var proceedComponents;
function proceedRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'proceed'-------
    t = 0;
    proceedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    proceedComponents = [];
    proceedComponents.push(text2);
    proceedComponents.push(mouse_2);
    
    proceedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function proceedRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'proceed'-------
    // get current time
    t = proceedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text2* updates
    if (t >= 0.0 && text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text2.tStart = t;  // (not accounting for frame time here)
      text2.frameNStart = frameN;  // exact frame index
      
      text2.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
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
    proceedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function proceedRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'proceed'-------
    proceedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouse_2.getPos();
    _mouseButtons = mouse_2.getPressed();
    psychoJS.experiment.addData('mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_2.rightButton', _mouseButtons[2]);
    // the Routine "proceed" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var practice_trial_endComponents;
function practice_trial_endRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_trial_end'-------
    t = 0;
    practice_trial_endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    practice_trial_endComponents = [];
    practice_trial_endComponents.push(text_5);
    practice_trial_endComponents.push(key_resp_3);
    
    practice_trial_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practice_trial_endRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_trial_end'-------
    // get current time
    t = practice_trial_endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
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
    practice_trial_endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_trial_endRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_trial_end'-------
    practice_trial_endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "practice_trial_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var phase1Components;
function phase1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'phase1'-------
    t = 0;
    phase1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    text.setText('Phase 1');
    // keep track of which components have finished
    phase1Components = [];
    phase1Components.push(text);
    
    phase1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function phase1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'phase1'-------
    // get current time
    t = phase1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
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
    phase1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phase1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'phase1'-------
    phase1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var trials_phase1;
var currentLoop;
function trials_phase1LoopBegin(trials_phase1LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_phase1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 4, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_phase1'
  });
  psychoJS.experiment.addLoop(trials_phase1); // add the loop to the experiment
  currentLoop = trials_phase1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_phase1.forEach(function() {
    const snapshot = trials_phase1.getSnapshot();

    trials_phase1LoopScheduler.add(importConditions(snapshot));
    trials_phase1LoopScheduler.add(start_2RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(start_2RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(start_2RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(blankRoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(blankRoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(blankRoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(zud1RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(zud1RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(zud1RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(fb_zud1RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(fb_zud1RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(fb_zud1RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(zud2RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(zud2RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(zud2RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(fb_zud2RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(fb_zud2RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(fb_zud2RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(zud3RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(zud3RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(zud3RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(fb_zud3RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(fb_zud3RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(fb_zud3RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(zud4RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(zud4RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(zud4RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(fb_zud4RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(fb_zud4RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(fb_zud4RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(zud5RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(zud5RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(zud5RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(fb_zud5RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(fb_zud5RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(fb_zud5RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(zud6RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(zud6RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(zud6RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(fb_zud6RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(fb_zud6RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(fb_zud6RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(zud7RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(zud7RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(zud7RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(fb_zud7RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(fb_zud7RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(fb_zud7RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(zud8RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(zud8RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(zud8RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(fb_zud8RoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(fb_zud8RoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(fb_zud8RoutineEnd(snapshot));
    trials_phase1LoopScheduler.add(proceedRoutineBegin(snapshot));
    trials_phase1LoopScheduler.add(proceedRoutineEachFrame(snapshot));
    trials_phase1LoopScheduler.add(proceedRoutineEnd(snapshot));
    const trials_T1LoopScheduler = new Scheduler(psychoJS);
    trials_phase1LoopScheduler.add(trials_T1LoopBegin, trials_T1LoopScheduler);
    trials_phase1LoopScheduler.add(trials_T1LoopScheduler);
    trials_phase1LoopScheduler.add(trials_T1LoopEnd);
    trials_phase1LoopScheduler.add(endLoopIteration(trials_phase1LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials_T1;
function trials_T1LoopBegin(trials_T1LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_T1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_T1'
  });
  psychoJS.experiment.addLoop(trials_T1); // add the loop to the experiment
  currentLoop = trials_T1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_T1.forEach(function() {
    const snapshot = trials_T1.getSnapshot();

    trials_T1LoopScheduler.add(importConditions(snapshot));
    trials_T1LoopScheduler.add(T1_corr1RoutineBegin(snapshot));
    trials_T1LoopScheduler.add(T1_corr1RoutineEachFrame(snapshot));
    trials_T1LoopScheduler.add(T1_corr1RoutineEnd(snapshot));
    trials_T1LoopScheduler.add(T1_corr1_2RoutineBegin(snapshot));
    trials_T1LoopScheduler.add(T1_corr1_2RoutineEachFrame(snapshot));
    trials_T1LoopScheduler.add(T1_corr1_2RoutineEnd(snapshot));
    trials_T1LoopScheduler.add(endLoopIteration(trials_T1LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_T1LoopEnd() {
  psychoJS.experiment.removeLoop(trials_T1);

  return Scheduler.Event.NEXT;
}


function trials_phase1LoopEnd() {
  psychoJS.experiment.removeLoop(trials_phase1);

  return Scheduler.Event.NEXT;
}


var trials_phase_2;
function trials_phase_2LoopBegin(trials_phase_2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_phase_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_phase_2'
  });
  psychoJS.experiment.addLoop(trials_phase_2); // add the loop to the experiment
  currentLoop = trials_phase_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_phase_2.forEach(function() {
    const snapshot = trials_phase_2.getSnapshot();

    trials_phase_2LoopScheduler.add(importConditions(snapshot));
    trials_phase_2LoopScheduler.add(start_2RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(start_2RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(start_2RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(zud1RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(zud1RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(zud1RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud1RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud1RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud1RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(zud2RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(zud2RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(zud2RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud2RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud2RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud2RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(zud3RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(zud3RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(zud3RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud3RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud3RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud3RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(zud4RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(zud4RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(zud4RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud4RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud4RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud4RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(zud5RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(zud5RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(zud5RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud5RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud5RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud5RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(zud6RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(zud6RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(zud6RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud6RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud6RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud6RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(zud7RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(zud7RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(zud7RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud7RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud7RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud7RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(zud8RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(zud8RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(zud8RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud8RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud8RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_zud8RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(dax9RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(dax9RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(dax9RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax9RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax9RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax9RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(dax10RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(dax10RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(dax10RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax10RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax10RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax10RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(dax11RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(dax11RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(dax11RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax11RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax11RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax11RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(dax12RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(dax12RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(dax12RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax12RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax12RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_dax12RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(blicket13RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(blicket13RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(blicket13RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket13RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket13RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket13RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(blicket14RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(blicket14RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(blicket14RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket14RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket14RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket14RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(blicket15RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(blicket15RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(blicket15RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket15RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket15RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket15RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(blicket16RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(blicket16RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(blicket16RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket16RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket16RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicket16RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(smicket17RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(smicket17RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(smicket17RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket17RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket17RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket17RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(smicket18RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(smicket18RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(smicket18RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket18RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket18RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket18RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(smicket19RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(smicket19RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(smicket19RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket19RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket19RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket19RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(smicket20RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(smicket20RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(smicket20RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket20RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket20RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicket20RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep21RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep21RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep21RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep21RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep21RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep21RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep22RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep22RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep22RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep22RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep22RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep22RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep23RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep23RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep23RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep23RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep23RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep23RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep24RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep24RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(blicketfep24RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep24RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep24RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_blicketfep24RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep25RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep25RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep25RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep25RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep25RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep25RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep26RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep26RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep26RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep26RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep26RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep26RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep27RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep27RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep27RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep27RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep27RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep27RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep28RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep28RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(smicketfep28RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep28RoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep28RoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(fb_smicketfep28RoutineEnd(snapshot));
    trials_phase_2LoopScheduler.add(proceedRoutineBegin(snapshot));
    trials_phase_2LoopScheduler.add(proceedRoutineEachFrame(snapshot));
    trials_phase_2LoopScheduler.add(proceedRoutineEnd(snapshot));
    const trials_test2LoopScheduler = new Scheduler(psychoJS);
    trials_phase_2LoopScheduler.add(trials_test2LoopBegin, trials_test2LoopScheduler);
    trials_phase_2LoopScheduler.add(trials_test2LoopScheduler);
    trials_phase_2LoopScheduler.add(trials_test2LoopEnd);
    trials_phase_2LoopScheduler.add(endLoopIteration(trials_phase_2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials_test2;
function trials_test2LoopBegin(trials_test2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_test2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_test2'
  });
  psychoJS.experiment.addLoop(trials_test2); // add the loop to the experiment
  currentLoop = trials_test2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_test2.forEach(function() {
    const snapshot = trials_test2.getSnapshot();

    trials_test2LoopScheduler.add(importConditions(snapshot));
    trials_test2LoopScheduler.add(dax12test2RoutineBegin(snapshot));
    trials_test2LoopScheduler.add(dax12test2RoutineEachFrame(snapshot));
    trials_test2LoopScheduler.add(dax12test2RoutineEnd(snapshot));
    trials_test2LoopScheduler.add(blicket15test2RoutineBegin(snapshot));
    trials_test2LoopScheduler.add(blicket15test2RoutineEachFrame(snapshot));
    trials_test2LoopScheduler.add(blicket15test2RoutineEnd(snapshot));
    trials_test2LoopScheduler.add(smicket18test2RoutineBegin(snapshot));
    trials_test2LoopScheduler.add(smicket18test2RoutineEachFrame(snapshot));
    trials_test2LoopScheduler.add(smicket18test2RoutineEnd(snapshot));
    trials_test2LoopScheduler.add(blicketfep21test2RoutineBegin(snapshot));
    trials_test2LoopScheduler.add(blicketfep21test2RoutineEachFrame(snapshot));
    trials_test2LoopScheduler.add(blicketfep21test2RoutineEnd(snapshot));
    trials_test2LoopScheduler.add(smicketfep27test2RoutineBegin(snapshot));
    trials_test2LoopScheduler.add(smicketfep27test2RoutineEachFrame(snapshot));
    trials_test2LoopScheduler.add(smicketfep27test2RoutineEnd(snapshot));
    trials_test2LoopScheduler.add(endLoopIteration(trials_test2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_test2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_test2);

  return Scheduler.Event.NEXT;
}


function trials_phase_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_phase_2);

  return Scheduler.Event.NEXT;
}


var trials_phase3;
function trials_phase3LoopBegin(trials_phase3LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_phase3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_phase3'
  });
  psychoJS.experiment.addLoop(trials_phase3); // add the loop to the experiment
  currentLoop = trials_phase3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_phase3.forEach(function() {
    const snapshot = trials_phase3.getSnapshot();

    trials_phase3LoopScheduler.add(importConditions(snapshot));
    trials_phase3LoopScheduler.add(start_2RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(start_2RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(start_2RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(zud1RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(zud1RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(zud1RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_zud1RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_zud1RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_zud1RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(zud2RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(zud2RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(zud2RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_zud2RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_zud2RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_zud2RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(zud3RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(zud3RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(zud3RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_zud3RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_zud3RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_zud3RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(zud4RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(zud4RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(zud4RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_zud4RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_zud4RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_zud4RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(zud5RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(zud5RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(zud5RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_zud5RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_zud5RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_zud5RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(zud6RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(zud6RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(zud6RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_zud6RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_zud6RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_zud6RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(zud7RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(zud7RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(zud7RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_zud7RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_zud7RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_zud7RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(zud8RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(zud8RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(zud8RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_zud8RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_zud8RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_zud8RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(dax9RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(dax9RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(dax9RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_dax9RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_dax9RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_dax9RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(dax10RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(dax10RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(dax10RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_dax10RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_dax10RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_dax10RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(dax11RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(dax11RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(dax11RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_dax11RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_dax11RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_dax11RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(dax12RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(dax12RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(dax12RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_dax12RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_dax12RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_dax12RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(tas29RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(tas29RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(tas29RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_tas29RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_tas29RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_tas29RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(tas30RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(tas30RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(tas30RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_tas30RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_tas30RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_tas30RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(tas31RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(tas31RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(tas31RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_tas31RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_tas31RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_tas31RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(tas32RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(tas32RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(tas32RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(fb_tas32RoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(fb_tas32RoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(fb_tas32RoutineEnd(snapshot));
    trials_phase3LoopScheduler.add(proceedRoutineBegin(snapshot));
    trials_phase3LoopScheduler.add(proceedRoutineEachFrame(snapshot));
    trials_phase3LoopScheduler.add(proceedRoutineEnd(snapshot));
    const trials_test3LoopScheduler = new Scheduler(psychoJS);
    trials_phase3LoopScheduler.add(trials_test3LoopBegin, trials_test3LoopScheduler);
    trials_phase3LoopScheduler.add(trials_test3LoopScheduler);
    trials_phase3LoopScheduler.add(trials_test3LoopEnd);
    trials_phase3LoopScheduler.add(endLoopIteration(trials_phase3LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials_test3;
function trials_test3LoopBegin(trials_test3LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_test3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials_test3'
  });
  psychoJS.experiment.addLoop(trials_test3); // add the loop to the experiment
  currentLoop = trials_test3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials_test3.forEach(function() {
    const snapshot = trials_test3.getSnapshot();

    trials_test3LoopScheduler.add(importConditions(snapshot));
    trials_test3LoopScheduler.add(test2dax9RoutineBegin(snapshot));
    trials_test3LoopScheduler.add(test2dax9RoutineEachFrame(snapshot));
    trials_test3LoopScheduler.add(test2dax9RoutineEnd(snapshot));
    trials_test3LoopScheduler.add(test2tas32RoutineBegin(snapshot));
    trials_test3LoopScheduler.add(test2tas32RoutineEachFrame(snapshot));
    trials_test3LoopScheduler.add(test2tas32RoutineEnd(snapshot));
    trials_test3LoopScheduler.add(endLoopIteration(trials_test3LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_test3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_test3);

  return Scheduler.Event.NEXT;
}


function trials_phase3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_phase3);

  return Scheduler.Event.NEXT;
}


var _key_resp_zud1_allKeys;
var zud1Components;
function zud1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'zud1'-------
    t = 0;
    zud1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_1.setFillColor(new util.Color('black'));
    triangle_1.setFillColor(new util.Color('black'));
    cross_1.setFillColor(new util.Color('black'));
    key_resp_zud1.keys = undefined;
    key_resp_zud1.rt = undefined;
    _key_resp_zud1_allKeys = [];
    // keep track of which components have finished
    zud1Components = [];
    zud1Components.push(zud1_corr2);
    zud1Components.push(star_1);
    zud1Components.push(triangle_1);
    zud1Components.push(cross_1);
    zud1Components.push(option1_01);
    zud1Components.push(option2_01);
    zud1Components.push(option3_01);
    zud1Components.push(key_resp_zud1);
    
    zud1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function zud1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'zud1'-------
    // get current time
    t = zud1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zud1_corr2* updates
    if (t >= 0.0 && zud1_corr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zud1_corr2.tStart = t;  // (not accounting for frame time here)
      zud1_corr2.frameNStart = frameN;  // exact frame index
      
      zud1_corr2.setAutoDraw(true);
    }

    
    // *star_1* updates
    if (t >= 0.0 && star_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_1.tStart = t;  // (not accounting for frame time here)
      star_1.frameNStart = frameN;  // exact frame index
      
      star_1.setAutoDraw(true);
    }

    
    // *triangle_1* updates
    if (t >= 0.0 && triangle_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triangle_1.tStart = t;  // (not accounting for frame time here)
      triangle_1.frameNStart = frameN;  // exact frame index
      
      triangle_1.setAutoDraw(true);
    }

    
    // *cross_1* updates
    if (t >= 0.0 && cross_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_1.tStart = t;  // (not accounting for frame time here)
      cross_1.frameNStart = frameN;  // exact frame index
      
      cross_1.setAutoDraw(true);
    }

    
    // *option1_01* updates
    if (t >= 0.0 && option1_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_01.tStart = t;  // (not accounting for frame time here)
      option1_01.frameNStart = frameN;  // exact frame index
      
      option1_01.setAutoDraw(true);
    }

    
    // *option2_01* updates
    if (t >= 0.0 && option2_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_01.tStart = t;  // (not accounting for frame time here)
      option2_01.frameNStart = frameN;  // exact frame index
      
      option2_01.setAutoDraw(true);
    }

    
    // *option3_01* updates
    if (t >= 0.0 && option3_01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_01.tStart = t;  // (not accounting for frame time here)
      option3_01.frameNStart = frameN;  // exact frame index
      
      option3_01.setAutoDraw(true);
    }

    
    // *key_resp_zud1* updates
    if (t >= 0.0 && key_resp_zud1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_zud1.tStart = t;  // (not accounting for frame time here)
      key_resp_zud1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_zud1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zud1.start(); }); // start on screen flip
    }

    if (key_resp_zud1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_zud1.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_zud1_allKeys = _key_resp_zud1_allKeys.concat(theseKeys);
      if (_key_resp_zud1_allKeys.length > 0) {
        key_resp_zud1.keys = _key_resp_zud1_allKeys[_key_resp_zud1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_zud1.rt = _key_resp_zud1_allKeys[_key_resp_zud1_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_zud1.keys == '2') {
            key_resp_zud1.corr = 1;
        } else {
            key_resp_zud1.corr = 0;
        }
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
    zud1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zud1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'zud1'-------
    zud1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_zud1.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_zud1.corr = 1;  // correct non-response
      } else {
         key_resp_zud1.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_zud1.keys', key_resp_zud1.keys);
    psychoJS.experiment.addData('key_resp_zud1.corr', key_resp_zud1.corr);
    if (typeof key_resp_zud1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_zud1.rt', key_resp_zud1.rt);
        routineTimer.reset();
        }
    
    key_resp_zud1.stop();
    // the Routine "zud1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_zud1Components;
function fb_zud1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_zud1'-------
    t = 0;
    fb_zud1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_zud1.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
    } else {
        if (key_resp_zud1.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud1.setText(msg1);
    feedback0_zud1.setText(msg0);
    feedback_zud01.setText(msg);
    // keep track of which components have finished
    fb_zud1Components = [];
    fb_zud1Components.push(feedback1_zud1);
    fb_zud1Components.push(feedback0_zud1);
    fb_zud1Components.push(feedback_zud01);
    
    fb_zud1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_zud1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_zud1'-------
    // get current time
    t = fb_zud1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud1* updates
    if (t >= 0.0 && feedback1_zud1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud1.tStart = t;  // (not accounting for frame time here)
      feedback1_zud1.frameNStart = frameN;  // exact frame index
      
      feedback1_zud1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud1.setAutoDraw(false);
    }
    
    // *feedback0_zud1* updates
    if (t >= 0.0 && feedback0_zud1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud1.tStart = t;  // (not accounting for frame time here)
      feedback0_zud1.frameNStart = frameN;  // exact frame index
      
      feedback0_zud1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud1.setAutoDraw(false);
    }
    
    // *feedback_zud01* updates
    if (t >= 0.0 && feedback_zud01.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud01.tStart = t;  // (not accounting for frame time here)
      feedback_zud01.frameNStart = frameN;  // exact frame index
      
      feedback_zud01.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud01.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud01.setAutoDraw(false);
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
    fb_zud1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_zud1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_zud1'-------
    fb_zud1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_zud2_allKeys;
var zud2Components;
function zud2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'zud2'-------
    t = 0;
    zud2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_zud2.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    triangle_2.setFillColor(new util.Color('black'));
    star_2.setFillColor(new util.Color('black'));
    cross_2.setFillColor(new util.Color('black'));
    key_resp_zud2.keys = undefined;
    key_resp_zud2.rt = undefined;
    _key_resp_zud2_allKeys = [];
    // keep track of which components have finished
    zud2Components = [];
    zud2Components.push(zud2_corr1);
    zud2Components.push(triangle_2);
    zud2Components.push(star_2);
    zud2Components.push(cross_2);
    zud2Components.push(key_resp_zud2);
    zud2Components.push(option1_02);
    zud2Components.push(option2_02);
    zud2Components.push(option3_02);
    
    zud2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function zud2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'zud2'-------
    // get current time
    t = zud2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zud2_corr1* updates
    if (t >= 0.0 && zud2_corr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zud2_corr1.tStart = t;  // (not accounting for frame time here)
      zud2_corr1.frameNStart = frameN;  // exact frame index
      
      zud2_corr1.setAutoDraw(true);
    }

    
    // *triangle_2* updates
    if (t >= 0.0 && triangle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triangle_2.tStart = t;  // (not accounting for frame time here)
      triangle_2.frameNStart = frameN;  // exact frame index
      
      triangle_2.setAutoDraw(true);
    }

    
    // *star_2* updates
    if (t >= 0.0 && star_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_2.tStart = t;  // (not accounting for frame time here)
      star_2.frameNStart = frameN;  // exact frame index
      
      star_2.setAutoDraw(true);
    }

    
    // *cross_2* updates
    if (t >= 0.0 && cross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_2.tStart = t;  // (not accounting for frame time here)
      cross_2.frameNStart = frameN;  // exact frame index
      
      cross_2.setAutoDraw(true);
    }

    
    // *key_resp_zud2* updates
    if (t >= 0.0 && key_resp_zud2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_zud2.tStart = t;  // (not accounting for frame time here)
      key_resp_zud2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_zud2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zud2.start(); }); // start on screen flip
    }

    if (key_resp_zud2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_zud2.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_zud2_allKeys = _key_resp_zud2_allKeys.concat(theseKeys);
      if (_key_resp_zud2_allKeys.length > 0) {
        key_resp_zud2.keys = _key_resp_zud2_allKeys[_key_resp_zud2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_zud2.rt = _key_resp_zud2_allKeys[_key_resp_zud2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_zud2.keys == '1') {
            key_resp_zud2.corr = 1;
        } else {
            key_resp_zud2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_02* updates
    if (t >= 0.0 && option1_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_02.tStart = t;  // (not accounting for frame time here)
      option1_02.frameNStart = frameN;  // exact frame index
      
      option1_02.setAutoDraw(true);
    }

    
    // *option2_02* updates
    if (t >= 0.0 && option2_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_02.tStart = t;  // (not accounting for frame time here)
      option2_02.frameNStart = frameN;  // exact frame index
      
      option2_02.setAutoDraw(true);
    }

    
    // *option3_02* updates
    if (t >= 0.0 && option3_02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_02.tStart = t;  // (not accounting for frame time here)
      option3_02.frameNStart = frameN;  // exact frame index
      
      option3_02.setAutoDraw(true);
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
    zud2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zud2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'zud2'-------
    zud2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_zud2.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_zud2.corr = 1;  // correct non-response
      } else {
         key_resp_zud2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_zud2.keys', key_resp_zud2.keys);
    psychoJS.experiment.addData('key_resp_zud2.corr', key_resp_zud2.corr);
    if (typeof key_resp_zud2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_zud2.rt', key_resp_zud2.rt);
        routineTimer.reset();
        }
    
    key_resp_zud2.stop();
    // the Routine "zud2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_zud2Components;
function fb_zud2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_zud2'-------
    t = 0;
    fb_zud2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_zud2.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
    } else {
        if (key_resp_zud2.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud2.setText(msg1);
    feedback0_zud2.setText(msg0);
    feedback_zud02.setText(msg);
    // keep track of which components have finished
    fb_zud2Components = [];
    fb_zud2Components.push(feedback1_zud2);
    fb_zud2Components.push(feedback0_zud2);
    fb_zud2Components.push(feedback_zud02);
    
    fb_zud2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_zud2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_zud2'-------
    // get current time
    t = fb_zud2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud2* updates
    if (t >= 0.0 && feedback1_zud2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud2.tStart = t;  // (not accounting for frame time here)
      feedback1_zud2.frameNStart = frameN;  // exact frame index
      
      feedback1_zud2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud2.setAutoDraw(false);
    }
    
    // *feedback0_zud2* updates
    if (t >= 0.0 && feedback0_zud2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud2.tStart = t;  // (not accounting for frame time here)
      feedback0_zud2.frameNStart = frameN;  // exact frame index
      
      feedback0_zud2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud2.setAutoDraw(false);
    }
    
    // *feedback_zud02* updates
    if (t >= 0.0 && feedback_zud02.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud02.tStart = t;  // (not accounting for frame time here)
      feedback_zud02.frameNStart = frameN;  // exact frame index
      
      feedback_zud02.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud02.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud02.setAutoDraw(false);
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
    fb_zud2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_zud2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_zud2'-------
    fb_zud2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_zud3_allKeys;
var zud3Components;
function zud3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'zud3'-------
    t = 0;
    zud3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_zud3.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    triangle_3.setFillColor(new util.Color('white'));
    star_3.setFillColor(new util.Color('white'));
    cross_3.setFillColor(new util.Color('white'));
    key_resp_zud3.keys = undefined;
    key_resp_zud3.rt = undefined;
    _key_resp_zud3_allKeys = [];
    // keep track of which components have finished
    zud3Components = [];
    zud3Components.push(zud3_corr1);
    zud3Components.push(triangle_3);
    zud3Components.push(star_3);
    zud3Components.push(cross_3);
    zud3Components.push(key_resp_zud3);
    zud3Components.push(option1_03);
    zud3Components.push(option2_03);
    zud3Components.push(option3_03);
    
    zud3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function zud3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'zud3'-------
    // get current time
    t = zud3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zud3_corr1* updates
    if (t >= 0.0 && zud3_corr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zud3_corr1.tStart = t;  // (not accounting for frame time here)
      zud3_corr1.frameNStart = frameN;  // exact frame index
      
      zud3_corr1.setAutoDraw(true);
    }

    
    // *triangle_3* updates
    if (t >= 0.0 && triangle_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triangle_3.tStart = t;  // (not accounting for frame time here)
      triangle_3.frameNStart = frameN;  // exact frame index
      
      triangle_3.setAutoDraw(true);
    }

    
    // *star_3* updates
    if (t >= 0.0 && star_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_3.tStart = t;  // (not accounting for frame time here)
      star_3.frameNStart = frameN;  // exact frame index
      
      star_3.setAutoDraw(true);
    }

    
    // *cross_3* updates
    if (t >= 0.0 && cross_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_3.tStart = t;  // (not accounting for frame time here)
      cross_3.frameNStart = frameN;  // exact frame index
      
      cross_3.setAutoDraw(true);
    }

    
    // *key_resp_zud3* updates
    if (t >= 0.0 && key_resp_zud3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_zud3.tStart = t;  // (not accounting for frame time here)
      key_resp_zud3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_zud3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zud3.start(); }); // start on screen flip
    }

    if (key_resp_zud3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_zud3.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_zud3_allKeys = _key_resp_zud3_allKeys.concat(theseKeys);
      if (_key_resp_zud3_allKeys.length > 0) {
        key_resp_zud3.keys = _key_resp_zud3_allKeys[_key_resp_zud3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_zud3.rt = _key_resp_zud3_allKeys[_key_resp_zud3_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_zud3.keys == '1') {
            key_resp_zud3.corr = 1;
        } else {
            key_resp_zud3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_03* updates
    if (t >= 0.0 && option1_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_03.tStart = t;  // (not accounting for frame time here)
      option1_03.frameNStart = frameN;  // exact frame index
      
      option1_03.setAutoDraw(true);
    }

    
    // *option2_03* updates
    if (t >= 0.0 && option2_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_03.tStart = t;  // (not accounting for frame time here)
      option2_03.frameNStart = frameN;  // exact frame index
      
      option2_03.setAutoDraw(true);
    }

    
    // *option3_03* updates
    if (t >= 0.0 && option3_03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_03.tStart = t;  // (not accounting for frame time here)
      option3_03.frameNStart = frameN;  // exact frame index
      
      option3_03.setAutoDraw(true);
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
    zud3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zud3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'zud3'-------
    zud3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_zud3.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_zud3.corr = 1;  // correct non-response
      } else {
         key_resp_zud3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_zud3.keys', key_resp_zud3.keys);
    psychoJS.experiment.addData('key_resp_zud3.corr', key_resp_zud3.corr);
    if (typeof key_resp_zud3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_zud3.rt', key_resp_zud3.rt);
        routineTimer.reset();
        }
    
    key_resp_zud3.stop();
    // the Routine "zud3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_zud3Components;
function fb_zud3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_zud3'-------
    t = 0;
    fb_zud3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_zud3.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
    } else {
        if (key_resp_zud3.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud3.setText(msg1);
    feedback0_zud3.setText(msg0);
    feedback_zud03.setText(msg);
    // keep track of which components have finished
    fb_zud3Components = [];
    fb_zud3Components.push(feedback1_zud3);
    fb_zud3Components.push(feedback0_zud3);
    fb_zud3Components.push(feedback_zud03);
    
    fb_zud3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_zud3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_zud3'-------
    // get current time
    t = fb_zud3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud3* updates
    if (t >= 0.0 && feedback1_zud3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud3.tStart = t;  // (not accounting for frame time here)
      feedback1_zud3.frameNStart = frameN;  // exact frame index
      
      feedback1_zud3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud3.setAutoDraw(false);
    }
    
    // *feedback0_zud3* updates
    if (t >= 0.0 && feedback0_zud3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud3.tStart = t;  // (not accounting for frame time here)
      feedback0_zud3.frameNStart = frameN;  // exact frame index
      
      feedback0_zud3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud3.setAutoDraw(false);
    }
    
    // *feedback_zud03* updates
    if (t >= 0.0 && feedback_zud03.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud03.tStart = t;  // (not accounting for frame time here)
      feedback_zud03.frameNStart = frameN;  // exact frame index
      
      feedback_zud03.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud03.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud03.setAutoDraw(false);
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
    fb_zud3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_zud3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_zud3'-------
    fb_zud3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_zud4_allKeys;
var zud4Components;
function zud4RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'zud4'-------
    t = 0;
    zud4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_zud4.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    triangle_4.setFillColor(new util.Color('white'));
    star_4.setFillColor(new util.Color('white'));
    cross_4.setFillColor(new util.Color('white'));
    key_resp_zud4.keys = undefined;
    key_resp_zud4.rt = undefined;
    _key_resp_zud4_allKeys = [];
    // keep track of which components have finished
    zud4Components = [];
    zud4Components.push(zud4_corr1);
    zud4Components.push(triangle_4);
    zud4Components.push(star_4);
    zud4Components.push(cross_4);
    zud4Components.push(key_resp_zud4);
    zud4Components.push(option1_04);
    zud4Components.push(option2_04);
    zud4Components.push(option3_04);
    
    zud4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function zud4RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'zud4'-------
    // get current time
    t = zud4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zud4_corr1* updates
    if (t >= 0.0 && zud4_corr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zud4_corr1.tStart = t;  // (not accounting for frame time here)
      zud4_corr1.frameNStart = frameN;  // exact frame index
      
      zud4_corr1.setAutoDraw(true);
    }

    
    // *triangle_4* updates
    if (t >= 0.0 && triangle_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triangle_4.tStart = t;  // (not accounting for frame time here)
      triangle_4.frameNStart = frameN;  // exact frame index
      
      triangle_4.setAutoDraw(true);
    }

    
    // *star_4* updates
    if (t >= 0.0 && star_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_4.tStart = t;  // (not accounting for frame time here)
      star_4.frameNStart = frameN;  // exact frame index
      
      star_4.setAutoDraw(true);
    }

    
    // *cross_4* updates
    if (t >= 0.0 && cross_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_4.tStart = t;  // (not accounting for frame time here)
      cross_4.frameNStart = frameN;  // exact frame index
      
      cross_4.setAutoDraw(true);
    }

    
    // *key_resp_zud4* updates
    if (t >= 0.0 && key_resp_zud4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_zud4.tStart = t;  // (not accounting for frame time here)
      key_resp_zud4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_zud4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zud4.start(); }); // start on screen flip
    }

    if (key_resp_zud4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_zud4.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_zud4_allKeys = _key_resp_zud4_allKeys.concat(theseKeys);
      if (_key_resp_zud4_allKeys.length > 0) {
        key_resp_zud4.keys = _key_resp_zud4_allKeys[_key_resp_zud4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_zud4.rt = _key_resp_zud4_allKeys[_key_resp_zud4_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_zud4.keys == '1') {
            key_resp_zud4.corr = 1;
        } else {
            key_resp_zud4.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_04* updates
    if (t >= 0.0 && option1_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_04.tStart = t;  // (not accounting for frame time here)
      option1_04.frameNStart = frameN;  // exact frame index
      
      option1_04.setAutoDraw(true);
    }

    
    // *option2_04* updates
    if (t >= 0.0 && option2_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_04.tStart = t;  // (not accounting for frame time here)
      option2_04.frameNStart = frameN;  // exact frame index
      
      option2_04.setAutoDraw(true);
    }

    
    // *option3_04* updates
    if (t >= 0.0 && option3_04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_04.tStart = t;  // (not accounting for frame time here)
      option3_04.frameNStart = frameN;  // exact frame index
      
      option3_04.setAutoDraw(true);
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
    zud4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zud4RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'zud4'-------
    zud4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_zud4.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_zud4.corr = 1;  // correct non-response
      } else {
         key_resp_zud4.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_zud4.keys', key_resp_zud4.keys);
    psychoJS.experiment.addData('key_resp_zud4.corr', key_resp_zud4.corr);
    if (typeof key_resp_zud4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_zud4.rt', key_resp_zud4.rt);
        routineTimer.reset();
        }
    
    key_resp_zud4.stop();
    // the Routine "zud4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_zud4Components;
function fb_zud4RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_zud4'-------
    t = 0;
    fb_zud4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_zud4.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
    } else {
        if (key_resp_zud4.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud4.setText(msg1);
    feedback0_zud4.setText(msg0);
    feedback_zud04.setText(msg);
    // keep track of which components have finished
    fb_zud4Components = [];
    fb_zud4Components.push(feedback1_zud4);
    fb_zud4Components.push(feedback0_zud4);
    fb_zud4Components.push(feedback_zud04);
    
    fb_zud4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_zud4RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_zud4'-------
    // get current time
    t = fb_zud4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud4* updates
    if (t >= 0.0 && feedback1_zud4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud4.tStart = t;  // (not accounting for frame time here)
      feedback1_zud4.frameNStart = frameN;  // exact frame index
      
      feedback1_zud4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud4.setAutoDraw(false);
    }
    
    // *feedback0_zud4* updates
    if (t >= 0.0 && feedback0_zud4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud4.tStart = t;  // (not accounting for frame time here)
      feedback0_zud4.frameNStart = frameN;  // exact frame index
      
      feedback0_zud4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud4.setAutoDraw(false);
    }
    
    // *feedback_zud04* updates
    if (t >= 0.0 && feedback_zud04.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud04.tStart = t;  // (not accounting for frame time here)
      feedback_zud04.frameNStart = frameN;  // exact frame index
      
      feedback_zud04.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud04.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud04.setAutoDraw(false);
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
    fb_zud4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_zud4RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_zud4'-------
    fb_zud4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_zud5_allKeys;
var zud5Components;
function zud5RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'zud5'-------
    t = 0;
    zud5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_zud5.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_5.setFillColor(new util.Color('black'));
    cross_5.setFillColor(new util.Color('black'));
    rectangle_5.setFillColor(new util.Color('black'));
    key_resp_zud5.keys = undefined;
    key_resp_zud5.rt = undefined;
    _key_resp_zud5_allKeys = [];
    // keep track of which components have finished
    zud5Components = [];
    zud5Components.push(zud5_corr3);
    zud5Components.push(star_5);
    zud5Components.push(cross_5);
    zud5Components.push(rectangle_5);
    zud5Components.push(key_resp_zud5);
    zud5Components.push(option1_05);
    zud5Components.push(option2_05);
    zud5Components.push(option3_05);
    
    zud5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function zud5RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'zud5'-------
    // get current time
    t = zud5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zud5_corr3* updates
    if (t >= 0.0 && zud5_corr3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zud5_corr3.tStart = t;  // (not accounting for frame time here)
      zud5_corr3.frameNStart = frameN;  // exact frame index
      
      zud5_corr3.setAutoDraw(true);
    }

    
    // *star_5* updates
    if (t >= 0.0 && star_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_5.tStart = t;  // (not accounting for frame time here)
      star_5.frameNStart = frameN;  // exact frame index
      
      star_5.setAutoDraw(true);
    }

    
    // *cross_5* updates
    if (t >= 0.0 && cross_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_5.tStart = t;  // (not accounting for frame time here)
      cross_5.frameNStart = frameN;  // exact frame index
      
      cross_5.setAutoDraw(true);
    }

    
    // *rectangle_5* updates
    if (t >= 0.0 && rectangle_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle_5.tStart = t;  // (not accounting for frame time here)
      rectangle_5.frameNStart = frameN;  // exact frame index
      
      rectangle_5.setAutoDraw(true);
    }

    
    // *key_resp_zud5* updates
    if (t >= 0.0 && key_resp_zud5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_zud5.tStart = t;  // (not accounting for frame time here)
      key_resp_zud5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_zud5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zud5.start(); }); // start on screen flip
    }

    if (key_resp_zud5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_zud5.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_zud5_allKeys = _key_resp_zud5_allKeys.concat(theseKeys);
      if (_key_resp_zud5_allKeys.length > 0) {
        key_resp_zud5.keys = _key_resp_zud5_allKeys[_key_resp_zud5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_zud5.rt = _key_resp_zud5_allKeys[_key_resp_zud5_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_zud5.keys == '3') {
            key_resp_zud5.corr = 1;
        } else {
            key_resp_zud5.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_05* updates
    if (t >= 0.0 && option1_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_05.tStart = t;  // (not accounting for frame time here)
      option1_05.frameNStart = frameN;  // exact frame index
      
      option1_05.setAutoDraw(true);
    }

    
    // *option2_05* updates
    if (t >= 0.0 && option2_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_05.tStart = t;  // (not accounting for frame time here)
      option2_05.frameNStart = frameN;  // exact frame index
      
      option2_05.setAutoDraw(true);
    }

    
    // *option3_05* updates
    if (t >= 0.0 && option3_05.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_05.tStart = t;  // (not accounting for frame time here)
      option3_05.frameNStart = frameN;  // exact frame index
      
      option3_05.setAutoDraw(true);
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
    zud5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zud5RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'zud5'-------
    zud5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_zud5.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_zud5.corr = 1;  // correct non-response
      } else {
         key_resp_zud5.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_zud5.keys', key_resp_zud5.keys);
    psychoJS.experiment.addData('key_resp_zud5.corr', key_resp_zud5.corr);
    if (typeof key_resp_zud5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_zud5.rt', key_resp_zud5.rt);
        routineTimer.reset();
        }
    
    key_resp_zud5.stop();
    // the Routine "zud5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_zud5Components;
function fb_zud5RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_zud5'-------
    t = 0;
    fb_zud5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_zud5.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
    } else {
        if (key_resp_zud5.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud5.setText(msg1);
    feedback0_zud5.setText(msg0);
    feedback_zud5.setText(msg);
    // keep track of which components have finished
    fb_zud5Components = [];
    fb_zud5Components.push(feedback1_zud5);
    fb_zud5Components.push(feedback0_zud5);
    fb_zud5Components.push(feedback_zud5);
    
    fb_zud5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_zud5RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_zud5'-------
    // get current time
    t = fb_zud5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud5* updates
    if (t >= 0.0 && feedback1_zud5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud5.tStart = t;  // (not accounting for frame time here)
      feedback1_zud5.frameNStart = frameN;  // exact frame index
      
      feedback1_zud5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud5.setAutoDraw(false);
    }
    
    // *feedback0_zud5* updates
    if (t >= 0.0 && feedback0_zud5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud5.tStart = t;  // (not accounting for frame time here)
      feedback0_zud5.frameNStart = frameN;  // exact frame index
      
      feedback0_zud5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud5.setAutoDraw(false);
    }
    
    // *feedback_zud5* updates
    if (t >= 0.0 && feedback_zud5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud5.tStart = t;  // (not accounting for frame time here)
      feedback_zud5.frameNStart = frameN;  // exact frame index
      
      feedback_zud5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud5.setAutoDraw(false);
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
    fb_zud5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_zud5RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_zud5'-------
    fb_zud5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_zud6_allKeys;
var zud6Components;
function zud6RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'zud6'-------
    t = 0;
    zud6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_zud6.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_6.setFillColor(new util.Color('black'));
    cross_6.setFillColor(new util.Color('black'));
    rectangle_6.setFillColor(new util.Color('black'));
    key_resp_zud6.keys = undefined;
    key_resp_zud6.rt = undefined;
    _key_resp_zud6_allKeys = [];
    // keep track of which components have finished
    zud6Components = [];
    zud6Components.push(zud6_corr3);
    zud6Components.push(star_6);
    zud6Components.push(cross_6);
    zud6Components.push(rectangle_6);
    zud6Components.push(key_resp_zud6);
    zud6Components.push(option1_06);
    zud6Components.push(option2_06);
    zud6Components.push(option3_06);
    
    zud6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function zud6RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'zud6'-------
    // get current time
    t = zud6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zud6_corr3* updates
    if (t >= 0.0 && zud6_corr3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zud6_corr3.tStart = t;  // (not accounting for frame time here)
      zud6_corr3.frameNStart = frameN;  // exact frame index
      
      zud6_corr3.setAutoDraw(true);
    }

    
    // *star_6* updates
    if (t >= 0.0 && star_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_6.tStart = t;  // (not accounting for frame time here)
      star_6.frameNStart = frameN;  // exact frame index
      
      star_6.setAutoDraw(true);
    }

    
    // *cross_6* updates
    if (t >= 0.0 && cross_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_6.tStart = t;  // (not accounting for frame time here)
      cross_6.frameNStart = frameN;  // exact frame index
      
      cross_6.setAutoDraw(true);
    }

    
    // *rectangle_6* updates
    if (t >= 0.0 && rectangle_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle_6.tStart = t;  // (not accounting for frame time here)
      rectangle_6.frameNStart = frameN;  // exact frame index
      
      rectangle_6.setAutoDraw(true);
    }

    
    // *key_resp_zud6* updates
    if (t >= 0.0 && key_resp_zud6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_zud6.tStart = t;  // (not accounting for frame time here)
      key_resp_zud6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_zud6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zud6.start(); }); // start on screen flip
    }

    if (key_resp_zud6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_zud6.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_zud6_allKeys = _key_resp_zud6_allKeys.concat(theseKeys);
      if (_key_resp_zud6_allKeys.length > 0) {
        key_resp_zud6.keys = _key_resp_zud6_allKeys[_key_resp_zud6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_zud6.rt = _key_resp_zud6_allKeys[_key_resp_zud6_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_zud6.keys == '3') {
            key_resp_zud6.corr = 1;
        } else {
            key_resp_zud6.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_06* updates
    if (t >= 0.0 && option1_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_06.tStart = t;  // (not accounting for frame time here)
      option1_06.frameNStart = frameN;  // exact frame index
      
      option1_06.setAutoDraw(true);
    }

    
    // *option2_06* updates
    if (t >= 0.0 && option2_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_06.tStart = t;  // (not accounting for frame time here)
      option2_06.frameNStart = frameN;  // exact frame index
      
      option2_06.setAutoDraw(true);
    }

    
    // *option3_06* updates
    if (t >= 0.0 && option3_06.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_06.tStart = t;  // (not accounting for frame time here)
      option3_06.frameNStart = frameN;  // exact frame index
      
      option3_06.setAutoDraw(true);
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
    zud6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zud6RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'zud6'-------
    zud6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_zud6.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_zud6.corr = 1;  // correct non-response
      } else {
         key_resp_zud6.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_zud6.keys', key_resp_zud6.keys);
    psychoJS.experiment.addData('key_resp_zud6.corr', key_resp_zud6.corr);
    if (typeof key_resp_zud6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_zud6.rt', key_resp_zud6.rt);
        routineTimer.reset();
        }
    
    key_resp_zud6.stop();
    // the Routine "zud6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_zud6Components;
function fb_zud6RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_zud6'-------
    t = 0;
    fb_zud6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_zud6.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
    } else {
        if (key_resp_zud6.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud6.setText(msg1);
    feedback0_zud6.setText(msg0);
    feedback_zud6.setText(msg);
    // keep track of which components have finished
    fb_zud6Components = [];
    fb_zud6Components.push(feedback1_zud6);
    fb_zud6Components.push(feedback0_zud6);
    fb_zud6Components.push(feedback_zud6);
    
    fb_zud6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_zud6RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_zud6'-------
    // get current time
    t = fb_zud6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud6* updates
    if (t >= 0.0 && feedback1_zud6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud6.tStart = t;  // (not accounting for frame time here)
      feedback1_zud6.frameNStart = frameN;  // exact frame index
      
      feedback1_zud6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud6.setAutoDraw(false);
    }
    
    // *feedback0_zud6* updates
    if (t >= 0.0 && feedback0_zud6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud6.tStart = t;  // (not accounting for frame time here)
      feedback0_zud6.frameNStart = frameN;  // exact frame index
      
      feedback0_zud6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud6.setAutoDraw(false);
    }
    
    // *feedback_zud6* updates
    if (t >= 0.0 && feedback_zud6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud6.tStart = t;  // (not accounting for frame time here)
      feedback_zud6.frameNStart = frameN;  // exact frame index
      
      feedback_zud6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud6.setAutoDraw(false);
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
    fb_zud6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_zud6RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_zud6'-------
    fb_zud6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_zud7_allKeys;
var zud7Components;
function zud7RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'zud7'-------
    t = 0;
    zud7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_zud7.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    rectangle_7.setFillColor(new util.Color('white'));
    cross_7.setFillColor(new util.Color('white'));
    star_7.setFillColor(new util.Color('white'));
    key_resp_zud7.keys = undefined;
    key_resp_zud7.rt = undefined;
    _key_resp_zud7_allKeys = [];
    // keep track of which components have finished
    zud7Components = [];
    zud7Components.push(zud7_corr1);
    zud7Components.push(rectangle_7);
    zud7Components.push(cross_7);
    zud7Components.push(star_7);
    zud7Components.push(key_resp_zud7);
    zud7Components.push(option1_07);
    zud7Components.push(option2_07);
    zud7Components.push(option3_07);
    
    zud7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function zud7RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'zud7'-------
    // get current time
    t = zud7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zud7_corr1* updates
    if (t >= 0.0 && zud7_corr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zud7_corr1.tStart = t;  // (not accounting for frame time here)
      zud7_corr1.frameNStart = frameN;  // exact frame index
      
      zud7_corr1.setAutoDraw(true);
    }

    
    // *rectangle_7* updates
    if (t >= 0.0 && rectangle_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle_7.tStart = t;  // (not accounting for frame time here)
      rectangle_7.frameNStart = frameN;  // exact frame index
      
      rectangle_7.setAutoDraw(true);
    }

    
    // *cross_7* updates
    if (t >= 0.0 && cross_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_7.tStart = t;  // (not accounting for frame time here)
      cross_7.frameNStart = frameN;  // exact frame index
      
      cross_7.setAutoDraw(true);
    }

    
    // *star_7* updates
    if (t >= 0.0 && star_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_7.tStart = t;  // (not accounting for frame time here)
      star_7.frameNStart = frameN;  // exact frame index
      
      star_7.setAutoDraw(true);
    }

    
    // *key_resp_zud7* updates
    if (t >= 0.0 && key_resp_zud7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_zud7.tStart = t;  // (not accounting for frame time here)
      key_resp_zud7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_zud7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zud7.start(); }); // start on screen flip
    }

    if (key_resp_zud7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_zud7.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_zud7_allKeys = _key_resp_zud7_allKeys.concat(theseKeys);
      if (_key_resp_zud7_allKeys.length > 0) {
        key_resp_zud7.keys = _key_resp_zud7_allKeys[_key_resp_zud7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_zud7.rt = _key_resp_zud7_allKeys[_key_resp_zud7_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_zud7.keys == '1') {
            key_resp_zud7.corr = 1;
        } else {
            key_resp_zud7.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_07* updates
    if (t >= 0.0 && option1_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_07.tStart = t;  // (not accounting for frame time here)
      option1_07.frameNStart = frameN;  // exact frame index
      
      option1_07.setAutoDraw(true);
    }

    
    // *option2_07* updates
    if (t >= 0.0 && option2_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_07.tStart = t;  // (not accounting for frame time here)
      option2_07.frameNStart = frameN;  // exact frame index
      
      option2_07.setAutoDraw(true);
    }

    
    // *option3_07* updates
    if (t >= 0.0 && option3_07.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_07.tStart = t;  // (not accounting for frame time here)
      option3_07.frameNStart = frameN;  // exact frame index
      
      option3_07.setAutoDraw(true);
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
    zud7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zud7RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'zud7'-------
    zud7Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_zud7.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_zud7.corr = 1;  // correct non-response
      } else {
         key_resp_zud7.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_zud7.keys', key_resp_zud7.keys);
    psychoJS.experiment.addData('key_resp_zud7.corr', key_resp_zud7.corr);
    if (typeof key_resp_zud7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_zud7.rt', key_resp_zud7.rt);
        routineTimer.reset();
        }
    
    key_resp_zud7.stop();
    // the Routine "zud7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_zud7Components;
function fb_zud7RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_zud7'-------
    t = 0;
    fb_zud7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_zud7.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
    } else {
        if (key_resp_zud7.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud7.setText(msg1);
    feedback0_zud7.setText(msg0);
    feedback_zud7.setText(msg);
    // keep track of which components have finished
    fb_zud7Components = [];
    fb_zud7Components.push(feedback1_zud7);
    fb_zud7Components.push(feedback0_zud7);
    fb_zud7Components.push(feedback_zud7);
    
    fb_zud7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_zud7RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_zud7'-------
    // get current time
    t = fb_zud7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud7* updates
    if (t >= 0.0 && feedback1_zud7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud7.tStart = t;  // (not accounting for frame time here)
      feedback1_zud7.frameNStart = frameN;  // exact frame index
      
      feedback1_zud7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud7.setAutoDraw(false);
    }
    
    // *feedback0_zud7* updates
    if (t >= 0.0 && feedback0_zud7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud7.tStart = t;  // (not accounting for frame time here)
      feedback0_zud7.frameNStart = frameN;  // exact frame index
      
      feedback0_zud7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud7.setAutoDraw(false);
    }
    
    // *feedback_zud7* updates
    if (t >= 0.0 && feedback_zud7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud7.tStart = t;  // (not accounting for frame time here)
      feedback_zud7.frameNStart = frameN;  // exact frame index
      
      feedback_zud7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud7.setAutoDraw(false);
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
    fb_zud7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_zud7RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_zud7'-------
    fb_zud7Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_zud8_allKeys;
var zud8Components;
function zud8RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'zud8'-------
    t = 0;
    zud8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_zud8.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_8.setFillColor(new util.Color('white'));
    rectangle_8.setFillColor(new util.Color('white'));
    cross_8.setFillColor(new util.Color('white'));
    key_resp_zud8.keys = undefined;
    key_resp_zud8.rt = undefined;
    _key_resp_zud8_allKeys = [];
    // keep track of which components have finished
    zud8Components = [];
    zud8Components.push(zud8_corr2);
    zud8Components.push(star_8);
    zud8Components.push(rectangle_8);
    zud8Components.push(cross_8);
    zud8Components.push(key_resp_zud8);
    zud8Components.push(option1_9);
    zud8Components.push(option2_9);
    zud8Components.push(option3_8);
    
    zud8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function zud8RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'zud8'-------
    // get current time
    t = zud8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *zud8_corr2* updates
    if (t >= 0.0 && zud8_corr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      zud8_corr2.tStart = t;  // (not accounting for frame time here)
      zud8_corr2.frameNStart = frameN;  // exact frame index
      
      zud8_corr2.setAutoDraw(true);
    }

    
    // *star_8* updates
    if (t >= 0.0 && star_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_8.tStart = t;  // (not accounting for frame time here)
      star_8.frameNStart = frameN;  // exact frame index
      
      star_8.setAutoDraw(true);
    }

    
    // *rectangle_8* updates
    if (t >= 0.0 && rectangle_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rectangle_8.tStart = t;  // (not accounting for frame time here)
      rectangle_8.frameNStart = frameN;  // exact frame index
      
      rectangle_8.setAutoDraw(true);
    }

    
    // *cross_8* updates
    if (t >= 0.0 && cross_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_8.tStart = t;  // (not accounting for frame time here)
      cross_8.frameNStart = frameN;  // exact frame index
      
      cross_8.setAutoDraw(true);
    }

    
    // *key_resp_zud8* updates
    if (t >= 0.0 && key_resp_zud8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_zud8.tStart = t;  // (not accounting for frame time here)
      key_resp_zud8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_zud8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_zud8.start(); }); // start on screen flip
    }

    if (key_resp_zud8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_zud8.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_zud8_allKeys = _key_resp_zud8_allKeys.concat(theseKeys);
      if (_key_resp_zud8_allKeys.length > 0) {
        key_resp_zud8.keys = _key_resp_zud8_allKeys[_key_resp_zud8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_zud8.rt = _key_resp_zud8_allKeys[_key_resp_zud8_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_zud8.keys == '2') {
            key_resp_zud8.corr = 1;
        } else {
            key_resp_zud8.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_9* updates
    if (t >= 0.0 && option1_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_9.tStart = t;  // (not accounting for frame time here)
      option1_9.frameNStart = frameN;  // exact frame index
      
      option1_9.setAutoDraw(true);
    }

    
    // *option2_9* updates
    if (t >= 0.0 && option2_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_9.tStart = t;  // (not accounting for frame time here)
      option2_9.frameNStart = frameN;  // exact frame index
      
      option2_9.setAutoDraw(true);
    }

    
    // *option3_8* updates
    if (t >= 0.0 && option3_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_8.tStart = t;  // (not accounting for frame time here)
      option3_8.frameNStart = frameN;  // exact frame index
      
      option3_8.setAutoDraw(true);
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
    zud8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function zud8RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'zud8'-------
    zud8Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_zud8.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_zud8.corr = 1;  // correct non-response
      } else {
         key_resp_zud8.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_zud8.keys', key_resp_zud8.keys);
    psychoJS.experiment.addData('key_resp_zud8.corr', key_resp_zud8.corr);
    if (typeof key_resp_zud8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_zud8.rt', key_resp_zud8.rt);
        routineTimer.reset();
        }
    
    key_resp_zud8.stop();
    // the Routine "zud8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_zud8Components;
function fb_zud8RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_zud8'-------
    t = 0;
    fb_zud8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_zud8.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_zud8.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_zud8.setText(msg1);
    feedback0_zud8.setText(msg0);
    feedback_zud8.setText(msg);
    // keep track of which components have finished
    fb_zud8Components = [];
    fb_zud8Components.push(feedback1_zud8);
    fb_zud8Components.push(feedback0_zud8);
    fb_zud8Components.push(feedback_zud8);
    
    fb_zud8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_zud8RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_zud8'-------
    // get current time
    t = fb_zud8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_zud8* updates
    if (t >= 0.0 && feedback1_zud8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_zud8.tStart = t;  // (not accounting for frame time here)
      feedback1_zud8.frameNStart = frameN;  // exact frame index
      
      feedback1_zud8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_zud8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_zud8.setAutoDraw(false);
    }
    
    // *feedback0_zud8* updates
    if (t >= 0.0 && feedback0_zud8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_zud8.tStart = t;  // (not accounting for frame time here)
      feedback0_zud8.frameNStart = frameN;  // exact frame index
      
      feedback0_zud8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_zud8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_zud8.setAutoDraw(false);
    }
    
    // *feedback_zud8* updates
    if (t >= 0.0 && feedback_zud8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_zud8.tStart = t;  // (not accounting for frame time here)
      feedback_zud8.frameNStart = frameN;  // exact frame index
      
      feedback_zud8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_zud8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_zud8.setAutoDraw(false);
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
    fb_zud8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_zud8RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_zud8'-------
    fb_zud8Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_t1_allKeys;
var number_correct;
var T1_corr1Components;
function T1_corr1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'T1_corr1'-------
    t = 0;
    T1_corr1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_t1.keys = undefined;
    key_resp_t1.rt = undefined;
    _key_resp_t1_allKeys = [];
    number_correct = 0;
    
    t1_triangle1.setFillColor(new util.Color('black'));
    t1_rectangle1.setFillColor(new util.Color('black'));
    // keep track of which components have finished
    T1_corr1Components = [];
    T1_corr1Components.push(key_resp_t1);
    T1_corr1Components.push(t1_zud);
    T1_corr1Components.push(t1_triangle1);
    T1_corr1Components.push(t1_rectangle1);
    T1_corr1Components.push(option1_critical);
    T1_corr1Components.push(option2_critical);
    
    T1_corr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function T1_corr1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'T1_corr1'-------
    // get current time
    t = T1_corr1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_t1* updates
    if (t >= 0.0 && key_resp_t1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_t1.tStart = t;  // (not accounting for frame time here)
      key_resp_t1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_t1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t1.start(); }); // start on screen flip
    }

    if (key_resp_t1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_t1.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_t1_allKeys = _key_resp_t1_allKeys.concat(theseKeys);
      if (_key_resp_t1_allKeys.length > 0) {
        key_resp_t1.keys = _key_resp_t1_allKeys[_key_resp_t1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_t1.rt = _key_resp_t1_allKeys[_key_resp_t1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *t1_zud* updates
    if (t >= 0.0 && t1_zud.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_zud.tStart = t;  // (not accounting for frame time here)
      t1_zud.frameNStart = frameN;  // exact frame index
      
      t1_zud.setAutoDraw(true);
    }

    
    // *t1_triangle1* updates
    if (t >= 0.0 && t1_triangle1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_triangle1.tStart = t;  // (not accounting for frame time here)
      t1_triangle1.frameNStart = frameN;  // exact frame index
      
      t1_triangle1.setAutoDraw(true);
    }

    
    // *t1_rectangle1* updates
    if (t >= 0.0 && t1_rectangle1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_rectangle1.tStart = t;  // (not accounting for frame time here)
      t1_rectangle1.frameNStart = frameN;  // exact frame index
      
      t1_rectangle1.setAutoDraw(true);
    }

    
    // *option1_critical* updates
    if (t >= 0.0 && option1_critical.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical.tStart = t;  // (not accounting for frame time here)
      option1_critical.frameNStart = frameN;  // exact frame index
      
      option1_critical.setAutoDraw(true);
    }

    
    // *option2_critical* updates
    if (t >= 0.0 && option2_critical.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical.tStart = t;  // (not accounting for frame time here)
      option2_critical.frameNStart = frameN;  // exact frame index
      
      option2_critical.setAutoDraw(true);
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
    T1_corr1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function T1_corr1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'T1_corr1'-------
    T1_corr1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_t1.keys', key_resp_t1.keys);
    if (typeof key_resp_t1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_t1.rt', key_resp_t1.rt);
        routineTimer.reset();
        }
    
    key_resp_t1.stop();
    number_correct = (number_correct + 1);
    if ((number_correct === 2)) {
        console.log(("total Correct: " + number_correct.toString()));
        trials_phase1.finished = true;
    } else {
        console.log("flag!");
        trials_phase1.finished = false;
    }
    
    // the Routine "T1_corr1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_t1_2_allKeys;
var T1_corr1_2Components;
function T1_corr1_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'T1_corr1_2'-------
    t = 0;
    T1_corr1_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_t1_2.keys = undefined;
    key_resp_t1_2.rt = undefined;
    _key_resp_t1_2_allKeys = [];
    t1_triangle1_2.setFillColor(new util.Color('white'));
    t1_rectangle1_2.setFillColor(new util.Color('white'));
    // keep track of which components have finished
    T1_corr1_2Components = [];
    T1_corr1_2Components.push(key_resp_t1_2);
    T1_corr1_2Components.push(t1_zud_2);
    T1_corr1_2Components.push(t1_triangle1_2);
    T1_corr1_2Components.push(t1_rectangle1_2);
    T1_corr1_2Components.push(option1_critical_2);
    T1_corr1_2Components.push(option2_critical_2);
    
    T1_corr1_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function T1_corr1_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'T1_corr1_2'-------
    // get current time
    t = T1_corr1_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_t1_2* updates
    if (t >= 0.0 && key_resp_t1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_t1_2.tStart = t;  // (not accounting for frame time here)
      key_resp_t1_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_t1_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t1_2.start(); }); // start on screen flip
    }

    if (key_resp_t1_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_t1_2.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_t1_2_allKeys = _key_resp_t1_2_allKeys.concat(theseKeys);
      if (_key_resp_t1_2_allKeys.length > 0) {
        key_resp_t1_2.keys = _key_resp_t1_2_allKeys[_key_resp_t1_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_t1_2.rt = _key_resp_t1_2_allKeys[_key_resp_t1_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *t1_zud_2* updates
    if (t >= 0.0 && t1_zud_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_zud_2.tStart = t;  // (not accounting for frame time here)
      t1_zud_2.frameNStart = frameN;  // exact frame index
      
      t1_zud_2.setAutoDraw(true);
    }

    
    // *t1_triangle1_2* updates
    if (t >= 0.0 && t1_triangle1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_triangle1_2.tStart = t;  // (not accounting for frame time here)
      t1_triangle1_2.frameNStart = frameN;  // exact frame index
      
      t1_triangle1_2.setAutoDraw(true);
    }

    
    // *t1_rectangle1_2* updates
    if (t >= 0.0 && t1_rectangle1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_rectangle1_2.tStart = t;  // (not accounting for frame time here)
      t1_rectangle1_2.frameNStart = frameN;  // exact frame index
      
      t1_rectangle1_2.setAutoDraw(true);
    }

    
    // *option1_critical_2* updates
    if (t >= 0.0 && option1_critical_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_2.tStart = t;  // (not accounting for frame time here)
      option1_critical_2.frameNStart = frameN;  // exact frame index
      
      option1_critical_2.setAutoDraw(true);
    }

    
    // *option2_critical_2* updates
    if (t >= 0.0 && option2_critical_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_2.tStart = t;  // (not accounting for frame time here)
      option2_critical_2.frameNStart = frameN;  // exact frame index
      
      option2_critical_2.setAutoDraw(true);
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
    T1_corr1_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function T1_corr1_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'T1_corr1_2'-------
    T1_corr1_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_t1_2.keys', key_resp_t1_2.keys);
    if (typeof key_resp_t1_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_t1_2.rt', key_resp_t1_2.rt);
        routineTimer.reset();
        }
    
    key_resp_t1_2.stop();
    number_correct = (number_correct + 1);
    if ((number_correct === 2)) {
        console.log(("total Correct: " + number_correct.toString()));
        trials_phase1.finished = true;
    } else {
        console.log("flag!");
        trials_phase1.finished = false;
    }
    
    // the Routine "T1_corr1_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_t1_3_allKeys;
var testComponents;
function testRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'test'-------
    t = 0;
    testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_t1_3.keys = undefined;
    key_resp_t1_3.rt = undefined;
    _key_resp_t1_3_allKeys = [];
    t1_triangle1_3.setFillColor(new util.Color('black'));
    t1_rectangle1_3.setFillColor(new util.Color('black'));
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(key_resp_t1_3);
    testComponents.push(t1_zud_3);
    testComponents.push(t1_triangle1_3);
    testComponents.push(t1_rectangle1_3);
    testComponents.push(option1_critical_13);
    testComponents.push(option2_critical_13);
    
    testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function testRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'test'-------
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_t1_3* updates
    if (t >= 0.0 && key_resp_t1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_t1_3.tStart = t;  // (not accounting for frame time here)
      key_resp_t1_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_t1_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t1_3.start(); }); // start on screen flip
    }

    if (key_resp_t1_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_t1_3.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_t1_3_allKeys = _key_resp_t1_3_allKeys.concat(theseKeys);
      if (_key_resp_t1_3_allKeys.length > 0) {
        key_resp_t1_3.keys = _key_resp_t1_3_allKeys[_key_resp_t1_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_t1_3.rt = _key_resp_t1_3_allKeys[_key_resp_t1_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *t1_zud_3* updates
    if (t >= 0.0 && t1_zud_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_zud_3.tStart = t;  // (not accounting for frame time here)
      t1_zud_3.frameNStart = frameN;  // exact frame index
      
      t1_zud_3.setAutoDraw(true);
    }

    
    // *t1_triangle1_3* updates
    if (t >= 0.0 && t1_triangle1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_triangle1_3.tStart = t;  // (not accounting for frame time here)
      t1_triangle1_3.frameNStart = frameN;  // exact frame index
      
      t1_triangle1_3.setAutoDraw(true);
    }

    
    // *t1_rectangle1_3* updates
    if (t >= 0.0 && t1_rectangle1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      t1_rectangle1_3.tStart = t;  // (not accounting for frame time here)
      t1_rectangle1_3.frameNStart = frameN;  // exact frame index
      
      t1_rectangle1_3.setAutoDraw(true);
    }

    
    // *option1_critical_13* updates
    if (t >= 0.0 && option1_critical_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_13.tStart = t;  // (not accounting for frame time here)
      option1_critical_13.frameNStart = frameN;  // exact frame index
      
      option1_critical_13.setAutoDraw(true);
    }

    
    // *option2_critical_13* updates
    if (t >= 0.0 && option2_critical_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_13.tStart = t;  // (not accounting for frame time here)
      option2_critical_13.frameNStart = frameN;  // exact frame index
      
      option2_critical_13.setAutoDraw(true);
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
    testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'test'-------
    testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_t1_3.keys', key_resp_t1_3.keys);
    if (typeof key_resp_t1_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_t1_3.rt', key_resp_t1_3.rt);
        routineTimer.reset();
        }
    
    key_resp_t1_3.stop();
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var phase2Components;
function phase2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'phase2'-------
    t = 0;
    phase2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    p2.setText('Phase 2');
    // keep track of which components have finished
    phase2Components = [];
    phase2Components.push(p2);
    
    phase2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function phase2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'phase2'-------
    // get current time
    t = phase2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *p2* updates
    if (t >= 0.0 && p2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p2.tStart = t;  // (not accounting for frame time here)
      p2.frameNStart = frameN;  // exact frame index
      
      p2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (p2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      p2.setAutoDraw(false);
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
    phase2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phase2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'phase2'-------
    phase2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_dax9_allKeys;
var dax9Components;
function dax9RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'dax9'-------
    t = 0;
    dax9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_dax9.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_9.setFillColor(new util.Color('black'));
    triange_9.setFillColor(new util.Color('black'));
    cross_9.setFillColor(new util.Color('black'));
    key_resp_dax9.keys = undefined;
    key_resp_dax9.rt = undefined;
    _key_resp_dax9_allKeys = [];
    // keep track of which components have finished
    dax9Components = [];
    dax9Components.push(dax9_corr2);
    dax9Components.push(star_9);
    dax9Components.push(triange_9);
    dax9Components.push(cross_9);
    dax9Components.push(key_resp_dax9);
    dax9Components.push(option1);
    dax9Components.push(option2);
    dax9Components.push(option3);
    
    dax9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function dax9RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'dax9'-------
    // get current time
    t = dax9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2* updates
    if (t >= 0.0 && dax9_corr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2.tStart = t;  // (not accounting for frame time here)
      dax9_corr2.frameNStart = frameN;  // exact frame index
      
      dax9_corr2.setAutoDraw(true);
    }

    
    // *star_9* updates
    if (t >= 0.0 && star_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_9.tStart = t;  // (not accounting for frame time here)
      star_9.frameNStart = frameN;  // exact frame index
      
      star_9.setAutoDraw(true);
    }

    
    // *triange_9* updates
    if (t >= 0.0 && triange_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_9.tStart = t;  // (not accounting for frame time here)
      triange_9.frameNStart = frameN;  // exact frame index
      
      triange_9.setAutoDraw(true);
    }

    
    // *cross_9* updates
    if (t >= 0.0 && cross_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_9.tStart = t;  // (not accounting for frame time here)
      cross_9.frameNStart = frameN;  // exact frame index
      
      cross_9.setAutoDraw(true);
    }

    
    // *key_resp_dax9* updates
    if (t >= 0.0 && key_resp_dax9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_dax9.tStart = t;  // (not accounting for frame time here)
      key_resp_dax9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_dax9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dax9.start(); }); // start on screen flip
    }

    if (key_resp_dax9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_dax9.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_dax9_allKeys = _key_resp_dax9_allKeys.concat(theseKeys);
      if (_key_resp_dax9_allKeys.length > 0) {
        key_resp_dax9.keys = _key_resp_dax9_allKeys[_key_resp_dax9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_dax9.rt = _key_resp_dax9_allKeys[_key_resp_dax9_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_dax9.keys == '2') {
            key_resp_dax9.corr = 1;
        } else {
            key_resp_dax9.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1* updates
    if (t >= 0.0 && option1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1.tStart = t;  // (not accounting for frame time here)
      option1.frameNStart = frameN;  // exact frame index
      
      option1.setAutoDraw(true);
    }

    
    // *option2* updates
    if (t >= 0.0 && option2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2.tStart = t;  // (not accounting for frame time here)
      option2.frameNStart = frameN;  // exact frame index
      
      option2.setAutoDraw(true);
    }

    
    // *option3* updates
    if (t >= 0.0 && option3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3.tStart = t;  // (not accounting for frame time here)
      option3.frameNStart = frameN;  // exact frame index
      
      option3.setAutoDraw(true);
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
    dax9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dax9RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'dax9'-------
    dax9Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_dax9.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_dax9.corr = 1;  // correct non-response
      } else {
         key_resp_dax9.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_dax9.keys', key_resp_dax9.keys);
    psychoJS.experiment.addData('key_resp_dax9.corr', key_resp_dax9.corr);
    if (typeof key_resp_dax9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_dax9.rt', key_resp_dax9.rt);
        routineTimer.reset();
        }
    
    key_resp_dax9.stop();
    // the Routine "dax9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_dax9Components;
function fb_dax9RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_dax9'-------
    t = 0;
    fb_dax9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_dax9.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_dax9.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9.setText(msg1);
    feedback0_dax9.setText(msg0);
    feedback_dax9.setText(msg);
    // keep track of which components have finished
    fb_dax9Components = [];
    fb_dax9Components.push(feedback1_dax9);
    fb_dax9Components.push(feedback0_dax9);
    fb_dax9Components.push(feedback_dax9);
    
    fb_dax9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_dax9RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_dax9'-------
    // get current time
    t = fb_dax9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9* updates
    if (t >= 0.0 && feedback1_dax9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9.setAutoDraw(false);
    }
    
    // *feedback0_dax9* updates
    if (t >= 0.0 && feedback0_dax9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9.setAutoDraw(false);
    }
    
    // *feedback_dax9* updates
    if (t >= 0.0 && feedback_dax9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9.tStart = t;  // (not accounting for frame time here)
      feedback_dax9.frameNStart = frameN;  // exact frame index
      
      feedback_dax9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9.setAutoDraw(false);
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
    fb_dax9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_dax9RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_dax9'-------
    fb_dax9Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_dax10_allKeys;
var dax10Components;
function dax10RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'dax10'-------
    t = 0;
    dax10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_zud7.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    triangle_10.setFillColor(new util.Color('black'));
    cross_10.setFillColor(new util.Color('black'));
    star_10.setFillColor(new util.Color('black'));
    key_resp_dax10.keys = undefined;
    key_resp_dax10.rt = undefined;
    _key_resp_dax10_allKeys = [];
    // keep track of which components have finished
    dax10Components = [];
    dax10Components.push(dax10_corr1);
    dax10Components.push(triangle_10);
    dax10Components.push(cross_10);
    dax10Components.push(star_10);
    dax10Components.push(key_resp_dax10);
    dax10Components.push(option1_8);
    dax10Components.push(option2_8);
    dax10Components.push(option3_10);
    
    dax10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function dax10RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'dax10'-------
    // get current time
    t = dax10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax10_corr1* updates
    if (t >= 0.0 && dax10_corr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax10_corr1.tStart = t;  // (not accounting for frame time here)
      dax10_corr1.frameNStart = frameN;  // exact frame index
      
      dax10_corr1.setAutoDraw(true);
    }

    
    // *triangle_10* updates
    if (t >= 0.0 && triangle_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triangle_10.tStart = t;  // (not accounting for frame time here)
      triangle_10.frameNStart = frameN;  // exact frame index
      
      triangle_10.setAutoDraw(true);
    }

    
    // *cross_10* updates
    if (t >= 0.0 && cross_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_10.tStart = t;  // (not accounting for frame time here)
      cross_10.frameNStart = frameN;  // exact frame index
      
      cross_10.setAutoDraw(true);
    }

    
    // *star_10* updates
    if (t >= 0.0 && star_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_10.tStart = t;  // (not accounting for frame time here)
      star_10.frameNStart = frameN;  // exact frame index
      
      star_10.setAutoDraw(true);
    }

    
    // *key_resp_dax10* updates
    if (t >= 0.0 && key_resp_dax10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_dax10.tStart = t;  // (not accounting for frame time here)
      key_resp_dax10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_dax10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dax10.start(); }); // start on screen flip
    }

    if (key_resp_dax10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_dax10.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_dax10_allKeys = _key_resp_dax10_allKeys.concat(theseKeys);
      if (_key_resp_dax10_allKeys.length > 0) {
        key_resp_dax10.keys = _key_resp_dax10_allKeys[_key_resp_dax10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_dax10.rt = _key_resp_dax10_allKeys[_key_resp_dax10_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_dax10.keys == '1') {
            key_resp_dax10.corr = 1;
        } else {
            key_resp_dax10.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_8* updates
    if (t >= 0.0 && option1_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_8.tStart = t;  // (not accounting for frame time here)
      option1_8.frameNStart = frameN;  // exact frame index
      
      option1_8.setAutoDraw(true);
    }

    
    // *option2_8* updates
    if (t >= 0.0 && option2_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_8.tStart = t;  // (not accounting for frame time here)
      option2_8.frameNStart = frameN;  // exact frame index
      
      option2_8.setAutoDraw(true);
    }

    
    // *option3_10* updates
    if (t >= 0.0 && option3_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_10.tStart = t;  // (not accounting for frame time here)
      option3_10.frameNStart = frameN;  // exact frame index
      
      option3_10.setAutoDraw(true);
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
    dax10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dax10RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'dax10'-------
    dax10Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_dax10.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_dax10.corr = 1;  // correct non-response
      } else {
         key_resp_dax10.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_dax10.keys', key_resp_dax10.keys);
    psychoJS.experiment.addData('key_resp_dax10.corr', key_resp_dax10.corr);
    if (typeof key_resp_dax10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_dax10.rt', key_resp_dax10.rt);
        routineTimer.reset();
        }
    
    key_resp_dax10.stop();
    // the Routine "dax10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_dax10Components;
function fb_dax10RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_dax10'-------
    t = 0;
    fb_dax10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_dax10.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_dax10.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_2.setText(msg1);
    feedback0_dax9_2.setText(msg0);
    feedback_dax9_2.setText(msg);
    // keep track of which components have finished
    fb_dax10Components = [];
    fb_dax10Components.push(feedback1_dax9_2);
    fb_dax10Components.push(feedback0_dax9_2);
    fb_dax10Components.push(feedback_dax9_2);
    
    fb_dax10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_dax10RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_dax10'-------
    // get current time
    t = fb_dax10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_2* updates
    if (t >= 0.0 && feedback1_dax9_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_2.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_2.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_2.setAutoDraw(false);
    }
    
    // *feedback0_dax9_2* updates
    if (t >= 0.0 && feedback0_dax9_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_2.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_2.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_2.setAutoDraw(false);
    }
    
    // *feedback_dax9_2* updates
    if (t >= 0.0 && feedback_dax9_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_2.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_2.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_2.setAutoDraw(false);
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
    fb_dax10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_dax10RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_dax10'-------
    fb_dax10Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_dax11_allKeys;
var dax11Components;
function dax11RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'dax11'-------
    t = 0;
    dax11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_dax11.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_11.setFillColor(new util.Color('white'));
    cross_11.setFillColor(new util.Color('white'));
    triangle_11.setFillColor(new util.Color('white'));
    key_resp_dax11.keys = undefined;
    key_resp_dax11.rt = undefined;
    _key_resp_dax11_allKeys = [];
    // keep track of which components have finished
    dax11Components = [];
    dax11Components.push(dax11_corr3);
    dax11Components.push(star_11);
    dax11Components.push(cross_11);
    dax11Components.push(triangle_11);
    dax11Components.push(key_resp_dax11);
    dax11Components.push(option1_6);
    dax11Components.push(option2_6);
    dax11Components.push(option3_6);
    
    dax11Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function dax11RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'dax11'-------
    // get current time
    t = dax11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax11_corr3* updates
    if (t >= 0.0 && dax11_corr3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax11_corr3.tStart = t;  // (not accounting for frame time here)
      dax11_corr3.frameNStart = frameN;  // exact frame index
      
      dax11_corr3.setAutoDraw(true);
    }

    
    // *star_11* updates
    if (t >= 0.0 && star_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_11.tStart = t;  // (not accounting for frame time here)
      star_11.frameNStart = frameN;  // exact frame index
      
      star_11.setAutoDraw(true);
    }

    
    // *cross_11* updates
    if (t >= 0.0 && cross_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_11.tStart = t;  // (not accounting for frame time here)
      cross_11.frameNStart = frameN;  // exact frame index
      
      cross_11.setAutoDraw(true);
    }

    
    // *triangle_11* updates
    if (t >= 0.0 && triangle_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triangle_11.tStart = t;  // (not accounting for frame time here)
      triangle_11.frameNStart = frameN;  // exact frame index
      
      triangle_11.setAutoDraw(true);
    }

    
    // *key_resp_dax11* updates
    if (t >= 0.0 && key_resp_dax11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_dax11.tStart = t;  // (not accounting for frame time here)
      key_resp_dax11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_dax11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dax11.start(); }); // start on screen flip
    }

    if (key_resp_dax11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_dax11.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_dax11_allKeys = _key_resp_dax11_allKeys.concat(theseKeys);
      if (_key_resp_dax11_allKeys.length > 0) {
        key_resp_dax11.keys = _key_resp_dax11_allKeys[_key_resp_dax11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_dax11.rt = _key_resp_dax11_allKeys[_key_resp_dax11_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_dax11.keys == '3') {
            key_resp_dax11.corr = 1;
        } else {
            key_resp_dax11.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_6* updates
    if (t >= 0.0 && option1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_6.tStart = t;  // (not accounting for frame time here)
      option1_6.frameNStart = frameN;  // exact frame index
      
      option1_6.setAutoDraw(true);
    }

    
    // *option2_6* updates
    if (t >= 0.0 && option2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_6.tStart = t;  // (not accounting for frame time here)
      option2_6.frameNStart = frameN;  // exact frame index
      
      option2_6.setAutoDraw(true);
    }

    
    // *option3_6* updates
    if (t >= 0.0 && option3_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_6.tStart = t;  // (not accounting for frame time here)
      option3_6.frameNStart = frameN;  // exact frame index
      
      option3_6.setAutoDraw(true);
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
    dax11Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dax11RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'dax11'-------
    dax11Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_dax11.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_dax11.corr = 1;  // correct non-response
      } else {
         key_resp_dax11.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_dax11.keys', key_resp_dax11.keys);
    psychoJS.experiment.addData('key_resp_dax11.corr', key_resp_dax11.corr);
    if (typeof key_resp_dax11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_dax11.rt', key_resp_dax11.rt);
        routineTimer.reset();
        }
    
    key_resp_dax11.stop();
    // the Routine "dax11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_dax11Components;
function fb_dax11RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_dax11'-------
    t = 0;
    fb_dax11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_dax11.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_dax11.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_3.setText(msg1);
    feedback0_dax9_3.setText(msg0);
    feedback_dax9_3.setText(msg);
    // keep track of which components have finished
    fb_dax11Components = [];
    fb_dax11Components.push(feedback1_dax9_3);
    fb_dax11Components.push(feedback0_dax9_3);
    fb_dax11Components.push(feedback_dax9_3);
    
    fb_dax11Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_dax11RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_dax11'-------
    // get current time
    t = fb_dax11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_3* updates
    if (t >= 0.0 && feedback1_dax9_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_3.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_3.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_3.setAutoDraw(false);
    }
    
    // *feedback0_dax9_3* updates
    if (t >= 0.0 && feedback0_dax9_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_3.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_3.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_3.setAutoDraw(false);
    }
    
    // *feedback_dax9_3* updates
    if (t >= 0.0 && feedback_dax9_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_3.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_3.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_3.setAutoDraw(false);
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
    fb_dax11Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_dax11RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_dax11'-------
    fb_dax11Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_dax12_allKeys;
var dax12Components;
function dax12RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'dax12'-------
    t = 0;
    dax12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_dax12.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_12.setFillColor(new util.Color('white'));
    tr_12.setFillColor(new util.Color('white'));
    cr_12.setFillColor(new util.Color('white'));
    key_resp_dax12.keys = undefined;
    key_resp_dax12.rt = undefined;
    _key_resp_dax12_allKeys = [];
    // keep track of which components have finished
    dax12Components = [];
    dax12Components.push(dax11_corr2);
    dax12Components.push(star_12);
    dax12Components.push(tr_12);
    dax12Components.push(cr_12);
    dax12Components.push(key_resp_dax12);
    dax12Components.push(option1_7);
    dax12Components.push(option2_7);
    dax12Components.push(option3_7);
    
    dax12Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function dax12RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'dax12'-------
    // get current time
    t = dax12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax11_corr2* updates
    if (t >= 0.0 && dax11_corr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax11_corr2.tStart = t;  // (not accounting for frame time here)
      dax11_corr2.frameNStart = frameN;  // exact frame index
      
      dax11_corr2.setAutoDraw(true);
    }

    
    // *star_12* updates
    if (t >= 0.0 && star_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_12.tStart = t;  // (not accounting for frame time here)
      star_12.frameNStart = frameN;  // exact frame index
      
      star_12.setAutoDraw(true);
    }

    
    // *tr_12* updates
    if (t >= 0.0 && tr_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr_12.tStart = t;  // (not accounting for frame time here)
      tr_12.frameNStart = frameN;  // exact frame index
      
      tr_12.setAutoDraw(true);
    }

    
    // *cr_12* updates
    if (t >= 0.0 && cr_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cr_12.tStart = t;  // (not accounting for frame time here)
      cr_12.frameNStart = frameN;  // exact frame index
      
      cr_12.setAutoDraw(true);
    }

    
    // *key_resp_dax12* updates
    if (t >= 0.0 && key_resp_dax12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_dax12.tStart = t;  // (not accounting for frame time here)
      key_resp_dax12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_dax12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dax12.start(); }); // start on screen flip
    }

    if (key_resp_dax12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_dax12.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_dax12_allKeys = _key_resp_dax12_allKeys.concat(theseKeys);
      if (_key_resp_dax12_allKeys.length > 0) {
        key_resp_dax12.keys = _key_resp_dax12_allKeys[_key_resp_dax12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_dax12.rt = _key_resp_dax12_allKeys[_key_resp_dax12_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_dax12.keys == '2') {
            key_resp_dax12.corr = 1;
        } else {
            key_resp_dax12.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_7* updates
    if (t >= 0.0 && option1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_7.tStart = t;  // (not accounting for frame time here)
      option1_7.frameNStart = frameN;  // exact frame index
      
      option1_7.setAutoDraw(true);
    }

    
    // *option2_7* updates
    if (t >= 0.0 && option2_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_7.tStart = t;  // (not accounting for frame time here)
      option2_7.frameNStart = frameN;  // exact frame index
      
      option2_7.setAutoDraw(true);
    }

    
    // *option3_7* updates
    if (t >= 0.0 && option3_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_7.tStart = t;  // (not accounting for frame time here)
      option3_7.frameNStart = frameN;  // exact frame index
      
      option3_7.setAutoDraw(true);
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
    dax12Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dax12RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'dax12'-------
    dax12Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_dax12.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_dax12.corr = 1;  // correct non-response
      } else {
         key_resp_dax12.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_dax12.keys', key_resp_dax12.keys);
    psychoJS.experiment.addData('key_resp_dax12.corr', key_resp_dax12.corr);
    if (typeof key_resp_dax12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_dax12.rt', key_resp_dax12.rt);
        routineTimer.reset();
        }
    
    key_resp_dax12.stop();
    // the Routine "dax12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_dax12Components;
function fb_dax12RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_dax12'-------
    t = 0;
    fb_dax12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_dax12.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_dax12.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_4.setText(msg1);
    feedback0_dax9_4.setText(msg0);
    feedback_dax9_4.setText(msg);
    // keep track of which components have finished
    fb_dax12Components = [];
    fb_dax12Components.push(feedback1_dax9_4);
    fb_dax12Components.push(feedback0_dax9_4);
    fb_dax12Components.push(feedback_dax9_4);
    
    fb_dax12Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_dax12RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_dax12'-------
    // get current time
    t = fb_dax12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_4* updates
    if (t >= 0.0 && feedback1_dax9_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_4.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_4.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_4.setAutoDraw(false);
    }
    
    // *feedback0_dax9_4* updates
    if (t >= 0.0 && feedback0_dax9_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_4.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_4.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_4.setAutoDraw(false);
    }
    
    // *feedback_dax9_4* updates
    if (t >= 0.0 && feedback_dax9_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_4.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_4.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_4.setAutoDraw(false);
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
    fb_dax12Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_dax12RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_dax12'-------
    fb_dax12Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicket13_allKeys;
var blicket13Components;
function blicket13RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicket13'-------
    t = 0;
    blicket13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_blicket13.keys = undefined;
    key_resp_blicket13.rt = undefined;
    _key_resp_blicket13_allKeys = [];
    blicket_st_w.setFillColor(new util.Color('white'));
    blicket_st_b.setFillColor(new util.Color('black'));
    // keep track of which components have finished
    blicket13Components = [];
    blicket13Components.push(key_resp_blicket13);
    blicket13Components.push(blicket1);
    blicket13Components.push(blicket_st_w);
    blicket13Components.push(blicket_st_b);
    blicket13Components.push(option1_critical_3);
    blicket13Components.push(option2_critical_3);
    
    blicket13Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicket13RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicket13'-------
    // get current time
    t = blicket13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_blicket13* updates
    if (t >= 0.0 && key_resp_blicket13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicket13.tStart = t;  // (not accounting for frame time here)
      key_resp_blicket13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicket13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicket13.start(); }); // start on screen flip
    }

    if (key_resp_blicket13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicket13.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_blicket13_allKeys = _key_resp_blicket13_allKeys.concat(theseKeys);
      if (_key_resp_blicket13_allKeys.length > 0) {
        key_resp_blicket13.keys = _key_resp_blicket13_allKeys[_key_resp_blicket13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicket13.rt = _key_resp_blicket13_allKeys[_key_resp_blicket13_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicket13.keys == '2') {
            key_resp_blicket13.corr = 1;
        } else {
            key_resp_blicket13.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1* updates
    if (t >= 0.0 && blicket1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1.tStart = t;  // (not accounting for frame time here)
      blicket1.frameNStart = frameN;  // exact frame index
      
      blicket1.setAutoDraw(true);
    }

    
    // *blicket_st_w* updates
    if (t >= 0.0 && blicket_st_w.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w.tStart = t;  // (not accounting for frame time here)
      blicket_st_w.frameNStart = frameN;  // exact frame index
      
      blicket_st_w.setAutoDraw(true);
    }

    
    // *blicket_st_b* updates
    if (t >= 0.0 && blicket_st_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b.tStart = t;  // (not accounting for frame time here)
      blicket_st_b.frameNStart = frameN;  // exact frame index
      
      blicket_st_b.setAutoDraw(true);
    }

    
    // *option1_critical_3* updates
    if (t >= 0.0 && option1_critical_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_3.tStart = t;  // (not accounting for frame time here)
      option1_critical_3.frameNStart = frameN;  // exact frame index
      
      option1_critical_3.setAutoDraw(true);
    }

    
    // *option2_critical_3* updates
    if (t >= 0.0 && option2_critical_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_3.tStart = t;  // (not accounting for frame time here)
      option2_critical_3.frameNStart = frameN;  // exact frame index
      
      option2_critical_3.setAutoDraw(true);
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
    blicket13Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicket13RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicket13'-------
    blicket13Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_blicket13.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_blicket13.corr = 1;  // correct non-response
      } else {
         key_resp_blicket13.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicket13.keys', key_resp_blicket13.keys);
    psychoJS.experiment.addData('key_resp_blicket13.corr', key_resp_blicket13.corr);
    if (typeof key_resp_blicket13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicket13.rt', key_resp_blicket13.rt);
        routineTimer.reset();
        }
    
    key_resp_blicket13.stop();
    // the Routine "blicket13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_blicket13Components;
function fb_blicket13RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_blicket13'-------
    t = 0;
    fb_blicket13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_blicket13.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_blicket13.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_5.setText(msg1);
    feedback0_dax9_5.setText(msg0);
    feedback_dax9_5.setText(msg);
    // keep track of which components have finished
    fb_blicket13Components = [];
    fb_blicket13Components.push(feedback1_dax9_5);
    fb_blicket13Components.push(feedback0_dax9_5);
    fb_blicket13Components.push(feedback_dax9_5);
    
    fb_blicket13Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_blicket13RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_blicket13'-------
    // get current time
    t = fb_blicket13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_5* updates
    if (t >= 0.0 && feedback1_dax9_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_5.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_5.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_5.setAutoDraw(false);
    }
    
    // *feedback0_dax9_5* updates
    if (t >= 0.0 && feedback0_dax9_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_5.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_5.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_5.setAutoDraw(false);
    }
    
    // *feedback_dax9_5* updates
    if (t >= 0.0 && feedback_dax9_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_5.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_5.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_5.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_5.setAutoDraw(false);
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
    fb_blicket13Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_blicket13RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_blicket13'-------
    fb_blicket13Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicket14_allKeys;
var blicket14Components;
function blicket14RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicket14'-------
    t = 0;
    blicket14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_blicket14.keys = undefined;
    key_resp_blicket14.rt = undefined;
    _key_resp_blicket14_allKeys = [];
    blicket_st_w_2.setFillColor(new util.Color('white'));
    blicket_st_b_2.setFillColor(new util.Color('black'));
    // keep track of which components have finished
    blicket14Components = [];
    blicket14Components.push(key_resp_blicket14);
    blicket14Components.push(blicket1_2);
    blicket14Components.push(blicket_st_w_2);
    blicket14Components.push(blicket_st_b_2);
    blicket14Components.push(option1_critical_4);
    blicket14Components.push(option2_critical_4);
    
    blicket14Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicket14RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicket14'-------
    // get current time
    t = blicket14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_blicket14* updates
    if (t >= 0.0 && key_resp_blicket14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicket14.tStart = t;  // (not accounting for frame time here)
      key_resp_blicket14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicket14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicket14.start(); }); // start on screen flip
    }

    if (key_resp_blicket14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicket14.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_blicket14_allKeys = _key_resp_blicket14_allKeys.concat(theseKeys);
      if (_key_resp_blicket14_allKeys.length > 0) {
        key_resp_blicket14.keys = _key_resp_blicket14_allKeys[_key_resp_blicket14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicket14.rt = _key_resp_blicket14_allKeys[_key_resp_blicket14_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicket14.keys == '2') {
            key_resp_blicket14.corr = 1;
        } else {
            key_resp_blicket14.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_2* updates
    if (t >= 0.0 && blicket1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_2.tStart = t;  // (not accounting for frame time here)
      blicket1_2.frameNStart = frameN;  // exact frame index
      
      blicket1_2.setAutoDraw(true);
    }

    
    // *blicket_st_w_2* updates
    if (t >= 0.0 && blicket_st_w_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w_2.tStart = t;  // (not accounting for frame time here)
      blicket_st_w_2.frameNStart = frameN;  // exact frame index
      
      blicket_st_w_2.setAutoDraw(true);
    }

    
    // *blicket_st_b_2* updates
    if (t >= 0.0 && blicket_st_b_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b_2.tStart = t;  // (not accounting for frame time here)
      blicket_st_b_2.frameNStart = frameN;  // exact frame index
      
      blicket_st_b_2.setAutoDraw(true);
    }

    
    // *option1_critical_4* updates
    if (t >= 0.0 && option1_critical_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_4.tStart = t;  // (not accounting for frame time here)
      option1_critical_4.frameNStart = frameN;  // exact frame index
      
      option1_critical_4.setAutoDraw(true);
    }

    
    // *option2_critical_4* updates
    if (t >= 0.0 && option2_critical_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_4.tStart = t;  // (not accounting for frame time here)
      option2_critical_4.frameNStart = frameN;  // exact frame index
      
      option2_critical_4.setAutoDraw(true);
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
    blicket14Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicket14RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicket14'-------
    blicket14Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_blicket14.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_blicket14.corr = 1;  // correct non-response
      } else {
         key_resp_blicket14.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicket14.keys', key_resp_blicket14.keys);
    psychoJS.experiment.addData('key_resp_blicket14.corr', key_resp_blicket14.corr);
    if (typeof key_resp_blicket14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicket14.rt', key_resp_blicket14.rt);
        routineTimer.reset();
        }
    
    key_resp_blicket14.stop();
    // the Routine "blicket14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_blicket14Components;
function fb_blicket14RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_blicket14'-------
    t = 0;
    fb_blicket14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_blicket14.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_blicket14.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_6.setText(msg1);
    feedback0_dax9_6.setText(msg0);
    feedback_dax9_6.setText(msg);
    // keep track of which components have finished
    fb_blicket14Components = [];
    fb_blicket14Components.push(feedback1_dax9_6);
    fb_blicket14Components.push(feedback0_dax9_6);
    fb_blicket14Components.push(feedback_dax9_6);
    
    fb_blicket14Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_blicket14RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_blicket14'-------
    // get current time
    t = fb_blicket14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_6* updates
    if (t >= 0.0 && feedback1_dax9_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_6.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_6.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_6.setAutoDraw(false);
    }
    
    // *feedback0_dax9_6* updates
    if (t >= 0.0 && feedback0_dax9_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_6.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_6.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_6.setAutoDraw(false);
    }
    
    // *feedback_dax9_6* updates
    if (t >= 0.0 && feedback_dax9_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_6.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_6.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_6.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_6.setAutoDraw(false);
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
    fb_blicket14Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_blicket14RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_blicket14'-------
    fb_blicket14Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicket15_allKeys;
var blicket15Components;
function blicket15RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicket15'-------
    t = 0;
    blicket15Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_blicket15.keys = undefined;
    key_resp_blicket15.rt = undefined;
    _key_resp_blicket15_allKeys = [];
    blicket_st_b15.setFillColor(new util.Color('black'));
    blicket_st_w15.setFillColor(new util.Color('white'));
    // keep track of which components have finished
    blicket15Components = [];
    blicket15Components.push(key_resp_blicket15);
    blicket15Components.push(blicket1_3);
    blicket15Components.push(blicket_st_b15);
    blicket15Components.push(blicket_st_w15);
    blicket15Components.push(option1_critical_5);
    blicket15Components.push(option2_critical_5);
    
    blicket15Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicket15RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicket15'-------
    // get current time
    t = blicket15Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_blicket15* updates
    if (t >= 0.0 && key_resp_blicket15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicket15.tStart = t;  // (not accounting for frame time here)
      key_resp_blicket15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicket15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicket15.start(); }); // start on screen flip
    }

    if (key_resp_blicket15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicket15.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_blicket15_allKeys = _key_resp_blicket15_allKeys.concat(theseKeys);
      if (_key_resp_blicket15_allKeys.length > 0) {
        key_resp_blicket15.keys = _key_resp_blicket15_allKeys[_key_resp_blicket15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicket15.rt = _key_resp_blicket15_allKeys[_key_resp_blicket15_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicket15.keys == '1') {
            key_resp_blicket15.corr = 1;
        } else {
            key_resp_blicket15.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_3* updates
    if (t >= 0.0 && blicket1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_3.tStart = t;  // (not accounting for frame time here)
      blicket1_3.frameNStart = frameN;  // exact frame index
      
      blicket1_3.setAutoDraw(true);
    }

    
    // *blicket_st_b15* updates
    if (t >= 0.0 && blicket_st_b15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b15.tStart = t;  // (not accounting for frame time here)
      blicket_st_b15.frameNStart = frameN;  // exact frame index
      
      blicket_st_b15.setAutoDraw(true);
    }

    
    // *blicket_st_w15* updates
    if (t >= 0.0 && blicket_st_w15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w15.tStart = t;  // (not accounting for frame time here)
      blicket_st_w15.frameNStart = frameN;  // exact frame index
      
      blicket_st_w15.setAutoDraw(true);
    }

    
    // *option1_critical_5* updates
    if (t >= 0.0 && option1_critical_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_5.tStart = t;  // (not accounting for frame time here)
      option1_critical_5.frameNStart = frameN;  // exact frame index
      
      option1_critical_5.setAutoDraw(true);
    }

    
    // *option2_critical_5* updates
    if (t >= 0.0 && option2_critical_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_5.tStart = t;  // (not accounting for frame time here)
      option2_critical_5.frameNStart = frameN;  // exact frame index
      
      option2_critical_5.setAutoDraw(true);
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
    blicket15Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicket15RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicket15'-------
    blicket15Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_blicket15.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_blicket15.corr = 1;  // correct non-response
      } else {
         key_resp_blicket15.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicket15.keys', key_resp_blicket15.keys);
    psychoJS.experiment.addData('key_resp_blicket15.corr', key_resp_blicket15.corr);
    if (typeof key_resp_blicket15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicket15.rt', key_resp_blicket15.rt);
        routineTimer.reset();
        }
    
    key_resp_blicket15.stop();
    // the Routine "blicket15" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_blicket15Components;
function fb_blicket15RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_blicket15'-------
    t = 0;
    fb_blicket15Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_blicket15.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_blicket15.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_7.setText(msg1);
    feedback0_dax9_7.setText(msg0);
    feedback_dax9_7.setText(msg);
    // keep track of which components have finished
    fb_blicket15Components = [];
    fb_blicket15Components.push(feedback1_dax9_7);
    fb_blicket15Components.push(feedback0_dax9_7);
    fb_blicket15Components.push(feedback_dax9_7);
    
    fb_blicket15Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_blicket15RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_blicket15'-------
    // get current time
    t = fb_blicket15Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_7* updates
    if (t >= 0.0 && feedback1_dax9_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_7.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_7.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_7.setAutoDraw(false);
    }
    
    // *feedback0_dax9_7* updates
    if (t >= 0.0 && feedback0_dax9_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_7.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_7.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_7.setAutoDraw(false);
    }
    
    // *feedback_dax9_7* updates
    if (t >= 0.0 && feedback_dax9_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_7.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_7.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_7.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_7.setAutoDraw(false);
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
    fb_blicket15Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_blicket15RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_blicket15'-------
    fb_blicket15Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicket16_allKeys;
var blicket16Components;
function blicket16RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicket16'-------
    t = 0;
    blicket16Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_blicket16.keys = undefined;
    key_resp_blicket16.rt = undefined;
    _key_resp_blicket16_allKeys = [];
    blicket_st_b15_2.setFillColor(new util.Color('black'));
    blicket_st_w15_2.setFillColor(new util.Color('white'));
    // keep track of which components have finished
    blicket16Components = [];
    blicket16Components.push(key_resp_blicket16);
    blicket16Components.push(blicket1_4);
    blicket16Components.push(blicket_st_b15_2);
    blicket16Components.push(blicket_st_w15_2);
    blicket16Components.push(option1_critical_6);
    blicket16Components.push(option2_critical_6);
    
    blicket16Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicket16RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicket16'-------
    // get current time
    t = blicket16Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_blicket16* updates
    if (t >= 0.0 && key_resp_blicket16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicket16.tStart = t;  // (not accounting for frame time here)
      key_resp_blicket16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicket16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicket16.start(); }); // start on screen flip
    }

    if (key_resp_blicket16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicket16.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_blicket16_allKeys = _key_resp_blicket16_allKeys.concat(theseKeys);
      if (_key_resp_blicket16_allKeys.length > 0) {
        key_resp_blicket16.keys = _key_resp_blicket16_allKeys[_key_resp_blicket16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicket16.rt = _key_resp_blicket16_allKeys[_key_resp_blicket16_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicket16.keys == '1') {
            key_resp_blicket16.corr = 1;
        } else {
            key_resp_blicket16.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_4* updates
    if (t >= 0.0 && blicket1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_4.tStart = t;  // (not accounting for frame time here)
      blicket1_4.frameNStart = frameN;  // exact frame index
      
      blicket1_4.setAutoDraw(true);
    }

    
    // *blicket_st_b15_2* updates
    if (t >= 0.0 && blicket_st_b15_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b15_2.tStart = t;  // (not accounting for frame time here)
      blicket_st_b15_2.frameNStart = frameN;  // exact frame index
      
      blicket_st_b15_2.setAutoDraw(true);
    }

    
    // *blicket_st_w15_2* updates
    if (t >= 0.0 && blicket_st_w15_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w15_2.tStart = t;  // (not accounting for frame time here)
      blicket_st_w15_2.frameNStart = frameN;  // exact frame index
      
      blicket_st_w15_2.setAutoDraw(true);
    }

    
    // *option1_critical_6* updates
    if (t >= 0.0 && option1_critical_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_6.tStart = t;  // (not accounting for frame time here)
      option1_critical_6.frameNStart = frameN;  // exact frame index
      
      option1_critical_6.setAutoDraw(true);
    }

    
    // *option2_critical_6* updates
    if (t >= 0.0 && option2_critical_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_6.tStart = t;  // (not accounting for frame time here)
      option2_critical_6.frameNStart = frameN;  // exact frame index
      
      option2_critical_6.setAutoDraw(true);
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
    blicket16Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicket16RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicket16'-------
    blicket16Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_blicket16.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_blicket16.corr = 1;  // correct non-response
      } else {
         key_resp_blicket16.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicket16.keys', key_resp_blicket16.keys);
    psychoJS.experiment.addData('key_resp_blicket16.corr', key_resp_blicket16.corr);
    if (typeof key_resp_blicket16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicket16.rt', key_resp_blicket16.rt);
        routineTimer.reset();
        }
    
    key_resp_blicket16.stop();
    // the Routine "blicket16" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_blicket16Components;
function fb_blicket16RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_blicket16'-------
    t = 0;
    fb_blicket16Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_blicket16.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_blicket16.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_8.setText(msg1);
    feedback0_dax9_8.setText(msg0);
    feedback_dax9_8.setText(msg);
    // keep track of which components have finished
    fb_blicket16Components = [];
    fb_blicket16Components.push(feedback1_dax9_8);
    fb_blicket16Components.push(feedback0_dax9_8);
    fb_blicket16Components.push(feedback_dax9_8);
    
    fb_blicket16Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_blicket16RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_blicket16'-------
    // get current time
    t = fb_blicket16Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_8* updates
    if (t >= 0.0 && feedback1_dax9_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_8.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_8.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_8.setAutoDraw(false);
    }
    
    // *feedback0_dax9_8* updates
    if (t >= 0.0 && feedback0_dax9_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_8.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_8.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_8.setAutoDraw(false);
    }
    
    // *feedback_dax9_8* updates
    if (t >= 0.0 && feedback_dax9_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_8.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_8.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_8.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_8.setAutoDraw(false);
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
    fb_blicket16Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_blicket16RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_blicket16'-------
    fb_blicket16Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicket17_allKeys;
var smicket17Components;
function smicket17RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicket17'-------
    t = 0;
    smicket17Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_smicket17.keys = undefined;
    key_resp_smicket17.rt = undefined;
    _key_resp_smicket17_allKeys = [];
    blicket_st_w_3.setFillColor(new util.Color('white'));
    blicket_st_b_3.setFillColor(new util.Color('black'));
    // keep track of which components have finished
    smicket17Components = [];
    smicket17Components.push(key_resp_smicket17);
    smicket17Components.push(blicket1_5);
    smicket17Components.push(blicket_st_w_3);
    smicket17Components.push(blicket_st_b_3);
    smicket17Components.push(option1_critical_7);
    smicket17Components.push(option2_critical_7);
    
    smicket17Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicket17RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicket17'-------
    // get current time
    t = smicket17Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_smicket17* updates
    if (t >= 0.0 && key_resp_smicket17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicket17.tStart = t;  // (not accounting for frame time here)
      key_resp_smicket17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicket17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicket17.start(); }); // start on screen flip
    }

    if (key_resp_smicket17.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicket17.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_smicket17_allKeys = _key_resp_smicket17_allKeys.concat(theseKeys);
      if (_key_resp_smicket17_allKeys.length > 0) {
        key_resp_smicket17.keys = _key_resp_smicket17_allKeys[_key_resp_smicket17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicket17.rt = _key_resp_smicket17_allKeys[_key_resp_smicket17_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicket17.keys == '1') {
            key_resp_smicket17.corr = 1;
        } else {
            key_resp_smicket17.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_5* updates
    if (t >= 0.0 && blicket1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_5.tStart = t;  // (not accounting for frame time here)
      blicket1_5.frameNStart = frameN;  // exact frame index
      
      blicket1_5.setAutoDraw(true);
    }

    
    // *blicket_st_w_3* updates
    if (t >= 0.0 && blicket_st_w_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w_3.tStart = t;  // (not accounting for frame time here)
      blicket_st_w_3.frameNStart = frameN;  // exact frame index
      
      blicket_st_w_3.setAutoDraw(true);
    }

    
    // *blicket_st_b_3* updates
    if (t >= 0.0 && blicket_st_b_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b_3.tStart = t;  // (not accounting for frame time here)
      blicket_st_b_3.frameNStart = frameN;  // exact frame index
      
      blicket_st_b_3.setAutoDraw(true);
    }

    
    // *option1_critical_7* updates
    if (t >= 0.0 && option1_critical_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_7.tStart = t;  // (not accounting for frame time here)
      option1_critical_7.frameNStart = frameN;  // exact frame index
      
      option1_critical_7.setAutoDraw(true);
    }

    
    // *option2_critical_7* updates
    if (t >= 0.0 && option2_critical_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_7.tStart = t;  // (not accounting for frame time here)
      option2_critical_7.frameNStart = frameN;  // exact frame index
      
      option2_critical_7.setAutoDraw(true);
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
    smicket17Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicket17RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicket17'-------
    smicket17Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_smicket17.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_smicket17.corr = 1;  // correct non-response
      } else {
         key_resp_smicket17.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicket17.keys', key_resp_smicket17.keys);
    psychoJS.experiment.addData('key_resp_smicket17.corr', key_resp_smicket17.corr);
    if (typeof key_resp_smicket17.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicket17.rt', key_resp_smicket17.rt);
        routineTimer.reset();
        }
    
    key_resp_smicket17.stop();
    // the Routine "smicket17" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_smicket17Components;
function fb_smicket17RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_smicket17'-------
    t = 0;
    fb_smicket17Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_smicket17.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_smicket17.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_9.setText(msg1);
    feedback0_dax9_9.setText(msg0);
    feedback_dax9_9.setText(msg);
    // keep track of which components have finished
    fb_smicket17Components = [];
    fb_smicket17Components.push(feedback1_dax9_9);
    fb_smicket17Components.push(feedback0_dax9_9);
    fb_smicket17Components.push(feedback_dax9_9);
    
    fb_smicket17Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_smicket17RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_smicket17'-------
    // get current time
    t = fb_smicket17Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_9* updates
    if (t >= 0.0 && feedback1_dax9_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_9.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_9.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_9.setAutoDraw(false);
    }
    
    // *feedback0_dax9_9* updates
    if (t >= 0.0 && feedback0_dax9_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_9.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_9.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_9.setAutoDraw(false);
    }
    
    // *feedback_dax9_9* updates
    if (t >= 0.0 && feedback_dax9_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_9.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_9.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_9.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_9.setAutoDraw(false);
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
    fb_smicket17Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_smicket17RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_smicket17'-------
    fb_smicket17Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicket18_allKeys;
var smicket18Components;
function smicket18RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicket18'-------
    t = 0;
    smicket18Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_smicket18.keys = undefined;
    key_resp_smicket18.rt = undefined;
    _key_resp_smicket18_allKeys = [];
    blicket_st_w_4.setFillColor(new util.Color('black'));
    blicket_st_b_4.setFillColor(new util.Color('white'));
    // keep track of which components have finished
    smicket18Components = [];
    smicket18Components.push(key_resp_smicket18);
    smicket18Components.push(blicket1_6);
    smicket18Components.push(blicket_st_w_4);
    smicket18Components.push(blicket_st_b_4);
    smicket18Components.push(option1_critical_8);
    smicket18Components.push(option2_critical_8);
    
    smicket18Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicket18RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicket18'-------
    // get current time
    t = smicket18Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_smicket18* updates
    if (t >= 0.0 && key_resp_smicket18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicket18.tStart = t;  // (not accounting for frame time here)
      key_resp_smicket18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicket18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicket18.start(); }); // start on screen flip
    }

    if (key_resp_smicket18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicket18.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_smicket18_allKeys = _key_resp_smicket18_allKeys.concat(theseKeys);
      if (_key_resp_smicket18_allKeys.length > 0) {
        key_resp_smicket18.keys = _key_resp_smicket18_allKeys[_key_resp_smicket18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicket18.rt = _key_resp_smicket18_allKeys[_key_resp_smicket18_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicket18.keys == '2') {
            key_resp_smicket18.corr = 1;
        } else {
            key_resp_smicket18.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_6* updates
    if (t >= 0.0 && blicket1_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_6.tStart = t;  // (not accounting for frame time here)
      blicket1_6.frameNStart = frameN;  // exact frame index
      
      blicket1_6.setAutoDraw(true);
    }

    
    // *blicket_st_w_4* updates
    if (t >= 0.0 && blicket_st_w_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w_4.tStart = t;  // (not accounting for frame time here)
      blicket_st_w_4.frameNStart = frameN;  // exact frame index
      
      blicket_st_w_4.setAutoDraw(true);
    }

    
    // *blicket_st_b_4* updates
    if (t >= 0.0 && blicket_st_b_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b_4.tStart = t;  // (not accounting for frame time here)
      blicket_st_b_4.frameNStart = frameN;  // exact frame index
      
      blicket_st_b_4.setAutoDraw(true);
    }

    
    // *option1_critical_8* updates
    if (t >= 0.0 && option1_critical_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_8.tStart = t;  // (not accounting for frame time here)
      option1_critical_8.frameNStart = frameN;  // exact frame index
      
      option1_critical_8.setAutoDraw(true);
    }

    
    // *option2_critical_8* updates
    if (t >= 0.0 && option2_critical_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_8.tStart = t;  // (not accounting for frame time here)
      option2_critical_8.frameNStart = frameN;  // exact frame index
      
      option2_critical_8.setAutoDraw(true);
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
    smicket18Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicket18RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicket18'-------
    smicket18Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_smicket18.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_smicket18.corr = 1;  // correct non-response
      } else {
         key_resp_smicket18.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicket18.keys', key_resp_smicket18.keys);
    psychoJS.experiment.addData('key_resp_smicket18.corr', key_resp_smicket18.corr);
    if (typeof key_resp_smicket18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicket18.rt', key_resp_smicket18.rt);
        routineTimer.reset();
        }
    
    key_resp_smicket18.stop();
    // the Routine "smicket18" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_smicket18Components;
function fb_smicket18RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_smicket18'-------
    t = 0;
    fb_smicket18Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_smicket18.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_smicket18.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_10.setText(msg1);
    feedback0_dax9_10.setText(msg0);
    feedback_dax9_10.setText(msg);
    // keep track of which components have finished
    fb_smicket18Components = [];
    fb_smicket18Components.push(feedback1_dax9_10);
    fb_smicket18Components.push(feedback0_dax9_10);
    fb_smicket18Components.push(feedback_dax9_10);
    
    fb_smicket18Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_smicket18RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_smicket18'-------
    // get current time
    t = fb_smicket18Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_10* updates
    if (t >= 0.0 && feedback1_dax9_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_10.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_10.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_10.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_10.setAutoDraw(false);
    }
    
    // *feedback0_dax9_10* updates
    if (t >= 0.0 && feedback0_dax9_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_10.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_10.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_10.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_10.setAutoDraw(false);
    }
    
    // *feedback_dax9_10* updates
    if (t >= 0.0 && feedback_dax9_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_10.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_10.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_10.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_10.setAutoDraw(false);
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
    fb_smicket18Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_smicket18RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_smicket18'-------
    fb_smicket18Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicket19_allKeys;
var smicket19Components;
function smicket19RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicket19'-------
    t = 0;
    smicket19Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_smicket19.keys = undefined;
    key_resp_smicket19.rt = undefined;
    _key_resp_smicket19_allKeys = [];
    blicket_st_b15_3.setFillColor(new util.Color('white'));
    blicket_st_w15_3.setFillColor(new util.Color('black'));
    // keep track of which components have finished
    smicket19Components = [];
    smicket19Components.push(key_resp_smicket19);
    smicket19Components.push(blicket1_7);
    smicket19Components.push(blicket_st_b15_3);
    smicket19Components.push(blicket_st_w15_3);
    smicket19Components.push(option1_critical_9);
    smicket19Components.push(option2_critical_9);
    
    smicket19Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicket19RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicket19'-------
    // get current time
    t = smicket19Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_smicket19* updates
    if (t >= 0.0 && key_resp_smicket19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicket19.tStart = t;  // (not accounting for frame time here)
      key_resp_smicket19.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicket19.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicket19.start(); }); // start on screen flip
    }

    if (key_resp_smicket19.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicket19.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_smicket19_allKeys = _key_resp_smicket19_allKeys.concat(theseKeys);
      if (_key_resp_smicket19_allKeys.length > 0) {
        key_resp_smicket19.keys = _key_resp_smicket19_allKeys[_key_resp_smicket19_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicket19.rt = _key_resp_smicket19_allKeys[_key_resp_smicket19_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicket19.keys == '1') {
            key_resp_smicket19.corr = 1;
        } else {
            key_resp_smicket19.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_7* updates
    if (t >= 0.0 && blicket1_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_7.tStart = t;  // (not accounting for frame time here)
      blicket1_7.frameNStart = frameN;  // exact frame index
      
      blicket1_7.setAutoDraw(true);
    }

    
    // *blicket_st_b15_3* updates
    if (t >= 0.0 && blicket_st_b15_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b15_3.tStart = t;  // (not accounting for frame time here)
      blicket_st_b15_3.frameNStart = frameN;  // exact frame index
      
      blicket_st_b15_3.setAutoDraw(true);
    }

    
    // *blicket_st_w15_3* updates
    if (t >= 0.0 && blicket_st_w15_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w15_3.tStart = t;  // (not accounting for frame time here)
      blicket_st_w15_3.frameNStart = frameN;  // exact frame index
      
      blicket_st_w15_3.setAutoDraw(true);
    }

    
    // *option1_critical_9* updates
    if (t >= 0.0 && option1_critical_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_9.tStart = t;  // (not accounting for frame time here)
      option1_critical_9.frameNStart = frameN;  // exact frame index
      
      option1_critical_9.setAutoDraw(true);
    }

    
    // *option2_critical_9* updates
    if (t >= 0.0 && option2_critical_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_9.tStart = t;  // (not accounting for frame time here)
      option2_critical_9.frameNStart = frameN;  // exact frame index
      
      option2_critical_9.setAutoDraw(true);
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
    smicket19Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicket19RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicket19'-------
    smicket19Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_smicket19.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_smicket19.corr = 1;  // correct non-response
      } else {
         key_resp_smicket19.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicket19.keys', key_resp_smicket19.keys);
    psychoJS.experiment.addData('key_resp_smicket19.corr', key_resp_smicket19.corr);
    if (typeof key_resp_smicket19.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicket19.rt', key_resp_smicket19.rt);
        routineTimer.reset();
        }
    
    key_resp_smicket19.stop();
    // the Routine "smicket19" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_smicket19Components;
function fb_smicket19RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_smicket19'-------
    t = 0;
    fb_smicket19Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_smicket19.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_smicket19.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_11.setText(msg1);
    feedback0_dax9_11.setText(msg0);
    feedback_dax9_11.setText(msg);
    // keep track of which components have finished
    fb_smicket19Components = [];
    fb_smicket19Components.push(feedback1_dax9_11);
    fb_smicket19Components.push(feedback0_dax9_11);
    fb_smicket19Components.push(feedback_dax9_11);
    
    fb_smicket19Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_smicket19RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_smicket19'-------
    // get current time
    t = fb_smicket19Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_11* updates
    if (t >= 0.0 && feedback1_dax9_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_11.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_11.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_11.setAutoDraw(false);
    }
    
    // *feedback0_dax9_11* updates
    if (t >= 0.0 && feedback0_dax9_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_11.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_11.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_11.setAutoDraw(false);
    }
    
    // *feedback_dax9_11* updates
    if (t >= 0.0 && feedback_dax9_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_11.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_11.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_11.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_11.setAutoDraw(false);
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
    fb_smicket19Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_smicket19RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_smicket19'-------
    fb_smicket19Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicket20_allKeys;
var smicket20Components;
function smicket20RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicket20'-------
    t = 0;
    smicket20Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_smicket20.keys = undefined;
    key_resp_smicket20.rt = undefined;
    _key_resp_smicket20_allKeys = [];
    blicket_st_b20.setFillColor(new util.Color('black'));
    blicket_st_w15_4.setFillColor(new util.Color('white'));
    // keep track of which components have finished
    smicket20Components = [];
    smicket20Components.push(key_resp_smicket20);
    smicket20Components.push(blicket1_8);
    smicket20Components.push(blicket_st_b20);
    smicket20Components.push(blicket_st_w15_4);
    smicket20Components.push(option1_critical_10);
    smicket20Components.push(option2_critical_10);
    
    smicket20Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicket20RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicket20'-------
    // get current time
    t = smicket20Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_smicket20* updates
    if (t >= 0.0 && key_resp_smicket20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicket20.tStart = t;  // (not accounting for frame time here)
      key_resp_smicket20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicket20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicket20.start(); }); // start on screen flip
    }

    if (key_resp_smicket20.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicket20.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_smicket20_allKeys = _key_resp_smicket20_allKeys.concat(theseKeys);
      if (_key_resp_smicket20_allKeys.length > 0) {
        key_resp_smicket20.keys = _key_resp_smicket20_allKeys[_key_resp_smicket20_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicket20.rt = _key_resp_smicket20_allKeys[_key_resp_smicket20_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicket20.keys == '2') {
            key_resp_smicket20.corr = 1;
        } else {
            key_resp_smicket20.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_8* updates
    if (t >= 0.0 && blicket1_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_8.tStart = t;  // (not accounting for frame time here)
      blicket1_8.frameNStart = frameN;  // exact frame index
      
      blicket1_8.setAutoDraw(true);
    }

    
    // *blicket_st_b20* updates
    if (t >= 0.0 && blicket_st_b20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b20.tStart = t;  // (not accounting for frame time here)
      blicket_st_b20.frameNStart = frameN;  // exact frame index
      
      blicket_st_b20.setAutoDraw(true);
    }

    
    // *blicket_st_w15_4* updates
    if (t >= 0.0 && blicket_st_w15_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w15_4.tStart = t;  // (not accounting for frame time here)
      blicket_st_w15_4.frameNStart = frameN;  // exact frame index
      
      blicket_st_w15_4.setAutoDraw(true);
    }

    
    // *option1_critical_10* updates
    if (t >= 0.0 && option1_critical_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_10.tStart = t;  // (not accounting for frame time here)
      option1_critical_10.frameNStart = frameN;  // exact frame index
      
      option1_critical_10.setAutoDraw(true);
    }

    
    // *option2_critical_10* updates
    if (t >= 0.0 && option2_critical_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_10.tStart = t;  // (not accounting for frame time here)
      option2_critical_10.frameNStart = frameN;  // exact frame index
      
      option2_critical_10.setAutoDraw(true);
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
    smicket20Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicket20RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicket20'-------
    smicket20Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_smicket20.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_smicket20.corr = 1;  // correct non-response
      } else {
         key_resp_smicket20.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicket20.keys', key_resp_smicket20.keys);
    psychoJS.experiment.addData('key_resp_smicket20.corr', key_resp_smicket20.corr);
    if (typeof key_resp_smicket20.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicket20.rt', key_resp_smicket20.rt);
        routineTimer.reset();
        }
    
    key_resp_smicket20.stop();
    // the Routine "smicket20" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_smicket20Components;
function fb_smicket20RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_smicket20'-------
    t = 0;
    fb_smicket20Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_smicket20.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_smicket20.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_12.setText(msg1);
    feedback0_dax9_12.setText(msg0);
    feedback_dax9_12.setText(msg);
    // keep track of which components have finished
    fb_smicket20Components = [];
    fb_smicket20Components.push(feedback1_dax9_12);
    fb_smicket20Components.push(feedback0_dax9_12);
    fb_smicket20Components.push(feedback_dax9_12);
    
    fb_smicket20Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_smicket20RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_smicket20'-------
    // get current time
    t = fb_smicket20Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_12* updates
    if (t >= 0.0 && feedback1_dax9_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_12.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_12.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_12.setAutoDraw(false);
    }
    
    // *feedback0_dax9_12* updates
    if (t >= 0.0 && feedback0_dax9_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_12.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_12.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_12.setAutoDraw(false);
    }
    
    // *feedback_dax9_12* updates
    if (t >= 0.0 && feedback_dax9_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_12.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_12.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_12.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_12.setAutoDraw(false);
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
    fb_smicket20Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_smicket20RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_smicket20'-------
    fb_smicket20Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicketfep21_allKeys;
var blicketfep21Components;
function blicketfep21RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicketfep21'-------
    t = 0;
    blicketfep21Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_13.setFillColor(new util.Color('black'));
    triange.setFillColor(new util.Color('black'));
    cross_12.setFillColor(new util.Color('black'));
    key_resp_blicketfep21.keys = undefined;
    key_resp_blicketfep21.rt = undefined;
    _key_resp_blicketfep21_allKeys = [];
    // keep track of which components have finished
    blicketfep21Components = [];
    blicketfep21Components.push(dax9_corr2_2);
    blicketfep21Components.push(star_13);
    blicketfep21Components.push(triange);
    blicketfep21Components.push(cross_12);
    blicketfep21Components.push(key_resp_blicketfep21);
    blicketfep21Components.push(option1_2);
    blicketfep21Components.push(option2_2);
    blicketfep21Components.push(option3_2);
    
    blicketfep21Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicketfep21RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicketfep21'-------
    // get current time
    t = blicketfep21Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_2* updates
    if (t >= 0.0 && dax9_corr2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_2.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_2.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_2.setAutoDraw(true);
    }

    
    // *star_13* updates
    if (t >= 0.0 && star_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_13.tStart = t;  // (not accounting for frame time here)
      star_13.frameNStart = frameN;  // exact frame index
      
      star_13.setAutoDraw(true);
    }

    
    // *triange* updates
    if (t >= 0.0 && triange.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange.tStart = t;  // (not accounting for frame time here)
      triange.frameNStart = frameN;  // exact frame index
      
      triange.setAutoDraw(true);
    }

    
    // *cross_12* updates
    if (t >= 0.0 && cross_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_12.tStart = t;  // (not accounting for frame time here)
      cross_12.frameNStart = frameN;  // exact frame index
      
      cross_12.setAutoDraw(true);
    }

    
    // *key_resp_blicketfep21* updates
    if (t >= 0.0 && key_resp_blicketfep21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicketfep21.tStart = t;  // (not accounting for frame time here)
      key_resp_blicketfep21.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep21.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep21.start(); }); // start on screen flip
    }

    if (key_resp_blicketfep21.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicketfep21.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_blicketfep21_allKeys = _key_resp_blicketfep21_allKeys.concat(theseKeys);
      if (_key_resp_blicketfep21_allKeys.length > 0) {
        key_resp_blicketfep21.keys = _key_resp_blicketfep21_allKeys[_key_resp_blicketfep21_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicketfep21.rt = _key_resp_blicketfep21_allKeys[_key_resp_blicketfep21_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicketfep21.keys == '3') {
            key_resp_blicketfep21.corr = 1;
        } else {
            key_resp_blicketfep21.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_2* updates
    if (t >= 0.0 && option1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_2.tStart = t;  // (not accounting for frame time here)
      option1_2.frameNStart = frameN;  // exact frame index
      
      option1_2.setAutoDraw(true);
    }

    
    // *option2_2* updates
    if (t >= 0.0 && option2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_2.tStart = t;  // (not accounting for frame time here)
      option2_2.frameNStart = frameN;  // exact frame index
      
      option2_2.setAutoDraw(true);
    }

    
    // *option3_2* updates
    if (t >= 0.0 && option3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_2.tStart = t;  // (not accounting for frame time here)
      option3_2.frameNStart = frameN;  // exact frame index
      
      option3_2.setAutoDraw(true);
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
    blicketfep21Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicketfep21RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicketfep21'-------
    blicketfep21Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_blicketfep21.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_blicketfep21.corr = 1;  // correct non-response
      } else {
         key_resp_blicketfep21.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicketfep21.keys', key_resp_blicketfep21.keys);
    psychoJS.experiment.addData('key_resp_blicketfep21.corr', key_resp_blicketfep21.corr);
    if (typeof key_resp_blicketfep21.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicketfep21.rt', key_resp_blicketfep21.rt);
        routineTimer.reset();
        }
    
    key_resp_blicketfep21.stop();
    // the Routine "blicketfep21" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_blicketfep21Components;
function fb_blicketfep21RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_blicketfep21'-------
    t = 0;
    fb_blicketfep21Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_blicketfep21.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_blicketfep21.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_13.setText(msg1);
    feedback0_dax9_13.setText(msg0);
    feedback_dax9_13.setText(msg);
    // keep track of which components have finished
    fb_blicketfep21Components = [];
    fb_blicketfep21Components.push(feedback1_dax9_13);
    fb_blicketfep21Components.push(feedback0_dax9_13);
    fb_blicketfep21Components.push(feedback_dax9_13);
    
    fb_blicketfep21Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_blicketfep21RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_blicketfep21'-------
    // get current time
    t = fb_blicketfep21Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_13* updates
    if (t >= 0.0 && feedback1_dax9_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_13.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_13.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_13.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_13.setAutoDraw(false);
    }
    
    // *feedback0_dax9_13* updates
    if (t >= 0.0 && feedback0_dax9_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_13.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_13.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_13.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_13.setAutoDraw(false);
    }
    
    // *feedback_dax9_13* updates
    if (t >= 0.0 && feedback_dax9_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_13.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_13.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_13.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_13.setAutoDraw(false);
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
    fb_blicketfep21Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_blicketfep21RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_blicketfep21'-------
    fb_blicketfep21Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicketfep22_allKeys;
var blicketfep22Components;
function blicketfep22RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicketfep22'-------
    t = 0;
    blicketfep22Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_14.setFillColor(new util.Color('black'));
    triange_2.setFillColor(new util.Color('black'));
    cross_13.setFillColor(new util.Color('black'));
    key_resp_blicketfep22.keys = undefined;
    key_resp_blicketfep22.rt = undefined;
    _key_resp_blicketfep22_allKeys = [];
    // keep track of which components have finished
    blicketfep22Components = [];
    blicketfep22Components.push(dax9_corr2_3);
    blicketfep22Components.push(star_14);
    blicketfep22Components.push(triange_2);
    blicketfep22Components.push(cross_13);
    blicketfep22Components.push(key_resp_blicketfep22);
    blicketfep22Components.push(option1_3);
    blicketfep22Components.push(option2_3);
    blicketfep22Components.push(option3_3);
    
    blicketfep22Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicketfep22RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicketfep22'-------
    // get current time
    t = blicketfep22Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_3* updates
    if (t >= 0.0 && dax9_corr2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_3.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_3.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_3.setAutoDraw(true);
    }

    
    // *star_14* updates
    if (t >= 0.0 && star_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_14.tStart = t;  // (not accounting for frame time here)
      star_14.frameNStart = frameN;  // exact frame index
      
      star_14.setAutoDraw(true);
    }

    
    // *triange_2* updates
    if (t >= 0.0 && triange_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_2.tStart = t;  // (not accounting for frame time here)
      triange_2.frameNStart = frameN;  // exact frame index
      
      triange_2.setAutoDraw(true);
    }

    
    // *cross_13* updates
    if (t >= 0.0 && cross_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_13.tStart = t;  // (not accounting for frame time here)
      cross_13.frameNStart = frameN;  // exact frame index
      
      cross_13.setAutoDraw(true);
    }

    
    // *key_resp_blicketfep22* updates
    if (t >= 0.0 && key_resp_blicketfep22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicketfep22.tStart = t;  // (not accounting for frame time here)
      key_resp_blicketfep22.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep22.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep22.start(); }); // start on screen flip
    }

    if (key_resp_blicketfep22.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicketfep22.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_blicketfep22_allKeys = _key_resp_blicketfep22_allKeys.concat(theseKeys);
      if (_key_resp_blicketfep22_allKeys.length > 0) {
        key_resp_blicketfep22.keys = _key_resp_blicketfep22_allKeys[_key_resp_blicketfep22_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicketfep22.rt = _key_resp_blicketfep22_allKeys[_key_resp_blicketfep22_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicketfep22.keys == '2') {
            key_resp_blicketfep22.corr = 1;
        } else {
            key_resp_blicketfep22.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_3* updates
    if (t >= 0.0 && option1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_3.tStart = t;  // (not accounting for frame time here)
      option1_3.frameNStart = frameN;  // exact frame index
      
      option1_3.setAutoDraw(true);
    }

    
    // *option2_3* updates
    if (t >= 0.0 && option2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_3.tStart = t;  // (not accounting for frame time here)
      option2_3.frameNStart = frameN;  // exact frame index
      
      option2_3.setAutoDraw(true);
    }

    
    // *option3_3* updates
    if (t >= 0.0 && option3_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_3.tStart = t;  // (not accounting for frame time here)
      option3_3.frameNStart = frameN;  // exact frame index
      
      option3_3.setAutoDraw(true);
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
    blicketfep22Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicketfep22RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicketfep22'-------
    blicketfep22Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_blicketfep22.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_blicketfep22.corr = 1;  // correct non-response
      } else {
         key_resp_blicketfep22.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicketfep22.keys', key_resp_blicketfep22.keys);
    psychoJS.experiment.addData('key_resp_blicketfep22.corr', key_resp_blicketfep22.corr);
    if (typeof key_resp_blicketfep22.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicketfep22.rt', key_resp_blicketfep22.rt);
        routineTimer.reset();
        }
    
    key_resp_blicketfep22.stop();
    // the Routine "blicketfep22" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_blicketfep22Components;
function fb_blicketfep22RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_blicketfep22'-------
    t = 0;
    fb_blicketfep22Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_blicketfep22.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_blicketfep22.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_14.setText(msg1);
    feedback0_dax9_14.setText(msg0);
    feedback_dax9_14.setText(msg);
    // keep track of which components have finished
    fb_blicketfep22Components = [];
    fb_blicketfep22Components.push(feedback1_dax9_14);
    fb_blicketfep22Components.push(feedback0_dax9_14);
    fb_blicketfep22Components.push(feedback_dax9_14);
    
    fb_blicketfep22Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_blicketfep22RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_blicketfep22'-------
    // get current time
    t = fb_blicketfep22Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_14* updates
    if (t >= 0.0 && feedback1_dax9_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_14.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_14.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_14.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_14.setAutoDraw(false);
    }
    
    // *feedback0_dax9_14* updates
    if (t >= 0.0 && feedback0_dax9_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_14.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_14.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_14.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_14.setAutoDraw(false);
    }
    
    // *feedback_dax9_14* updates
    if (t >= 0.0 && feedback_dax9_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_14.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_14.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_14.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_14.setAutoDraw(false);
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
    fb_blicketfep22Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_blicketfep22RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_blicketfep22'-------
    fb_blicketfep22Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicketfep23_allKeys;
var blicketfep23Components;
function blicketfep23RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicketfep23'-------
    t = 0;
    blicketfep23Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_15.setFillColor(new util.Color('black'));
    triange_3.setFillColor(new util.Color('black'));
    cross_14.setFillColor(new util.Color('black'));
    key_resp_blicketfep23.keys = undefined;
    key_resp_blicketfep23.rt = undefined;
    _key_resp_blicketfep23_allKeys = [];
    // keep track of which components have finished
    blicketfep23Components = [];
    blicketfep23Components.push(dax9_corr2_4);
    blicketfep23Components.push(star_15);
    blicketfep23Components.push(triange_3);
    blicketfep23Components.push(cross_14);
    blicketfep23Components.push(key_resp_blicketfep23);
    blicketfep23Components.push(option1_4);
    blicketfep23Components.push(option2_4);
    blicketfep23Components.push(option3_4);
    
    blicketfep23Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicketfep23RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicketfep23'-------
    // get current time
    t = blicketfep23Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_4* updates
    if (t >= 0.0 && dax9_corr2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_4.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_4.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_4.setAutoDraw(true);
    }

    
    // *star_15* updates
    if (t >= 0.0 && star_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_15.tStart = t;  // (not accounting for frame time here)
      star_15.frameNStart = frameN;  // exact frame index
      
      star_15.setAutoDraw(true);
    }

    
    // *triange_3* updates
    if (t >= 0.0 && triange_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_3.tStart = t;  // (not accounting for frame time here)
      triange_3.frameNStart = frameN;  // exact frame index
      
      triange_3.setAutoDraw(true);
    }

    
    // *cross_14* updates
    if (t >= 0.0 && cross_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_14.tStart = t;  // (not accounting for frame time here)
      cross_14.frameNStart = frameN;  // exact frame index
      
      cross_14.setAutoDraw(true);
    }

    
    // *key_resp_blicketfep23* updates
    if (t >= 0.0 && key_resp_blicketfep23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicketfep23.tStart = t;  // (not accounting for frame time here)
      key_resp_blicketfep23.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep23.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep23.start(); }); // start on screen flip
    }

    if (key_resp_blicketfep23.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicketfep23.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_blicketfep23_allKeys = _key_resp_blicketfep23_allKeys.concat(theseKeys);
      if (_key_resp_blicketfep23_allKeys.length > 0) {
        key_resp_blicketfep23.keys = _key_resp_blicketfep23_allKeys[_key_resp_blicketfep23_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicketfep23.rt = _key_resp_blicketfep23_allKeys[_key_resp_blicketfep23_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicketfep23.keys == '2') {
            key_resp_blicketfep23.corr = 1;
        } else {
            key_resp_blicketfep23.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_4* updates
    if (t >= 0.0 && option1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_4.tStart = t;  // (not accounting for frame time here)
      option1_4.frameNStart = frameN;  // exact frame index
      
      option1_4.setAutoDraw(true);
    }

    
    // *option2_4* updates
    if (t >= 0.0 && option2_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_4.tStart = t;  // (not accounting for frame time here)
      option2_4.frameNStart = frameN;  // exact frame index
      
      option2_4.setAutoDraw(true);
    }

    
    // *option3_4* updates
    if (t >= 0.0 && option3_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_4.tStart = t;  // (not accounting for frame time here)
      option3_4.frameNStart = frameN;  // exact frame index
      
      option3_4.setAutoDraw(true);
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
    blicketfep23Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicketfep23RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicketfep23'-------
    blicketfep23Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_blicketfep23.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_blicketfep23.corr = 1;  // correct non-response
      } else {
         key_resp_blicketfep23.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicketfep23.keys', key_resp_blicketfep23.keys);
    psychoJS.experiment.addData('key_resp_blicketfep23.corr', key_resp_blicketfep23.corr);
    if (typeof key_resp_blicketfep23.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicketfep23.rt', key_resp_blicketfep23.rt);
        routineTimer.reset();
        }
    
    key_resp_blicketfep23.stop();
    // the Routine "blicketfep23" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_blicketfep23Components;
function fb_blicketfep23RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_blicketfep23'-------
    t = 0;
    fb_blicketfep23Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_blicketfep23.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_blicketfep23.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_15.setText(msg1);
    feedback0_dax9_15.setText(msg0);
    feedback_dax9_15.setText(msg);
    // keep track of which components have finished
    fb_blicketfep23Components = [];
    fb_blicketfep23Components.push(feedback1_dax9_15);
    fb_blicketfep23Components.push(feedback0_dax9_15);
    fb_blicketfep23Components.push(feedback_dax9_15);
    
    fb_blicketfep23Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_blicketfep23RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_blicketfep23'-------
    // get current time
    t = fb_blicketfep23Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_15* updates
    if (t >= 0.0 && feedback1_dax9_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_15.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_15.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_15.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_15.setAutoDraw(false);
    }
    
    // *feedback0_dax9_15* updates
    if (t >= 0.0 && feedback0_dax9_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_15.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_15.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_15.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_15.setAutoDraw(false);
    }
    
    // *feedback_dax9_15* updates
    if (t >= 0.0 && feedback_dax9_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_15.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_15.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_15.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_15.setAutoDraw(false);
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
    fb_blicketfep23Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_blicketfep23RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_blicketfep23'-------
    fb_blicketfep23Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicketfep24_allKeys;
var blicketfep24Components;
function blicketfep24RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicketfep24'-------
    t = 0;
    blicketfep24Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_16.setFillColor(new util.Color('black'));
    triange_4.setFillColor(new util.Color('black'));
    cross_15.setFillColor(new util.Color('black'));
    key_resp_blicketfep24.keys = undefined;
    key_resp_blicketfep24.rt = undefined;
    _key_resp_blicketfep24_allKeys = [];
    // keep track of which components have finished
    blicketfep24Components = [];
    blicketfep24Components.push(dax9_corr2_5);
    blicketfep24Components.push(star_16);
    blicketfep24Components.push(triange_4);
    blicketfep24Components.push(cross_15);
    blicketfep24Components.push(key_resp_blicketfep24);
    blicketfep24Components.push(option1_5);
    blicketfep24Components.push(option2_5);
    blicketfep24Components.push(option3_5);
    
    blicketfep24Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicketfep24RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicketfep24'-------
    // get current time
    t = blicketfep24Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_5* updates
    if (t >= 0.0 && dax9_corr2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_5.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_5.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_5.setAutoDraw(true);
    }

    
    // *star_16* updates
    if (t >= 0.0 && star_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_16.tStart = t;  // (not accounting for frame time here)
      star_16.frameNStart = frameN;  // exact frame index
      
      star_16.setAutoDraw(true);
    }

    
    // *triange_4* updates
    if (t >= 0.0 && triange_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_4.tStart = t;  // (not accounting for frame time here)
      triange_4.frameNStart = frameN;  // exact frame index
      
      triange_4.setAutoDraw(true);
    }

    
    // *cross_15* updates
    if (t >= 0.0 && cross_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_15.tStart = t;  // (not accounting for frame time here)
      cross_15.frameNStart = frameN;  // exact frame index
      
      cross_15.setAutoDraw(true);
    }

    
    // *key_resp_blicketfep24* updates
    if (t >= 0.0 && key_resp_blicketfep24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicketfep24.tStart = t;  // (not accounting for frame time here)
      key_resp_blicketfep24.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep24.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep24.start(); }); // start on screen flip
    }

    if (key_resp_blicketfep24.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicketfep24.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_blicketfep24_allKeys = _key_resp_blicketfep24_allKeys.concat(theseKeys);
      if (_key_resp_blicketfep24_allKeys.length > 0) {
        key_resp_blicketfep24.keys = _key_resp_blicketfep24_allKeys[_key_resp_blicketfep24_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicketfep24.rt = _key_resp_blicketfep24_allKeys[_key_resp_blicketfep24_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicketfep24.keys == '2') {
            key_resp_blicketfep24.corr = 1;
        } else {
            key_resp_blicketfep24.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_5* updates
    if (t >= 0.0 && option1_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_5.tStart = t;  // (not accounting for frame time here)
      option1_5.frameNStart = frameN;  // exact frame index
      
      option1_5.setAutoDraw(true);
    }

    
    // *option2_5* updates
    if (t >= 0.0 && option2_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_5.tStart = t;  // (not accounting for frame time here)
      option2_5.frameNStart = frameN;  // exact frame index
      
      option2_5.setAutoDraw(true);
    }

    
    // *option3_5* updates
    if (t >= 0.0 && option3_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_5.tStart = t;  // (not accounting for frame time here)
      option3_5.frameNStart = frameN;  // exact frame index
      
      option3_5.setAutoDraw(true);
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
    blicketfep24Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicketfep24RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicketfep24'-------
    blicketfep24Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_blicketfep24.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_blicketfep24.corr = 1;  // correct non-response
      } else {
         key_resp_blicketfep24.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicketfep24.keys', key_resp_blicketfep24.keys);
    psychoJS.experiment.addData('key_resp_blicketfep24.corr', key_resp_blicketfep24.corr);
    if (typeof key_resp_blicketfep24.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicketfep24.rt', key_resp_blicketfep24.rt);
        routineTimer.reset();
        }
    
    key_resp_blicketfep24.stop();
    // the Routine "blicketfep24" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_blicketfep24Components;
function fb_blicketfep24RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_blicketfep24'-------
    t = 0;
    fb_blicketfep24Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_blicketfep24.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_blicketfep24.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_16.setText(msg1);
    feedback0_dax9_16.setText(msg0);
    feedback_dax9_16.setText(msg);
    // keep track of which components have finished
    fb_blicketfep24Components = [];
    fb_blicketfep24Components.push(feedback1_dax9_16);
    fb_blicketfep24Components.push(feedback0_dax9_16);
    fb_blicketfep24Components.push(feedback_dax9_16);
    
    fb_blicketfep24Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_blicketfep24RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_blicketfep24'-------
    // get current time
    t = fb_blicketfep24Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_16* updates
    if (t >= 0.0 && feedback1_dax9_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_16.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_16.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_16.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_16.setAutoDraw(false);
    }
    
    // *feedback0_dax9_16* updates
    if (t >= 0.0 && feedback0_dax9_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_16.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_16.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_16.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_16.setAutoDraw(false);
    }
    
    // *feedback_dax9_16* updates
    if (t >= 0.0 && feedback_dax9_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_16.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_16.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_16.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_16.setAutoDraw(false);
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
    fb_blicketfep24Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_blicketfep24RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_blicketfep24'-------
    fb_blicketfep24Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicketfep25_allKeys;
var smicketfep25Components;
function smicketfep25RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicketfep25'-------
    t = 0;
    smicketfep25Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_17.setFillColor(new util.Color('white'));
    triange_5.setFillColor(new util.Color('white'));
    cross_16.setFillColor(new util.Color('white'));
    key_resp_smicketfep25.keys = undefined;
    key_resp_smicketfep25.rt = undefined;
    _key_resp_smicketfep25_allKeys = [];
    // keep track of which components have finished
    smicketfep25Components = [];
    smicketfep25Components.push(dax9_corr2_6);
    smicketfep25Components.push(star_17);
    smicketfep25Components.push(triange_5);
    smicketfep25Components.push(cross_16);
    smicketfep25Components.push(key_resp_smicketfep25);
    smicketfep25Components.push(option1_12);
    smicketfep25Components.push(option2_12);
    smicketfep25Components.push(option3_11);
    
    smicketfep25Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicketfep25RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicketfep25'-------
    // get current time
    t = smicketfep25Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_6* updates
    if (t >= 0.0 && dax9_corr2_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_6.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_6.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_6.setAutoDraw(true);
    }

    
    // *star_17* updates
    if (t >= 0.0 && star_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_17.tStart = t;  // (not accounting for frame time here)
      star_17.frameNStart = frameN;  // exact frame index
      
      star_17.setAutoDraw(true);
    }

    
    // *triange_5* updates
    if (t >= 0.0 && triange_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_5.tStart = t;  // (not accounting for frame time here)
      triange_5.frameNStart = frameN;  // exact frame index
      
      triange_5.setAutoDraw(true);
    }

    
    // *cross_16* updates
    if (t >= 0.0 && cross_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_16.tStart = t;  // (not accounting for frame time here)
      cross_16.frameNStart = frameN;  // exact frame index
      
      cross_16.setAutoDraw(true);
    }

    
    // *key_resp_smicketfep25* updates
    if (t >= 0.0 && key_resp_smicketfep25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicketfep25.tStart = t;  // (not accounting for frame time here)
      key_resp_smicketfep25.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep25.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep25.start(); }); // start on screen flip
    }

    if (key_resp_smicketfep25.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicketfep25.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_smicketfep25_allKeys = _key_resp_smicketfep25_allKeys.concat(theseKeys);
      if (_key_resp_smicketfep25_allKeys.length > 0) {
        key_resp_smicketfep25.keys = _key_resp_smicketfep25_allKeys[_key_resp_smicketfep25_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicketfep25.rt = _key_resp_smicketfep25_allKeys[_key_resp_smicketfep25_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicketfep25.keys == '2') {
            key_resp_smicketfep25.corr = 1;
        } else {
            key_resp_smicketfep25.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_12* updates
    if (t >= 0.0 && option1_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_12.tStart = t;  // (not accounting for frame time here)
      option1_12.frameNStart = frameN;  // exact frame index
      
      option1_12.setAutoDraw(true);
    }

    
    // *option2_12* updates
    if (t >= 0.0 && option2_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_12.tStart = t;  // (not accounting for frame time here)
      option2_12.frameNStart = frameN;  // exact frame index
      
      option2_12.setAutoDraw(true);
    }

    
    // *option3_11* updates
    if (t >= 0.0 && option3_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_11.tStart = t;  // (not accounting for frame time here)
      option3_11.frameNStart = frameN;  // exact frame index
      
      option3_11.setAutoDraw(true);
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
    smicketfep25Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicketfep25RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicketfep25'-------
    smicketfep25Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_smicketfep25.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_smicketfep25.corr = 1;  // correct non-response
      } else {
         key_resp_smicketfep25.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicketfep25.keys', key_resp_smicketfep25.keys);
    psychoJS.experiment.addData('key_resp_smicketfep25.corr', key_resp_smicketfep25.corr);
    if (typeof key_resp_smicketfep25.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicketfep25.rt', key_resp_smicketfep25.rt);
        routineTimer.reset();
        }
    
    key_resp_smicketfep25.stop();
    // the Routine "smicketfep25" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_smicketfep25Components;
function fb_smicketfep25RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_smicketfep25'-------
    t = 0;
    fb_smicketfep25Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_smicketfep25.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_smicketfep25.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_17.setText(msg1);
    feedback0_dax9_17.setText(msg0);
    feedback_dax9_17.setText(msg);
    // keep track of which components have finished
    fb_smicketfep25Components = [];
    fb_smicketfep25Components.push(feedback1_dax9_17);
    fb_smicketfep25Components.push(feedback0_dax9_17);
    fb_smicketfep25Components.push(feedback_dax9_17);
    
    fb_smicketfep25Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_smicketfep25RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_smicketfep25'-------
    // get current time
    t = fb_smicketfep25Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_17* updates
    if (t >= 0.0 && feedback1_dax9_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_17.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_17.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_17.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_17.setAutoDraw(false);
    }
    
    // *feedback0_dax9_17* updates
    if (t >= 0.0 && feedback0_dax9_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_17.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_17.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_17.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_17.setAutoDraw(false);
    }
    
    // *feedback_dax9_17* updates
    if (t >= 0.0 && feedback_dax9_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_17.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_17.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_17.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_17.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_17.setAutoDraw(false);
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
    fb_smicketfep25Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_smicketfep25RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_smicketfep25'-------
    fb_smicketfep25Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicketfep26_allKeys;
var smicketfep26Components;
function smicketfep26RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicketfep26'-------
    t = 0;
    smicketfep26Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_18.setFillColor(new util.Color('white'));
    triange_6.setFillColor(new util.Color('white'));
    cross_17.setFillColor(new util.Color('white'));
    key_resp_smicketfep26.keys = undefined;
    key_resp_smicketfep26.rt = undefined;
    _key_resp_smicketfep26_allKeys = [];
    // keep track of which components have finished
    smicketfep26Components = [];
    smicketfep26Components.push(dax9_corr2_7);
    smicketfep26Components.push(star_18);
    smicketfep26Components.push(triange_6);
    smicketfep26Components.push(cross_17);
    smicketfep26Components.push(key_resp_smicketfep26);
    smicketfep26Components.push(option1_13);
    smicketfep26Components.push(option2_13);
    smicketfep26Components.push(option3_12);
    
    smicketfep26Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicketfep26RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicketfep26'-------
    // get current time
    t = smicketfep26Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_7* updates
    if (t >= 0.0 && dax9_corr2_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_7.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_7.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_7.setAutoDraw(true);
    }

    
    // *star_18* updates
    if (t >= 0.0 && star_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_18.tStart = t;  // (not accounting for frame time here)
      star_18.frameNStart = frameN;  // exact frame index
      
      star_18.setAutoDraw(true);
    }

    
    // *triange_6* updates
    if (t >= 0.0 && triange_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_6.tStart = t;  // (not accounting for frame time here)
      triange_6.frameNStart = frameN;  // exact frame index
      
      triange_6.setAutoDraw(true);
    }

    
    // *cross_17* updates
    if (t >= 0.0 && cross_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_17.tStart = t;  // (not accounting for frame time here)
      cross_17.frameNStart = frameN;  // exact frame index
      
      cross_17.setAutoDraw(true);
    }

    
    // *key_resp_smicketfep26* updates
    if (t >= 0.0 && key_resp_smicketfep26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicketfep26.tStart = t;  // (not accounting for frame time here)
      key_resp_smicketfep26.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep26.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep26.start(); }); // start on screen flip
    }

    if (key_resp_smicketfep26.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicketfep26.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_smicketfep26_allKeys = _key_resp_smicketfep26_allKeys.concat(theseKeys);
      if (_key_resp_smicketfep26_allKeys.length > 0) {
        key_resp_smicketfep26.keys = _key_resp_smicketfep26_allKeys[_key_resp_smicketfep26_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicketfep26.rt = _key_resp_smicketfep26_allKeys[_key_resp_smicketfep26_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicketfep26.keys == '3') {
            key_resp_smicketfep26.corr = 1;
        } else {
            key_resp_smicketfep26.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_13* updates
    if (t >= 0.0 && option1_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_13.tStart = t;  // (not accounting for frame time here)
      option1_13.frameNStart = frameN;  // exact frame index
      
      option1_13.setAutoDraw(true);
    }

    
    // *option2_13* updates
    if (t >= 0.0 && option2_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_13.tStart = t;  // (not accounting for frame time here)
      option2_13.frameNStart = frameN;  // exact frame index
      
      option2_13.setAutoDraw(true);
    }

    
    // *option3_12* updates
    if (t >= 0.0 && option3_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_12.tStart = t;  // (not accounting for frame time here)
      option3_12.frameNStart = frameN;  // exact frame index
      
      option3_12.setAutoDraw(true);
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
    smicketfep26Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicketfep26RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicketfep26'-------
    smicketfep26Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_smicketfep26.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_smicketfep26.corr = 1;  // correct non-response
      } else {
         key_resp_smicketfep26.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicketfep26.keys', key_resp_smicketfep26.keys);
    psychoJS.experiment.addData('key_resp_smicketfep26.corr', key_resp_smicketfep26.corr);
    if (typeof key_resp_smicketfep26.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicketfep26.rt', key_resp_smicketfep26.rt);
        routineTimer.reset();
        }
    
    key_resp_smicketfep26.stop();
    // the Routine "smicketfep26" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_smicketfep26Components;
function fb_smicketfep26RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_smicketfep26'-------
    t = 0;
    fb_smicketfep26Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_smicketfep26.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_smicketfep26.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_18.setText(msg1);
    feedback0_dax9_18.setText(msg0);
    feedback_dax9_18.setText(msg);
    // keep track of which components have finished
    fb_smicketfep26Components = [];
    fb_smicketfep26Components.push(feedback1_dax9_18);
    fb_smicketfep26Components.push(feedback0_dax9_18);
    fb_smicketfep26Components.push(feedback_dax9_18);
    
    fb_smicketfep26Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_smicketfep26RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_smicketfep26'-------
    // get current time
    t = fb_smicketfep26Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_18* updates
    if (t >= 0.0 && feedback1_dax9_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_18.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_18.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_18.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_18.setAutoDraw(false);
    }
    
    // *feedback0_dax9_18* updates
    if (t >= 0.0 && feedback0_dax9_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_18.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_18.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_18.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_18.setAutoDraw(false);
    }
    
    // *feedback_dax9_18* updates
    if (t >= 0.0 && feedback_dax9_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_18.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_18.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_18.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_18.setAutoDraw(false);
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
    fb_smicketfep26Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_smicketfep26RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_smicketfep26'-------
    fb_smicketfep26Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicketfep27_allKeys;
var smicketfep27Components;
function smicketfep27RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicketfep27'-------
    t = 0;
    smicketfep27Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_19.setFillColor(new util.Color('white'));
    triange_7.setFillColor(new util.Color('white'));
    cross_18.setFillColor(new util.Color('white'));
    key_resp_smicketfep27.keys = undefined;
    key_resp_smicketfep27.rt = undefined;
    _key_resp_smicketfep27_allKeys = [];
    // keep track of which components have finished
    smicketfep27Components = [];
    smicketfep27Components.push(dax9_corr2_8);
    smicketfep27Components.push(star_19);
    smicketfep27Components.push(triange_7);
    smicketfep27Components.push(cross_18);
    smicketfep27Components.push(key_resp_smicketfep27);
    smicketfep27Components.push(option1_14);
    smicketfep27Components.push(option2_14);
    smicketfep27Components.push(option3_13);
    
    smicketfep27Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicketfep27RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicketfep27'-------
    // get current time
    t = smicketfep27Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_8* updates
    if (t >= 0.0 && dax9_corr2_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_8.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_8.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_8.setAutoDraw(true);
    }

    
    // *star_19* updates
    if (t >= 0.0 && star_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_19.tStart = t;  // (not accounting for frame time here)
      star_19.frameNStart = frameN;  // exact frame index
      
      star_19.setAutoDraw(true);
    }

    
    // *triange_7* updates
    if (t >= 0.0 && triange_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_7.tStart = t;  // (not accounting for frame time here)
      triange_7.frameNStart = frameN;  // exact frame index
      
      triange_7.setAutoDraw(true);
    }

    
    // *cross_18* updates
    if (t >= 0.0 && cross_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_18.tStart = t;  // (not accounting for frame time here)
      cross_18.frameNStart = frameN;  // exact frame index
      
      cross_18.setAutoDraw(true);
    }

    
    // *key_resp_smicketfep27* updates
    if (t >= 0.0 && key_resp_smicketfep27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicketfep27.tStart = t;  // (not accounting for frame time here)
      key_resp_smicketfep27.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep27.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep27.start(); }); // start on screen flip
    }

    if (key_resp_smicketfep27.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicketfep27.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_smicketfep27_allKeys = _key_resp_smicketfep27_allKeys.concat(theseKeys);
      if (_key_resp_smicketfep27_allKeys.length > 0) {
        key_resp_smicketfep27.keys = _key_resp_smicketfep27_allKeys[_key_resp_smicketfep27_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicketfep27.rt = _key_resp_smicketfep27_allKeys[_key_resp_smicketfep27_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicketfep27.keys == '3') {
            key_resp_smicketfep27.corr = 1;
        } else {
            key_resp_smicketfep27.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_14* updates
    if (t >= 0.0 && option1_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_14.tStart = t;  // (not accounting for frame time here)
      option1_14.frameNStart = frameN;  // exact frame index
      
      option1_14.setAutoDraw(true);
    }

    
    // *option2_14* updates
    if (t >= 0.0 && option2_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_14.tStart = t;  // (not accounting for frame time here)
      option2_14.frameNStart = frameN;  // exact frame index
      
      option2_14.setAutoDraw(true);
    }

    
    // *option3_13* updates
    if (t >= 0.0 && option3_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_13.tStart = t;  // (not accounting for frame time here)
      option3_13.frameNStart = frameN;  // exact frame index
      
      option3_13.setAutoDraw(true);
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
    smicketfep27Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicketfep27RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicketfep27'-------
    smicketfep27Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_smicketfep27.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_smicketfep27.corr = 1;  // correct non-response
      } else {
         key_resp_smicketfep27.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicketfep27.keys', key_resp_smicketfep27.keys);
    psychoJS.experiment.addData('key_resp_smicketfep27.corr', key_resp_smicketfep27.corr);
    if (typeof key_resp_smicketfep27.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicketfep27.rt', key_resp_smicketfep27.rt);
        routineTimer.reset();
        }
    
    key_resp_smicketfep27.stop();
    // the Routine "smicketfep27" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_smicketfep27Components;
function fb_smicketfep27RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_smicketfep27'-------
    t = 0;
    fb_smicketfep27Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_smicketfep27.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_smicketfep27.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_19.setText(msg1);
    feedback0_dax9_19.setText(msg0);
    feedback_dax9_19.setText(msg);
    // keep track of which components have finished
    fb_smicketfep27Components = [];
    fb_smicketfep27Components.push(feedback1_dax9_19);
    fb_smicketfep27Components.push(feedback0_dax9_19);
    fb_smicketfep27Components.push(feedback_dax9_19);
    
    fb_smicketfep27Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_smicketfep27RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_smicketfep27'-------
    // get current time
    t = fb_smicketfep27Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_19* updates
    if (t >= 0.0 && feedback1_dax9_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_19.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_19.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_19.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_19.setAutoDraw(false);
    }
    
    // *feedback0_dax9_19* updates
    if (t >= 0.0 && feedback0_dax9_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_19.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_19.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_19.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_19.setAutoDraw(false);
    }
    
    // *feedback_dax9_19* updates
    if (t >= 0.0 && feedback_dax9_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_19.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_19.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_19.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_19.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_19.setAutoDraw(false);
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
    fb_smicketfep27Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_smicketfep27RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_smicketfep27'-------
    fb_smicketfep27Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicketfep28_allKeys;
var smicketfep28Components;
function smicketfep28RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicketfep28'-------
    t = 0;
    smicketfep28Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_20.setFillColor(new util.Color('white'));
    triange_8.setFillColor(new util.Color('white'));
    cross_19.setFillColor(new util.Color('white'));
    key_resp_smicketfep28.keys = undefined;
    key_resp_smicketfep28.rt = undefined;
    _key_resp_smicketfep28_allKeys = [];
    // keep track of which components have finished
    smicketfep28Components = [];
    smicketfep28Components.push(dax9_corr2_9);
    smicketfep28Components.push(star_20);
    smicketfep28Components.push(triange_8);
    smicketfep28Components.push(cross_19);
    smicketfep28Components.push(key_resp_smicketfep28);
    smicketfep28Components.push(option1_15);
    smicketfep28Components.push(option2_15);
    smicketfep28Components.push(option3_14);
    
    smicketfep28Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicketfep28RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicketfep28'-------
    // get current time
    t = smicketfep28Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_9* updates
    if (t >= 0.0 && dax9_corr2_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_9.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_9.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_9.setAutoDraw(true);
    }

    
    // *star_20* updates
    if (t >= 0.0 && star_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_20.tStart = t;  // (not accounting for frame time here)
      star_20.frameNStart = frameN;  // exact frame index
      
      star_20.setAutoDraw(true);
    }

    
    // *triange_8* updates
    if (t >= 0.0 && triange_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_8.tStart = t;  // (not accounting for frame time here)
      triange_8.frameNStart = frameN;  // exact frame index
      
      triange_8.setAutoDraw(true);
    }

    
    // *cross_19* updates
    if (t >= 0.0 && cross_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_19.tStart = t;  // (not accounting for frame time here)
      cross_19.frameNStart = frameN;  // exact frame index
      
      cross_19.setAutoDraw(true);
    }

    
    // *key_resp_smicketfep28* updates
    if (t >= 0.0 && key_resp_smicketfep28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicketfep28.tStart = t;  // (not accounting for frame time here)
      key_resp_smicketfep28.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep28.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep28.start(); }); // start on screen flip
    }

    if (key_resp_smicketfep28.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicketfep28.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_smicketfep28_allKeys = _key_resp_smicketfep28_allKeys.concat(theseKeys);
      if (_key_resp_smicketfep28_allKeys.length > 0) {
        key_resp_smicketfep28.keys = _key_resp_smicketfep28_allKeys[_key_resp_smicketfep28_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicketfep28.rt = _key_resp_smicketfep28_allKeys[_key_resp_smicketfep28_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicketfep28.keys == '1') {
            key_resp_smicketfep28.corr = 1;
        } else {
            key_resp_smicketfep28.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_15* updates
    if (t >= 0.0 && option1_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_15.tStart = t;  // (not accounting for frame time here)
      option1_15.frameNStart = frameN;  // exact frame index
      
      option1_15.setAutoDraw(true);
    }

    
    // *option2_15* updates
    if (t >= 0.0 && option2_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_15.tStart = t;  // (not accounting for frame time here)
      option2_15.frameNStart = frameN;  // exact frame index
      
      option2_15.setAutoDraw(true);
    }

    
    // *option3_14* updates
    if (t >= 0.0 && option3_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_14.tStart = t;  // (not accounting for frame time here)
      option3_14.frameNStart = frameN;  // exact frame index
      
      option3_14.setAutoDraw(true);
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
    smicketfep28Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicketfep28RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicketfep28'-------
    smicketfep28Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_smicketfep28.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_smicketfep28.corr = 1;  // correct non-response
      } else {
         key_resp_smicketfep28.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicketfep28.keys', key_resp_smicketfep28.keys);
    psychoJS.experiment.addData('key_resp_smicketfep28.corr', key_resp_smicketfep28.corr);
    if (typeof key_resp_smicketfep28.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicketfep28.rt', key_resp_smicketfep28.rt);
        routineTimer.reset();
        }
    
    key_resp_smicketfep28.stop();
    // the Routine "smicketfep28" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_smicketfep28Components;
function fb_smicketfep28RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_smicketfep28'-------
    t = 0;
    fb_smicketfep28Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_smicketfep28.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_smicketfep28.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_20.setText(msg1);
    feedback0_dax9_20.setText(msg0);
    feedback_dax9_20.setText(msg);
    // keep track of which components have finished
    fb_smicketfep28Components = [];
    fb_smicketfep28Components.push(feedback1_dax9_20);
    fb_smicketfep28Components.push(feedback0_dax9_20);
    fb_smicketfep28Components.push(feedback_dax9_20);
    
    fb_smicketfep28Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_smicketfep28RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_smicketfep28'-------
    // get current time
    t = fb_smicketfep28Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_20* updates
    if (t >= 0.0 && feedback1_dax9_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_20.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_20.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_20.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_20.setAutoDraw(false);
    }
    
    // *feedback0_dax9_20* updates
    if (t >= 0.0 && feedback0_dax9_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_20.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_20.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_20.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_20.setAutoDraw(false);
    }
    
    // *feedback_dax9_20* updates
    if (t >= 0.0 && feedback_dax9_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_20.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_20.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_20.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_20.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_20.setAutoDraw(false);
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
    fb_smicketfep28Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_smicketfep28RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_smicketfep28'-------
    fb_smicketfep28Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var number_correct2;
var _key_resp_dax12_2_allKeys;
var dax12test2Components;
function dax12test2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'dax12test2'-------
    t = 0;
    dax12test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    number_correct2 = 0;
    
    star_21.setFillColor(new util.Color('white'));
    tr.setFillColor(new util.Color('white'));
    cr.setFillColor(new util.Color('white'));
    key_resp_dax12_2.keys = undefined;
    key_resp_dax12_2.rt = undefined;
    _key_resp_dax12_2_allKeys = [];
    // keep track of which components have finished
    dax12test2Components = [];
    dax12test2Components.push(dax11_corr2_2);
    dax12test2Components.push(star_21);
    dax12test2Components.push(tr);
    dax12test2Components.push(cr);
    dax12test2Components.push(key_resp_dax12_2);
    dax12test2Components.push(option1_16);
    dax12test2Components.push(option2_16);
    dax12test2Components.push(option3_15);
    
    dax12test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function dax12test2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'dax12test2'-------
    // get current time
    t = dax12test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax11_corr2_2* updates
    if (t >= 0.0 && dax11_corr2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax11_corr2_2.tStart = t;  // (not accounting for frame time here)
      dax11_corr2_2.frameNStart = frameN;  // exact frame index
      
      dax11_corr2_2.setAutoDraw(true);
    }

    
    // *star_21* updates
    if (t >= 0.0 && star_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_21.tStart = t;  // (not accounting for frame time here)
      star_21.frameNStart = frameN;  // exact frame index
      
      star_21.setAutoDraw(true);
    }

    
    // *tr* updates
    if (t >= 0.0 && tr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tr.tStart = t;  // (not accounting for frame time here)
      tr.frameNStart = frameN;  // exact frame index
      
      tr.setAutoDraw(true);
    }

    
    // *cr* updates
    if (t >= 0.0 && cr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cr.tStart = t;  // (not accounting for frame time here)
      cr.frameNStart = frameN;  // exact frame index
      
      cr.setAutoDraw(true);
    }

    
    // *key_resp_dax12_2* updates
    if (t >= 0.0 && key_resp_dax12_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_dax12_2.tStart = t;  // (not accounting for frame time here)
      key_resp_dax12_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_dax12_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dax12_2.start(); }); // start on screen flip
    }

    if (key_resp_dax12_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_dax12_2.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_dax12_2_allKeys = _key_resp_dax12_2_allKeys.concat(theseKeys);
      if (_key_resp_dax12_2_allKeys.length > 0) {
        key_resp_dax12_2.keys = _key_resp_dax12_2_allKeys[_key_resp_dax12_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_dax12_2.rt = _key_resp_dax12_2_allKeys[_key_resp_dax12_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_dax12_2.keys == '2') {
            key_resp_dax12_2.corr = 1;
        } else {
            key_resp_dax12_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_16* updates
    if (t >= 0.0 && option1_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_16.tStart = t;  // (not accounting for frame time here)
      option1_16.frameNStart = frameN;  // exact frame index
      
      option1_16.setAutoDraw(true);
    }

    
    // *option2_16* updates
    if (t >= 0.0 && option2_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_16.tStart = t;  // (not accounting for frame time here)
      option2_16.frameNStart = frameN;  // exact frame index
      
      option2_16.setAutoDraw(true);
    }

    
    // *option3_15* updates
    if (t >= 0.0 && option3_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_15.tStart = t;  // (not accounting for frame time here)
      option3_15.frameNStart = frameN;  // exact frame index
      
      option3_15.setAutoDraw(true);
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
    dax12test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function dax12test2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'dax12test2'-------
    dax12test2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (key_resp_dax12_2.corr) {
        number_correct2 = (number_correct2 + 1);
        console.log(("Correct2: " + number_correct2.toString()));
    }
    if ((number_correct2 === 5)) {
        console.log(("total Correct2: " + number_correct2.toString()));
        trials_phase_2.finished = true;
    } else {
        console.log("flag2!");
        trials_phase_2.finished = false;
    }
    
    // was no response the correct answer?!
    if (key_resp_dax12_2.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_dax12_2.corr = 1;  // correct non-response
      } else {
         key_resp_dax12_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_dax12_2.keys', key_resp_dax12_2.keys);
    psychoJS.experiment.addData('key_resp_dax12_2.corr', key_resp_dax12_2.corr);
    if (typeof key_resp_dax12_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_dax12_2.rt', key_resp_dax12_2.rt);
        routineTimer.reset();
        }
    
    key_resp_dax12_2.stop();
    // the Routine "dax12test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicket15_2_allKeys;
var blicket15test2Components;
function blicket15test2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicket15test2'-------
    t = 0;
    blicket15test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_blicket15_2.keys = undefined;
    key_resp_blicket15_2.rt = undefined;
    _key_resp_blicket15_2_allKeys = [];
    blicket_st_b15_4.setFillColor(new util.Color('black'));
    blicket_st_w15_5.setFillColor(new util.Color('white'));
    // keep track of which components have finished
    blicket15test2Components = [];
    blicket15test2Components.push(key_resp_blicket15_2);
    blicket15test2Components.push(blicket1_9);
    blicket15test2Components.push(blicket_st_b15_4);
    blicket15test2Components.push(blicket_st_w15_5);
    blicket15test2Components.push(option1_critical_11);
    blicket15test2Components.push(option2_critical_11);
    
    blicket15test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicket15test2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicket15test2'-------
    // get current time
    t = blicket15test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_blicket15_2* updates
    if (t >= 0.0 && key_resp_blicket15_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicket15_2.tStart = t;  // (not accounting for frame time here)
      key_resp_blicket15_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicket15_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicket15_2.start(); }); // start on screen flip
    }

    if (key_resp_blicket15_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicket15_2.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_blicket15_2_allKeys = _key_resp_blicket15_2_allKeys.concat(theseKeys);
      if (_key_resp_blicket15_2_allKeys.length > 0) {
        key_resp_blicket15_2.keys = _key_resp_blicket15_2_allKeys[_key_resp_blicket15_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicket15_2.rt = _key_resp_blicket15_2_allKeys[_key_resp_blicket15_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicket15_2.keys == '1') {
            key_resp_blicket15_2.corr = 1;
        } else {
            key_resp_blicket15_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_9* updates
    if (t >= 0.0 && blicket1_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_9.tStart = t;  // (not accounting for frame time here)
      blicket1_9.frameNStart = frameN;  // exact frame index
      
      blicket1_9.setAutoDraw(true);
    }

    
    // *blicket_st_b15_4* updates
    if (t >= 0.0 && blicket_st_b15_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b15_4.tStart = t;  // (not accounting for frame time here)
      blicket_st_b15_4.frameNStart = frameN;  // exact frame index
      
      blicket_st_b15_4.setAutoDraw(true);
    }

    
    // *blicket_st_w15_5* updates
    if (t >= 0.0 && blicket_st_w15_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w15_5.tStart = t;  // (not accounting for frame time here)
      blicket_st_w15_5.frameNStart = frameN;  // exact frame index
      
      blicket_st_w15_5.setAutoDraw(true);
    }

    
    // *option1_critical_11* updates
    if (t >= 0.0 && option1_critical_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_11.tStart = t;  // (not accounting for frame time here)
      option1_critical_11.frameNStart = frameN;  // exact frame index
      
      option1_critical_11.setAutoDraw(true);
    }

    
    // *option2_critical_11* updates
    if (t >= 0.0 && option2_critical_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_11.tStart = t;  // (not accounting for frame time here)
      option2_critical_11.frameNStart = frameN;  // exact frame index
      
      option2_critical_11.setAutoDraw(true);
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
    blicket15test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicket15test2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicket15test2'-------
    blicket15test2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (key_resp_blicket15_2.corr) {
        number_correct2 = (number_correct2 + 1);
        console.log(("Correct2: " + number_correct2.toString()));
    }
    if ((number_correct2 === 5)) {
        console.log(("total Correct2: " + number_correct2.toString()));
        trials_phase_2.finished = true;
    } else {
        console.log("flag2!");
        trials_phase_2.finished = false;
    }
    
    // was no response the correct answer?!
    if (key_resp_blicket15_2.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_blicket15_2.corr = 1;  // correct non-response
      } else {
         key_resp_blicket15_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicket15_2.keys', key_resp_blicket15_2.keys);
    psychoJS.experiment.addData('key_resp_blicket15_2.corr', key_resp_blicket15_2.corr);
    if (typeof key_resp_blicket15_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicket15_2.rt', key_resp_blicket15_2.rt);
        routineTimer.reset();
        }
    
    key_resp_blicket15_2.stop();
    // the Routine "blicket15test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicket18_2_allKeys;
var smicket18test2Components;
function smicket18test2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicket18test2'-------
    t = 0;
    smicket18test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_smicket18_2.keys = undefined;
    key_resp_smicket18_2.rt = undefined;
    _key_resp_smicket18_2_allKeys = [];
    blicket_st_w_5.setFillColor(new util.Color('black'));
    blicket_st_b_5.setFillColor(new util.Color('white'));
    // keep track of which components have finished
    smicket18test2Components = [];
    smicket18test2Components.push(key_resp_smicket18_2);
    smicket18test2Components.push(blicket1_10);
    smicket18test2Components.push(blicket_st_w_5);
    smicket18test2Components.push(blicket_st_b_5);
    smicket18test2Components.push(option1_critical_12);
    smicket18test2Components.push(option2_critical_12);
    
    smicket18test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicket18test2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicket18test2'-------
    // get current time
    t = smicket18test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_smicket18_2* updates
    if (t >= 0.0 && key_resp_smicket18_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicket18_2.tStart = t;  // (not accounting for frame time here)
      key_resp_smicket18_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicket18_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicket18_2.start(); }); // start on screen flip
    }

    if (key_resp_smicket18_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicket18_2.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_smicket18_2_allKeys = _key_resp_smicket18_2_allKeys.concat(theseKeys);
      if (_key_resp_smicket18_2_allKeys.length > 0) {
        key_resp_smicket18_2.keys = _key_resp_smicket18_2_allKeys[_key_resp_smicket18_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicket18_2.rt = _key_resp_smicket18_2_allKeys[_key_resp_smicket18_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicket18_2.keys == '2') {
            key_resp_smicket18_2.corr = 1;
        } else {
            key_resp_smicket18_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *blicket1_10* updates
    if (t >= 0.0 && blicket1_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket1_10.tStart = t;  // (not accounting for frame time here)
      blicket1_10.frameNStart = frameN;  // exact frame index
      
      blicket1_10.setAutoDraw(true);
    }

    
    // *blicket_st_w_5* updates
    if (t >= 0.0 && blicket_st_w_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_w_5.tStart = t;  // (not accounting for frame time here)
      blicket_st_w_5.frameNStart = frameN;  // exact frame index
      
      blicket_st_w_5.setAutoDraw(true);
    }

    
    // *blicket_st_b_5* updates
    if (t >= 0.0 && blicket_st_b_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blicket_st_b_5.tStart = t;  // (not accounting for frame time here)
      blicket_st_b_5.frameNStart = frameN;  // exact frame index
      
      blicket_st_b_5.setAutoDraw(true);
    }

    
    // *option1_critical_12* updates
    if (t >= 0.0 && option1_critical_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_critical_12.tStart = t;  // (not accounting for frame time here)
      option1_critical_12.frameNStart = frameN;  // exact frame index
      
      option1_critical_12.setAutoDraw(true);
    }

    
    // *option2_critical_12* updates
    if (t >= 0.0 && option2_critical_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_critical_12.tStart = t;  // (not accounting for frame time here)
      option2_critical_12.frameNStart = frameN;  // exact frame index
      
      option2_critical_12.setAutoDraw(true);
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
    smicket18test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicket18test2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicket18test2'-------
    smicket18test2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (key_resp_smicket18_2.corr) {
        number_correct2 = (number_correct2 + 1);
        console.log(("Correct2: " + number_correct2.toString()));
    }
    if ((number_correct2 === 5)) {
        console.log(("total Correct2: " + number_correct2.toString()));
        trials_phase_2.finished = true;
    } else {
        console.log("flag2!");
        trials_phase_2.finished = false;
    }
    
    // was no response the correct answer?!
    if (key_resp_smicket18_2.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_smicket18_2.corr = 1;  // correct non-response
      } else {
         key_resp_smicket18_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicket18_2.keys', key_resp_smicket18_2.keys);
    psychoJS.experiment.addData('key_resp_smicket18_2.corr', key_resp_smicket18_2.corr);
    if (typeof key_resp_smicket18_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicket18_2.rt', key_resp_smicket18_2.rt);
        routineTimer.reset();
        }
    
    key_resp_smicket18_2.stop();
    // the Routine "smicket18test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_blicketfep21_2_allKeys;
var blicketfep21test2Components;
function blicketfep21test2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blicketfep21test2'-------
    t = 0;
    blicketfep21test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_22.setFillColor(new util.Color('black'));
    triange_10.setFillColor(new util.Color('black'));
    cross_20.setFillColor(new util.Color('black'));
    key_resp_blicketfep21_2.keys = undefined;
    key_resp_blicketfep21_2.rt = undefined;
    _key_resp_blicketfep21_2_allKeys = [];
    // keep track of which components have finished
    blicketfep21test2Components = [];
    blicketfep21test2Components.push(dax9_corr2_10);
    blicketfep21test2Components.push(star_22);
    blicketfep21test2Components.push(triange_10);
    blicketfep21test2Components.push(cross_20);
    blicketfep21test2Components.push(key_resp_blicketfep21_2);
    blicketfep21test2Components.push(option1_17);
    blicketfep21test2Components.push(option2_17);
    blicketfep21test2Components.push(option3_16);
    
    blicketfep21test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blicketfep21test2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blicketfep21test2'-------
    // get current time
    t = blicketfep21test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_10* updates
    if (t >= 0.0 && dax9_corr2_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_10.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_10.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_10.setAutoDraw(true);
    }

    
    // *star_22* updates
    if (t >= 0.0 && star_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_22.tStart = t;  // (not accounting for frame time here)
      star_22.frameNStart = frameN;  // exact frame index
      
      star_22.setAutoDraw(true);
    }

    
    // *triange_10* updates
    if (t >= 0.0 && triange_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_10.tStart = t;  // (not accounting for frame time here)
      triange_10.frameNStart = frameN;  // exact frame index
      
      triange_10.setAutoDraw(true);
    }

    
    // *cross_20* updates
    if (t >= 0.0 && cross_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_20.tStart = t;  // (not accounting for frame time here)
      cross_20.frameNStart = frameN;  // exact frame index
      
      cross_20.setAutoDraw(true);
    }

    
    // *key_resp_blicketfep21_2* updates
    if (t >= 0.0 && key_resp_blicketfep21_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_blicketfep21_2.tStart = t;  // (not accounting for frame time here)
      key_resp_blicketfep21_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep21_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_blicketfep21_2.start(); }); // start on screen flip
    }

    if (key_resp_blicketfep21_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_blicketfep21_2.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_blicketfep21_2_allKeys = _key_resp_blicketfep21_2_allKeys.concat(theseKeys);
      if (_key_resp_blicketfep21_2_allKeys.length > 0) {
        key_resp_blicketfep21_2.keys = _key_resp_blicketfep21_2_allKeys[_key_resp_blicketfep21_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_blicketfep21_2.rt = _key_resp_blicketfep21_2_allKeys[_key_resp_blicketfep21_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_blicketfep21_2.keys == '3') {
            key_resp_blicketfep21_2.corr = 1;
        } else {
            key_resp_blicketfep21_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_17* updates
    if (t >= 0.0 && option1_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_17.tStart = t;  // (not accounting for frame time here)
      option1_17.frameNStart = frameN;  // exact frame index
      
      option1_17.setAutoDraw(true);
    }

    
    // *option2_17* updates
    if (t >= 0.0 && option2_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_17.tStart = t;  // (not accounting for frame time here)
      option2_17.frameNStart = frameN;  // exact frame index
      
      option2_17.setAutoDraw(true);
    }

    
    // *option3_16* updates
    if (t >= 0.0 && option3_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_16.tStart = t;  // (not accounting for frame time here)
      option3_16.frameNStart = frameN;  // exact frame index
      
      option3_16.setAutoDraw(true);
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
    blicketfep21test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blicketfep21test2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blicketfep21test2'-------
    blicketfep21test2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (key_resp_blicketfep21_2.corr) {
        number_correct2 = (number_correct2 + 1);
        console.log(("Correct2: " + number_correct2.toString()));
    }
    if ((number_correct2 === 5)) {
        console.log(("total Correct2: " + number_correct2.toString()));
        trials_phase_2.finished = true;
    } else {
        console.log("flag2!");
        trials_phase_2.finished = false;
    }
    
    // was no response the correct answer?!
    if (key_resp_blicketfep21_2.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_blicketfep21_2.corr = 1;  // correct non-response
      } else {
         key_resp_blicketfep21_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_blicketfep21_2.keys', key_resp_blicketfep21_2.keys);
    psychoJS.experiment.addData('key_resp_blicketfep21_2.corr', key_resp_blicketfep21_2.corr);
    if (typeof key_resp_blicketfep21_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_blicketfep21_2.rt', key_resp_blicketfep21_2.rt);
        routineTimer.reset();
        }
    
    key_resp_blicketfep21_2.stop();
    // the Routine "blicketfep21test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_smicketfep27_2_allKeys;
var smicketfep27test2Components;
function smicketfep27test2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'smicketfep27test2'-------
    t = 0;
    smicketfep27test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_23.setFillColor(new util.Color('white'));
    triange_11.setFillColor(new util.Color('white'));
    cross_21.setFillColor(new util.Color('white'));
    key_resp_smicketfep27_2.keys = undefined;
    key_resp_smicketfep27_2.rt = undefined;
    _key_resp_smicketfep27_2_allKeys = [];
    // keep track of which components have finished
    smicketfep27test2Components = [];
    smicketfep27test2Components.push(dax9_corr2_11);
    smicketfep27test2Components.push(star_23);
    smicketfep27test2Components.push(triange_11);
    smicketfep27test2Components.push(cross_21);
    smicketfep27test2Components.push(key_resp_smicketfep27_2);
    smicketfep27test2Components.push(option1_18);
    smicketfep27test2Components.push(option2_18);
    smicketfep27test2Components.push(option3_17);
    
    smicketfep27test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function smicketfep27test2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'smicketfep27test2'-------
    // get current time
    t = smicketfep27test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_11* updates
    if (t >= 0.0 && dax9_corr2_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_11.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_11.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_11.setAutoDraw(true);
    }

    
    // *star_23* updates
    if (t >= 0.0 && star_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_23.tStart = t;  // (not accounting for frame time here)
      star_23.frameNStart = frameN;  // exact frame index
      
      star_23.setAutoDraw(true);
    }

    
    // *triange_11* updates
    if (t >= 0.0 && triange_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_11.tStart = t;  // (not accounting for frame time here)
      triange_11.frameNStart = frameN;  // exact frame index
      
      triange_11.setAutoDraw(true);
    }

    
    // *cross_21* updates
    if (t >= 0.0 && cross_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_21.tStart = t;  // (not accounting for frame time here)
      cross_21.frameNStart = frameN;  // exact frame index
      
      cross_21.setAutoDraw(true);
    }

    
    // *key_resp_smicketfep27_2* updates
    if (t >= 0.0 && key_resp_smicketfep27_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_smicketfep27_2.tStart = t;  // (not accounting for frame time here)
      key_resp_smicketfep27_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep27_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_smicketfep27_2.start(); }); // start on screen flip
    }

    if (key_resp_smicketfep27_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_smicketfep27_2.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_smicketfep27_2_allKeys = _key_resp_smicketfep27_2_allKeys.concat(theseKeys);
      if (_key_resp_smicketfep27_2_allKeys.length > 0) {
        key_resp_smicketfep27_2.keys = _key_resp_smicketfep27_2_allKeys[_key_resp_smicketfep27_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_smicketfep27_2.rt = _key_resp_smicketfep27_2_allKeys[_key_resp_smicketfep27_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_smicketfep27_2.keys == '3') {
            key_resp_smicketfep27_2.corr = 1;
        } else {
            key_resp_smicketfep27_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_18* updates
    if (t >= 0.0 && option1_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_18.tStart = t;  // (not accounting for frame time here)
      option1_18.frameNStart = frameN;  // exact frame index
      
      option1_18.setAutoDraw(true);
    }

    
    // *option2_18* updates
    if (t >= 0.0 && option2_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_18.tStart = t;  // (not accounting for frame time here)
      option2_18.frameNStart = frameN;  // exact frame index
      
      option2_18.setAutoDraw(true);
    }

    
    // *option3_17* updates
    if (t >= 0.0 && option3_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_17.tStart = t;  // (not accounting for frame time here)
      option3_17.frameNStart = frameN;  // exact frame index
      
      option3_17.setAutoDraw(true);
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
    smicketfep27test2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function smicketfep27test2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'smicketfep27test2'-------
    smicketfep27test2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (key_resp_smicketfep27_2.corr) {
        number_correct2 = (number_correct2 + 1);
        console.log(("Correct2: " + number_correct2.toString()));
    }
    if ((number_correct2 === 5)) {
        console.log(("total Correct2: " + number_correct2.toString()));
        trials_phase_2.finished = true;
    } else {
        console.log("flag2!");
        trials_phase_2.finished = false;
    }
    
    // was no response the correct answer?!
    if (key_resp_smicketfep27_2.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_smicketfep27_2.corr = 1;  // correct non-response
      } else {
         key_resp_smicketfep27_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_smicketfep27_2.keys', key_resp_smicketfep27_2.keys);
    psychoJS.experiment.addData('key_resp_smicketfep27_2.corr', key_resp_smicketfep27_2.corr);
    if (typeof key_resp_smicketfep27_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_smicketfep27_2.rt', key_resp_smicketfep27_2.rt);
        routineTimer.reset();
        }
    
    key_resp_smicketfep27_2.stop();
    // the Routine "smicketfep27test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var phase3Components;
function phase3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'phase3'-------
    t = 0;
    phase3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    p3.setText('Phase 3');
    // keep track of which components have finished
    phase3Components = [];
    phase3Components.push(p3);
    
    phase3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function phase3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'phase3'-------
    // get current time
    t = phase3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *p3* updates
    if (t >= 0.0 && p3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      p3.tStart = t;  // (not accounting for frame time here)
      p3.frameNStart = frameN;  // exact frame index
      
      p3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (p3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      p3.setAutoDraw(false);
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
    phase3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function phase3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'phase3'-------
    phase3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_tas29_allKeys;
var tas29Components;
function tas29RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'tas29'-------
    t = 0;
    tas29Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_dax9.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_24.setFillColor(new util.Color('black'));
    triange_12.setFillColor(new util.Color('black'));
    cross_22.setFillColor(new util.Color('black'));
    key_resp_tas29.keys = undefined;
    key_resp_tas29.rt = undefined;
    _key_resp_tas29_allKeys = [];
    // keep track of which components have finished
    tas29Components = [];
    tas29Components.push(dax9_corr2_12);
    tas29Components.push(star_24);
    tas29Components.push(triange_12);
    tas29Components.push(cross_22);
    tas29Components.push(key_resp_tas29);
    tas29Components.push(option1_19);
    tas29Components.push(option2_19);
    tas29Components.push(option3_18);
    
    tas29Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function tas29RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'tas29'-------
    // get current time
    t = tas29Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_12* updates
    if (t >= 0.0 && dax9_corr2_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_12.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_12.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_12.setAutoDraw(true);
    }

    
    // *star_24* updates
    if (t >= 0.0 && star_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_24.tStart = t;  // (not accounting for frame time here)
      star_24.frameNStart = frameN;  // exact frame index
      
      star_24.setAutoDraw(true);
    }

    
    // *triange_12* updates
    if (t >= 0.0 && triange_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_12.tStart = t;  // (not accounting for frame time here)
      triange_12.frameNStart = frameN;  // exact frame index
      
      triange_12.setAutoDraw(true);
    }

    
    // *cross_22* updates
    if (t >= 0.0 && cross_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_22.tStart = t;  // (not accounting for frame time here)
      cross_22.frameNStart = frameN;  // exact frame index
      
      cross_22.setAutoDraw(true);
    }

    
    // *key_resp_tas29* updates
    if (t >= 0.0 && key_resp_tas29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_tas29.tStart = t;  // (not accounting for frame time here)
      key_resp_tas29.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_tas29.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_tas29.start(); }); // start on screen flip
    }

    if (key_resp_tas29.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_tas29.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_tas29_allKeys = _key_resp_tas29_allKeys.concat(theseKeys);
      if (_key_resp_tas29_allKeys.length > 0) {
        key_resp_tas29.keys = _key_resp_tas29_allKeys[_key_resp_tas29_allKeys.length - 1].name;  // just the last key pressed
        key_resp_tas29.rt = _key_resp_tas29_allKeys[_key_resp_tas29_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_tas29.keys == '1') {
            key_resp_tas29.corr = 1;
        } else {
            key_resp_tas29.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_19* updates
    if (t >= 0.0 && option1_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_19.tStart = t;  // (not accounting for frame time here)
      option1_19.frameNStart = frameN;  // exact frame index
      
      option1_19.setAutoDraw(true);
    }

    
    // *option2_19* updates
    if (t >= 0.0 && option2_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_19.tStart = t;  // (not accounting for frame time here)
      option2_19.frameNStart = frameN;  // exact frame index
      
      option2_19.setAutoDraw(true);
    }

    
    // *option3_18* updates
    if (t >= 0.0 && option3_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_18.tStart = t;  // (not accounting for frame time here)
      option3_18.frameNStart = frameN;  // exact frame index
      
      option3_18.setAutoDraw(true);
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
    tas29Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tas29RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'tas29'-------
    tas29Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_tas29.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_tas29.corr = 1;  // correct non-response
      } else {
         key_resp_tas29.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_tas29.keys', key_resp_tas29.keys);
    psychoJS.experiment.addData('key_resp_tas29.corr', key_resp_tas29.corr);
    if (typeof key_resp_tas29.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_tas29.rt', key_resp_tas29.rt);
        routineTimer.reset();
        }
    
    key_resp_tas29.stop();
    // the Routine "tas29" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_tas29Components;
function fb_tas29RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_tas29'-------
    t = 0;
    fb_tas29Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_tas29.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_tas29.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_21.setText(msg1);
    feedback0_dax9_21.setText(msg0);
    feedback_dax9_21.setText(msg);
    // keep track of which components have finished
    fb_tas29Components = [];
    fb_tas29Components.push(feedback1_dax9_21);
    fb_tas29Components.push(feedback0_dax9_21);
    fb_tas29Components.push(feedback_dax9_21);
    
    fb_tas29Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_tas29RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_tas29'-------
    // get current time
    t = fb_tas29Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_21* updates
    if (t >= 0.0 && feedback1_dax9_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_21.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_21.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_21.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_21.setAutoDraw(false);
    }
    
    // *feedback0_dax9_21* updates
    if (t >= 0.0 && feedback0_dax9_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_21.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_21.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_21.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_21.setAutoDraw(false);
    }
    
    // *feedback_dax9_21* updates
    if (t >= 0.0 && feedback_dax9_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_21.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_21.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_21.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_21.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_21.setAutoDraw(false);
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
    fb_tas29Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_tas29RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_tas29'-------
    fb_tas29Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_tas30_allKeys;
var tas30Components;
function tas30RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'tas30'-------
    t = 0;
    tas30Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_dax9.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_25.setFillColor(new util.Color('black'));
    triange_13.setFillColor(new util.Color('black'));
    cross_23.setFillColor(new util.Color('black'));
    key_resp_tas30.keys = undefined;
    key_resp_tas30.rt = undefined;
    _key_resp_tas30_allKeys = [];
    // keep track of which components have finished
    tas30Components = [];
    tas30Components.push(dax9_corr2_13);
    tas30Components.push(star_25);
    tas30Components.push(triange_13);
    tas30Components.push(cross_23);
    tas30Components.push(key_resp_tas30);
    tas30Components.push(option1_20);
    tas30Components.push(option2_20);
    tas30Components.push(option3_19);
    
    tas30Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function tas30RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'tas30'-------
    // get current time
    t = tas30Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_13* updates
    if (t >= 0.0 && dax9_corr2_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_13.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_13.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_13.setAutoDraw(true);
    }

    
    // *star_25* updates
    if (t >= 0.0 && star_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_25.tStart = t;  // (not accounting for frame time here)
      star_25.frameNStart = frameN;  // exact frame index
      
      star_25.setAutoDraw(true);
    }

    
    // *triange_13* updates
    if (t >= 0.0 && triange_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_13.tStart = t;  // (not accounting for frame time here)
      triange_13.frameNStart = frameN;  // exact frame index
      
      triange_13.setAutoDraw(true);
    }

    
    // *cross_23* updates
    if (t >= 0.0 && cross_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_23.tStart = t;  // (not accounting for frame time here)
      cross_23.frameNStart = frameN;  // exact frame index
      
      cross_23.setAutoDraw(true);
    }

    
    // *key_resp_tas30* updates
    if (t >= 0.0 && key_resp_tas30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_tas30.tStart = t;  // (not accounting for frame time here)
      key_resp_tas30.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_tas30.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_tas30.start(); }); // start on screen flip
    }

    if (key_resp_tas30.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_tas30.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_tas30_allKeys = _key_resp_tas30_allKeys.concat(theseKeys);
      if (_key_resp_tas30_allKeys.length > 0) {
        key_resp_tas30.keys = _key_resp_tas30_allKeys[_key_resp_tas30_allKeys.length - 1].name;  // just the last key pressed
        key_resp_tas30.rt = _key_resp_tas30_allKeys[_key_resp_tas30_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_tas30.keys == '2') {
            key_resp_tas30.corr = 1;
        } else {
            key_resp_tas30.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_20* updates
    if (t >= 0.0 && option1_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_20.tStart = t;  // (not accounting for frame time here)
      option1_20.frameNStart = frameN;  // exact frame index
      
      option1_20.setAutoDraw(true);
    }

    
    // *option2_20* updates
    if (t >= 0.0 && option2_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_20.tStart = t;  // (not accounting for frame time here)
      option2_20.frameNStart = frameN;  // exact frame index
      
      option2_20.setAutoDraw(true);
    }

    
    // *option3_19* updates
    if (t >= 0.0 && option3_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_19.tStart = t;  // (not accounting for frame time here)
      option3_19.frameNStart = frameN;  // exact frame index
      
      option3_19.setAutoDraw(true);
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
    tas30Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tas30RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'tas30'-------
    tas30Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_tas30.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_tas30.corr = 1;  // correct non-response
      } else {
         key_resp_tas30.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_tas30.keys', key_resp_tas30.keys);
    psychoJS.experiment.addData('key_resp_tas30.corr', key_resp_tas30.corr);
    if (typeof key_resp_tas30.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_tas30.rt', key_resp_tas30.rt);
        routineTimer.reset();
        }
    
    key_resp_tas30.stop();
    // the Routine "tas30" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_tas30Components;
function fb_tas30RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_tas30'-------
    t = 0;
    fb_tas30Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_tas30.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_tas30.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_22.setText(msg1);
    feedback0_dax9_22.setText(msg0);
    feedback_dax9_22.setText(msg);
    // keep track of which components have finished
    fb_tas30Components = [];
    fb_tas30Components.push(feedback1_dax9_22);
    fb_tas30Components.push(feedback0_dax9_22);
    fb_tas30Components.push(feedback_dax9_22);
    
    fb_tas30Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_tas30RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_tas30'-------
    // get current time
    t = fb_tas30Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_22* updates
    if (t >= 0.0 && feedback1_dax9_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_22.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_22.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_22.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_22.setAutoDraw(false);
    }
    
    // *feedback0_dax9_22* updates
    if (t >= 0.0 && feedback0_dax9_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_22.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_22.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_22.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_22.setAutoDraw(false);
    }
    
    // *feedback_dax9_22* updates
    if (t >= 0.0 && feedback_dax9_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_22.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_22.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_22.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_22.setAutoDraw(false);
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
    fb_tas30Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_tas30RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_tas30'-------
    fb_tas30Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_tas31_allKeys;
var tas31Components;
function tas31RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'tas31'-------
    t = 0;
    tas31Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_dax9.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_26.setFillColor(new util.Color('white'));
    triange_14.setFillColor(new util.Color('white'));
    cross_24.setFillColor(new util.Color('white'));
    key_resp_tas31.keys = undefined;
    key_resp_tas31.rt = undefined;
    _key_resp_tas31_allKeys = [];
    // keep track of which components have finished
    tas31Components = [];
    tas31Components.push(dax9_corr2_14);
    tas31Components.push(star_26);
    tas31Components.push(triange_14);
    tas31Components.push(cross_24);
    tas31Components.push(key_resp_tas31);
    tas31Components.push(option1_21);
    tas31Components.push(option2_21);
    tas31Components.push(option3_20);
    
    tas31Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function tas31RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'tas31'-------
    // get current time
    t = tas31Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_14* updates
    if (t >= 0.0 && dax9_corr2_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_14.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_14.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_14.setAutoDraw(true);
    }

    
    // *star_26* updates
    if (t >= 0.0 && star_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_26.tStart = t;  // (not accounting for frame time here)
      star_26.frameNStart = frameN;  // exact frame index
      
      star_26.setAutoDraw(true);
    }

    
    // *triange_14* updates
    if (t >= 0.0 && triange_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_14.tStart = t;  // (not accounting for frame time here)
      triange_14.frameNStart = frameN;  // exact frame index
      
      triange_14.setAutoDraw(true);
    }

    
    // *cross_24* updates
    if (t >= 0.0 && cross_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_24.tStart = t;  // (not accounting for frame time here)
      cross_24.frameNStart = frameN;  // exact frame index
      
      cross_24.setAutoDraw(true);
    }

    
    // *key_resp_tas31* updates
    if (t >= 0.0 && key_resp_tas31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_tas31.tStart = t;  // (not accounting for frame time here)
      key_resp_tas31.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_tas31.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_tas31.start(); }); // start on screen flip
    }

    if (key_resp_tas31.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_tas31.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_tas31_allKeys = _key_resp_tas31_allKeys.concat(theseKeys);
      if (_key_resp_tas31_allKeys.length > 0) {
        key_resp_tas31.keys = _key_resp_tas31_allKeys[_key_resp_tas31_allKeys.length - 1].name;  // just the last key pressed
        key_resp_tas31.rt = _key_resp_tas31_allKeys[_key_resp_tas31_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_tas31.keys == '1') {
            key_resp_tas31.corr = 1;
        } else {
            key_resp_tas31.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_21* updates
    if (t >= 0.0 && option1_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_21.tStart = t;  // (not accounting for frame time here)
      option1_21.frameNStart = frameN;  // exact frame index
      
      option1_21.setAutoDraw(true);
    }

    
    // *option2_21* updates
    if (t >= 0.0 && option2_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_21.tStart = t;  // (not accounting for frame time here)
      option2_21.frameNStart = frameN;  // exact frame index
      
      option2_21.setAutoDraw(true);
    }

    
    // *option3_20* updates
    if (t >= 0.0 && option3_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_20.tStart = t;  // (not accounting for frame time here)
      option3_20.frameNStart = frameN;  // exact frame index
      
      option3_20.setAutoDraw(true);
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
    tas31Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tas31RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'tas31'-------
    tas31Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_tas31.keys === undefined) {
      if (['None','none',undefined].includes('1')) {
         key_resp_tas31.corr = 1;  // correct non-response
      } else {
         key_resp_tas31.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_tas31.keys', key_resp_tas31.keys);
    psychoJS.experiment.addData('key_resp_tas31.corr', key_resp_tas31.corr);
    if (typeof key_resp_tas31.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_tas31.rt', key_resp_tas31.rt);
        routineTimer.reset();
        }
    
    key_resp_tas31.stop();
    // the Routine "tas31" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_tas31Components;
function fb_tas31RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_tas31'-------
    t = 0;
    fb_tas31Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_tas31.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_tas31.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_23.setText(msg1);
    feedback0_dax9_23.setText(msg0);
    feedback_dax9_23.setText(msg);
    // keep track of which components have finished
    fb_tas31Components = [];
    fb_tas31Components.push(feedback1_dax9_23);
    fb_tas31Components.push(feedback0_dax9_23);
    fb_tas31Components.push(feedback_dax9_23);
    
    fb_tas31Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_tas31RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_tas31'-------
    // get current time
    t = fb_tas31Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_23* updates
    if (t >= 0.0 && feedback1_dax9_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_23.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_23.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_23.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_23.setAutoDraw(false);
    }
    
    // *feedback0_dax9_23* updates
    if (t >= 0.0 && feedback0_dax9_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_23.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_23.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_23.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_23.setAutoDraw(false);
    }
    
    // *feedback_dax9_23* updates
    if (t >= 0.0 && feedback_dax9_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_23.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_23.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_23.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_23.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_23.setAutoDraw(false);
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
    fb_tas31Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_tas31RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_tas31'-------
    fb_tas31Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_tas32_allKeys;
var tas32Components;
function tas32RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'tas32'-------
    t = 0;
    tas32Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (key_resp_dax9.corr) {
        msg1 = "Correct!";
        msg0 = "";
    } else {
        msg0 = "Oops! That was wrong";
        msg1 = "";
    }
    
    star_27.setFillColor(new util.Color('white'));
    triange_15.setFillColor(new util.Color('white'));
    cross_25.setFillColor(new util.Color('white'));
    key_resp_tas32.keys = undefined;
    key_resp_tas32.rt = undefined;
    _key_resp_tas32_allKeys = [];
    // keep track of which components have finished
    tas32Components = [];
    tas32Components.push(dax9_corr2_15);
    tas32Components.push(star_27);
    tas32Components.push(triange_15);
    tas32Components.push(cross_25);
    tas32Components.push(key_resp_tas32);
    tas32Components.push(option1_22);
    tas32Components.push(option2_22);
    tas32Components.push(option3_21);
    
    tas32Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function tas32RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'tas32'-------
    // get current time
    t = tas32Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_15* updates
    if (t >= 0.0 && dax9_corr2_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_15.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_15.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_15.setAutoDraw(true);
    }

    
    // *star_27* updates
    if (t >= 0.0 && star_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_27.tStart = t;  // (not accounting for frame time here)
      star_27.frameNStart = frameN;  // exact frame index
      
      star_27.setAutoDraw(true);
    }

    
    // *triange_15* updates
    if (t >= 0.0 && triange_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_15.tStart = t;  // (not accounting for frame time here)
      triange_15.frameNStart = frameN;  // exact frame index
      
      triange_15.setAutoDraw(true);
    }

    
    // *cross_25* updates
    if (t >= 0.0 && cross_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_25.tStart = t;  // (not accounting for frame time here)
      cross_25.frameNStart = frameN;  // exact frame index
      
      cross_25.setAutoDraw(true);
    }

    
    // *key_resp_tas32* updates
    if (t >= 0.0 && key_resp_tas32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_tas32.tStart = t;  // (not accounting for frame time here)
      key_resp_tas32.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_tas32.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_tas32.start(); }); // start on screen flip
    }

    if (key_resp_tas32.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_tas32.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_tas32_allKeys = _key_resp_tas32_allKeys.concat(theseKeys);
      if (_key_resp_tas32_allKeys.length > 0) {
        key_resp_tas32.keys = _key_resp_tas32_allKeys[_key_resp_tas32_allKeys.length - 1].name;  // just the last key pressed
        key_resp_tas32.rt = _key_resp_tas32_allKeys[_key_resp_tas32_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_tas32.keys == '3') {
            key_resp_tas32.corr = 1;
        } else {
            key_resp_tas32.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_22* updates
    if (t >= 0.0 && option1_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_22.tStart = t;  // (not accounting for frame time here)
      option1_22.frameNStart = frameN;  // exact frame index
      
      option1_22.setAutoDraw(true);
    }

    
    // *option2_22* updates
    if (t >= 0.0 && option2_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_22.tStart = t;  // (not accounting for frame time here)
      option2_22.frameNStart = frameN;  // exact frame index
      
      option2_22.setAutoDraw(true);
    }

    
    // *option3_21* updates
    if (t >= 0.0 && option3_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_21.tStart = t;  // (not accounting for frame time here)
      option3_21.frameNStart = frameN;  // exact frame index
      
      option3_21.setAutoDraw(true);
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
    tas32Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function tas32RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'tas32'-------
    tas32Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_tas32.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_tas32.corr = 1;  // correct non-response
      } else {
         key_resp_tas32.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_tas32.keys', key_resp_tas32.keys);
    psychoJS.experiment.addData('key_resp_tas32.corr', key_resp_tas32.corr);
    if (typeof key_resp_tas32.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_tas32.rt', key_resp_tas32.rt);
        routineTimer.reset();
        }
    
    key_resp_tas32.stop();
    // the Routine "tas32" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fb_tas32Components;
function fb_tas32RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fb_tas32'-------
    t = 0;
    fb_tas32Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    if ((! key_resp_tas32.keys)) {
        msg = "Allowed Keys: 1, 2, 3";
        msg1 = "";
        msg0 = "";
    } else {
        if (key_resp_tas32.corr) {
            msg1 = "Correct!";
            msg0 = "";
            msg = "";
        } else {
            msg0 = "Oops! That was wrong";
            msg1 = "";
            msg = "";
        }
    }
    
    feedback1_dax9_24.setText(msg1);
    feedback0_dax9_24.setText(msg0);
    feedback_dax9_24.setText(msg);
    // keep track of which components have finished
    fb_tas32Components = [];
    fb_tas32Components.push(feedback1_dax9_24);
    fb_tas32Components.push(feedback0_dax9_24);
    fb_tas32Components.push(feedback_dax9_24);
    
    fb_tas32Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fb_tas32RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fb_tas32'-------
    // get current time
    t = fb_tas32Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback1_dax9_24* updates
    if (t >= 0.0 && feedback1_dax9_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback1_dax9_24.tStart = t;  // (not accounting for frame time here)
      feedback1_dax9_24.frameNStart = frameN;  // exact frame index
      
      feedback1_dax9_24.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback1_dax9_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback1_dax9_24.setAutoDraw(false);
    }
    
    // *feedback0_dax9_24* updates
    if (t >= 0.0 && feedback0_dax9_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback0_dax9_24.tStart = t;  // (not accounting for frame time here)
      feedback0_dax9_24.frameNStart = frameN;  // exact frame index
      
      feedback0_dax9_24.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback0_dax9_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback0_dax9_24.setAutoDraw(false);
    }
    
    // *feedback_dax9_24* updates
    if (t >= 0.0 && feedback_dax9_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_dax9_24.tStart = t;  // (not accounting for frame time here)
      feedback_dax9_24.frameNStart = frameN;  // exact frame index
      
      feedback_dax9_24.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_dax9_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_dax9_24.setAutoDraw(false);
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
    fb_tas32Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fb_tas32RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fb_tas32'-------
    fb_tas32Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var number_correct3;
var _key_resp_dax9_2_allKeys;
var test2dax9Components;
function test2dax9RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'test2dax9'-------
    t = 0;
    test2dax9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    number_correct3 = 0;
    
    star_28.setFillColor(new util.Color('black'));
    triange_16.setFillColor(new util.Color('black'));
    cross_26.setFillColor(new util.Color('black'));
    key_resp_dax9_2.keys = undefined;
    key_resp_dax9_2.rt = undefined;
    _key_resp_dax9_2_allKeys = [];
    // keep track of which components have finished
    test2dax9Components = [];
    test2dax9Components.push(dax9_corr2_16);
    test2dax9Components.push(star_28);
    test2dax9Components.push(triange_16);
    test2dax9Components.push(cross_26);
    test2dax9Components.push(key_resp_dax9_2);
    test2dax9Components.push(option1_23);
    test2dax9Components.push(option2_23);
    test2dax9Components.push(option3_22);
    
    test2dax9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function test2dax9RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'test2dax9'-------
    // get current time
    t = test2dax9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_16* updates
    if (t >= 0.0 && dax9_corr2_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_16.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_16.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_16.setAutoDraw(true);
    }

    
    // *star_28* updates
    if (t >= 0.0 && star_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_28.tStart = t;  // (not accounting for frame time here)
      star_28.frameNStart = frameN;  // exact frame index
      
      star_28.setAutoDraw(true);
    }

    
    // *triange_16* updates
    if (t >= 0.0 && triange_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_16.tStart = t;  // (not accounting for frame time here)
      triange_16.frameNStart = frameN;  // exact frame index
      
      triange_16.setAutoDraw(true);
    }

    
    // *cross_26* updates
    if (t >= 0.0 && cross_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_26.tStart = t;  // (not accounting for frame time here)
      cross_26.frameNStart = frameN;  // exact frame index
      
      cross_26.setAutoDraw(true);
    }

    
    // *key_resp_dax9_2* updates
    if (t >= 0.0 && key_resp_dax9_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_dax9_2.tStart = t;  // (not accounting for frame time here)
      key_resp_dax9_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_dax9_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_dax9_2.start(); }); // start on screen flip
    }

    if (key_resp_dax9_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_dax9_2.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_dax9_2_allKeys = _key_resp_dax9_2_allKeys.concat(theseKeys);
      if (_key_resp_dax9_2_allKeys.length > 0) {
        key_resp_dax9_2.keys = _key_resp_dax9_2_allKeys[_key_resp_dax9_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_dax9_2.rt = _key_resp_dax9_2_allKeys[_key_resp_dax9_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_dax9_2.keys == '2') {
            key_resp_dax9_2.corr = 1;
        } else {
            key_resp_dax9_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_23* updates
    if (t >= 0.0 && option1_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_23.tStart = t;  // (not accounting for frame time here)
      option1_23.frameNStart = frameN;  // exact frame index
      
      option1_23.setAutoDraw(true);
    }

    
    // *option2_23* updates
    if (t >= 0.0 && option2_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_23.tStart = t;  // (not accounting for frame time here)
      option2_23.frameNStart = frameN;  // exact frame index
      
      option2_23.setAutoDraw(true);
    }

    
    // *option3_22* updates
    if (t >= 0.0 && option3_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_22.tStart = t;  // (not accounting for frame time here)
      option3_22.frameNStart = frameN;  // exact frame index
      
      option3_22.setAutoDraw(true);
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
    test2dax9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test2dax9RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'test2dax9'-------
    test2dax9Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (key_resp_dax9_2.corr) {
        number_correct3 = (number_correct3 + 1);
        console.log(("Correct3: " + number_correct3.toString()));
    }
    if ((number_correct3 === 2)) {
        console.log(("total Correct2: " + number_correct3.toString()));
        trials_phase3.finished = true;
    } else {
        console.log("flag2!");
        trials_phase3.finished = false;
    }
    
    // was no response the correct answer?!
    if (key_resp_dax9_2.keys === undefined) {
      if (['None','none',undefined].includes('2')) {
         key_resp_dax9_2.corr = 1;  // correct non-response
      } else {
         key_resp_dax9_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_dax9_2.keys', key_resp_dax9_2.keys);
    psychoJS.experiment.addData('key_resp_dax9_2.corr', key_resp_dax9_2.corr);
    if (typeof key_resp_dax9_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_dax9_2.rt', key_resp_dax9_2.rt);
        routineTimer.reset();
        }
    
    key_resp_dax9_2.stop();
    // the Routine "test2dax9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_tas32_2_allKeys;
var test2tas32Components;
function test2tas32RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'test2tas32'-------
    t = 0;
    test2tas32Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    star_29.setFillColor(new util.Color('white'));
    triange_17.setFillColor(new util.Color('white'));
    cross_27.setFillColor(new util.Color('white'));
    key_resp_tas32_2.keys = undefined;
    key_resp_tas32_2.rt = undefined;
    _key_resp_tas32_2_allKeys = [];
    // keep track of which components have finished
    test2tas32Components = [];
    test2tas32Components.push(dax9_corr2_17);
    test2tas32Components.push(star_29);
    test2tas32Components.push(triange_17);
    test2tas32Components.push(cross_27);
    test2tas32Components.push(key_resp_tas32_2);
    test2tas32Components.push(option1_24);
    test2tas32Components.push(option2_24);
    test2tas32Components.push(option3_23);
    
    test2tas32Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function test2tas32RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'test2tas32'-------
    // get current time
    t = test2tas32Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dax9_corr2_17* updates
    if (t >= 0.0 && dax9_corr2_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dax9_corr2_17.tStart = t;  // (not accounting for frame time here)
      dax9_corr2_17.frameNStart = frameN;  // exact frame index
      
      dax9_corr2_17.setAutoDraw(true);
    }

    
    // *star_29* updates
    if (t >= 0.0 && star_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      star_29.tStart = t;  // (not accounting for frame time here)
      star_29.frameNStart = frameN;  // exact frame index
      
      star_29.setAutoDraw(true);
    }

    
    // *triange_17* updates
    if (t >= 0.0 && triange_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      triange_17.tStart = t;  // (not accounting for frame time here)
      triange_17.frameNStart = frameN;  // exact frame index
      
      triange_17.setAutoDraw(true);
    }

    
    // *cross_27* updates
    if (t >= 0.0 && cross_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_27.tStart = t;  // (not accounting for frame time here)
      cross_27.frameNStart = frameN;  // exact frame index
      
      cross_27.setAutoDraw(true);
    }

    
    // *key_resp_tas32_2* updates
    if (t >= 0.0 && key_resp_tas32_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_tas32_2.tStart = t;  // (not accounting for frame time here)
      key_resp_tas32_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_tas32_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_tas32_2.start(); }); // start on screen flip
    }

    if (key_resp_tas32_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_tas32_2.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_tas32_2_allKeys = _key_resp_tas32_2_allKeys.concat(theseKeys);
      if (_key_resp_tas32_2_allKeys.length > 0) {
        key_resp_tas32_2.keys = _key_resp_tas32_2_allKeys[_key_resp_tas32_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_tas32_2.rt = _key_resp_tas32_2_allKeys[_key_resp_tas32_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_tas32_2.keys == '3') {
            key_resp_tas32_2.corr = 1;
        } else {
            key_resp_tas32_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *option1_24* updates
    if (t >= 0.0 && option1_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option1_24.tStart = t;  // (not accounting for frame time here)
      option1_24.frameNStart = frameN;  // exact frame index
      
      option1_24.setAutoDraw(true);
    }

    
    // *option2_24* updates
    if (t >= 0.0 && option2_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option2_24.tStart = t;  // (not accounting for frame time here)
      option2_24.frameNStart = frameN;  // exact frame index
      
      option2_24.setAutoDraw(true);
    }

    
    // *option3_23* updates
    if (t >= 0.0 && option3_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      option3_23.tStart = t;  // (not accounting for frame time here)
      option3_23.frameNStart = frameN;  // exact frame index
      
      option3_23.setAutoDraw(true);
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
    test2tas32Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test2tas32RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'test2tas32'-------
    test2tas32Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (key_resp_tas32_2.corr) {
        number_correct3 = (number_correct3 + 1);
        console.log(("Correct3: " + number_correct3.toString()));
    }
    if ((number_correct3 === 2)) {
        console.log(("total Correct2: " + number_correct3.toString()));
        trials_phase3.finished = true;
    } else {
        console.log("flag2!");
        trials_phase3.finished = false;
    }
    
    // was no response the correct answer?!
    if (key_resp_tas32_2.keys === undefined) {
      if (['None','none',undefined].includes('3')) {
         key_resp_tas32_2.corr = 1;  // correct non-response
      } else {
         key_resp_tas32_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_tas32_2.keys', key_resp_tas32_2.keys);
    psychoJS.experiment.addData('key_resp_tas32_2.corr', key_resp_tas32_2.corr);
    if (typeof key_resp_tas32_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_tas32_2.rt', key_resp_tas32_2.rt);
        routineTimer.reset();
        }
    
    key_resp_tas32_2.stop();
    // the Routine "test2tas32" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endComponents;
function endRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(thankyou);
    
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thankyou* updates
    if (t >= 0.0 && thankyou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankyou.tStart = t;  // (not accounting for frame time here)
      thankyou.frameNStart = frameN;  // exact frame index
      
      thankyou.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thankyou.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thankyou.setAutoDraw(false);
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
    endComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'end'-------
    endComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
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
