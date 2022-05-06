import { useState } from "react";
import Stepper from "./FormComponents/Stepper";
import StepperControl from "./FormComponents/StepperControl";
import { UseContextProvider } from "../../../contexts/StepperContext";

import Form1 from "./Steps/1";
import Form2 from "./Steps/2";
import Form3 from "./Steps/3";
import Form4 from "./Steps/4"
import Form5 from "./Steps/5"
import Form6 from "./Steps/6"
import Final from "./Steps/Final";

function Form() {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Form1",
        "Form2",
        "Form3",
        "Form4",
        "Final"
    ];


    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Form1 />;
            case 2:
                return <Form2 />;
            case 3:
                return <Form3 />;
            case 4:
                return <Form4 />;
            case 5:
                return <Form5 />;
            case 6:
                return <Form6 />;
            case 7:
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



