
///// SAMPLE EXPERIMENT FOR SPROUSE + DILLON LSA 2017

///// Modified by Yan Cong
/////
///// Implements 7 points acceptability judgment scale.
/////

///// Definition of the shuffleSequence; this defines the order of trials in the experiment
/////
///// Order in this experiment is 1) Update the Latin Square counter, 2) Present instructions,
///// 3) Present practice, and 4) Present all fillers and target items shuffled together (pseudorandom)

var showProgressBar = true;            /// I turn off the progress bar by default

var shuffleSequence = seq("setcounter",
  "introduction",
  sepWith("sep", rshuffle(startsWith("must"), startsWith("F"))))

var defaults = [
    "Separator", {
        transfer: 1000,                                      // How long between sentences? (ms)
        normalMessage: "Please wait for the next sentence."  // What is message presented between stims? Can be blank.
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],            /// What are options on Likert scale? Define both # of options and their labels.
        presentAsScale: true,                               /// Should it be presented as a scale? 'true' or 'false'
        instructions: "Use number keys or click boxes to answer.",    /// Brief instructions present on each trial
        leftComment: "(Bad)", rightComment: "(Good)"        /// Labels on end-points of scale
    }
];

var items = [

    ["sep", "Separator", { }],
    ["setcounter", "__SetCounter__", { }],

    ["introduction", Message, {consentRequired: false,
                    html: ["div",
                          ["p", "Welcome! In this experiment, you will be asked to judge a series of sentences. For each sentence, you'll be asked to judge if the sentence is an acceptable sentence of English using a scale from 1-7, where 1 is the least acceptable sentence and 7 is the most acceptable sentence. Respond using the number keys, and try to use every number available in the scale, even if it feels forced at first. It will begin to feel more natural over the course of the task!"],
                          ["p", "You are NOT being asked to judge the plausibility of the sentence; you are simply being asked to judge whether each sentence sounds like a possible sentence of English. You are also not being asked to judge whether each sentence is acceptable according to a 'school grammar'. As a native speaker of English, you have intuitions or 'gut feelings' about what sounds like an acceptable sentence."],
                          ["p","Sometimes you may not be sure which answer is correct. When this happens, go with your first instinct, don't over think it!"]
                          ]}],

    //// Item sets are grouped together
    //// Latin squaring is done automatically

    [["must.no.comma",1], "AcceptabilityJudgment", {s: "Although Emily patiently dressed, the baby wasn't amusing for her."}],
    [["must.no.nocomma",1], "AcceptabilityJudgment", {s: "Although Emily patiently dressed the baby wasn't amusing for her."}],
    [["must.sc.comma",1], "AcceptabilityJudgment", {s: "Although Emily patiently dressed, the baby must have not been amusing for her."}],
    [["must.sc.nocomma",1], "AcceptabilityJudgment", {s: "Although Emily patiently dressed the baby must have not been amusing for her."}],
    // [["must.fc.comma",3], "DashedSentence", {s: "Although I don't know whether Emily babysits, the baby must be amusing for her."},
    //                       "Question",       {q: "Do I have any knowledge about whether Emily has babysat the baby?", hasCorrect: "No"}],
    //
    // [["must.fc.nocomma",3], "DashedSentence", {s: "Although I don't know whether Emily babysits the baby must be amusing for her."},
    //                         "Question",       {q: "Is it possible that the baby was amusing for Emily?", hasCorrect: "Yes"}],



    [["must.no.comma",2], "AcceptabilityJudgment", {s: "Although Carrie skillfully cooked, the omelet wasn't easy for her."}],
    [["must.no.nocomma",2], "AcceptabilityJudgment", {s: "Although Carrie skillfully cooked the omelet wasn't easy for her."}],
    [["must.sc.comma",2], "AcceptabilityJudgment", {s: "Although Carrie skillfully cooked, the omelet must have not been easy for her."}],
    [["must.sc.nocomma",2], "AcceptabilityJudgment", {s: "Although Carrie skillfully cooked the omelet must have not been easy for her."}],
    // [["must.fc.comma",4], "DashedSentence", {s: "Although I don't know whether Carrie cooks, the omelet must be easy for her."},
    //                       "Question",       {q: "Is it possible that the omelet is easy for Carrie?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",4], "DashedSentence", {s: "Although I don't know whether Carrie cooks the omelet must be easy for her."},
    //                         "Question",       {q: "Do I have any knowledge about whether Carrie has cooked the omelet?", hasCorrect: "No"}],
    //


    [["must.no.comma",3], "AcceptabilityJudgment", {s: "Although Dean Wong anxiously telephoned, the secretary wasn't responsive to him."}],
    [["must.no.nocomma",3], "AcceptabilityJudgment", {s: "Although Dean Wong anxiously telephoned the secretary wasn't responsive to him."}],
    [["must.sc.comma",3], "AcceptabilityJudgment", {s: "Although Dean Wong anxiously telephoned, the secretary must have not been responsive to him."}],
    [["must.sc.nocomma",3], "AcceptabilityJudgment", {s: "Although Dean Wong anxiously telephoned the secretary must have not been responsive to him."}],
    // [["must.fc.comma",5], "DashedSentence", {s: "Although I don't know whether Dean Wong telephones, the secretary must be responsive to him."},
    //                       "Question",       {q: "Do I have any knowledge about whether Dean Wong has telephoned the secretary?", hasCorrect: "No"}],
    //
    // [["must.fc.nocomma",5], "DashedSentence", {s: "Although I don't know whether Dean Wong telephones the secretary must be responsive to him."},
    //                         "Question",       {q: "Is it possible that the secretary is responsive to Dean Wong?", hasCorrect: "Yes"}],


    [["must.no.comma",4], "AcceptabilityJudgment", {s: "Although Ivan gladly played, the cello wasn't fun for him."}],
    [["must.no.nocomma",4], "AcceptabilityJudgment", {s: "Although Ivan gladly played the cello wasn't fun for him."}],
    [["must.sc.comma",4], "AcceptabilityJudgment", {s: "Although Ivan gladly played, the cello must have not been fun for him."}],
    [["must.sc.nocomma",4], "AcceptabilityJudgment", {s: "Although Ivan gladly played the cello must have not been fun for him."}],
    // [["must.fc.comma",6], "DashedSentence", {s: "Although I don’t know whether Ivan and Jean play, the game must be fun for them."},
    //                       "Question",       {q: "Is it possible that the game is fun for Ivan and Jean?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",6], "DashedSentence", {s: "Although I don’t know whether Ivan and Jean play the game must be fun for them."},
    //                         "Question",       {q: "Do I have any knowledge about whether Ivan and Jean have played the game?", hasCorrect: "No"}],
    //


    [["must.no.comma",5], "AcceptabilityJudgment", {s: "Although Owen clumsily hunted, the deer wasn't cautious for him."}],
    [["must.no.nocomma",5], "AcceptabilityJudgment", {s: "Although Owen clumsily hunted the deer wasn't cautious for him."}],
    [["must.sc.comma",5], "AcceptabilityJudgment", {s: "Although Owen clumsily hunted, the deer must have not been cautious for him."}],
    [["must.sc.nocomma",5], "AcceptabilityJudgment", {s: "Although Owen clumsily hunted the deer must have not been cautious for him."}],
    // [["must.fc.comma",7], "DashedSentence", {s: "Although I don't know whether Owen hunts, the deer must be languid for him."},
    //                       "Question",       {q: "Is it possible that the deer is languid for Owen?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",7], "DashedSentence", {s: "Although I don't know whether Owen hunts the deer must be languid for him."},
    //                         "Question",       {q: "Do I have any knowledge about whether Owen has hunted the deer?", hasCorrect: "No"}],



    [["must.no.comma",6], "AcceptabilityJudgment", {s: "Although Mark friendly photographed, the astronaut wasn't easygoing for him."}],
    [["must.no.nocomma",6], "AcceptabilityJudgment", {s: "Although Mark friendly photographed the astronaut wasn't easygoing for him."}],
    [["must.sc.comma",6], "AcceptabilityJudgment", {s: "Although Mark friendly photographed, the astronaut must have not been easygoing for him."}],
    [["must.sc.nocomma",6], "AcceptabilityJudgment", {s: "Although Mark friendly photographed the astronaut must have not been easygoing for him."}],
    // [["must.fc.comma",8], "DashedSentence", {s: "Although I don't know whether Floyd and Clyde meet, the man from Florida must be easygoing for them."},
    //                         "Question",       {q: "Do I have any knowledge about whether Floyd and Clyde have met the man from Florida?", hasCorrect: "No"}],
    //
    // [["must.fc.nocomma",8], "DashedSentence", {s: "Although I don't know whether Floyd and Clyde meet the man from Florida must be easygoing for them."},
    //                         "Question",       {q: "Is it possible that the man from Florida is easygoing for Floyd and Clyde?", hasCorrect: "Yes"}],


    [["must.no.comma",7], "AcceptabilityJudgment", {s: "Although the professor enthusiastically lectured, these students weren't hardworking to her."}],
    [["must.no.nocomma",7], "AcceptabilityJudgment", {s: "Although the professor enthusiastically lectured these students weren't hardworking to her."}],
    [["must.sc.comma",7], "AcceptabilityJudgment", {s: "Although the professor enthusiastically lectured, these students must have not been hardworking to her."}],
    [["must.sc.nocomma",7], "AcceptabilityJudgment", {s: "Although the professor enthusiastically lectured these students must have not been hardworking to her."}],

    // [["must.fc.comma",9], "DashedSentence", {s: "Although I don't know whether the professor teaches, these students must be hardworking to her."},
    //                         "Question",       {q: "Do I have any knowledge about whether the professor has taught these students?", hasCorrect: "No"}],
    //
    // [["must.fc.nocomma",9], "DashedSentence", {s: "Although I don't know whether the professor teaches these students must be hardworking to her."},
    //                         "Question",       {q: "Is it possible that these students are hardworking to the professor?", hasCorrect: "Yes"}],
    //


    [["must.no.comma",8], "AcceptabilityJudgment", {s: "Although Jared repeatedly called, his girlfriend wasn't obedient to him."}],
    [["must.no.nocomma",8], "AcceptabilityJudgment", {s: "Although Jared repeatedly called his girlfriend wasn't obedient to him."}],
    [["must.sc.comma",8], "AcceptabilityJudgment", {s: "Although Jared repeatedly called, his girlfriend must have not been obedient to him."}],
    [["must.sc.nocomma",8], "AcceptabilityJudgment", {s: "Although Jared repeatedly called his girlfriend must have not been obedient to him."}],
    // [["must.fc.comma",10], "DashedSentence", {s: "Although I don't know whether Jared calls, his girlfriend must be obedient to him."},
    //                         "Question",       {q: "Is it possible that Jared's girlfriend is obedient to Jared?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",10], "DashedSentence", {s: "Although I don't know whether Jared calls his girlfriend must be obedient to him."},
    //                         "Question",       {q: "Do I have any knowledge about whether Jared has called his girlfriend?", hasCorrect: "No"}],



    [["must.no.comma",9], "AcceptabilityJudgment", {s: "Although the police carefully investigated, the shooter wasn't detectable for them."}],
    [["must.no.nocomma",9], "AcceptabilityJudgment", {s: "Although the police carefully investigated the shooter wasn't detectable for them."}],
    [["must.sc.comma",9], "AcceptabilityJudgment", {s: "Although the police carefully investigated, the shooter must have not been detectable for them."}],
    [["must.sc.nocomma",9], "AcceptabilityJudgment", {s: "Although the police carefully investigated the shooter must have not been detectable for them."}],
    // [["must.fc.comma",11], "DashedSentence", {s: "Although I don't know whether the police stop, the killer must be detectable for them."},
    //                          "Question",       {q: "Is it possible that the killer is detectable for the police?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",11], "DashedSentence", {s: "Although I don't know whether the police stop the killer must be detectable for them."},
    //                          "Question",       {q: "Do I have any knowledge about whether the police have stopped the killer?", hasCorrect: "No"}],



    [["must.no.comma",10], "AcceptabilityJudgment", {s: "Although Luigi meticulously studied, this psychology paper wasn't interesting to him."}],
    [["must.no.nocomma",10], "AcceptabilityJudgment", {s: "Although Luigi meticulously studied this psychology paper wasn't interesting to him."}],
    [["must.sc.comma",10], "AcceptabilityJudgment", {s: "Although Luigi meticulously studied, this psychology paper must have not been interesting to him."}],
    [["must.sc.nocomma",10], "AcceptabilityJudgment", {s: "Although Luigi meticulously studied this psychology paper must have not been interesting to him."}],

    // [["must.fc.comma",12], "DashedSentence", {s: "Although I don't know whether Luigi reads, this psychology paper must be interesting to him."},
    //                       "Question",       {q: "Is it possible that the psychology paper is interesting to Luigi?", hasCorrect: "Yes"}],
    //
    // [["must.fc.nocomma",12], "DashedSentence", {s: "Although I don't know whether Luigi reads this psychology paper must be interesting to him."},
    //                         "Question",       {q: "Do I have any knowledge about whether Luigi has read the psychology paper?", hasCorrect: "No"}],
    //
    //                         "Question",       {q: "Do I have any knowledge about whether the police have stopped the killer?", hasCorrect: "No"}],
    //


   [["must.no.comma",11], "AcceptabilityJudgment", {s: "Although Jane laboriously entertained, the guests weren't manageable for her."}],
   [["must.no.nocomma",11], "AcceptabilityJudgment", {s: "Although Jane laboriously entertained the guests weren't manageable for her."}],
   [["must.sc.comma",11], "AcceptabilityJudgment", {s: "Although Jane laboriously entertained, the guests must have not been manageable for her."}],
   [["must.sc.nocomma",11], "AcceptabilityJudgment", {s: "Although Jane laboriously entertained the guests must have not been manageable for her."}],
   // [["must.fc.comma",13], "DashedSentence", {s: "Although I don't know whether Jane entertains, the guests must be manageable for her."},
   //                       "Question",       {q: "Is it possible that the guests are manageable for Jane?", hasCorrect: "Yes"}],
   //
   // [["must.fc.nocomma",13], "DashedSentence", {s: "Although I don't know whether Jane entertains the guests must be manageable for her."},
   //                         "Question",       {q: "Do I have any knowledge about whether Jane has entertained the guests?", hasCorrect: "No"}],




  [["must.no.comma",12], "AcceptabilityJudgment", {s: "Although Bruce often smoked, those cigarettes weren't enticing to him."}],
  [["must.no.nocomma",12], "AcceptabilityJudgment", {s: "Although Bruce often smoked those cigarettes weren't enticing to him."}],
  [["must.sc.comma",12], "AcceptabilityJudgment", {s: "Although Bruce often smoked, those cigarettes must have not been enticing to him."}],
  [["must.sc.nocomma",12], "AcceptabilityJudgment", {s: "Although Bruce often smoked those cigarettes must have not been enticing to him."}],
  // [["must.fc.comma",14], "DashedSentence", {s: "Although I don't know whether Bruce smokes, those cigarettes must be enticing to him."},
  //                       "Question",       {q: "Is it possible that those cigarettes are enticing to Bruce?", hasCorrect: "Yes"}],
  //
  // [["must.fc.nocomma",14], "DashedSentence", {s: "Although I don't know whether Bruce smokes those cigarettes must be enticing to him."},
  //                         "Question",       {q: "Do I have any knowledge about whether Bruce has smoked those cigarettes?", hasCorrect: "No"}],
  //



  [["must.no.comma",13], "AcceptabilityJudgment", {s: "Although Evelyn repetitively cleaned, the kitchen wasn't livable to her."}],
  [["must.no.nocomma",13], "AcceptabilityJudgment", {s: "Although Evelyn repetitively cleaned the kitchen wasn't livable to her."}],
  [["must.sc.comma",13], "AcceptabilityJudgment", {s: "Although Evelyn repetitively cleaned, the kitchen must have not been livable to her."}],
  [["must.sc.nocomma",13], "AcceptabilityJudgment", {s: "Although Evelyn repetitively cleaned the kitchen must have not been livable to her."}],
  // [["must.fc.comma",15], "DashedSentence", {s: "Although I don't know whether Evelyn cleans, the kitchen must be livable to her."},
  //                       "Question",       {q: "Is it possible that the kitchen is livable to Evelyn?", hasCorrect: "Yes"}],
  //
  // [["must.fc.nocomma",15], "DashedSentence", {s: "Although I don't know whether Evelyn cleans the kitchen must be livable to her."},
  //                         "Question",       {q: "Do I have any knowledge about whether Evelyn has cleaned the kitchen?", hasCorrect: "No"}],



  [["must.no.comma",14], "AcceptabilityJudgment", {s: "Although Albert continuously practiced, the tuba wasn't straightforward to him."}],
  [["must.no.nocomma",14], "AcceptabilityJudgment", {s: "Although Albert continuously practiced the tuba wasn't straightforward to him."}],
  [["must.sc.comma",14], "AcceptabilityJudgment", {s: "Although Albert continuously practiced, the tuba must have not been straightforward to him."}],
  [["must.sc.nocomma",14], "AcceptabilityJudgment", {s: "Although Albert continuously practiced the tuba must have not been straightforward to him."}],

  // [["must.fc.comma",16], "DashedSentence", {s: "Although I don't know whether Albert practices, the tuba must be straightforward to him."},
  //                       "Question",       {q: "Is it possible that the the tuba is straightforward to Albert?", hasCorrect: "Yes"}],
  //
  // [["must.fc.nocomma",16], "DashedSentence", {s: "Although I don't know whether Albert practices the tuba must be straightforward to him."},
  //                         "Question",       {q: "Do I have any knowledge about whether Albert has practiced the tuba?", hasCorrect: "No"}],




  [["must.no.comma",15], "AcceptabilityJudgment", {s: "Although Suzy engagingly wrote, the lyrics wasn't beautiful to her"}],
  [["must.no.nocomma",15], "AcceptabilityJudgment", {s: "Although Suzy engagingly wrote the lyrics wasn't beautiful to her"}],
  [["must.sc.comma",15], "AcceptabilityJudgment", {s: "Although Suzy engagingly wrote, the lyrics must have not been beautiful to her."}],
  [["must.sc.nocomma",15], "AcceptabilityJudgment", {s: "Although Suzy engagingly wrote the lyrics must have not been beautiful to her."}],
  // [["must.fc.comma",17], "DashedSentence", {s: "Although I don't know whether Suzy writes, the lyrics must be beautiful to her."},
  //                      "Question",       {q: "Is it possible that the lyrics is beautiful to Suzy?", hasCorrect: "Yes"}],
  //
  // [["must.fc.nocomma",17], "DashedSentence", {s: "Although I don't know whether Suzy writes the lyrics must be beautiful to her."},
  //                        "Question",       {q: "Do I have any knowledge about whether Suzy has written the lyrics?", hasCorrect: "No"}],




  [["must.no.comma",16], "AcceptabilityJudgment", {s: "Although Franklin confidently answered, the question wasn't obvious to him."}],
  [["must.no.nocomma",16], "AcceptabilityJudgment", {s: "Although Franklin confidently answered the question wasn't obvious to him."}],
  [["must.sc.comma",16], "AcceptabilityJudgment", {s: "Although Franklin confidently answered, the question must have not been obvious to him."}],
  [["must.sc.nocomma",16], "AcceptabilityJudgment", {s: "Although Franklin confidently answered the question must have not been obvious to him."}],

  // [["must.fc.comma",18], "DashedSentence", {s: "Although I don't know whether Franklin answers, the question must be obvious to him."},
  //                     "Question",       {q: "Is it possible that the question is obvious to Franklin?", hasCorrect: "Yes"}],
  //
  // [["must.fc.nocomma",18], "DashedSentence", {s: "Although I don't know whether Franklin answers the question must be obvious to him."},
  //                       "Question",       {q: "Do I have any knowledge about whether Franklin has answered the question?", hasCorrect: "No"}],
  //

    //// Fillers below here. Naming convention changed slightly from Excel spreadsheet ('F-' added to begining)

    ["F-1F.01", "AcceptabilityJudgment", {s: "My friend Thomas, who was stocky but not fat, liked to read history books."}],
    ["F-1F.02", "AcceptabilityJudgment", {s: "The mechanic acquired all the tools her needed."}],
    ["F-2F.01", "AcceptabilityJudgment", {s: "While Matilda wanted a new bike, she was given a camera for her birthday."}],
    ["F-2F.02", "AcceptabilityJudgment", {s: "Val had seeing Susan lose her temper only once."}],
    ["F-3F.01", "AcceptabilityJudgment", {s: "The group of tourists hiked up the scenic trail themselves, without any guidance."}],
    ["F-3F.02", "AcceptabilityJudgment", {s: "Gloria never enjoyed fixed a flat tire in the rain."}],
    ["F-4F.01", "AcceptabilityJudgment", {s: "Paula sent Wyatt a kind message, but Wyatt didn't get it."}],
    ["F-4F.02", "AcceptabilityJudgment", {s: "He quit smoking when his cloud asked him to."}],
    ["F-5F.01", "AcceptabilityJudgment", {s: "Feeling so confused and lost, Pasquale wondered what the correct time was."}],
    ["F-5F.02", "AcceptabilityJudgment", {s: "Clyde astonished another book while he was on vacation."}],
    ["F-6F.01", "AcceptabilityJudgment", {s: "Salvatore threw another log onto the fire because it was freezing outside."}],
    ["F-6F.02", "AcceptabilityJudgment", {s: "Shannon and her friend cooked the sky for dinner."}],
    ["F-7F.01", "AcceptabilityJudgment", {s: "She wondered if that was really the golden age of television."}],
    ["F-7F.02", "AcceptabilityJudgment", {s: "What Jim expected was for the dog to philosophize the cat."}],
    ["F-8F.01", "AcceptabilityJudgment", {s: "The mountain path was too steep to hike, although they were reluctant to give up."}],
    ["F-8F.02", "AcceptabilityJudgment", {s: "The actor said she heard French when the wall spoke Greek."}],
    ["F-9F.01", "AcceptabilityJudgment", {s: "For at least a month Jenkins stayed at the oldest hotel in town, and she enjoyed it a lot."}],
    ["F-9F.02", "AcceptabilityJudgment", {s: "Brad spent twenty crocodiles each day."}],
    ["F-10F.01", "AcceptabilityJudgment", {s: "Although the doctor sent Jimmy a reminder of his appointment, he forgot to show up."}],
    ["F-10F.02", "AcceptabilityJudgment", {s: "The serious woman laughed when she killed the large rock."}],
    ["F-11F.01", "AcceptabilityJudgment", {s: "It is important to recycle paper."}],
    ["F-11F.02", "AcceptabilityJudgment", {s: "The roof gazed at Wayne for hours."}],
    ["F-12F.01", "AcceptabilityJudgment", {s: "They say that travel broadens the mind, despite the fact that it can be expensive."}],
    ["F-12F.02", "AcceptabilityJudgment", {s: "Cornelia often swims in the library that's far from her house."}],
    ["F-13F.01", "AcceptabilityJudgment", {s: "While Philip never enjoyed riding the roller coaster, his son liked it."}],
    ["F-13F.02", "AcceptabilityJudgment", {s: "Many students amazed the washing machine in the laundromat."}],
    ["F-14F.01", "AcceptabilityJudgment", {s: "There are many different kinds of cacti here."}],
    ["F-14F.02", "AcceptabilityJudgment", {s: "Wayne was known to panic bacon and eggs."}],
    ["F-15F.01", "AcceptabilityJudgment", {s: "People who like spiders are quite rare."}],
    ["F-15F.02", "AcceptabilityJudgment", {s: "Heather terrified the banana that she bought."}],
    ["F-16F.01", "AcceptabilityJudgment", {s: "Hector arrived at the airport wearing crocodile shoes."}],
    ["F-16F.02", "AcceptabilityJudgment", {s: "The bar customers offended the essay."}],
    ["F-17F.01", "AcceptabilityJudgment", {s: "Borini's expensive hat was stolen last night."}],
    ["F-17F.02", "AcceptabilityJudgment", {s: "Very few doctors comforted the steamed vegetables."}],
    ["F-18F.01", "AcceptabilityJudgment", {s: "The crime drama won an award for its screenplay."}],
    ["F-18F.02", "AcceptabilityJudgment", {s: "Robinson displeased the cactus because he was cold."}],
    ["F-19F.01", "AcceptabilityJudgment", {s: "Lewis could follow a rational argument quite easily."}],
    ["F-19F.02", "AcceptabilityJudgment", {s: "The journalist delighted the very old report."}],
    ["F-20F.01", "AcceptabilityJudgment", {s: "Although professinally trained, Christine's dog had never graduated from obedience school."}],
    ["F-20F.02", "AcceptabilityJudgment", {s: "The data analyst criticized the bar stool for ordering pizza."}],
    ["F-21F.01", "AcceptabilityJudgment", {s: "Auberon's interview technique was simply to smile at all questions."}],
    ["F-21F.02", "AcceptabilityJudgment", {s: "The cyclist known for her sprinting skill dismayed the brakes."}],
    ["F-22F.01", "AcceptabilityJudgment", {s: "Lional was very good at spreading confusion."}],
    ["F-22F.02", "AcceptabilityJudgment", {s: "Josh realized that the wine glass had astounded the physics book."}],
    ["F-23F.01", "AcceptabilityJudgment", {s: "Adele bought a mansion with twenty bedrooms and one bathroom."}],
    ["F-23F.02", "AcceptabilityJudgment", {s: "Isaac swim in the municipal swimming pool every day."}],
    ["F-24F.01", "AcceptabilityJudgment", {s: "The instant baying of hounds could be heard for miles."}],
    ["F-24F.02", "AcceptabilityJudgment", {s: "What the dentist did was pulled my bad tooth."}]
    // ["F-25F.01", "AcceptabilityJudgment", {s: "Violet enjoyed the view from the hilltop."}],
    // ["F-25F.02", "AcceptabilityJudgment", {s: "The money was stole from the bank."}],
    // ["F-26F.01", "AcceptabilityJudgment", {s: "Harry had been reading biographies for many years."}],
    // ["F-26F.02", "AcceptabilityJudgment", {s: "Carla and Veronica likes listening to Mozart."}],
    // ["F-27F.01", "AcceptabilityJudgment", {s: "The clothing store was burned to the ground."}],
    // ["F-27F.02", "AcceptabilityJudgment", {s: "Last year Eric take a trip to Arizona for the sun."}],
    // ["F-28F.01", "AcceptabilityJudgment", {s: "The cheap restaurant was very popular in the town."}],
    // ["F-28F.02", "AcceptabilityJudgment", {s: "Yesterday the chef bought a bottles of fine wine."}],
    // ["F-29F.01", "AcceptabilityJudgment", {s: "The stone wall had been constructed with care."}],
    // ["F-29F.02", "AcceptabilityJudgment", {s: "Fred had been bought a new car."}],
    // ["F-30F.01", "AcceptabilityJudgment", {s: "The aging baritone could still sing beautifully."}],
    // ["F-30F.02", "AcceptabilityJudgment", {s: "It is a fact that Rome did invaded Britannia."}],
    // ["F-31F.01", "AcceptabilityJudgment", {s: "Jenna's gardening skills were obvious to her neighbors."}],
    // ["F-31F.02", "AcceptabilityJudgment", {s: "This shirt was washing by the laundry service."}],
    // ["F-32F.01", "AcceptabilityJudgment", {s: "Without his magic tricks Tommy would have been dull."}],
    // ["F-32F.02", "AcceptabilityJudgment", {s: "The lazy worker should have tries harder."}]
    // // ["F-33F.01", "AcceptabilityJudgment", {s: "The theme song was a major success."}],
    // ["F-33F.02", "AcceptabilityJudgment", {s: "The book about football has boring me beyond tolerance."}],
    // ["F-34F.01", "AcceptabilityJudgment", {s: "Gwen's flu meant she had to stay home."}],
    // ["F-34F.02", "AcceptabilityJudgment", {s: "There is nothing Humphrey enjoy more than vindaloo curry for lunch."}],
    // ["F-35F.01", "AcceptabilityJudgment", {s: "Bill's accountant send him some good news about his finances."}],
    // ["F-35F.02", "AcceptabilityJudgment", {s: "Jasper planned to campaigned for a senate seat."}],
    // ["F-36F.01", "AcceptabilityJudgment", {s: "Leo become famous as a TV news anchor."}],
    // ["F-36F.02", "AcceptabilityJudgment", {s: "Albert was hoping he could driven in a Mercedes."}],
    // ["F-37F.01", "AcceptabilityJudgment", {s: "Lisa’s phone is disconnected last month."}],
    // ["F-37F.02", "AcceptabilityJudgment", {s: "Wendy’s muddy car was washed wearily yesterday afternoon."}],
    // ["F-38F.01", "AcceptabilityJudgment", {s: "The library books had borrowed by the graduate student."}],
    // ["F-38F.02", "AcceptabilityJudgment", {s: "The dark, underwater cave was explored by the divers."}],
    // ["F-39F.01", "AcceptabilityJudgment", {s: "The unpleasant cough syrup was swallowing by the boy unwillingly."}],
    // ["F-39F.02", "AcceptabilityJudgment", {s: "The pizza had been delivered by Antonio himself."}],
    // ["F-40F.01", "AcceptabilityJudgment", {s: "Frank’s loan application are approved immediately when the documents were ready."}],
    // ["F-40F.02", "AcceptabilityJudgment", {s: "The cheap products had been manufactured by a Belgian firm."}],
    // ["F-41F.01", "AcceptabilityJudgment", {s: "Their secret conversation had been overheard by a surprised neighbor."}],
    // ["F-41F.02", "AcceptabilityJudgment", {s: "The rough part of the wood was sanding by the carpenter."}],
    // ["F-42F.01", "AcceptabilityJudgment", {s: "A package had received by the secretary in person."}],
    // ["F-42F.02", "AcceptabilityJudgment", {s: "The club’s rules had been violated only twice."}],
    // ["F-43F.01", "AcceptabilityJudgment", {s: "I didn't expect that a new medication is been prescribed by the physician."}],
    // ["F-43F.02", "AcceptabilityJudgment", {s: "The wheat crops had been harvested after the rain."}],
    // ["F-44F.01", "AcceptabilityJudgment", {s: "I guess the musical piece are composed in a dream."}],
    // ["F-44F.02", "AcceptabilityJudgment", {s: "The old lady’s purse had been snatched with speed."}],
    // ["F-45F.01", "AcceptabilityJudgment", {s: "Olson’s bulging suitcase had been packed for the trip."}],
    // ["F-45F.02", "AcceptabilityJudgment", {s: "Several spelling errors noticed by the careful editor."}],
    // ["F-46F.01", "AcceptabilityJudgment", {s: "An illegal weapon been smuggled only once."}],
    // ["F-46F.02", "AcceptabilityJudgment", {s: "The leftover food was discarded wastefully."}],
    // ["F-47F.01", "AcceptabilityJudgment", {s: "Thirty pounds of potatoes had peeled carefully."}],
    // ["F-47F.02", "AcceptabilityJudgment", {s: "The grimy pots and pans had been scrubbed by the dishwashers."}],
    // ["F-48F.01", "AcceptabilityJudgment", {s: "The roast lamb had been carving by a servant."}],
    // ["F-48F.02", "AcceptabilityJudgment", {s: "Cleopatra’s beauty was admired always."}]

    ];

