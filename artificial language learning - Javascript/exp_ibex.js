// authors: Brian Buccola and Yan Cong
//
//Below is the code for the separator
// It has options normalTransfer and errorTransfer instead of transfer.
//

define_ibex_controller({
name: "SeparatorBis",

jqueryWidget: {
    _init: function () {
        this.cssPrefix = this.options._cssPrefix;
        this.utils = this.options._utils;
        this.finishedCallback = this.options._finishedCallback;

        this.ignoreFailure = dget(this.options, "ignoreFailure", false);
        this.style = this.ignoreFailure ? "normal" : (this.utils.getValueFromPreviousElement("failed") ? "error" : "normal");
        var x = this.utils.getValueFromPreviousElement("style");
        if (x) this.style = x;
        assert(this.style == "normal" || this.style == "error", "'style' property of Separator must either be 'normal' or 'error'");

        this.transfer_normal = dget(this.options, "normalTransfer", "keypress");
        assert(this.transfer_normal == "keypress" || typeof(this.transfer_normal) == "number",
               "Value of 'normalTransfer' option of Separator must either be the string 'keypress' or a number");

        this.transfer_error = dget(this.options, "errorTransfer", "keypress");
        assert(this.transfer_error == "keypress" || typeof(this.transfer_error) == "number",
               "Value of 'errorTransfer' option of Separator must either be the string 'keypress' or a number");

        var normal_message = dget(this.options, "normalMessage", "Correct! Please wait for the next one.");
        var x = this.utils.getValueFromPreviousElement("normalMessage");
        if (x) normal_message = x;

        var error_message = dget(this.options, "errorMessage", "INCORRECT! Please wait for the next one.");
        var x = this.utils.getValueFromPreviousElement("errorMessage");
        if (x) error_message = x;

        var p = $(document.createElement("p"));
        this.element.append(p);
        if     (this.style == "error") {
                this.element.addClass(this.cssPrefix + "next-item-failure-message");
                p.html(error_message);

        if (this.transfer_error == "keypress") {
            var t = this;
            this.safeBind($(document), 'keydown', function () {
            t.finishedCallback(null);
            return false;
            });
               }
            else {
                var t = this;
                    this.utils.setTimeout(function () {
                    t.finishedCallback(null);
                    }, this.transfer_error);
            }        
    }

        else {
            this.element.addClass(this.cssPrefix + "next-item-message");
            p.html(normal_message);

            if (this.transfer_normal == "keypress") {
            var t = this;
            this.safeBind($(document), 'keydown', function () {
            t.finishedCallback(null);
            return false;
            });
            }
            else {
                var t = this;
                this.utils.setTimeout(function () {
                    t.finishedCallback(null);
                }, this.transfer_normal);
            }
        }

    }
},

properties: {
    countsForProgressBar: false,
    htmlDescription: function (opts) {
        return $(document.createElement("div")).text(opts.normalMessage)[0];
    }
}
});

//
// Define a new "Boxes" controller, which is a combination of a "Message" (the
// boxes) and a "Question" (whether the target box follows the rule).
//
define_ibex_controller({
    name: "Boxes",
    jqueryWidget: {
        _init: function () {
            this.options.transfer = null; // Remove "Click here to continue" message. need to specify numbers
            this.element.VBox({
                options: this.options,
                triggers: [1], //In order to determine when a VBox element is complete,
                               // you must give an array of the indices of those of its children which are "triggers" (indices start from 0).
                               // When each of the trigger elements is complete, the VBox is complete.
                children: [                  
                    "Message", this.options,
                    "Question", this.options,
                    //"Separator", this.options,
                    //"SeparatorBis", this.options  
                ]
            });
        }
    },
    properties: { }
});


var shuffleSequence = seq("consent", "instructions", "transition0", "practice", "transition1",
                         randomize("real-l-shape"), randomize("real-l-shape"),
                         randomize("real-l-simple"), randomize("real-l-simple"),
                         randomize("real-l-complex"), randomize("real-l-complex"),
                         randomize("real-l-simple-s"), randomize("real-l-simple-s"),
                         randomize("real-l-complex-s"), randomize("real-l-complex-s"),
                         "transition2", randomize("real-t"), randomize("real-tc"),
                    "questionnaire"); //make sure to update here!!
var showProgressBar = true;
var completionMessage = "The results were successfully sent to the server. Thanks! Now you need to go back to Prolific and enter the code 1DF16131 to validate your participation and obtain your payment."
// var centerItems = false;


    
    
var defaults = [
    
    "Form", {
        continueOnReturn: true,
        saveReactionTime: true
    },
    
    "Boxes", {
        as: ["A", "B", "C"],
        //hasCorrect: 2, // the index of the correct answer in the as list (starting from 0)
        instructions: "click boxes to answer",
        presentHorizontally: true,
        randomOrder: false
        // autoFirstChar: true
    }
];

var items = [

    ["sep", "Separator", { }],


    //
    // Introductory materials.
    //
    ["consent", "Form", {html: {include: "consent.html"}}],
    ["instructions", "Form", {html: {include: "instructions.html"}}],
                              
    //
    // transition to practice
    //
    
    ["transition0", "Form", {html: {include: "transition0.html"}}],

    //
    // Four practice trials.
    //


    ["practice", "Boxes", {html: {include: "practice1.html"},
                          hasCorrect: "C"},
    "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["practice", "Boxes", {html: {include: "practice4.html"},
                          hasCorrect: "A"},
    "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],                              
    
    ["practice", "Boxes", {html: {include: "practice2.html"},
                          hasCorrect: "B"},
    "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["practice", "Boxes", {html: {include: "practice4.html"},
                          hasCorrect: "A"},
    "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
    
    ["practice", "Boxes", {html: {include: "practice3.html"},
                          hasCorrect: "A"},
     "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    
  
    //
    // transition to learning
    //
    
    ["transition1", "Form", {html: {include: "transition1.html"}}],

    //
    // The real trials. learning
    //
    //["real-l-simple", "Boxes", {html: {include: "item1.html"},
    //                      hasCorrect: "A"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],

    ["real-l-simple", "Boxes", {html: {include: "item2.html"},
                          hasCorrect: "B"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["real-l-simple", "Boxes", {html: {include: "item3.html"},
                          hasCorrect: "C"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
                                                                                         
                              
                             
    //["real-l-shape", "Boxes", {html: {include: "item17.html"},
    //                      hasCorrect: "C"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["real-l-shape", "Boxes", {html: {include: "item18.html"},
                          hasCorrect: "A"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["real-l-shape", "Boxes", {html: {include: "item19.html"},
                          hasCorrect: "B"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                    
                              

    //["real-l-complex", "Boxes", {html: {include: "item9.html"},
    //                      hasCorrect: "B"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["real-l-complex", "Boxes", {html: {include: "item10.html"},
                          hasCorrect: "C"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["real-l-complex", "Boxes", {html: {include: "item11.html"},
                          hasCorrect: "A"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
                              

    //["real-l-simple-s", "Boxes", {html: {include: "item12.html"},
    //                      hasCorrect: "A"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],

    ["real-l-simple-s", "Boxes", {html: {include: "item13.html"},
                          hasCorrect: "B"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["real-l-simple-s", "Boxes", {html: {include: "item14.html"},
                          hasCorrect: "C"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
 
                              
    //["real-l-complex-s", "Boxes", {html: {include: "item21.html"},
    //                      hasCorrect: "C"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["real-l-complex-s", "Boxes", {html: {include: "item22.html"},
                          hasCorrect: "B"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                              
    ["real-l-complex-s", "Boxes", {html: {include: "item23.html"},
                          hasCorrect: "A"}, "SeparatorBis", {normalTransfer: 2000, errorTransfer: 4000}],
                             
    
    //
    // transition to testing
    //
    
    ["transition2", "Form", {html: {include: "transition2.html"}}],

                             
    //
    // The real trials. non-critical testing
    //                              
    
    ["real-t", "Boxes", {html: {include: "item1.html"},
                          hasCorrect: "A", ignoreFailure: false}],

    
    ["real-t", "Boxes", {html: {include: "item2.html"},
                          hasCorrect: "B", ignoreFailure: true}],
          
    
    //["real-t", "Boxes", {html: {include: "item3.html"},
    //                      hasCorrect: "C", ignoreFailure: true}],
    

    ["real-t", "Boxes", {html: {include: "item17.html"},
                          hasCorrect: "C", ignoreFailure: true}],
   
    
    ["real-t", "Boxes", {html: {include: "item18.html"},
                          hasCorrect: "A", ignoreFailure: true}],
    

    //["real-t", "Boxes", {html: {include: "item19.html"},
    //                      hasCorrect: "B", ignoreFailure: true}],    
                        
                         
    ["real-t", "Boxes", {html: {include: "item9.html"},
                          hasCorrect: "B", ignoreFailure: true}],
   
    
    ["real-t", "Boxes", {html: {include: "item10.html"},
                          hasCorrect: "C", ignoreFailure: true}],
    

    //["real-t", "Boxes", {html: {include: "item11.html"},
    //                      hasCorrect: "A", ignoreFailure: true}],  
                              

    ["real-t", "Boxes", {html: {include: "item12.html"},
                          hasCorrect: "A", ignoreFailure: true}],
   
    
    ["real-t", "Boxes", {html: {include: "item13.html"},
                          hasCorrect: "B", ignoreFailure: true}],
    

    //["real-t", "Boxes", {html: {include: "item14.html"},
    //                      hasCorrect: "C", ignoreFailure: true}],    
   
   
    ["real-t", "Boxes", {html: {include: "item21.html"},
                          hasCorrect: "C", ignoreFailure: true}],
   
    
    ["real-t", "Boxes", {html: {include: "item22.html"},
                          hasCorrect: "B", ignoreFailure: true}],                         
    
    //
    // The real trials. critical testing
    //
    ["real-tc", "Boxes", {html: {include: "item25.html"},
                          hasCorrect: "B", ignoreFailure: false}],

    ["real-tc", "Boxes", {html: {include: "item26.html"},
                          hasCorrect: "C", ignoreFailure: false}],
                              
    ["real-tc", "Boxes", {html: {include: "item27.html"},
                          hasCorrect: "A", ignoreFailure: false}],
                              
    ["real-tc", "Boxes", {html: {include: "item28.html"},
                          hasCorrect: "A", ignoreFailure: false}],

    ["real-tc", "Boxes", {html: {include: "item29.html"},
                          hasCorrect: "C", ignoreFailure: false}],
                              
    ["real-tc", "Boxes", {html: {include: "item30.html"},
                          hasCorrect: "B", ignoreFailure: false}],                              

    

    ["questionnaire", "Form", {
        html: {include: "questionnaire.html"},
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    }],
];
