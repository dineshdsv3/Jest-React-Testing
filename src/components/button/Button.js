import React from 'react';

const Button = ({ label }) => {
	return (
		<button data-testid="button" className="button-style">
			Hi {label}
		</button>
	);
};

export default Button;
