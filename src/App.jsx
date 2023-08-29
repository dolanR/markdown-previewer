import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

marked.use({
  breaks: true, 
  gfm: true,
})
function App() {
  const [editText, setEditText] = useState('');
  const parsedText = marked.parse(editText);
  return (
    <div className="App flex">
      <div className="flex" id="editorContainer">
        <p class="toolbar">Editor</p>
        <textarea id="editor" value={editText} onChange={(e) => setEditText(e.target.value)}></textarea>
      </div>
      <div className="flex" id="previewContainer">
        <p class="toolbar">Preview</p>
        <div id="preview" dangerouslySetInnerHTML={{__html: parsedText}}></div>
      </div>
    </div>
  );
}

export default App;
