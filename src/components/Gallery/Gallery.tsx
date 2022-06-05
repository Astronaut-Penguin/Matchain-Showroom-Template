// React Imports
import React from 'react';
import GalleryCards from './GalleryCards/GallerryCards';
import Buttons from './GalleryButtons/GalleryButtons';
import Datos from '../../data/Gallery.json';

// Styles Imports
import styles from './Gallery.module.css';
import { url } from 'inspector';

const Gallery: React.FunctionComponent<{
	/* TITLE: STRING, CHILDREN: REACTNODE */
}> = (
	{
		/* TITLE, CHILDREN */
	},
) => {
	const cards = Datos.dataGallery.map(function (value, i) {
		return (
			<GalleryCards
				title={value.title}
				artist={value.artist}
				description={value.description}
				image={value.image}
			/>
		);
	});

	return (
		<>
			{/* // <div title={title}>{children}</div> EJEMPLO DE COMO DEBERIA ESCRIBIRSE CON PROPS */}

			<div className={styles.Gallery}>
				<Buttons />

				<div className={styles.PreviewCards}>{cards}</div>
			</div>
		</>
	);
};

export default Gallery;
