import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS as coreConcepts } from "./data";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data_with_examples.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Header />
      <main id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...coreConcepts[0]} />
          <CoreConcept {...coreConcepts[1]} />
          <CoreConcept {...coreConcepts[2]} />
          <CoreConcept {...coreConcepts[3]} />
        </ul>
      </main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => handleSelect("components")}>
            Components
          </TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
