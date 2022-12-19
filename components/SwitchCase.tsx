import {ReactChild, ReactChildren, ReactElement, ReactNode} from "react";

interface SwitchCaseProps {
	tests: Array<{
		test: any;
		component: ReactChildren | ReactChild | ReactNode | ReactElement;
	}>;
	defaultComponent?: ReactChildren | ReactChild | ReactNode | ReactElement;
}

const SwitchCase = ({tests, defaultComponent}: SwitchCaseProps) => {
	const filteredTarget = tests.find(({test}) => test);
	let targetNode;

	if (filteredTarget) {
		targetNode = filteredTarget.component;
	} else if (defaultComponent) {
		targetNode = defaultComponent;
	} else {
		targetNode = null;
	}
	return <>{targetNode}</>;
};

export default SwitchCase;
