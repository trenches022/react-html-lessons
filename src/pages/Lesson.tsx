import { useParams, useNavigate } from "react-router-dom";
import { lessons } from "../data/lessons";
import { CodeEditor } from "../components/CodeEditor";
import { Row, Col, Button, message } from "antd";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { useLessonStore } from "../store/useLessonStore";

const Lesson = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); 
  const lesson = lessons.find((l) => l.id === Number(id));
  const { completeLesson, isLessonCompleted } = useLessonStore();
  const [userCode, setUserCode] = useState("");

  if (!lesson) {
    return <div style={{ padding: "20px" }}>Lesson not found</div>;
  }

  const handleCheck = () => {
    const normalizedUserCode = userCode.trim().replace(/\s+/g, " ");
    const normalizedSolution = lesson.solution.trim().replace(/\s+/g, " ");
    if (normalizedUserCode === normalizedSolution) {
      completeLesson(lesson.id);
      message.success("Correct! Moving to the next lesson...");

      const nextLessonId = lesson.id + 1;
      const nextLesson = lessons.find((l) => l.id === nextLessonId);
      if (nextLesson) {
        setTimeout(() => {
          navigate(`/lesson/${nextLessonId}`); 
        }, 1000); 
      } else {
        setTimeout(() => {
          navigate("/");
          message.info("Congratulations! You've completed all lessons!");
        }, 1000);
      }
    } else {
      message.error("Incorrect solution. Try again!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{lesson.title}</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <div style={{ backgroundColor: "#2a1b3d", padding: "20px", borderRadius: "4px" }}>
            <h2 style={{ fontWeight: 350 }}>{lesson.content}</h2>
            <h3>Task:</h3>
            <p>{lesson.task}</p>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <CodeEditor initialCode={lesson.initialCode} />
          <h3>Your Solution:</h3>
          <CodeMirror
            value={userCode}
            height="150px"
            theme="dark"
            extensions={[html()]}
            onChange={(value) => setUserCode(value)}
            style={{ backgroundColor: "#2a1b3d", color: "#f5f1e9", marginBottom: "10px" }}
          />
          <Button
            type="primary"
            onClick={handleCheck}
            style={{ backgroundColor: "#5e4b9e", borderColor: "#5e4b9e" }}
            disabled={isLessonCompleted(lesson.id)}
          >
            Check
          </Button>
          {isLessonCompleted(lesson.id) && <p style={{ color: "#f5f1e9" }}>Lesson completed!</p>}
        </Col>
      </Row>
    </div>
  );
}; 

export default Lesson