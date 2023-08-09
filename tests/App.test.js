import React from 'react';
import App  from "../src/components/ScoreArea";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe("App", () => {

    it("renders the score area", () => {
        render(<App/>);
        expect(screen.getByTestId("score-area")).toBeInTheDocument();
      });
})