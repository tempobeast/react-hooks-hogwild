import React, { useState } from "react";
import Nav from "./Nav";
import PigList from "./PigList"
import Filter from "./Filter"

import hogs from "../porkers_data";
console.log(hogs)

function App() {

	const [isGreased, setIsGreased] = useState("All")
	const [nameSort, setNameSort] = useState(false)

	return (
		<div className="App">
			<Nav />
			<Filter setIsGreased={setIsGreased} nameSort={nameSort} setNameSort={setNameSort}/>
			<PigList isGreased={isGreased} hogs={hogs} nameSort={nameSort}/>
		</div>
	);
}

export default App;
