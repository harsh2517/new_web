export default function BookingPage() {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f5f5f5"
    }}>
      
      {/* Header Section */}
      <div
        style={{
          background: "#039BE5",
          color: "white",
          padding: "clamp(12px, 3vw, 24px)",
          fontSize: "clamp(18px, 4vw, 28px)",
          fontWeight: "600",
          textAlign: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
      >
        Book an Appointment
      </div>

      {/* Main Content - Centered */}
      <div style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(10px, 2vw, 20px)"
      }}>
        
        {/* Iframe Container */}
        <div style={{
          width: "min(95%, 1200px)",
          height: "min(80vh, 800px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "white"
        }}>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0czVvey0mCJa39b594OhprJIIBTdV2h18U9Q3_xzSugo1qfMzTCrmN3rorBREzUeNYGlxnZ7Gq?gv=true"
            style={{
              width: "100%",
              height: "100%",
              border: "none"
            }}
            title="Appointment Booking Calendar"
            allow="fullscreen"
          />
        </div>
        
      </div>

      {/* Optional Footer */}
      <div style={{
        textAlign: "center",
        padding: "10px",
        fontSize: "14px",
        color: "#666",
        backgroundColor: "#f5f5f5"
      }}>
        <p>Select your preferred date and time for the appointment</p>
      </div>
      
    </div>
  );
}