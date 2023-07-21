const core = require("@actions/core");
const github = require("@actions/github");

let http = require('http');
let url = require('url');
let fs = require('fs');


(
    async () => {
        try {
            core.notice("Calling my custom Action")

            core.notice("input variable")
   
            // let baseUrl = "https://github.com/iotaledger/if-comms/issues/"
            // let title = "🐥+Test+Title"
            // let project = "iotaledger/46"
            // let social = "social-task.md"
            // let labels = "Social"
            // let assignee = "thabatadias"
            // let combined = `${baseUrl}new?title=${title}&labels=${labels}&assignees=${assignee}&projects=${project}&template=${social}`

            // https://github.com/iotaledger/if-comms/issues/new?title=🐥+Test+tilte&labels=Social&assignees=thabatadias&projects=iotaledger/46&template=social-task.md


            // var xmlhttp = new XMLHttpRequest(); 
            // xmlhttp.onreadystatechange = function() {   
            //     if (xmlhttp.readyState === 4) {    
            //             //Successful request   
            //     } 
            // };  
            // xmlhttp.open('GET', combined, true); 
            // xmlhttp.send();

            const nameToGreet = core.getInput('my-color');
            console.log(`Hello ${nameToGreet}!`);



            const payload = JSON.stringify(github.context.payload, undefined, 2)
            console.log(`The event payload: ${payload}`);


        } catch (error ) {
            core.notice(error.message)
        }

    }
)();


