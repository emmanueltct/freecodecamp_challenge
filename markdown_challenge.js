// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import * as marked from "https://esm.sh/marked";


const { useState } = React;
marked.setOptions({
  breaks:true,
})
 const renderer=new marked.Renderer();

const defaultMark=`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
                     `;


function App(){
  const [markdownText,setMarkdownText]=useState(defaultMark);
  
  return(
  <>
      <div>
        <h1>Markdown Previewer</h1>
        <div className="boxes-container">
          
          <textarea 
            name="editor"
            id="editor"
            rows="10"
            value={markdownText}
            onChange={(e)=>setMarkdownText(e.target.value)}
            className="textarea"
            />
          <div id="show">
            <h1 className="heading">#Preview</h1>
            <Preview markdown={markdownText}/></div>
          
        </div>
      </div>
  </>
    );
}

function Preview({markdown}){
  return(
    <div dangerouslySetInnerHTML={{
      __html:marked.parse(markdown,{renderer:renderer}),
    }}
   id="preview"></div>
    );
}
ReactDOM.render(<App/>,document.getElementById("marks"));
