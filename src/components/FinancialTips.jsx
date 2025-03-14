import React, { useEffect, useState } from "react";
import { GrMoney } from "react-icons/gr";

const financialQuotes = [
  {
    tip: "Invest in education",
    quote: "An investment in knowledge pays the best interest.",
    expert: "Benjamin Franklin",
  },
  {
    tip: "Save before spending",
    quote:
      "Do not save what is left after spending, but spend what is left after saving.",
    expert: "Warren Buffett",
  },
  {
    tip: "Be patient in investing",
    quote:
      "The stock market is designed to transfer money from the Active to the Patient.",
    expert: "Warren Buffett",
  },
  {
    tip: "Control your desires",
    quote:
      "Wealth consists not in having great possessions, but in having few wants.",
    expert: "Epictetus",
  },
  {
    tip: "Beware of market myths",
    quote:
      "The four most dangerous words in investing are: ‘This time it’s different.’",
    expert: "Sir John Templeton",
  },
  {
    tip: "Focus on keeping wealth",
    quote:
      "It’s not about how much money you make, but how much money you keep.",
    expert: "Robert Kiyosaki",
  },
  {
    tip: "Self-education is key",
    quote:
      "Formal education will make you a living; self-education will make you a fortune.",
    expert: "Jim Rohn",
  },
  {
    tip: "Define your own success",
    quote: "The goal isn’t more money. The goal is living life on your terms.",
    expert: "Chris Brogan",
  },
  {
    tip: "Learn and take action",
    quote:
      "Financial freedom is available to those who learn about it and work for it.",
    expert: "Robert Kiyosaki",
  },
  {
    tip: "Invest broadly",
    quote: "Don't look for the needle in the haystack. Just buy the haystack!",
    expert: "John C. Bogle",
  },
];

const FinancialTips = () => {
  const [showQuote, setShowQuote] = useState(financialQuotes[0]);

  // Using useEffect
  useEffect(() => {
    setInterval(() => {
      setShowQuote(
        financialQuotes[Math.floor(Math.random() * financialQuotes.length)]
      );
    }, 3000);
  }, []);

  const { tip, quote, expert } = showQuote;

  return (
    <div
      className="d-flex flex-column justify-content-center "
      style={{ height: "100%" }}
    >
      <div className="text-success" style={{ fontSize: "10rem" }}>
        <GrMoney />
      </div>
      <h4>{tip}</h4>
      <div className="fw-bolder">"{quote}"</div>
      <p>-{expert}-</p>
    </div>
  );
};

export default FinancialTips;
