export default function BookingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5"
      }}
    >
      
      {/* Header */}
      <div
        style={{
          background: "#FF6600",
          color: "white",
          padding: "16px 5%",
          fontSize: "clamp(18px, 2vw, 24px)",
          fontWeight: "600",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
      >
        BOOK INTRO MEETING
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          width: "100%",
          padding: "30px 5%",
          boxSizing: "border-box"
        }}
      >
        
        {/* Responsive Calendar Container */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            height: "75vh",
            minHeight: "500px",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
            style={{
              width: "100%",
              height: "100%",
              border: "none"
            }}
            title="Book an Intro Meeting"
            allow="fullscreen"
          />
        </div>

      </div>
    </div>
  );
}