import React from "react";
import "./Die.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiceOne,
	faDiceTwo,
	faDiceThree,
	faDiceFour,
	faDiceFive,
	faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

const Die: React.FC<{ value: number; isRolling: boolean }> = ({
	value,
	isRolling,
}) => {
	const shake = isRolling ? "shaking" : "";
	const Num = [
		<FontAwesomeIcon icon={faDiceOne} className={`height ${shake}`} />,
		<FontAwesomeIcon icon={faDiceTwo} className={`height ${shake}`} />,
		<FontAwesomeIcon icon={faDiceThree} className={`height ${shake}`} />,
		<FontAwesomeIcon icon={faDiceFour} className={`height ${shake}`} />,
		<FontAwesomeIcon icon={faDiceFive} className={`height ${shake}`} />,
		<FontAwesomeIcon icon={faDiceSix} className={`height ${shake}`} />,
	];
	const val = value - 1;

	return <div>{Num[val]}</div>;
};

export default Die;
