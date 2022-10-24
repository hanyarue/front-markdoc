import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import PageComponent from './page-component';

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

## Title222

- 제목 제목 제목 본문 본문
`;


function App() {
  
  return (
   
    <div className="App">
       <PageComponent/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;

