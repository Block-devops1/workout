import { useState } from "react";

const days = [
  {
    id: "mon",
    label: "MON",
    title: "Push & Core",
    color: "#FF6B35",
    emoji: "💪",
    type: "workout",
    location: "Home / Hostel",
    warmup: "5 mins jumping jacks or arm circles",
    exercises: [
      {
        name: "Tuck Planche Hold",
        sets: 3,
        reps: "Max Time",
        rest: "60s",
        tip: "Lock arms straight, round your back, lean forward",
      },
      {
        name: "Pseudo Planche Push-ups",
        sets: 3,
        reps: "8–10 reps",
        rest: "90s",
        tip: "Lean forward so shoulders pass your hands",
      },
      {
        name: "Pike Push-ups",
        sets: 3,
        reps: "8–10 reps",
        rest: "90s",
        tip: "Form an upside-down V with your body, head toward floor",
      },
      {
        name: "Diamond Push-ups",
        sets: 3,
        reps: "To Failure",
        rest: "90s",
        tip: "Hands form a diamond, slow on the way down (2 seconds)",
      },
      {
        name: "Regular Push-ups",
        sets: 2,
        reps: "15–20 reps",
        rest: "60s",
        tip: "Added for volume — chest to floor each rep",
      },
      {
        name: "Hollow Body Hold",
        sets: 3,
        reps: "45 seconds",
        rest: "60s",
        tip: "Press lower back flat to floor, arms overhead",
      },
    ],
  },
  {
    id: "tue",
    label: "TUE",
    title: "Pull & Core",
    color: "#4ECDC4",
    emoji: "🌳",
    type: "workout",
    location: "Jog to Tree at FUTO field, then home",
    warmup: "Jog to field counts as warmup",
    exercises: [
      {
        name: "Scapular Pull-ups",
        sets: 2,
        reps: "10 reps",
        rest: "60s",
        tip: "Dead hang, squeeze shoulder blades DOWN without bending elbows. Warms up shoulders.",
      },
      {
        name: "Chin-ups",
        sets: 3,
        reps: "Max reps",
        rest: "90s",
        tip: "Palms facing you, shoulder-width. Easier than pull-ups — start here.",
      },
      {
        name: "Wide Grip Pull-ups",
        sets: 3,
        reps: "Max reps",
        rest: "90s",
        tip: "Palms away, hands wider than shoulders. Builds that wide back.",
      },
      {
        name: "Table Rows (at home)",
        sets: 3,
        reps: "12–15 reps",
        rest: "90s",
        tip: "Lie under table, grip edge, pull chest up. More horizontal = harder.",
      },
      {
        name: "Bicycle Crunches (home)",
        sets: 3,
        reps: "20 reps",
        rest: "60s",
        tip: "Slow and controlled — elbow to opposite knee each rep. Don't rush.",
      },
      {
        name: "Lying Leg Raises (home)",
        sets: 3,
        reps: "15 reps",
        rest: "60s",
        tip: "Lie flat, raise straight legs to 90°, lower slowly — heels must not touch the floor.",
      },
    ],
    note: "If you cannot do full pull-ups yet: jump up to bar, then lower yourself slowly over 4–5 seconds. Do this every set.",
  },
  {
    id: "wed",
    label: "WED",
    title: "Leg Day",
    color: "#A855F7",
    emoji: "🦵",
    type: "workout",
    location: "Home / Hostel",
    warmup: "5 mins walking or jogging in place",
    exercises: [
      {
        name: "Bodyweight Squats",
        sets: 3,
        reps: "20 reps",
        rest: "60s",
        tip: "Feet shoulder-width, thighs parallel to floor at bottom",
      },
      {
        name: "Bulgarian Split Squats",
        sets: 3,
        reps: "12 each leg",
        rest: "90s",
        tip: "Back foot on chair, front foot forward. Drop back knee toward floor.",
      },
      {
        name: "Jump Squats",
        sets: 3,
        reps: "15 reps",
        rest: "90s",
        tip: "Squat down, explode up as high as possible, land softly with bent knees",
      },
      {
        name: "Wall Sit",
        sets: 3,
        reps: "Max time",
        rest: "60s",
        tip: "Back flat against wall, thighs parallel to floor — hold until failure",
      },
      {
        name: "Calf Raises",
        sets: 3,
        reps: "25 reps",
        rest: "45s",
        tip: "Stand on edge of a step if available, full range up and down",
      },
    ],
  },
  {
    id: "thu",
    label: "THU",
    title: "Push + Pull",
    color: "#F59E0B",
    emoji: "⚡",
    type: "workout",
    location: "Home then Jog to Tree",
    warmup: "5 mins movement before push, jog counts for pull",
    exercises: [
      {
        name: "Workout A — Push & Core",
        sets: null,
        reps: "Full session",
        rest: "",
        tip: "Do all Monday exercises first at home",
      },
      {
        name: "THEN jog to field",
        sets: null,
        reps: "",
        rest: "",
        tip: "",
        divider: true,
      },
      {
        name: "Chin-ups",
        sets: 3,
        reps: "Max reps",
        rest: "90s",
        tip: "Even if tired from push day — just do what you can",
      },
      {
        name: "Wide Grip Pull-ups",
        sets: 3,
        reps: "Max reps",
        rest: "90s",
        tip: "Quality over quantity. Stop before form breaks.",
      },
      {
        name: "Bicycle Crunches (home)",
        sets: 3,
        reps: "20 reps",
        rest: "60s",
        tip: "Do these at home after — slow and controlled, elbow to opposite knee",
      },
    ],
    note: "Thursday is your hardest day. If too tired, skip the jog and just do pull-ups at home using your table for rows.",
  },
  {
    id: "fri",
    label: "FRI",
    title: "Rest",
    color: "#6B7280",
    emoji: "😴",
    type: "rest",
    content:
      "Full rest day. Your muscles actually GROW on rest days, not workout days. Don't skip this. Light walking is fine.",
  },
  {
    id: "sat",
    label: "SAT",
    title: "Long Run",
    color: "#10B981",
    emoji: "🏃",
    type: "run",
    content: [
      "Run 8.8–11.8km from back gate",
      "Optional: 2–3 sets of chin-ups at tree if on your route",
      "DO NOT jog back — walk or take keke",
      "Drink water before, during and after",
      "Eat a proper meal within 1 hour of finishing",
    ],
  },
  {
    id: "sun",
    label: "SUN",
    title: "Full Rest",
    color: "#6B7280",
    emoji: "🙏",
    type: "rest",
    content:
      "Complete rest. Sleep well. Eat well. Prepare mentally for the week ahead.",
  },
];

const nutrition = [
  {
    title: "Eggs — 2 to 3 daily",
    icon: "🥚",
    color: "#F59E0B",
    details: [
      "Morning: 2 boiled eggs before or after workout",
      "Evening with dinner: 1 egg",
      "Boiling is best — no extra oil cost",
      "Eat the yolk — that is where most nutrients are",
      "On heavy workout days try for 3 if budget allows",
    ],
  },
  {
    title: "Beans — 4 to 5 times weekly",
    icon: "🫘",
    color: "#A855F7",
    details: [
      "Your most important protein source — take it seriously",
      "Black-eyed beans, kidney beans, any type works",
      "Eat with jollof rice for a complete protein and carb meal",
      "Beans plus eggs together on workout days is the ideal combo",
      "Very cheap — no excuse to skip this",
    ],
  },
  {
    title: "Groundnuts — Daily Snack",
    icon: "🥜",
    color: "#FF6B35",
    details: [
      "Very cheap and available everywhere at FUTO",
      "High in protein and healthy fats — great for muscle building",
      "Eat a handful between meals when hungry",
      "Fills the protein gap from fewer eggs",
      "Roasted groundnuts are fine — avoid the sweetened types",
    ],
  },
  {
    title: "Jollof Rice and Vegetables",
    icon: "🍚",
    color: "#4ECDC4",
    details: [
      "Your main energy source — keep eating this",
      "Carrot, green beans, onions — all excellent additions",
      "Crayfish adds protein — keep using it",
      "Eat larger portions on workout days",
      "Smaller portions on rest days",
    ],
  },
  {
    title: "Soup and Swallow",
    icon: "🥣",
    color: "#10B981",
    details: [
      "Good for dinner, especially after runs",
      "Swallow gives slow-releasing energy",
      "Ask for egusi or vegetable soup — more nutrients",
      "Avoid eating this too late at night",
    ],
  },
];

const mealTiming = [
  {
    time: "6:30–7am",
    meal: "Wake up — 2 boiled eggs + water",
    important: true,
  },
  {
    time: "Pre-workout",
    meal: "Handful of groundnuts if training within 30 mins of waking",
    important: false,
  },
  {
    time: "Post-workout",
    meal: "Rice or swallow + beans — most important meal of the day",
    important: true,
  },
  {
    time: "Lunch",
    meal: "Jollof rice + vegetables + beans or 1 egg",
    important: false,
  },
  {
    time: "Snack",
    meal: "Handful of groundnuts between meals",
    important: false,
  },
  { time: "Dinner", meal: "Soup with swallow + 1 egg", important: false },
  {
    time: "AVOID",
    meal: "Heavy meals within 1.5hrs before running or training",
    important: true,
  },
  { time: "AVOID", meal: "Skipping breakfast — ever", important: true },
];

const recovery = [
  {
    icon: "😴",
    title: "Sleep 7.5–9 Hours",
    desc: "This is when your muscles actually grow. No sleep = no gains. Sleep by 10:30–11pm, wake by 6:30–7am. Keep this consistent even on weekends.",
  },
  {
    icon: "💧",
    title: "Drink 2–3 Litres of Water Daily",
    desc: "More on run days. Drink first thing every morning before eating. Dehydration kills performance and recovery.",
  },
  {
    icon: "📈",
    title: "Progressive Overload Weekly",
    desc: "Every week try to add 1–2 reps to each exercise. Write down your numbers. This is how you keep growing.",
  },
  {
    icon: "⏱️",
    title: "Rest Between Sets",
    desc: "Push: 90 seconds. Pull: 90 seconds. Legs: 90–120 seconds. Core: 60 seconds. Don't rush.",
  },
  {
    icon: "🚫",
    title: "Don't Train Injured",
    desc: "Sharp pain or joint pain — stop immediately. Muscle burn is normal. Joint pain is not.",
  },
];

export default function FitnessGuide() {
  const [activeDay, setActiveDay] = useState("mon");
  const [activeTab, setActiveTab] = useState("schedule");
  const currentDay = days.find((d) => d.id === activeDay);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: "#0A0A0F",
        minHeight: "100vh",
        color: "#E8E8F0",
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #FF6B35 0%, #F59E0B 100%)",
          padding: "24px 20px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            width: 120,
            height: 120,
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
          }}
        />
        <p
          style={{
            margin: 0,
            fontSize: 11,
            letterSpacing: 3,
            opacity: 0.9,
            textTransform: "uppercase",
          }}
        >
          FUTO Calisthenics
        </p>
        <h1
          style={{
            margin: "4px 0 0",
            fontSize: 26,
            fontWeight: 800,
            lineHeight: 1.2,
          }}
        >
          Your Complete
          <br />
          Physique Plan
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          background: "#111118",
          borderBottom: "1px solid #1E1E2E",
        }}
      >
        {[
          { id: "schedule", label: "Schedule" },
          { id: "nutrition", label: "Nutrition" },
          { id: "recovery", label: "Recovery" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: "14px 0",
              background: "none",
              border: "none",
              color: activeTab === tab.id ? "#FF6B35" : "#666",
              fontWeight: activeTab === tab.id ? 700 : 400,
              fontSize: 13,
              cursor: "pointer",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #FF6B35"
                  : "2px solid transparent",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "schedule" && (
        <div>
          <div
            style={{
              display: "flex",
              gap: 6,
              padding: "16px 16px 0",
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                style={{
                  minWidth: 52,
                  padding: "10px 0",
                  borderRadius: 12,
                  border: "none",
                  background: activeDay === day.id ? day.color : "#1A1A28",
                  color: activeDay === day.id ? "#fff" : "#888",
                  fontWeight: 700,
                  fontSize: 11,
                  cursor: "pointer",
                  letterSpacing: 0.5,
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 4 }}>{day.emoji}</div>
                {day.label}
              </button>
            ))}
          </div>

          <div style={{ padding: 16 }}>
            <div
              style={{
                background: "#111118",
                borderRadius: 16,
                overflow: "hidden",
                border: `1px solid ${currentDay.color}30`,
              }}
            >
              <div
                style={{
                  background: `${currentDay.color}20`,
                  padding: "16px 20px",
                  borderBottom: `1px solid ${currentDay.color}30`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 28 }}>{currentDay.emoji}</span>
                  <div>
                    <h2
                      style={{
                        margin: 0,
                        fontSize: 20,
                        fontWeight: 800,
                        color: currentDay.color,
                      }}
                    >
                      {currentDay.title}
                    </h2>
                    {currentDay.location && (
                      <p
                        style={{
                          margin: "2px 0 0",
                          fontSize: 12,
                          color: "#888",
                        }}
                      >
                        📍 {currentDay.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {currentDay.type === "rest" && (
                <div style={{ padding: 20 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#B0B0C0",
                    }}
                  >
                    {currentDay.content}
                  </p>
                </div>
              )}

              {currentDay.type === "run" && (
                <div style={{ padding: 20 }}>
                  {currentDay.content.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        marginBottom: 14,
                      }}
                    >
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: currentDay.color,
                          marginTop: 6,
                          flexShrink: 0,
                        }}
                      />
                      <p
                        style={{
                          margin: 0,
                          fontSize: 14,
                          color: "#C0C0D0",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {currentDay.type === "workout" && (
                <div style={{ padding: 16 }}>
                  <div
                    style={{
                      background: "#1A1A28",
                      borderRadius: 10,
                      padding: "10px 14px",
                      marginBottom: 14,
                      borderLeft: `3px solid ${currentDay.color}`,
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: 11,
                        color: "#888",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                    >
                      Warm Up
                    </p>
                    <p
                      style={{
                        margin: "4px 0 0",
                        fontSize: 13,
                        color: "#C0C0D0",
                      }}
                    >
                      {currentDay.warmup}
                    </p>
                  </div>

                  {currentDay.exercises.map((ex, i) =>
                    ex.divider ? (
                      <div
                        key={i}
                        style={{
                          textAlign: "center",
                          margin: "16px 0",
                          color: currentDay.color,
                          fontSize: 13,
                          fontWeight: 700,
                          letterSpacing: 1,
                        }}
                      >
                        — {ex.name} —
                      </div>
                    ) : (
                      <div
                        key={i}
                        style={{
                          background: "#1A1A28",
                          borderRadius: 12,
                          padding: 14,
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: 6,
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              fontSize: 14,
                              fontWeight: 700,
                              color: "#E8E8F0",
                              flex: 1,
                              paddingRight: 8,
                            }}
                          >
                            {ex.name}
                          </p>
                          <div
                            style={{ display: "flex", gap: 5, flexShrink: 0 }}
                          >
                            {ex.sets && (
                              <span
                                style={{
                                  background: `${currentDay.color}25`,
                                  color: currentDay.color,
                                  padding: "3px 7px",
                                  borderRadius: 6,
                                  fontSize: 11,
                                  fontWeight: 700,
                                }}
                              >
                                {ex.sets}×
                              </span>
                            )}
                            {ex.reps && (
                              <span
                                style={{
                                  background: "#252535",
                                  color: "#A0A0B0",
                                  padding: "3px 7px",
                                  borderRadius: 6,
                                  fontSize: 11,
                                }}
                              >
                                {ex.reps}
                              </span>
                            )}
                          </div>
                        </div>
                        {ex.rest && (
                          <p
                            style={{
                              margin: "0 0 6px",
                              fontSize: 11,
                              color: "#555",
                            }}
                          >
                            ⏱ Rest: {ex.rest}
                          </p>
                        )}
                        {ex.tip && (
                          <p
                            style={{
                              margin: 0,
                              fontSize: 12,
                              color: "#888",
                              background: "#0F0F1A",
                              padding: "8px 10px",
                              borderRadius: 8,
                              lineHeight: 1.5,
                            }}
                          >
                            💡 {ex.tip}
                          </p>
                        )}
                      </div>
                    ),
                  )}

                  {currentDay.note && (
                    <div
                      style={{
                        background: `${currentDay.color}15`,
                        border: `1px solid ${currentDay.color}40`,
                        borderRadius: 10,
                        padding: 14,
                        marginTop: 6,
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: 13,
                          color: "#C0C0D0",
                          lineHeight: 1.6,
                        }}
                      >
                        ⚠️ {currentDay.note}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === "nutrition" && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #F59E0B20, #FF6B3520)",
              border: "1px solid #F59E0B40",
              borderRadius: 16,
              padding: 20,
              marginBottom: 16,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>🥚🫘🥜</div>
            <h3
              style={{
                margin: "0 0 6px",
                fontSize: 19,
                fontWeight: 800,
                color: "#F59E0B",
              }}
            >
              2–3 Eggs + Beans + Groundnuts
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "#888",
                lineHeight: 1.6,
              }}
            >
              These three together replace protein from meat or fish. All cheap
              and available at FUTO.
            </p>
          </div>

          {nutrition.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#111118",
                borderRadius: 14,
                overflow: "hidden",
                marginBottom: 12,
                border: `1px solid ${item.color}25`,
              }}
            >
              <div
                style={{
                  background: `${item.color}18`,
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 15,
                    fontWeight: 700,
                    color: item.color,
                  }}
                >
                  {item.title}
                </h3>
              </div>
              <div style={{ padding: "12px 16px" }}>
                {item.details.map((d, j) => (
                  <div
                    key={j}
                    style={{ display: "flex", gap: 10, marginBottom: 8 }}
                  >
                    <span
                      style={{
                        color: item.color,
                        fontSize: 12,
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    >
                      ▸
                    </span>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: "#A0A0B8",
                        lineHeight: 1.5,
                      }}
                    >
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <h3
            style={{
              fontSize: 16,
              fontWeight: 700,
              margin: "20px 0 12px",
              color: "#E8E8F0",
            }}
          >
            When To Eat
          </h3>
          {mealTiming.map((m, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 10,
                padding: "12px 14px",
                background: m.important ? "#1A0F08" : "#111118",
                borderRadius: 10,
                border: m.important
                  ? "1px solid #FF6B3540"
                  : "1px solid #1E1E2E",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: m.important ? "#FF6B35" : "#555",
                  letterSpacing: 0.5,
                  minWidth: 72,
                  paddingTop: 2,
                  flexShrink: 0,
                }}
              >
                {m.time}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: m.important ? "#E0A090" : "#A0A0B8",
                  lineHeight: 1.5,
                }}
              >
                {m.meal}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "recovery" && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: "#111118",
              borderRadius: 14,
              padding: 16,
              marginBottom: 14,
              border: "1px solid #FF6B3530",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: "#A0A0B8",
                lineHeight: 1.7,
              }}
            >
              Recovery is where results happen. You break muscle down in
              training. You build it back bigger during sleep and rest. Ignoring
              recovery means you are training for nothing.
            </p>
          </div>

          {recovery.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#111118",
                borderRadius: 14,
                padding: 16,
                marginBottom: 12,
                border: "1px solid #1E1E2E",
                display: "flex",
                gap: 14,
              }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <h3
                  style={{
                    margin: "0 0 6px",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#FF6B35",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: "#A0A0B8",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          <div
            style={{
              background: "linear-gradient(135deg, #4ECDC420, #10B98120)",
              border: "1px solid #4ECDC440",
              borderRadius: 14,
              padding: 18,
              marginTop: 8,
            }}
          >
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: 16,
                fontWeight: 800,
                color: "#4ECDC4",
              }}
            >
              Realistic Timeline
            </h3>
            {[
              {
                period: "Month 1–2",
                result: "Noticeable strength gains, body starts tightening",
              },
              {
                period: "Month 3–5",
                result: "Visible muscle definition, abs starting to show",
              },
              {
                period: "Month 6–12",
                result: "Significant physique change if consistent",
              },
              {
                period: "Year 2+",
                result:
                  "Physique like the photos you shared — fully achievable",
              },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    background: "#4ECDC425",
                    color: "#4ECDC4",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 6,
                    flexShrink: 0,
                  }}
                >
                  {t.period}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: "#A0A0B8",
                    lineHeight: 1.5,
                  }}
                >
                  {t.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ height: 30 }} />
    </div>
  );
}
