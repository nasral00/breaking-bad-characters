import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  function onChange(q) {
    setText(q);
    getQuery(q);
  }
  return (
    <section
      className="search"
      style={{ marginTop: "30px", marginBottom: "0px" }}
    >
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
