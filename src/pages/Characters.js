import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import { ElementTag, WeaponTag } from "../components/Tag";
import { getCharacters, filterCharacters } from "../context/characterSlice";
import styles from "../styles/Characters.module.css";

export default function Characters() {
	const { characters, filters } = useSelector((state) => state.character);
	const { elements, weapontypes } = useSelector((state) => state.general);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCharacters());
	}, []);

	useEffect(() => {
		dispatch(filterCharacters());
	}, [filters]);

	return (
		<div>
			<div
				style={{
					display: "flex",
					gap: 20,
					margin: 20,
				}}
			>
				{elements?.map((element) => {
					return <ElementTag key={element} element={element} />;
				})}
			</div>

			<div
				style={{
					display: "flex",
					gap: 20,
					margin: 20,
				}}
			>
				{weapontypes?.map((type) => {
					return <WeaponTag key={type} type={type} />;
				})}
			</div>

			<div className={styles.grid}>
				{characters?.map((character) => {
					return (
						<Card
							key={character.name}
							title={character.fullname}
							image={character.images.icon}
							icon={character.element?.images?.wikia}
							rarity={parseInt(character.rarity)}
							tags={[
								character.element.name,
								character.weapontype,
							]}
						/>
					);
				})}
			</div>
		</div>
	);
}
