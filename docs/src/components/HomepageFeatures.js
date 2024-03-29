import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "Collaborate",
		Svg: require("../../static/img/undraw_collaborators_prrw.svg").default,
		description: (
			<>
				Create a space together with everyone else in your program where all data is neatly organized
			</>
		),
	},
	{
		title: "Crowdsourced",
		Svg: require("../../static/img/undraw_community_8nwl.svg").default,
		description: (
			<>
				Let anyone perform edits to your board. Fast accessibility leads to more contributions!
			</>
		),
	},
	{
		title: "Clear deadlines",
		Svg: require("../../static/img/checkmark.svg").default,
		description: (
			<>
				All deadlines are easily accessible and sorted by urgency
			</>
		),
	},
	];

	function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
		<div className="text--center">
			<Svg className={styles.featureSvg} alt={title} />
		</div>
		<div className="text--center padding-horiz--md">
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
		</div>
	);
	}

	export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
		<div className="container">
			<div className="row">
			{FeatureList.map((props, idx) => (
				<Feature key={idx} {...props} />
			))}
			</div>
		</div>
		</section>
	);
	}
