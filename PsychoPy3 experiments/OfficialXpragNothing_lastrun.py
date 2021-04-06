#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.3),
    on Mon Mar 15 15:37:11 2021
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.3'
expName = 'OfficialXpragNb'  # from the Builder filename that created this script
expInfo = {'session': '002', 'participant': 'nb', '性别': '', '年龄': '', '除了中文，您还说什么语言？': '', '平日您和家人朋友交流用什么语言？': '', '您在说英语的国家生活了几年？': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Volumes/PARSLEY/01 comp/01 pragmatics comp/03 my_exp/OfficialXpragNothing/OfficialXpragNothing_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[800, 600], fullscr=False, screen=0, 
    winType='pyglet', allowGUI=True, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "intro"
introClock = core.Clock()
welcome = visual.TextStim(win=win, name='welcome',
    text='您好！欢迎参加调查实验！\n\n这项实验由32个问题组成。\n每个问题由一个语境，一副图片，和一个句子组成。\n\n您的任务是：在指定语境下，判断所给句子是否可以真实地描述图片。\n如果可以，请选择“可以”，否则请选择“不可以”。\n\n点击“我同意”会出现红三角，表示您愿意参加实验。\n\n首先，我们开始实验前的练习。练习题目有四个，您会看到提示（蓝色）。\n\n请按空格键开始。',
    font='Songti SC',
    units='norm', pos=(0, 0), height=0.07, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
Iagree = visual.Slider(win=win, name='Iagree',
    size=(0.7, 0.1), pos=(0, -0.8), units='norm',
    labels=['我同意',' '], ticks=(1,2), granularity=1,
    style=['triangleMarker'], styleTweaks=[], opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Songti SC', labelHeight=0.05,
    flip=False, depth=-1, readOnly=False)
key_space = keyboard.Keyboard()

# Initialize components for Routine "Blank500"
Blank500Clock = core.Clock()
blank = visual.TextStim(win=win, name='blank',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "training"
trainingClock = core.Clock()
context_0 = visual.TextStim(win=win, name='context_0',
    text='',
    font='Songti SC',
    units='norm', pos=(-0.2, 0.8), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
referent_0 = visual.ImageStim(
    win=win,
    name='referent_0', units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.3), size=(0.7, 0.9),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
utterance_0 = visual.TextStim(win=win, name='utterance_0',
    text='',
    font='Songti SC',
    units='norm', pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
feedback_0 = visual.TextStim(win=win, name='feedback_0',
    text='',
    font='Songti SC',
    units='norm', pos=(0, -0.4), height=0.055, wrapWidth=None, ori=0, 
    color='blue', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
true_can_0 = visual.Slider(win=win, name='true_can_0',
    size=(0.7, 0.1), pos=(0, -0.6), units='norm',
    labels=['不可以真实描述图片','可以真实描述图片'], ticks=(0,1), granularity=1,
    style=['rating'], styleTweaks=[], opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Songti SC', labelHeight=0.05,
    flip=False, depth=-4, readOnly=False)
explain_0 = visual.TextStim(win=win, name='explain_0',
    text='练习帮您了解语言中的歧义现象。点击“不可以”或“可以”会出现红点。按空格进入下题。一旦按下空格键，您将无法回到上一题！',
    font='Songti SC',
    units='norm', pos=(0, -0.9), height=0.05, wrapWidth=None, ori=0, 
    color='blue', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-5.0);
nextPractice = keyboard.Keyboard()

# Initialize components for Routine "PresstoStart"
PresstoStartClock = core.Clock()
pressme = visual.TextStim(win=win, name='pressme',
    text='现在我们进入正式的实验！请按空格键。',
    font='Songti SC',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "exp"
expClock = core.Clock()
context_1 = visual.TextStim(win=win, name='context_1',
    text='',
    font='Songti SC',
    units='norm', pos=(-0.1, 0.6), height=0.06, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
referent_1 = visual.ImageStim(
    win=win,
    name='referent_1', units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.7, 0.9),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=256, interpolate=True, depth=-1.0)
utterance_1 = visual.TextStim(win=win, name='utterance_1',
    text='',
    font='Songti SC',
    units='norm', pos=(0, -0.6), height=0.06, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
true_can_1 = visual.Slider(win=win, name='true_can_1',
    size=(0.7, 0.1), pos=(0, -0.8), units='norm',
    labels=['不可以真实描述图片','可以真实描述图片'], ticks=(0,1), granularity=1,
    style=['rating'], styleTweaks=[], opacity=1,
    color='LightGray', fillColor='Red', borderColor='White', colorSpace='rgb',
    font='Songti SC', labelHeight=0.05,
    flip=False, depth=-3, readOnly=False)
intruct_1 = visual.TextStim(win=win, name='intruct_1',
    text='按空格建进入下一题。一旦按下空格键，您将无法回到上一题！',
    font='Songti SC',
    units='norm', pos=(0, -0.85), height=0.045, wrapWidth=None, ori=0, 
    color='blue', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
testDone = keyboard.Keyboard()

# Initialize components for Routine "Blank500"
Blank500Clock = core.Clock()
blank = visual.TextStim(win=win, name='blank',
    text=None,
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "end"
endClock = core.Clock()
thanks = visual.TextStim(win=win, name='thanks',
    text='谢谢您的参与！',
    font='Songti SC',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "intro"-------
continueRoutine = True
# update component parameters for each repeat
Iagree.reset()
key_space.keys = []
key_space.rt = []
_key_space_allKeys = []
# keep track of which components have finished
introComponents = [welcome, Iagree, key_space]
for thisComponent in introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "intro"-------
while continueRoutine:
    # get current time
    t = introClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=introClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome* updates
    if welcome.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome.frameNStart = frameN  # exact frame index
        welcome.tStart = t  # local t and not account for scr refresh
        welcome.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome, 'tStartRefresh')  # time at next scr refresh
        welcome.setAutoDraw(True)
    
    # *Iagree* updates
    if Iagree.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
        # keep track of start time/frame for later
        Iagree.frameNStart = frameN  # exact frame index
        Iagree.tStart = t  # local t and not account for scr refresh
        Iagree.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Iagree, 'tStartRefresh')  # time at next scr refresh
        Iagree.setAutoDraw(True)
    
    # *key_space* updates
    waitOnFlip = False
    if key_space.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
        # keep track of start time/frame for later
        key_space.frameNStart = frameN  # exact frame index
        key_space.tStart = t  # local t and not account for scr refresh
        key_space.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_space, 'tStartRefresh')  # time at next scr refresh
        key_space.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_space.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_space.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_space.status == STARTED and not waitOnFlip:
        theseKeys = key_space.getKeys(keyList=['space'], waitRelease=False)
        _key_space_allKeys.extend(theseKeys)
        if len(_key_space_allKeys):
            key_space.keys = _key_space_allKeys[-1].name  # just the last key pressed
            key_space.rt = _key_space_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "intro"-------
for thisComponent in introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('welcome.started', welcome.tStartRefresh)
thisExp.addData('welcome.stopped', welcome.tStopRefresh)
thisExp.addData('Iagree.response', Iagree.getRating())
thisExp.addData('Iagree.rt', Iagree.getRT())
thisExp.addData('Iagree.started', Iagree.tStartRefresh)
thisExp.addData('Iagree.stopped', Iagree.tStopRefresh)
# check responses
if key_space.keys in ['', [], None]:  # No response was made
    key_space.keys = None
thisExp.addData('key_space.keys',key_space.keys)
if key_space.keys != None:  # we had a response
    thisExp.addData('key_space.rt', key_space.rt)
thisExp.addData('key_space.started', key_space.tStartRefresh)
thisExp.addData('key_space.stopped', key_space.tStopRefresh)
thisExp.nextEntry()
# the Routine "intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Blank500"-------
continueRoutine = True
routineTimer.add(0.050000)
# update component parameters for each repeat
# keep track of which components have finished
Blank500Components = [blank]
for thisComponent in Blank500Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Blank500Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Blank500"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = Blank500Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Blank500Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *blank* updates
    if blank.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        blank.frameNStart = frameN  # exact frame index
        blank.tStart = t  # local t and not account for scr refresh
        blank.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(blank, 'tStartRefresh')  # time at next scr refresh
        blank.setAutoDraw(True)
    if blank.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > blank.tStartRefresh + 0.05-frameTolerance:
            # keep track of stop time/frame for later
            blank.tStop = t  # not accounting for scr refresh
            blank.frameNStop = frameN  # exact frame index
            win.timeOnFlip(blank, 'tStopRefresh')  # time at next scr refresh
            blank.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Blank500Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Blank500"-------
for thisComponent in Blank500Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('blank.started', blank.tStartRefresh)
thisExp.addData('blank.stopped', blank.tStopRefresh)

# set up handler to look after randomisation of conditions etc
trialsTraining = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('training_stim.xlsx'),
    seed=None, name='trialsTraining')
thisExp.addLoop(trialsTraining)  # add the loop to the experiment
thisTrialsTraining = trialsTraining.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrialsTraining.rgb)
if thisTrialsTraining != None:
    for paramName in thisTrialsTraining:
        exec('{} = thisTrialsTraining[paramName]'.format(paramName))

for thisTrialsTraining in trialsTraining:
    currentLoop = trialsTraining
    # abbreviate parameter names if possible (e.g. rgb = thisTrialsTraining.rgb)
    if thisTrialsTraining != None:
        for paramName in thisTrialsTraining:
            exec('{} = thisTrialsTraining[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "training"-------
    continueRoutine = True
    # update component parameters for each repeat
    context_0.setText(context_t)
    referent_0.setImage(pic_meaning_t)
    utterance_0.setText(utterance_t)
    feedback_0.setText(feedback_t)
    true_can_0.reset()
    nextPractice.keys = []
    nextPractice.rt = []
    _nextPractice_allKeys = []
    # keep track of which components have finished
    trainingComponents = [context_0, referent_0, utterance_0, feedback_0, true_can_0, explain_0, nextPractice]
    for thisComponent in trainingComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trainingClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "training"-------
    while continueRoutine:
        # get current time
        t = trainingClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trainingClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *context_0* updates
        if context_0.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            context_0.frameNStart = frameN  # exact frame index
            context_0.tStart = t  # local t and not account for scr refresh
            context_0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(context_0, 'tStartRefresh')  # time at next scr refresh
            context_0.setAutoDraw(True)
        
        # *referent_0* updates
        if referent_0.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
            # keep track of start time/frame for later
            referent_0.frameNStart = frameN  # exact frame index
            referent_0.tStart = t  # local t and not account for scr refresh
            referent_0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(referent_0, 'tStartRefresh')  # time at next scr refresh
            referent_0.setAutoDraw(True)
        
        # *utterance_0* updates
        if utterance_0.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            utterance_0.frameNStart = frameN  # exact frame index
            utterance_0.tStart = t  # local t and not account for scr refresh
            utterance_0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(utterance_0, 'tStartRefresh')  # time at next scr refresh
            utterance_0.setAutoDraw(True)
        
        # *feedback_0* updates
        if feedback_0.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            feedback_0.frameNStart = frameN  # exact frame index
            feedback_0.tStart = t  # local t and not account for scr refresh
            feedback_0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedback_0, 'tStartRefresh')  # time at next scr refresh
            feedback_0.setAutoDraw(True)
        
        # *true_can_0* updates
        if true_can_0.status == NOT_STARTED and tThisFlip >= 3.0-frameTolerance:
            # keep track of start time/frame for later
            true_can_0.frameNStart = frameN  # exact frame index
            true_can_0.tStart = t  # local t and not account for scr refresh
            true_can_0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(true_can_0, 'tStartRefresh')  # time at next scr refresh
            true_can_0.setAutoDraw(True)
        
        # *explain_0* updates
        if explain_0.status == NOT_STARTED and tThisFlip >= 9.0-frameTolerance:
            # keep track of start time/frame for later
            explain_0.frameNStart = frameN  # exact frame index
            explain_0.tStart = t  # local t and not account for scr refresh
            explain_0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(explain_0, 'tStartRefresh')  # time at next scr refresh
            explain_0.setAutoDraw(True)
        
        # *nextPractice* updates
        waitOnFlip = False
        if nextPractice.status == NOT_STARTED and tThisFlip >= 9.0-frameTolerance:
            # keep track of start time/frame for later
            nextPractice.frameNStart = frameN  # exact frame index
            nextPractice.tStart = t  # local t and not account for scr refresh
            nextPractice.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(nextPractice, 'tStartRefresh')  # time at next scr refresh
            nextPractice.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(nextPractice.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(nextPractice.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if nextPractice.status == STARTED and not waitOnFlip:
            theseKeys = nextPractice.getKeys(keyList=['space'], waitRelease=False)
            _nextPractice_allKeys.extend(theseKeys)
            if len(_nextPractice_allKeys):
                nextPractice.keys = _nextPractice_allKeys[-1].name  # just the last key pressed
                nextPractice.rt = _nextPractice_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trainingComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "training"-------
    for thisComponent in trainingComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trialsTraining.addData('context_0.started', context_0.tStartRefresh)
    trialsTraining.addData('context_0.stopped', context_0.tStopRefresh)
    trialsTraining.addData('referent_0.started', referent_0.tStartRefresh)
    trialsTraining.addData('referent_0.stopped', referent_0.tStopRefresh)
    trialsTraining.addData('utterance_0.started', utterance_0.tStartRefresh)
    trialsTraining.addData('utterance_0.stopped', utterance_0.tStopRefresh)
    trialsTraining.addData('feedback_0.started', feedback_0.tStartRefresh)
    trialsTraining.addData('feedback_0.stopped', feedback_0.tStopRefresh)
    trialsTraining.addData('true_can_0.response', true_can_0.getRating())
    trialsTraining.addData('true_can_0.rt', true_can_0.getRT())
    trialsTraining.addData('true_can_0.started', true_can_0.tStartRefresh)
    trialsTraining.addData('true_can_0.stopped', true_can_0.tStopRefresh)
    trialsTraining.addData('explain_0.started', explain_0.tStartRefresh)
    trialsTraining.addData('explain_0.stopped', explain_0.tStopRefresh)
    # check responses
    if nextPractice.keys in ['', [], None]:  # No response was made
        nextPractice.keys = None
    trialsTraining.addData('nextPractice.keys',nextPractice.keys)
    if nextPractice.keys != None:  # we had a response
        trialsTraining.addData('nextPractice.rt', nextPractice.rt)
    trialsTraining.addData('nextPractice.started', nextPractice.tStartRefresh)
    trialsTraining.addData('nextPractice.stopped', nextPractice.tStopRefresh)
    # the Routine "training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trialsTraining'


# ------Prepare to start Routine "PresstoStart"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
PresstoStartComponents = [pressme, key_resp]
for thisComponent in PresstoStartComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
PresstoStartClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "PresstoStart"-------
while continueRoutine:
    # get current time
    t = PresstoStartClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=PresstoStartClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *pressme* updates
    if pressme.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        pressme.frameNStart = frameN  # exact frame index
        pressme.tStart = t  # local t and not account for scr refresh
        pressme.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(pressme, 'tStartRefresh')  # time at next scr refresh
        pressme.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in PresstoStartComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "PresstoStart"-------
for thisComponent in PresstoStartComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('pressme.started', pressme.tStartRefresh)
thisExp.addData('pressme.stopped', pressme.tStopRefresh)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
thisExp.addData('key_resp.keys',key_resp.keys)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.addData('key_resp.started', key_resp.tStartRefresh)
thisExp.addData('key_resp.stopped', key_resp.tStopRefresh)
thisExp.nextEntry()
# the Routine "PresstoStart" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trialsTestLoop = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('exp_stim_nothing.xlsx', selection='0:32'),
    seed=None, name='trialsTestLoop')
thisExp.addLoop(trialsTestLoop)  # add the loop to the experiment
thisTrialsTestLoop = trialsTestLoop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrialsTestLoop.rgb)
if thisTrialsTestLoop != None:
    for paramName in thisTrialsTestLoop:
        exec('{} = thisTrialsTestLoop[paramName]'.format(paramName))

for thisTrialsTestLoop in trialsTestLoop:
    currentLoop = trialsTestLoop
    # abbreviate parameter names if possible (e.g. rgb = thisTrialsTestLoop.rgb)
    if thisTrialsTestLoop != None:
        for paramName in thisTrialsTestLoop:
            exec('{} = thisTrialsTestLoop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "exp"-------
    continueRoutine = True
    # update component parameters for each repeat
    context_1.setText(context)
    referent_1.setImage(pic_meaning)
    utterance_1.setText(utterance)
    true_can_1.reset()
    testDone.keys = []
    testDone.rt = []
    _testDone_allKeys = []
    # keep track of which components have finished
    expComponents = [context_1, referent_1, utterance_1, true_can_1, intruct_1, testDone]
    for thisComponent in expComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    expClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "exp"-------
    while continueRoutine:
        # get current time
        t = expClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=expClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *context_1* updates
        if context_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            context_1.frameNStart = frameN  # exact frame index
            context_1.tStart = t  # local t and not account for scr refresh
            context_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(context_1, 'tStartRefresh')  # time at next scr refresh
            context_1.setAutoDraw(True)
        
        # *referent_1* updates
        if referent_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            referent_1.frameNStart = frameN  # exact frame index
            referent_1.tStart = t  # local t and not account for scr refresh
            referent_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(referent_1, 'tStartRefresh')  # time at next scr refresh
            referent_1.setAutoDraw(True)
        
        # *utterance_1* updates
        if utterance_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            utterance_1.frameNStart = frameN  # exact frame index
            utterance_1.tStart = t  # local t and not account for scr refresh
            utterance_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(utterance_1, 'tStartRefresh')  # time at next scr refresh
            utterance_1.setAutoDraw(True)
        
        # *true_can_1* updates
        if true_can_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            true_can_1.frameNStart = frameN  # exact frame index
            true_can_1.tStart = t  # local t and not account for scr refresh
            true_can_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(true_can_1, 'tStartRefresh')  # time at next scr refresh
            true_can_1.setAutoDraw(True)
        
        # *intruct_1* updates
        if intruct_1.status == NOT_STARTED and tThisFlip >= 5.0-frameTolerance:
            # keep track of start time/frame for later
            intruct_1.frameNStart = frameN  # exact frame index
            intruct_1.tStart = t  # local t and not account for scr refresh
            intruct_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(intruct_1, 'tStartRefresh')  # time at next scr refresh
            intruct_1.setAutoDraw(True)
        
        # *testDone* updates
        waitOnFlip = False
        if testDone.status == NOT_STARTED and tThisFlip >= 5.0-frameTolerance:
            # keep track of start time/frame for later
            testDone.frameNStart = frameN  # exact frame index
            testDone.tStart = t  # local t and not account for scr refresh
            testDone.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(testDone, 'tStartRefresh')  # time at next scr refresh
            testDone.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(testDone.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(testDone.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if testDone.status == STARTED and not waitOnFlip:
            theseKeys = testDone.getKeys(keyList=['space'], waitRelease=False)
            _testDone_allKeys.extend(theseKeys)
            if len(_testDone_allKeys):
                testDone.keys = _testDone_allKeys[-1].name  # just the last key pressed
                testDone.rt = _testDone_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in expComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "exp"-------
    for thisComponent in expComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trialsTestLoop.addData('context_1.started', context_1.tStartRefresh)
    trialsTestLoop.addData('context_1.stopped', context_1.tStopRefresh)
    trialsTestLoop.addData('referent_1.started', referent_1.tStartRefresh)
    trialsTestLoop.addData('referent_1.stopped', referent_1.tStopRefresh)
    trialsTestLoop.addData('utterance_1.started', utterance_1.tStartRefresh)
    trialsTestLoop.addData('utterance_1.stopped', utterance_1.tStopRefresh)
    trialsTestLoop.addData('true_can_1.response', true_can_1.getRating())
    trialsTestLoop.addData('true_can_1.rt', true_can_1.getRT())
    trialsTestLoop.addData('true_can_1.started', true_can_1.tStartRefresh)
    trialsTestLoop.addData('true_can_1.stopped', true_can_1.tStopRefresh)
    trialsTestLoop.addData('intruct_1.started', intruct_1.tStartRefresh)
    trialsTestLoop.addData('intruct_1.stopped', intruct_1.tStopRefresh)
    # check responses
    if testDone.keys in ['', [], None]:  # No response was made
        testDone.keys = None
    trialsTestLoop.addData('testDone.keys',testDone.keys)
    if testDone.keys != None:  # we had a response
        trialsTestLoop.addData('testDone.rt', testDone.rt)
    trialsTestLoop.addData('testDone.started', testDone.tStartRefresh)
    trialsTestLoop.addData('testDone.stopped', testDone.tStopRefresh)
    # the Routine "exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trialsTestLoop'


# ------Prepare to start Routine "Blank500"-------
continueRoutine = True
routineTimer.add(0.050000)
# update component parameters for each repeat
# keep track of which components have finished
Blank500Components = [blank]
for thisComponent in Blank500Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Blank500Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Blank500"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = Blank500Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Blank500Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *blank* updates
    if blank.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        blank.frameNStart = frameN  # exact frame index
        blank.tStart = t  # local t and not account for scr refresh
        blank.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(blank, 'tStartRefresh')  # time at next scr refresh
        blank.setAutoDraw(True)
    if blank.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > blank.tStartRefresh + 0.05-frameTolerance:
            # keep track of stop time/frame for later
            blank.tStop = t  # not accounting for scr refresh
            blank.frameNStop = frameN  # exact frame index
            win.timeOnFlip(blank, 'tStopRefresh')  # time at next scr refresh
            blank.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Blank500Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Blank500"-------
for thisComponent in Blank500Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('blank.started', blank.tStartRefresh)
thisExp.addData('blank.stopped', blank.tStopRefresh)

# ------Prepare to start Routine "end"-------
continueRoutine = True
routineTimer.add(2.000000)
# update component parameters for each repeat
# keep track of which components have finished
endComponents = [thanks]
for thisComponent in endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
endClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = endClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=endClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thanks* updates
    if thanks.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thanks.frameNStart = frameN  # exact frame index
        thanks.tStart = t  # local t and not account for scr refresh
        thanks.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thanks, 'tStartRefresh')  # time at next scr refresh
        thanks.setAutoDraw(True)
    if thanks.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > thanks.tStartRefresh + 2.0-frameTolerance:
            # keep track of stop time/frame for later
            thanks.tStop = t  # not accounting for scr refresh
            thanks.frameNStop = frameN  # exact frame index
            win.timeOnFlip(thanks, 'tStopRefresh')  # time at next scr refresh
            thanks.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end"-------
for thisComponent in endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('thanks.started', thanks.tStartRefresh)
thisExp.addData('thanks.stopped', thanks.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
