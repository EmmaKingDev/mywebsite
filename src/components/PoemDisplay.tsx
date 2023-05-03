import { useState } from 'react';
import usePoem from '../hooks/usePoem';
import './Poem.css';

export default function PoemDisplay() {

	const [poemData, loading] = usePoem();
	console.debug(poemData)

	if (loading) {
		return <div className="spinner"/>
	}

	if (poemData) {
		return (
			<>
				<ul className="poem">
					{poemData.map(line => <li>{line}</li> )}
				</ul>
			</>
		);
	}
	return <div>Error API oh no</div>
}
