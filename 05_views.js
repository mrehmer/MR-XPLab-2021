// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Hello and welcome to this experiment.
            <br />
            <br />
            Before we get started, I want to thank you for your participation.
            <br />
            <br />
            By clicking on <strong>Next</strong> you will be provided with the instructions.`,
  buttonText: 'Next'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In this experiment you will see images of 3D objects.
            <br />
            <br />
            In each trial there will be two such 3D objects and you have to choose whether they are the <strong>same</strong> or a <strong>different</strong> object.
            If you think it is the same object in both pictures you press <strong>f</strong> on your keyboard, if you think it is a different object you press <strong>j</strong>.
            <br />
            Before the actual experiment begins, you will have a couple of <strong>practice trials</strong> where you can get familiar with the task.
            <br />
            It is important that you try to answer as quick as possible but still try to answer correctly.
            So please make sure that you are not disturbed while doing the experiment.
            <br />
            <br />
            Your participation is voluntary and all of your data is anonymized.
            <br />
            <br />
            By clicking on the button below, you will start your practice trials.`,
  buttonText: 'start practice trials'
});


const main_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'main_instructions',
  title: 'Main Instructions',
  text: `You have now completed the practice trials.
            <br />
            Now the main trials begin. These work exactly as the practice trials.
            <br />
            <br />
            Again, try to answer quickly and correctly at the same time.`,
  buttonText: 'start main trials'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

const mental_rotation_practice = magpieViews.view_generator("key_press", {
    trials: practice_trials.key_press.length,
    name: 'mental_rotation_practice',
    data: _.shuffle(practice_trials.key_press),
    pause: 250,
});


const mental_rotation_main = magpieViews.view_generator("key_press", {
    trials: main_trials.key_press.length,
    name: 'mental_rotation_main',
    data: _.shuffle(main_trials.key_press),
    pause: 250,
});


// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
