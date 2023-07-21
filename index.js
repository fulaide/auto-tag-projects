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

            const getLabel = core.getInput('labeled');
            console.log(`Label is ${getLabel}`);

            if(getLabel === "Parent") {
                console.log(`Ready to go`);
            } else {
                console.log(`Not a parent task`);
            }

            const getProject = core.getInput('project-url');
            console.log(`Project url is ${getProject}`);

            const customMessage = core.getInput('my-color');
            console.log(`Custom Message ${customMessage}`);




            


            const payloadString = JSON.stringify(github.context.payload, undefined, 2)

            const payloadObject = github.context.payload
            
            console.log(`Payload: ${payloadString}`);
            console.log(`Issue: ${payloadObject.issue.number}`);
            

            // console.log(`Issue: ${payload.issue.number }`);
            // console.log(`Body: ${payload.issue.body }`);
            // console.log(`Label: ${payload.issue.labels[0].name }`);
            // console.log(`Mile: ${payload.issue.milestone}`);
            // console.log(`Title: ${payload.issue.title}`);

        } catch (error ) {
            core.notice(error.message)
        }

    }
)();


