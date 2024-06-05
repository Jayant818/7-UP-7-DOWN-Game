import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GamePage from "./pages/GamePage";

const App: React.FC = () => (
	<Provider store={store}>
		<Router>
			<Routes>
				<Route path="/" element={<GamePage />} />
			</Routes>
		</Router>
	</Provider>
);

export default App;
