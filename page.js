"use client";

import "./page.css";

const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const courses = [
  {
    id: 1,
    name: "Java Full-Stack Development",
    session: "Session-1",
    session_1: "Session-2",
    time: getCurrentTime(),
    date: getCurrentDate(),
    status: "Available",
    link: "https://example.com/java",
    link_2: "https://example.com/java-session-2",
  },
  {
    id: 2,
    name: "Artificial Intelligence (AI)",
    session: "Session-1",
    session_1: "Session-2",
    time: getCurrentTime(),
    date: getCurrentDate(),
    status: "Available",
    link: "https://example.com/ai",
    link_2: "https://example.com/ai-session-2",
  },
  {
    id: 3,
    name: "Machine Learning (ML)",
    session: "Session-1",
    session_1: "Session-2",
    time: getCurrentTime(),
    date: getCurrentDate(),
    status: "Available",
    link: "https://example.com/ml",
    link_2: "https://example.com/ml-session-2",
  },
  {
    id: 4,
    name: "Cybersecurity",
    session: "Session-1",
    session_1: "Session-2",
    time: getCurrentTime(),
    date: getCurrentDate(),
    status: "Available",
    link: "https://example.com/cybersecurity",
    link_2: "https://example.com/cybersecurity-session-2",
  },
  {
    id: 5,
    name: "Python Full-Stack Development",
    session: "Session-1",
    session_1: "Session-2",
    time: getCurrentTime(),
    date: getCurrentDate(),
    status: "Available",
    link: "https://example.com/python",
    link_2: "https://example.com/python-session-2",
  },
];

export default function Page() {
  const handleJoinSession = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <div>
            <span className="academy-badge">TECH ACADEMY</span>

            <h1>Demo Session Schedule</h1>

            <p>Available course programs and session details</p>
          </div>
        </header>

        <section className="course-section">
          <div className="section-title">
            <div>
              <h5>Available Programs</h5>
              <p>Course session details</p>
            </div>

            <span className="course-count">{courses.length} Courses</span>
          </div>

          <div className="course-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-card-inner">
                  {/* Course Name */}
                  <h3 className="course-title">{course.name}</h3>

                  <div className="course-subgrid">
                    {/* ================= SESSION 1 ================= */}

                    <div className="session-heading">Demo Session - 1</div>

                    {/* Join Button */}
                    <div className="subgrid-row">
                      <span className="subgrid-label">Session:</span>

                      <span className="subgrid-value">
                        <button
                          type="button"
                          className="session-link-button"
                          onClick={() => handleJoinSession(course.link)}
                        >
                          Join Now
                        </button>
                      </span>
                    </div>

                    {/* Date */}
                    <div className="subgrid-row">
                      <span className="subgrid-label">Date:</span>

                      <span className="subgrid-value">{course.date}</span>
                    </div>

                    {/* Time */}
                    <div className="subgrid-row">
                      <span className="subgrid-label">Time:</span>

                      <span className="subgrid-value">{course.time}</span>
                    </div>

                    {/* Status */}
                    <div className="subgrid-row">
                      <span className="subgrid-label">Status:</span>

                      <span
                        className={`status-badge ${course.status
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <span className="status-dot"></span>
                        {course.status}
                      </span>
                    </div>

                    {/* ================= SESSION 2 ================= */}

                    <div className="session-heading session-two">
                      Demo Session - 2
                    </div>

                    {/* Join Button */}
                    <div className="subgrid-row">
                      <span className="subgrid-label">Session:</span>

                      <span className="subgrid-value">
                        <button
                          type="button"
                          className="session-link-button"
                          onClick={() => handleJoinSession(course.link_2)}
                        >
                          Join Now
                        </button>
                      </span>
                    </div>

                    {/* Date */}
                    <div className="subgrid-row">
                      <span className="subgrid-label">Date:</span>

                      <span className="subgrid-value">{course.date}</span>
                    </div>

                    {/* Time */}
                    <div className="subgrid-row">
                      <span className="subgrid-label">Time:</span>

                      <span className="subgrid-value">{course.time}</span>
                    </div>

                    {/* Status */}
                    <div className="subgrid-row">
                      <span className="subgrid-label">Status:</span>

                      <span
                        className={`status-badge ${course.status
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        <span className="status-dot"></span>
                        {course.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
