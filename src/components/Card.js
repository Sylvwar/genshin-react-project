import React from "react";
import styles from "../styles/Card.module.css";

export default function Card({ title, image, icon, rarity, tags }) {
	return (
		<div className={styles.card}>
			<img
				src={image}
				alt={title}
				className={styles.image}
				style={{
					backgroundColor: rarity === 5 ? "#cda45a" : "#8275c1",
				}}
			/>
			{icon && <img src={icon} alt={"icon"} className={styles.icon} />}
			<div className={styles.box}>
				<h1 className={`${styles.title} ${styles.textOverflow}`}>
					{title}
				</h1>

				{rarity === 5 ? (
					<p className={styles.fiveStar}>{"★".repeat(rarity)}</p>
				) : (
					<p className={styles.fourStar}>{"★".repeat(rarity)}</p>
				)}

				<div className={styles.tags}>
					{tags.map((text) => (
						<span key={text}>{text} </span>
					))}
				</div>
			</div>
		</div>
	);
}
