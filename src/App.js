import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
  setLoading(true);

  // Exact question to match
  const exactQuestion = "In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?";

  setTimeout(() => {
    if (query.trim() === exactQuestion) {
      // Simulated response
      const response = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "As the age of the deceased at the time of accident was held to be about 54–55 years... (Para 7 of the document)",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
          }
        ]
      };
      setResponse(response);
    } else {
      // Clear response if question doesn't match
      setResponse(null);
      alert("No answer found for this question. Please enter the exact question.");
    }
    setLoading(false);
  }, 1500);
};


  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Lexi Legal Assistant</h1>
      <textarea
        rows="5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask your legal question here..."
        style={{ width: "100%", padding: "10px" }}
      />
      <br />
      <button onClick={handleSubmit} disabled={loading} style={{ marginTop: "10px" }}>
        {loading ? "Loading..." : "Submit"}
      </button>

      {response && (
        <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
          <p><strong>Answer:</strong> {response.answer}</p>
          <p>
            <strong>Citation:</strong>{" "}
            <a href={response.citations[0].link} target="_blank" rel="noopener noreferrer">
              {response.citations[0].text}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
