import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      [{props.phonetics.text} ]{" "}
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
