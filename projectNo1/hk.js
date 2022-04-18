const puppeteer=require("puppeteer");
const codeObj=require('./codes');
//link for loggin in hackerrank
const logginLink="https://www.hackerrank.com/auth/login";

const email='xamot46817@stvbz.com';
const passsword='222525';






let browseropenPromise=puppeteer.launch(
    {
        headless:false,
        //to open browser in full width
        args:['--start-maximized'],
        defaultViewport:null
    }
)
let page;
browseropenPromise.then(function(browserObj){
    //to open new tabs
    let newtabs=browserObj.newPage();
    return newtabs;
}).then(function(newtabs){
    page=newtabs;
    let hackerrankPromise=newtabs.goto(logginLink);
    return hackerrankPromise;
}).then(function(){
    let emailisEntered=page.type("input[id='input-1']",email,{delay:50});
    return emailisEntered;
}).then(function(){
    let passisEntered=page.type("input[id='input-2']",passsword,{delay:50});
    return passisEntered;
}).then(function(){
    
    let logginButtonClicked=page.click('button[data-analytics="LoginPassword"]',{delay:50});
    return logginButtonClicked;
}).then(function(){
    let clickOnAlgoPromise=waitAndClick('.topic-card a[data-attr1="algorithms"]',page)
    return clickOnAlgoPromise
}).then(function(){
    let gettoWarmUp=waitAndClick('input[value="warmup"]',page)
    return gettoWarmUp;
}).then(function(){
    let waitfor5seconds=page.waitFor(5000);
    return waitfor5seconds
}).then(function(){
    //$$->this is the sort form of document.querry.SelectorAll
    let allChalangesPromise =page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50})
    return allChalangesPromise;
}).then(function(questionArr){
    console.log('no of question',questionArr.length)
    
    let questionWillbeSoved=questuionSolver(page,questionArr[0],codeObj.ans[0])
    return questionWillbeSoved;
    
})

 function waitAndClick(selector ,cPage){
     return new Promise(function(resolve , reject){
         let waitForModelPromise=cPage.waitForSelector(selector)  
         waitForModelPromise.then(function(){
             let clickModal=cPage.click(selector)
             return clickModal
         }).then(function(){
             resolve()
         }).catch(function(err){
             reject()
         })
       })
 }
 function questuionSolver( page,question,answer){
     return new Promise(function(resolve,reject){
         let questionWillbeClicked=question.click();
         questionWillbeClicked.then(function(){
             let EditorInfocusPromise=waitAndClick('.monaco-editor.no-user-select .vs',page)
             return EditorInfocusPromise;
         }).then(function(){
             return waitAndClick('.checkbox-input',page)
         }).then(function(){
             return page.waitForSelector('textarea.custominput',page)
         }).then(function(){
             return page.type('textarea.custominput',answer,{delay:10})
         }).then(function(){
             //now i cut the code from custom input and paste it on editor
             //.keyboard.down ->it pressed and hold given key
             let ctrIsPressed=page.keyboard.down('Control');
             return ctrIsPressed;
         }).then(function(){
             //keyboard.press->it press the given key
             let AisPressed=page.keyboard.press('A',{delay:100});
             return AisPressed
         }).then(function(){
             let XisPressed=page.keyboard.press('X',{delay:100});
             return XisPressed
         }).then(function(){
             //now our text is cut so i will free the control which is pressed and hold above 
             let CtrlisUnPressed=page.keyboard.up('Control')
             return CtrlisUnPressed;

         }).then(function(){
             let mainEditorInFocus=waitAndClick('.monaco-editor.no-user-select .vs',page)
             return mainEditorInFocus;
         }).then(function(){
            let ctrIsPressed=page.keyboard.down('Control');
            return ctrIsPressed;
         }).then(function(){
            let AisPressed=page.keyboard.press('A',{delay:100});
            return AisPressed
         }).then(function(){
            let VisPressed=page.keyboard.press('V',{delay:100});
            return VisPressed
         }).then(function(){
            //now our text is cut so i will free the control which is pressed and hold above 
            let CtrlisUnPressed=page.keyboard.up('Control')
            return CtrlisUnPressed;

        }).then(function(){
            return page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled',{delay:100})
        }).then(function(){
            resolve();
        }).then(function(){
            reject();
        })
     })
 }