import { useState } from "react"
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html"

interface CodeEditorProps {
  initialCode: string,
}

export const CodeEditor = ({ initialCode }: CodeEditorProps) => {
  
  const [code, setCode] = useState(initialCode);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <CodeMirror
        value={code}
        height="200px"
        theme="dark"
        extensions={[html()]} 
        onChange={(value) => setCode(value)}
        style={{ backgroundColor: "#2a1b3d", color: "#f5f1e9" }}
      />
      <div
        style={{
          backgroundColor: "#44318d",
          padding: "10px",
          borderRadius: "4px",
          minHeight: "100px",
          color: "#f5f1e9",
        }}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </div>
  );
}

export default CodeEditor