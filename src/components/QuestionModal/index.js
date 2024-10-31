import React, { useState, useEffect } from 'react';

function QuestionModal({ onClose }) {
  const [questions, setQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [explanation, setExplanation] = useState('');

  useEffect(() => {
    // Carregar perguntas do arquivo JSON
    fetch('/questions.json')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error("Erro ao carregar o arquivo JSON:", error));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      // Filtrar perguntas com base no termo de pesquisa
      const filteredSuggestions = questions.filter(q =>
        q.question.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const selectQuestion = (question) => {
    setSearchQuery(question.question);
    setSelectedAnswers(question.answers);
    setExplanation(question.explanation);
    setSuggestions([]);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Buscar carta</h3>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Digite o cenário"
        />
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => selectQuestion(suggestion)}>
              {suggestion.question}
            </li>
          ))}
        </ul>
        {selectedAnswers.length > 0 && (
          <div className="answers">
            <h4>Respostas:</h4>
            <ul>
              {selectedAnswers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
            <h4>Explicação:</h4>
            <p>{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionModal;
