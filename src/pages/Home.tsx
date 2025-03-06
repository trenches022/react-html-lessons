import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import { lessons } from "../data/lessons";
import { useLessonStore } from "../store/useLessonStore";
import "./Home.css";

const Home = () => {
  const { isLessonCompleted } = useLessonStore();

  const isLessonAccessible = (id: number) => {
    if (id === 1) return true; 
    return isLessonCompleted(id - 1); 
  };

  return (
    <div className="home">
      <h1>HTML Roadmap</h1>
      <h2>You will learn:</h2>
      <VerticalTimeline lineColor="#44318d">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#44318d", color: "#f5f1e9", borderRadius: "25px" }}
          contentArrowStyle={{ borderRight: "7px solid #44318d" }}
          iconStyle={{ background: "#5e4b9e", color: "#f5f1e9" }}
        >
          <h3>Getting Started with HTML</h3>
          <p>Master the basics: structure, tags, and attributes.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#44318d", color: "#f5f1e9", borderRadius: "25px" }}
          contentArrowStyle={{ borderRight: "7px solid #44318d" }}
          iconStyle={{ background: "#5e4b9e", color: "#f5f1e9" }}
        >
          <h3>Organizing Content</h3>
          <p>Learn to use semantic tags, lists, and tables.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#44318d", color: "#f5f1e9", borderRadius: "25px" }}
          contentArrowStyle={{ borderRight: "7px solid #44318d" }}
          iconStyle={{ background: "#5e4b9e", color: "#f5f1e9" }}
        >
          <h3>Adding Media and Links</h3>
          <p>Embed images, audio, video, and create navigation.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#44318d", color: "#f5f1e9", borderRadius: "25px" }}
          contentArrowStyle={{ borderRight: "7px solid #44318d" }}
          iconStyle={{ background: "#5e4b9e", color: "#f5f1e9" }}
        >
          <h3>Interactivity and Forms</h3>
          <p>Build forms, iframes, and use data attributes.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#44318d", color: "#f5f1e9", borderRadius: "25px" }}
          contentArrowStyle={{ borderRight: "7px solid #44318d" }}
          iconStyle={{ background: "#5e4b9e", color: "#f5f1e9" }}
        >
          <h3>Advanced HTML</h3>
          <p>Enhance accessibility and build a complete project.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h2>Lessons</h2>
      <Row gutter={[16, 16]}>
        {lessons.map((lesson) => {
          const accessible = isLessonAccessible(lesson.id);
          return (
            <Col xs={24} sm={12} md={8} key={lesson.id}>
              {accessible ? (
                <Link to={`/lesson/${lesson.id}`}>
                  <Card hoverable title={lesson.title} style={{ height: "100%" }}>
                    <p>{lesson.description}</p>
                    {isLessonCompleted(lesson.id) && <p style={{ color: "#f5f1e9" }}>Completed</p>}
                  </Card>
                </Link>
              ) : (
                <Card title={lesson.title} style={{ height: "100%", opacity: 0.5 }} hoverable={false}>
                  <p>{lesson.description}</p>
                  <p style={{ color: "#f5f1e9" }}>Locked (complete previous lesson)</p>
                </Card>
              )}
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;