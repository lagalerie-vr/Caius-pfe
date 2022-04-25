import { useState } from "react";
import Stepper from "./FormComponents/Stepper";
import StepperControl from "./FormComponents/StepperControl";
import { UseContextProvider } from "../../../contexts/StepperContext";

import Account from "./Steps/Account";
import Details from "./Steps/Details";
import Payment from "./Steps/Payment";
import Final from "./Steps/Final";

function Form() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Account Information",
        "Personal Details",
        "Payment",
        "Complete",
    ];

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Account />;
            case 2:
                return <Details />;
            case 3:
                return <Payment />;
            case 4:
                return <Final />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div >
            {/* Stepper */}
            <div className="horizontal container mt-5 ">
                <Stepper steps={steps} currentStep={currentStep} />

                <div className="my-10 p-10 ">
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                </div>
            </div>

            {/* navigation button */}
            {currentStep !== steps.length && (
                <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />
            )}
        </div>
    );
}

export default Form;



