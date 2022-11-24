import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterElement, filterWeaponType } from "../context/characterSlice";
import styles from "../styles/Tag.module.css";

export function ElementTag({ element }) {
	const { characters, filters } = useSelector((state) => state.character);
	const dispatch = useDispatch();

	return (
		<div
			onClick={() => dispatch(filterElement(element))}
			className={`${styles.tag} ${
				filters.elements.includes(element) ? styles.selected : ""
			}`}
		>
			{element}
			<span className={styles.count}>
				{
					characters.filter((char) => {
						return char.element.name === element;
					}).length
				}
			</span>
		</div>
	);
}

export function WeaponTag({ type }) {
	const { characters, filters } = useSelector((state) => state.character);
	const dispatch = useDispatch();

	return (
		<div
			onClick={() => dispatch(filterWeaponType(type))}
			className={`${styles.tag} ${
				filters.weapontypes.includes(type) ? styles.selected : ""
			}`}
		>
			{type}
			<span className={styles.count}>
				{
					characters.filter((char) => {
						return char.weapontype === type;
					}).length
				}
			</span>
		</div>
	);
}
