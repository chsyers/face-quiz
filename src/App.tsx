import React from "react";
import "./App.css";

interface Question {
  question: string;
  image: string;
  answers: string[];
  answer: string;
  options?: string[];
  musicVideo?: string;
  hint: string;
}

interface StageResult {
  usedHint: boolean;
  results: boolean[];
}

const OPTIONS = [
  "Academy Street",
  "Second Best",
  "Belong Together",
  "Curls In the Wind",
  "Company",
  "Don't You Worry",
  "Fever",
  "Good To Be",
  "Hair Toss, Arms Crossed",
  "Hate That I Still Love You",
  "Hello World",
  "I Hope It All Works Out",
  "It's Us Again",
  "My Love!",
  "Our Way",
  "Run Rudolph Run",
  "Second Best",
  "Sky is the Limit",
  "Someone That's Better",
  "The Long Way",
  "Waves",
];

const STAGES: Question[] = [
  {
    question: "What is the name of this person?",
    image: "q1.jpeg",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    hint: "I'm disappointed that you need a hint for this one.",
  },
  {
    question: "What is the name of this person?",
    image: "waves.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Waves",
    hint: "It looks like he has some baggage on his shoulders in this one...",
  },
  {
    question: "What is the name of this person?",
    image: "nicole.png",
    answers: ["Nicole", "nikole", "nicol"],
    answer: "Nicole (Tour Manager)",
    hint: "The best tour manager ever!",
  },
  {
    question: "What is the name of this person?",
    image: "the_long_way.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "The Long Way",
    hint: "Is he in Brooklyn or in Broadway?",
  },
  {
    question: "What is the name of this person?",
    image: "stb.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Someone That's Better",
    hint: "I don't think he's in a living room in this one...",
  },
  {
    question: "What is the name of this person?",
    image: "sitl.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Sky is the Limit",
    hint: "Who wouldn't want to be taken out by him?",
  },
  {
    question: "What is the name of this person?",
    image: "eric.png",
    answers: ["Eric Hughes", "Eric", "Hughes", "erik"],
    answer: "Eric Hughes",
    hint: "Childhood friend of Mark's who helps make the magic happen on tour!",
  },
  {
    question: "What is the name of this person?",
    image: "sb.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Second Best",
    hint: "I didn't think Amsterdam had fire escapes...",
  },
  {
    question: "What is the name of this person?",
    image: "rrr.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Run Rudolph Run",
    hint: "🎄",
  },
  {
    question: "What is the name of this person?",
    image: "alex2.png",
    answers: ["alex", "alexander", "alek"],
    answer: "Alex (Keyboard)",
    hint: "Enjoyer of cupcakes!",
  },
  {
    question: "What is the name of this person?",
    image: "ow.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Our Way",
    hint: "Damn you, moonlight!",
  },
  {
    question: "What is the name of this person?",
    image: "ml.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "My Love!",
    hint: "My Quiz!",
  },
  {
    question: "What is the name of this person?",
    image: "iua.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "It's Us Again",
    hint: "Really?",
  },
  {
    question: "What is the name of this person?",
    image: "alex.png",
    answers: ["alex", "alexander", "alek"],
    answer: "Alex (Guitar)",
    hint: "He rocks out on the guitar!",
  },
  {
    question: "What is the name of this person?",
    image: "ihiawo.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "I Hope It All Works Out",
    hint: "It looks like a very lonely street...",
  },
  {
    question: "What is the name of this person?",
    image: "hw.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Hello World",
    hint: "Staring at the walls of his bedroom...",
  },
  {
    question: "What is the name of this person?",
    image: "htisly.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Hate That I Still Love You",
    hint: "Are you staring at the same moon?",
  },
  {
    question: "What is the name of this person?",
    image: "htac.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Hair Toss, Arms Crossed",
    hint: "He did that turn round, walk out",
  },
  {
    question: "What is the name of this person?",
    image: "gtb.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Good To Be",
    hint: "👏🏻👏🏼👏🏾",
  },
  {
    question: "What is the name of this person?",
    image: "fever.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Fever",
    hint: "I'm feeling hot...",
  },
  {
    question: "What is the name of this person?",
    image: "dyw.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Don't You Worry",
    hint: "We'll figure it out...",
  },
  {
    question: "What is the name of this person?",
    image: "pat.png",
    answers: ["patrick", "pat"],
    answer: "Pat (Merch)",
    hint: "Great salesman",
  },
  {
    question: "What is the name of this person?",
    image: "company.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Company",
    hint: "Life is better with some...",
  },
  {
    question: "What is the name of this person?",
    image: "citw.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Curls In the Wind",
    hint: "His hair is looking extra curly in this one...",
  },
  {
    question: "What is the name of this person?",
    image: "bt.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Belong Together",
    hint: "🫐🦋",
  },
  {
    question: "What is the name of this person?",
    image: "parker.png",
    answers: ["Park", "Parker"],
    answer: "Parker (Drums)",
    hint: "All-star drummer",
  },
  {
    question: "What is the name of this person?",
    image: "bs.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Second Best",
    hint: "Does he climb the fire escape?",
  },
  {
    question: "What is the name of this person?",
    image: "as.png",
    answers: ["Mark Ambor", "Mark", "Ambor", "Mark A", "WGB"],
    answer: "Mark Ambor",
    musicVideo: "Academy Street",
    hint: "Is this the parking of Foxwoods?",
  },
];

function App() {
  const [stage, setStage] = React.useState(-1);
  const [userAnswer, setUserAnswer] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [showHint, setShowHint] = React.useState(false);
  const [results, setResults] = React.useState<StageResult[]>([]);
  const [showCopied, setShowCopied] = React.useState(false);
  const [showCredits, setShowCredits] = React.useState(false);
  const [musicVideoAnswer, setMusicVideoAnswer] = React.useState("");

  const handleSubmit = () => {
    const personCorrect = STAGES[stage].answers
      .map((answer) => answer.toLowerCase())
      .includes(userAnswer.trim().toLowerCase());

    const hasMusicVideo = !!STAGES[stage].musicVideo;
    const musicVideoCorrect = STAGES[stage].musicVideo === musicVideoAnswer;

    if (personCorrect && hasMusicVideo && musicVideoCorrect) {
      setStatus("Correct!");
      setResults([...results, { usedHint: showHint, results: [true, true] }]);
    }
    if (personCorrect && !hasMusicVideo) {
      setStatus("Correct!");
      setResults([...results, { usedHint: showHint, results: [true] }]);
    }
    if (personCorrect && hasMusicVideo && !musicVideoCorrect) {
      setStatus(
        "Partially correct! You got the face right, but the video wrong."
      );
      setResults([...results, { usedHint: showHint, results: [true, false] }]);
    }
    if (!personCorrect && hasMusicVideo && musicVideoCorrect) {
      setStatus(
        "Partially correct! You got the video right, but the face wrong."
      );
      setResults([...results, { usedHint: showHint, results: [false, true] }]);
    }
    if (!personCorrect && hasMusicVideo && !musicVideoCorrect) {
      setStatus("Wrong!");
      setResults([...results, { usedHint: showHint, results: [false, false] }]);
    } else if (!personCorrect && !hasMusicVideo) {
      setStatus("Wrong!");
      setResults([...results, { usedHint: showHint, results: [false] }]);
    }
  };

  const total = results.reduce((acc, result) => acc + result.results.length, 0);
  const totalCorrect = results.reduce(
    (acc, result) => acc + result.results.filter((r) => r).length,
    0
  );

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`${process.env.PUBLIC_URL}/rockwood.png`}
          className="App-logo"
          alt="logo"
        />
        <h1
          style={{ marginTop: "-20px", fontSize: stage >= 0 ? "24px" : "48px" }}
        >
          Rockwood Face Quiz
        </h1>
        {stage === -1 && <button onClick={() => setStage(0)}>Begin</button>}
        {stage >= 0 && stage < STAGES.length && (
          <div>
            <div>
              <div style={{ marginBottom: "8px" }}>
                <div
                  style={{
                    height: "10px",
                    width: "100%",
                    backgroundColor: "#e0e0df",
                    borderRadius: "5px",
                    marginBottom: "4px",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${((stage + 1) / STAGES.length) * 100}%`,
                      backgroundColor: "#4169E1", // Slightly darker blue
                      borderRadius: "5px",
                    }}
                  ></div>
                </div>
                <div style={{ textAlign: "center", fontSize: "14px" }}>
                  {stage + 1}/{STAGES.length}
                </div>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/${STAGES[stage].image}`}
                alt="quiz"
                style={{ borderRadius: "10px", margin: "8px" }}
              />
            </div>
            <div>
              <div style={{ marginBottom: "8px" }}>
                {!showHint && !status && (
                  <button onClick={() => setShowHint(true)}>Show Hint</button>
                )}
                {showHint && (
                  <div
                    style={{
                      maxWidth: "200px",
                      height: "31px",
                      fontSize: "14px",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                  >
                    {STAGES[stage].hint}
                  </div>
                )}
              </div>
              <label htmlFor="userAnswer" style={{ fontSize: "16px" }}>
                {STAGES[stage].question}
              </label>
              <div className="space-between">
                <input
                  id="userAnswer"
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={!!status}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />
              </div>
              {STAGES[stage].musicVideo && (
                <div>
                  <label style={{ marginTop: "8px", fontSize: "16px" }}>
                    Which video is this from?
                  </label>
                  <div>
                    <select
                      value={musicVideoAnswer}
                      onChange={(e) => setMusicVideoAnswer(e.target.value)}
                      disabled={!!status}
                    >
                      <option value="">Select a video...</option>
                      {OPTIONS.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              {!status && <button onClick={handleSubmit}>Submit</button>}
            </div>
            {status && (
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "8px",
                  maxWidth: "300px",
                }}
              >
                <span
                  style={{
                    color: status.startsWith("Correct")
                      ? "green"
                      : status.startsWith("Partially")
                      ? "orange"
                      : "red",
                  }}
                >
                  {status}
                </span>{" "}
                This is {STAGES[stage].answer}
                {STAGES[stage].musicVideo
                  ? ` in ${STAGES[stage].musicVideo}`
                  : ""}
                .
              </div>
            )}
            {status && (
              <button
                onClick={() => {
                  setStatus("");
                  setUserAnswer("");
                  setMusicVideoAnswer("");
                  setStage(stage + 1);
                  setShowHint(false);
                }}
                style={{ marginTop: "8px" }}
              >
                {stage === STAGES.length - 1 ? "Show Results" : "Next"}
              </button>
            )}
          </div>
        )}
        {stage === STAGES.length && (
          <div>
            {!showCredits && (
              <>
                <h2 style={{ fontSize: "22px" }}>Thanks for playing!</h2>
                <div style={{ fontSize: "14px" }}>
                  You got {totalCorrect} out of a possible {total} points. That
                  makes you a <b>{getLegendRating(totalCorrect, total)}</b>!
                </div>
                <div>
                  <button
                    style={{ marginTop: "12px" }}
                    onClick={() => {
                      setShowCopied(true);
                      navigator.clipboard.writeText(getResult(results));
                    }}
                  >
                    📋 Share Your Results!
                  </button>
                </div>
              </>
            )}
            <div>
              {showCopied && (
                <div style={{ marginLeft: "8px", fontSize: "12px" }}>
                  Copied to Clipboard!
                </div>
              )}
              {!showCredits && (
                <div>
                  <button
                    style={{ marginTop: "12px" }}
                    onClick={() => {
                      setShowCopied(false);
                      setShowCredits(true);
                    }}
                  >
                    ℹ️ About The Creator
                  </button>
                </div>
              )}
              {!showCredits && (
                <div>
                  <button
                    style={{ marginTop: "12px" }}
                    onClick={() => {
                      setStage(-1);
                      setResults([]);
                      setShowCopied(false);
                      setShowCredits(false);
                      setStatus("");
                    }}
                  >
                    🔄 Play Again
                  </button>
                </div>
              )}
            </div>
            {showCredits && (
              <div
                style={{
                  width: "300px",
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/credits.jpg`}
                  alt="credits"
                  style={{ borderRadius: "10px", margin: "8px", width: "100%" }}
                />
                <p style={{ fontSize: "12px", margin: "8px 0" }}>
                  Chris has been a Legend since 2023. He has seen the Rockwood
                  tour 3 times - in Portland, Seattle, and Boston. He hopes to
                  experience the magic a few more times when Mark Ambor brings
                  the show to Europe in 2025.
                </p>
                <button
                  style={{ marginTop: "8px", fontSize: "12px" }}
                  onClick={() => {
                    setShowCopied(false);
                    setShowCredits(false);
                  }}
                >
                  Back to Results
                </button>
              </div>
            )}
            {!showCredits && (
              <ul>
                {results.map((result, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "32px",
                    }}
                  >
                    <span
                      style={{
                        marginRight: "24px",
                        width: "20px",
                        display: "inline-block",
                      }}
                    >
                      {index + 1}.
                    </span>
                    <img
                      src={`${process.env.PUBLIC_URL}/${STAGES[index].image}`}
                      alt={`stage-${index}`}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "5px",
                        marginRight: "8px",
                      }}
                    />
                    <span style={{ marginRight: "8px" }}>
                      {result.results.map((res, idx) => (
                        <span key={idx}>{res ? "✅" : "❌"}</span>
                      ))}
                    </span>
                    {result.usedHint && <span>💡</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </header>
    </div>
  );
}

function getResult(results: StageResult[]): string {
  const total = results.reduce((acc, result) => acc + result.results.length, 0);
  const totalCorrect = results.reduce(
    (acc, result) => acc + result.results.filter((r) => r).length,
    0
  );
  const lines = [
    "2024 Rockwood Face Quiz 🦋",
    `${totalCorrect}/${total} Points`,
    `Legend Rating: ${getLegendRating(totalCorrect, total)}`,
    "",
  ];
  for (let i = 0; i < results.length; i++) {
    lines.push(
      `${i + 1}. ${results[i].results
        .map((result) => (result ? "✅" : "❌"))
        .join(" ")}${results[i].usedHint ? " - 💡" : ""}`
    );
  }
  return lines.join("\n");
}

function getLegendRating(score: number, outOf: number): string {
  if (score === outOf) {
    return "Biggest Legend In The World";
  } else if (score >= outOf * 0.75) {
    return "Absolute Legend";
  } else if (score >= outOf * 0.5) {
    return "Intermediate Legend";
  } else {
    return "Work In Progress Legend";
  }
}

export default App;
